// app/api/meta-capi/route.ts
// Sends Contact + InitiateCheckout events to Meta from the server (Conversions API).
// Each event carries the same event_id as the browser Pixel event, so Meta counts it once.

import { NextRequest, NextResponse } from "next/server";

const PIXEL_ID = "1154854153666936"; // Okoa Furniture Website dataset
const API_VERSION = "v26.0"; // Meta Graph API version - update about once a year
const ALLOWED_EVENTS = new Set(["Contact", "InitiateCheckout"]);

type IncomingEvent = {
  eventName: string;
  eventId: string;
  value?: number;
};

type IncomingBody = {
  url?: string;
  fbp?: string;
  fbc?: string;
  events?: IncomingEvent[];
};

const shortString = (v: unknown, max = 200) =>
  typeof v === "string" && v.length > 0 && v.length <= max ? v : undefined;

// Only accept page URLs from Okoa's own site
function safeSourceUrl(raw: unknown): string {
  try {
    const url = new URL(String(raw));
    if (url.hostname === "okoafurniture.com" || url.hostname.endsWith(".okoafurniture.com")) {
      return url.toString();
    }
  } catch {
    // fall through
  }
  return "https://www.okoafurniture.com/";
}

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    console.error("META_CAPI_TOKEN is not set");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: IncomingBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const events = (Array.isArray(body.events) ? body.events : [])
    .filter(
      (e) =>
        e &&
        ALLOWED_EVENTS.has(e.eventName) &&
        typeof e.eventId === "string" &&
        e.eventId.length > 0 &&
        e.eventId.length <= 100
    )
    .slice(0, 5);

  if (events.length === 0) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Visitor's IP: try every header Vercel may set
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    undefined;
  const userAgent = req.headers.get("user-agent") || undefined;
  const fbp = shortString(body.fbp);
  const fbc = shortString(body.fbc);

  // Meta needs at least some visitor info to use a server event.
  // If we have none, skip the server copy (the browser Pixel still counts the click).
  if (!(ip && userAgent) && !fbp && !fbc) {
    return NextResponse.json({ ok: true, skipped: "no user data" });
  }
  const eventTime = Math.floor(Date.now() / 1000);
  const sourceUrl = safeSourceUrl(body.url);

  const data = events.map((e) => {
    const hasValue = typeof e.value === "number" && Number.isFinite(e.value) && e.value > 0;
    return {
      event_name: e.eventName,
      event_time: eventTime,
      event_id: e.eventId, // same ID as the Pixel event -> deduplicated
      action_source: "website",
      event_source_url: sourceUrl,
      user_data: {
        client_ip_address: ip,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      custom_data:
        e.eventName === "InitiateCheckout"
          ? { currency: "KES", ...(hasValue ? { value: e.value } : {}) }
          : undefined,
    };
  });

  const payload: Record<string, unknown> = { data };
  // Optional: set META_TEST_EVENT_CODE in Vercel while testing, then delete it
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      console.error("Meta CAPI error", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("Meta CAPI request failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
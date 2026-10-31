import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google"; // ← added
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { SITE_URL, GA_MEASUREMENT_ID } from "@/lib/config"; // ← changed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OKOA Furniture | The Home of Modern Designs",
    template: "%s",
  },
  description:
    "Shop modern furniture for every room — living room, bedroom, dining, home office, outdoor, and custom pieces.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    siteName: "OKOA Furniture",
    type: "website",
    locale: "en_KE",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  // Paste the verification code from Google Search Console here once you've
  // added the property (Settings > Ownership verification > HTML tag method):
  // verification: { google: "paste-the-code-here" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-okoa-dark text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> {/* ← added */}
    </html>
  );
}
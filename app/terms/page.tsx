import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | OKOA Furniture",
  description: "Terms and conditions for shopping with OKOA Furniture.",
};

export default function TermsPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-okoa-dark mb-8">
        Terms &amp; Conditions
      </h1>

      <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Ordering</h2>
          <p>
            Products listed on this website are available to order by
            contacting OKOA Furniture directly via WhatsApp or phone.
            Prices, availability, and order details are confirmed directly
            with our team at the time of enquiry.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Pricing</h2>
          <p>
            Prices are listed in Kenyan Shillings (KSh) and are subject to
            change without prior notice. Any promotional pricing displayed
            will be confirmed with you directly before an order is finalized.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Custom Furniture
          </h2>
          <p>
            Custom furniture requests are quoted individually based on your
            specifications. Final pricing and timelines for custom orders
            will be confirmed with you before production begins.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Delivery, Warranty &amp; Returns
          </h2>
          <p>
            [To be confirmed by OKOA Furniture — delivery areas, timelines,
            warranty terms, and returns/exchange policy to be added here
            once provided.]
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Contact</h2>
          <p>
            For any questions regarding these terms, please reach us via
            WhatsApp at{" "}
            <a
              href="https://wa.me/254711682894"
              className="text-okoa-orange hover:underline"
            >
              0711 682 894
            </a>
            .
          </p>
        </div>

        <p className="text-xs text-gray-400 pt-4 border-t border-gray-100">
          Last updated: October 2026
        </p>
      </div>
    </main>
  );
}
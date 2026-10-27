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
          <h2 className="text-okoa-dark font-semibold mb-2">No Refunds</h2>
          <p>No refunds once payment has been made.</p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Order Changes</h2>
          <p>Changes to confirmed orders may attract additional charges.</p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Fabric Availability
          </h2>
          <p>
            If your selected fabric is out of stock during production, you
            must choose another available option. Order cancellation will
            not be accepted on this basis.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Customization</h2>
          <p>
            Customers must confirm all designs, measurements, colours, and
            specifications before production begins.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Production &amp; Delivery
          </h2>
          <p>
            Production and delivery timelines will be communicated during
            order confirmation. Delivery charges depend on the location.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Cancellations</h2>
          <p>
            Customized orders cannot be cancelled once production has
            started.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Warranty</h2>
          <p>Any applicable warranty will be communicated at the time of purchase.</p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Customer Information
          </h2>
          <p>
            Customer information will be handled in accordance with our
            Privacy Policy and applicable Kenyan data protection laws.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Governing Law
          </h2>
          <p>These terms are governed by the laws of the Republic of Kenya.</p>
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

        <p className="text-okoa-dark font-medium pt-2">
          Thank you for choosing Okoa Furniture!
        </p>

        <p className="text-xs text-gray-400 pt-4 border-t border-okoa-border">
          Last updated: October 2026
        </p>
      </div>
    </main>
  );
}
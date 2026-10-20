import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OKOA Furniture",
  description: "How OKOA Furniture handles your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-okoa-dark mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
        <p>
          This website is operated by OKOA Furniture. This policy explains
          how we handle information when you use our website.
        </p>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Information We Collect
          </h2>
          <p>
            This website does not require you to create an account or submit
            personal information to browse our furniture catalogue. When you
            choose to contact us via WhatsApp or phone, any information you
            share — such as your name, phone number, or delivery address —
            is shared directly with us through WhatsApp or your phone&apos;s
            call function, not stored on this website.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p>
            Information shared with us via WhatsApp or phone is used solely
            to respond to your enquiry, process your order, and arrange
            delivery where applicable. We do not sell or share your
            information with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">
            Cookies and Analytics
          </h2>
          <p>
            This website may use basic, privacy-conscious analytics to
            understand general website traffic and improve our catalogue. No
            personally identifiable information is collected through this
            process.
          </p>
        </div>

        <div>
          <h2 className="text-okoa-dark font-semibold mb-2">Contact</h2>
          <p>
            If you have questions about this policy, please contact us via
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
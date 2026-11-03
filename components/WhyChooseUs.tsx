import { Armchair, Ruler, WhatsappLogo, Truck } from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

const features: {
  icon: PhosphorIcon;
  label: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Armchair,
    label: "Built to last",
    title: "Quality Craftsmanship",
    description: "Every piece is built with care, using durable materials made to last for years.",
  },
  {
    icon: Ruler,
    label: "Made for you",
    title: "Fully Customizable",
    description: "From fabric to size, tailor any piece to fit your space and style perfectly.",
  },
  {
    icon: WhatsappLogo,
    label: "Direct on WhatsApp",
    title: "Personal Service",
    description: "Order directly through WhatsApp and speak with us one-on-one — no chatbots, no hassle.",
  },
  {
    icon: Truck,
    label: "Handled with care",
    title: "Reliable Delivery",
    description: "We handle delivery with care, so your furniture arrives exactly as ordered.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Why OKOA
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark">
          Built Different
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-white border border-okoa-border rounded-2xl p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-okoa-cream text-okoa-orange mb-5 transition-colors duration-300 group-hover:bg-okoa-orange group-hover:text-white">
                <Icon size={28} weight="duotone" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-okoa-orange mb-2">
                {feature.label}
              </p>
              <h3 className="text-lg font-semibold text-okoa-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
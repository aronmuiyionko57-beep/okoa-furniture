import { Couch, Ruler, WhatsappLogo, Truck } from "@phosphor-icons/react/dist/ssr";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

const features: { icon: PhosphorIcon; title: string; description: string }[] = [
  {
    icon: Couch,
    title: "Quality Craftsmanship",
    description: "Every piece is built with care, using durable materials made to last for years.",
  },
  {
    icon: Ruler,
    title: "Fully Customizable",
    description: "From fabric to size, tailor any piece to fit your space and style perfectly.",
  },
  {
    icon: WhatsappLogo,
    title: "Personal Service",
    description: "Order directly through WhatsApp and speak with us one-on-one — no chatbots, no hassle.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "We handle delivery with care, so your furniture arrives exactly as ordered.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-14">
        <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-3">
          Why OKOA
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark">
          Built Different
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-okoa-border">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group flex gap-5 sm:block py-8 sm:px-8 border-b border-okoa-border lg:border-b-0 lg:border-r lg:last:border-r-0 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r"
            >
              <div className="shrink-0 w-16 h-16 border border-okoa-border text-okoa-orange flex items-center justify-center sm:mb-6 group-hover:bg-okoa-orange group-hover:border-okoa-orange group-hover:text-white transition-colors duration-300">
                <Icon size={32} weight="regular" aria-hidden="true" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-okoa-orange text-sm mb-1">
                  0{i + 1}
                </p>
                <h3 className="font-semibold text-okoa-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
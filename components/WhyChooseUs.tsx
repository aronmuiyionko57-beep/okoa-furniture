function CraftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    </svg>
  );
}

function DeliveryIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

const features = [
  {
    icon: CraftIcon,
    title: "Quality Craftsmanship",
    description: "Every piece is built with care, using durable materials made to last for years.",
  },
  {
    icon: CustomIcon,
    title: "Fully Customizable",
    description: "From fabric to size, tailor any piece to fit your space and style perfectly.",
  },
  {
    icon: ChatIcon,
    title: "Personal Service",
    description: "Order directly through WhatsApp and speak with us one-on-one — no chatbots, no hassle.",
  },
  {
    icon: DeliveryIcon,
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-okoa-cream text-okoa-orange flex items-center justify-center mx-auto mb-5 group-hover:bg-okoa-orange group-hover:text-white transition-colors duration-300">
                <Icon />
              </div>
              <h3 className="font-semibold text-okoa-dark mb-2">
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
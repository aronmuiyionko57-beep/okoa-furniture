export interface Product {
  id: string;
  slug: string;
  name: string;
  room: string;
  subcategory: string;
  price: number;
  showPrice?: boolean;
  description: string;
  images: string[];
  dimensions?: string;
  material?: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "modern-3-seater-sofa",
    name: "Modern 3-Seater Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 45000,
    showPrice: false,
    description:
      "A comfortable, contemporary 3-seater sofa with clean lines, built for everyday living.",
    images: ["/images/placeholder.jpg"],
    dimensions: "200cm x 90cm x 85cm",
    material: "Fabric upholstery, solid wood frame",
  },
  {
    id: "2",
    slug: "linear-bed-6x6",
    name: "Linear Design Bed",
    room: "bedroom",
    subcategory: "beds",
    price: 33000,
    showPrice: true,
    description:
      "A striking channel-tufted bed frame in soft grey velvet, finished with polished gold accents for a bold, modern bedroom statement.",
    images: ["/images/products/linear-bed-6x6.jpg"],
    dimensions: "6ft x 6ft (King size)",
    material: "Velvet upholstery, gold-finished trim",
  },
  {
    id: "3",
    slug: "v-design-bed-5x6-grey",
    name: "V-Design Bed (Grey)",
    room: "bedroom",
    subcategory: "beds",
    price: 29000,
    showPrice: true,
    description:
      "A sleek dark grey velvet bed frame featuring a distinctive V-shaped channel-tufted headboard for a modern, statement look.",
    images: ["/images/products/v-design-bed-5x6-grey.jpg"],
    dimensions: "5ft x 6ft (Queen size)",
    material: "Velvet upholstery, solid wood frame",
  },
  {
    id: "4",
    slug: "v-design-bed-5x6-cream",
    name: "V-Design Bed (Cream)",
    room: "bedroom",
    subcategory: "beds",
    price: 30000,
    showPrice: true,
    description:
      "A soft cream velvet bed frame featuring a distinctive V-shaped channel-tufted headboard for a warm, modern bedroom look.",
    images: ["/images/products/v-design-bed-5x6-cream.jpg"],
    dimensions: "5ft x 6ft (Queen size)",
    material: "Velvet upholstery, solid wood frame",
  },
  {
    id: "5",
    slug: "lines-design-bed-5x6",
    name: "Lines Design Bed",
    room: "bedroom",
    subcategory: "beds",
    price: 29000,
    showPrice: true,
    description:
      "A taupe velvet bed frame with a tall wingback-style channel-tufted headboard for a refined, modern bedroom centerpiece.",
    images: ["/images/products/lines-design-bed-5x6.jpg"],
    dimensions: "5ft x 6ft (Queen size)",
    material: "Velvet upholstery, solid wood frame",
  },
  {
    id: "6",
    slug: "wooden-panel-bed-5x6",
    name: "Wooden Panel Bed",
    room: "bedroom",
    subcategory: "beds",
    price: 30000,
    showPrice: true,
    description:
      "A classic white-painted solid wood bed frame with a paneled headboard and footboard for a timeless bedroom look.",
    images: ["/images/products/wooden-panel-bed-5x6.jpg"],
    dimensions: "5ft x 6ft (Queen size)",
    material: "Solid wood, painted finish",
  },
  {
    id: "7",
    slug: "mocket-bed-6x6",
    name: "Mocket Bed (6x6)",
    room: "bedroom",
    subcategory: "beds",
    price: 35000,
    showPrice: true,
    description:
      "A mahogany-finished wood bed frame with a cream upholstered channel-tufted headboard panel for a warm, classic look.",
    images: ["/images/products/mocket-bed-6x6.jpg"],
    dimensions: "6ft x 6ft (King size)",
    material: "Solid wood frame, fabric upholstered headboard",
  },
  {
    id: "8",
    slug: "mocket-bed-5x6",
    name: "Mocket Bed (5x6)",
    room: "bedroom",
    subcategory: "beds",
    price: 32000,
    showPrice: true,
    description:
      "A natural wood bed frame with a cream sunburst-pattern upholstered headboard for a soft, elegant bedroom look.",
    images: ["/images/products/mocket-bed-5x6.jpg"],
    dimensions: "5ft x 6ft (Queen size)",
    material: "Solid wood frame, fabric upholstered headboard",
  },
  {
    id: "9",
    slug: "extended-headboard-bed-6x6",
    name: "Extended Headboard Bed",
    room: "bedroom",
    subcategory: "beds",
    price: 45000,
    showPrice: true,
    description:
      "A statement bed frame in dusty pink textured velvet with gold trim accents and a tall extended channel-tufted headboard.",
    images: ["/images/products/extended-headboard-bed-6x6.jpg"],
    dimensions: "6ft x 6ft (King size)",
    material: "Velvet upholstery, gold-finished trim",
  },
  {
    id: "10",
    slug: "round-arm-sofa-3-seater",
    name: "Round Arm Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 40000,
    showPrice: true,
    description:
      "A comfortable 3-seater sofa in soft beige fabric, featuring rounded wood-trimmed arms for a warm, classic living room look.",
    images: ["/images/products/round-arm-sofa-3-seater.jpg"],
    dimensions: "3-Seater",
    material: "Fabric upholstery, wood-trimmed arms",
  },
  {
    id: "11",
    slug: "box-arm-sofa-set",
    name: "Box Arm Sofa Set",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 120000,
    showPrice: true,
    description:
      "A full 3+2+2 sofa set in charcoal grey textured fabric, with permanent spring cushions and fibre back pillows for lasting comfort.",
    images: ["/images/products/box-arm-sofa-set.jpg"],
    dimensions: "3+2+2 Seater Set",
    material: "Fabric upholstery, permanent spring cushions, fibre back pillows",
  },
  {
    id: "12",
    slug: "marble-top-dining-set-4-seater",
    name: "Marble Top Dining Set",
    room: "dining-room",
    subcategory: "dining-sets",
    price: 55000,
    showPrice: true,
    description:
      "A elegant dining set with a white marble-finish tabletop, black wood legs, and 4 grey tufted upholstered chairs.",
    images: ["/images/products/marble-top-dining-set-4-seater.jpg"],
    dimensions: "4-Seater",
    material: "Marble-finish top, solid wood legs, fabric upholstered chairs",
  },
  {
    id: "13",
    slug: "l-shape-sectional-sofa-6-seater",
    name: "L-Shape Sectional Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 60000,
    showPrice: true,
    description:
      "A spacious 6-seater L-shape sectional in slate grey textured fabric, with removable spring cushions and pure fibre back pillows.",
    images: ["/images/products/l-shape-sectional-sofa-6-seater.jpg"],
    dimensions: "6-Seater L-Shape",
    material: "Fabric upholstery, removable spring cushions, fibre back pillows",
  },
  {
    id: "14",
    slug: "tufted-l-shape-sectional-sofa",
    name: "Tufted L-Shape Sectional Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 55000,
    showPrice: true,
    description:
      "A 6-seater L-shape sectional in textured grey chenille with a quilted tufted pattern throughout, includes a matching ottoman.",
    images: ["/images/products/tufted-l-shape-sectional-sofa.jpg"],
    dimensions: "6-Seater L-Shape",
    material: "Chenille upholstery, tufted spring cushions, tufted pillows",
  },
  {
    id: "15",
    slug: "7-seater-l-shape-sectional-sofa",
    name: "7-Seater L-Shape Sectional Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 80000,
    showPrice: true,
    description:
      "A custom-made 7-seater L-shape sectional in dark brown textured fabric with a matching ottoman, spring cushions, and fibre back pillows.",
    images: ["/images/products/7-seater-l-shape-sectional-sofa.jpg"],
    dimensions: "7-Seater L-Shape",
    material: "Fabric upholstery, spring cushions, fibre back pillows",
  },
  {
    id: "16",
    slug: "cream-l-shape-sectional-sofa",
    name: "Cream L-Shape Sectional Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 85000,
    showPrice: true,
    description:
      "A custom 9ft x 9ft L-shape sectional in off-white textured fabric with removable spring cushions and fibre back pillows.",
    images: ["/images/products/cream-l-shape-sectional-sofa.jpg"],
    dimensions: "9ft x 9ft L-Shape",
    material: "Fabric upholstery, removable spring cushions, fibre back pillows",
  },
  {
    id: "17",
    slug: "beige-l-shape-sectional-sofa",
    name: "Beige L-Shape Sectional Sofa",
    room: "living-room",
    subcategory: "sofas-sectionals",
    price: 50000,
    showPrice: true,
    description:
      "A 4-seater L-shape sectional in taupe/beige textured fabric with a matching ottoman, spring cushions, and fibre back pillows.",
    images: ["/images/products/beige-l-shape-sectional-sofa.jpg"],
    dimensions: "4-Seater L-Shape",
    material: "Fabric upholstery, spring cushions, fibre back pillows",
  },
];
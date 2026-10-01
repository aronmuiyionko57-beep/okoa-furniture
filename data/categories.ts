export interface Subcategory {
  slug: string;
  name: string;
}

export interface Room {
  slug: string;
  name: string;
  subcategories: Subcategory[];
}

export const rooms: Room[] = [
  {
    slug: "living-room",
    name: "Living Room",
    subcategories: [
      { slug: "sofas-sectionals", name: "Sofas & Sectionals" },
      { slug: "armchairs", name: "Armchairs" },
      { slug: "recliners", name: "Recliners" },
      { slug: "sofa-beds", name: "Sofa Beds" },
      { slug: "coffee-tables", name: "Coffee Tables" },
      { slug: "console-tables", name: "Console Tables" },
      { slug: "tv-stands", name: "TV Stands" },
      { slug: "ottomans", name: "Ottomans" },
      { slug: "mirrors", name: "Mirrors" },
    ],
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    subcategories: [
      { slug: "beds", name: "Beds" },
      { slug: "bedside-cabinets", name: "Bedside Cabinets" },
      { slug: "mattresses", name: "Mattresses" },
      { slug: "ottomans", name: "Ottomans" },
      { slug: "bedroom-mirrors", name: "Bedroom Mirrors" },
    ],
  },
  {
    slug: "dining-room",
    name: "Dining Room",
    subcategories: [
      { slug: "dining-tables", name: "Dining Tables" },
      { slug: "dining-chairs", name: "Dining Chairs" },
      { slug: "dining-sets", name: "Dining Sets" },
    ],
  },
  {
    slug: "home-office",
    name: "Home Office",
    subcategories: [
      { slug: "desks", name: "Desks" },
      { slug: "office-chairs", name: "Office Chairs" },
      { slug: "bookshelves-storage", name: "Bookshelves & Storage" },
      { slug: "filing-cabinets", name: "Filing Cabinets" },
    ],
  },
  {
    slug: "outdoor",
    name: "Outdoor",
    subcategories: [
      { slug: "outdoor-sofas", name: "Outdoor Sofas" },
      { slug: "outdoor-chairs", name: "Outdoor Chairs" },
      { slug: "outdoor-dining-sets", name: "Outdoor Dining Sets" },
      { slug: "outdoor-tables", name: "Outdoor Tables" },
      { slug: "outdoor-lounge-furniture", name: "Outdoor Lounge Furniture" },
    ],
  },
  {
    slug: "custom-furniture",
    name: "Custom Furniture",
    subcategories: [
      { slug: "custom-sofas", name: "Custom Sofas" },
      { slug: "custom-beds", name: "Custom Beds" },
      { slug: "custom-dining-sets", name: "Custom Dining Sets" },
      { slug: "custom-tv-units", name: "Custom TV Units" },
      { slug: "made-to-measure", name: "Made-to-Measure Furniture" },
    ],
  },
];
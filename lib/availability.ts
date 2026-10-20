import { Product } from "@/data/products";

export function getAvailabilityLabel(product: Product): string {
  switch (product.availability) {
    case "on-order":
      return "Available on Order";
    case "limited":
      return "Limited Availability";
    case "unavailable":
      return "Currently Unavailable";
    default:
      return "Available";
  }
}

export function getAvailabilityColor(product: Product): string {
  switch (product.availability) {
    case "on-order":
      return "text-blue-600 bg-blue-50";
    case "limited":
      return "text-amber-600 bg-amber-50";
    case "unavailable":
      return "text-red-600 bg-red-50";
    default:
      return "text-green-600 bg-green-50";
  }
}
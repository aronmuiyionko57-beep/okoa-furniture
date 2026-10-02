import { Product } from "@/data/products";

export function isOnSale(product: Product): boolean {
  return Boolean(product.salePrice && product.salePrice < product.regularPrice);
}

export function getDiscountPercent(product: Product): number {
  if (!isOnSale(product) || !product.salePrice) return 0;
  return Math.round(
    ((product.regularPrice - product.salePrice) / product.regularPrice) * 100
  );
}

export function getDisplayPrice(product: Product): number {
  return isOnSale(product) && product.salePrice
    ? product.salePrice
    : product.regularPrice;
}
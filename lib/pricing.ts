const DISCOUNT_OPTIONS = [10, 7, 15, 5, 3];

export function hasDiscount(id: string): boolean {
  const num = parseInt(id, 10);
  return num % 2 === 0; // roughly half of products
}

export function getDiscountPercent(id: string): number {
  const num = parseInt(id, 10);
  return DISCOUNT_OPTIONS[num % DISCOUNT_OPTIONS.length];
}

export function getOriginalPrice(price: number, discountPercent: number): number {
  return Math.round(price / (1 - discountPercent / 100));
}
const WHATSAPP_NUMBER = "254711682894"; // no + or leading 0

export function getWhatsAppOrderLink(
  productName: string,
  price?: number,
  productUrl?: string
) {
  let message = `Hello OKOA Furniture, I'm interested in the ${productName}`;

  if (price) {
    message += ` listed at KSh ${price.toLocaleString()}`;
  }

  message += ". Is it currently available?";

  if (productUrl) {
    message += `\n${productUrl}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomOrderLink(details: string) {
  const message = `Hi, I'd like a custom furniture quote. Details: ${details}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
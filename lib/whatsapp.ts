const WHATSAPP_NUMBER = "254711682894"; // no + or leading 0

export function getWhatsAppOrderLink(productName: string, productUrl?: string) {
  const message = productUrl
    ? `Hi, I'm interested in ${productName} — ${productUrl}`
    : `Hi, I'm interested in ${productName}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCustomOrderLink(details: string) {
  const message = `Hi, I'd like a custom furniture quote. Details: ${details}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
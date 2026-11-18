import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function PhoneIcon({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return <Phone size={size} weight="fill" className={className} aria-hidden="true" />;
}

export function WhatsAppIcon({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <WhatsappLogo size={size} weight="fill" className={className} aria-hidden="true" />
  );
}
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "999999999";
  const message = "Hola, Me gustaría solicitar un servicio.";

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
}

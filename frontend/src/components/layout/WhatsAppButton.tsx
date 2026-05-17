import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de informações sobre os produtos SP3."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      title="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}

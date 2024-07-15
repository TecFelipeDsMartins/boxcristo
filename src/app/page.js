import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6" style={{ backgroundColor: '#F38120' }}>
    <div className="flex flex-col items-center space-y-6">
      <Image
        src="/boxcristologo.png"
        alt="Box Cristo Logo"
        width={180}
        height={37}
        priority
      />
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Site em Manutenção</h1>
        <a
          href="https://wa.me/5551993312020?text=Ol%C3%A1.%20Encontrei%20a%20box%20cristo%20no%20google!%20Preciso%20de%20algumas%20informa%C3%A7%C3%B5es..."
          className="inline-flex items-center justify-center px-3 py-2 text-xs font-semibold text-white bg-[#25D366] rounded-lg shadow hover:bg-green-500"
        >
          <FaWhatsapp className="text-2xl mr-2" />
          Entre em contato pelo WhatsApp
        </a>
      </div>
    </div>
  </main>
  );
}


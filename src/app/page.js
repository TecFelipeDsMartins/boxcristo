import Image from "next/image";

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
        <p className="text-sm text-green-600 dark:text-gray-400">
        Entre em contato pelo whatsapp
        </p>
      </div>
    </div>
  </main>
  );
}

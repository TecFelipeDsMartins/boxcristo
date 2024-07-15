import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Box Cristo - Aula grátis experimental",
  description: "Estudos mostram que o Cross é uma das formas mais eficazes de perder peso e ganhar condicionamento físico.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <GoogleTagManager gtmId="GTM-N6ZTM8NH" />
      <GoogleAnalytics gaId="G-LMKFY6JK61" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

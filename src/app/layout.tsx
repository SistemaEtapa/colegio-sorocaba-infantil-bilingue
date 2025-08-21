import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Educação Infantil Bilíngue | Colégio Sorocaba",
  description:
    "Colégio Sorocaba: Educação Infantil bilíngue com acolhimento e ensino de inglês desde cedo, utilizando o programa Etapa Idiomas para formar cidadãos do mundo preparados para o futuro.",
  icons: "logo-sorocaba-branco.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <body
        className={`${montserrat.variable} antialiased !overflow-x-hidden`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}

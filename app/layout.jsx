import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CHH | Portfolio",
  description:
    "Este es el portafolio de Cristian Huijse Heise, Diseñador industrial especialista en el ambito de la interacción digital",
  url: "https://chh.work",
  siteName: "Cristian Huijse Heise portfolio",
  locale: "es_CL",
  creator: "Cristian Huijse",
  keywords: [
    "Interacción digital",
    "diseño",
    "UX UI",
    "electrónica",
    "front-end",
    "arduino,diseño Industrial",
  ],
  referrer: "origin-when-cross-origin",
  openGraph: { type: "website" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

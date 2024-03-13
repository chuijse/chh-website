
import "./globals.scss";
import Nav from "./Nav";

/*import { Share_Tech } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";

const share_tech = Share_Tech({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});*/

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
      <body
      //className={`${share_tech.className} ${ibm_plex_sans.className} ${ibm_plex_mono}`}
      >
        <Nav />
        
        {children}
       
      </body>
    </html>
  );
}

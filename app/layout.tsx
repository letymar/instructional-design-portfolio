import type { Metadata } from "next";
import { Poppins, Inter, Nunito } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Letícia Marinho — Learning Designer",
  description:
    "Portfólio de Letícia Marinho — Learning Experience Designer com 10+ anos a criar experiências de aprendizagem humanas, inovadoras e com impacto real.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt"
      className={`${poppins.variable} ${inter.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        {/* Grain texture overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {/* Custom cursor */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

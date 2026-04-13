import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import CustomCursor from "./components/CustomCursor";
import ClientRoot from "./components/ClientRoot";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
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
      className={`${poppins.variable} ${roboto.variable} h-full`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="grain-overlay" aria-hidden="true" />
        <CustomCursor />
        <LanguageProvider>
          <ClientRoot>
            {children}
          </ClientRoot>
        </LanguageProvider>
      </body>
    </html>
  );
}

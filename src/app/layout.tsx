import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { BackToTopButton } from "@/components/BackToTopButton";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pintualiado | Pintura Automotriz, Arquitectónica e Industrial",
  description: "Expertos en acabados profesionales. Distribuidores de las mejores marcas en pintura automotriz, insumos industriales, impermeabilizantes y herramientas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-background text-foreground antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <div className="fixed inset-0 z-[1] opacity-30 pointer-events-none texture-overlay"></div>
          {children}
          <BackToTopButton />
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

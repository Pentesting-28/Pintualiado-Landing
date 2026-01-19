import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Pintualiado | Tienda de Pinturas en Caracas",
  description: "Tu tienda de pinturas de confianza. Ofrecemos la mejor variedad de pinturas y acabados para tu hogar u oficina. Visítanos en Caracas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <div className="texture-overlay" />
          {children}
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}

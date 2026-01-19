"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, mounted } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-background text-foreground border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Pintualiado Logo"
                  fill
                  className={`object-contain transition-all duration-300 ${isMounted && theme === "dark"
                    ? ""
                    : "brightness-[0.1] contrast-150"
                    }`}
                />
              </div>
              <span className="text-2xl font-bold tracking-tight">Pintualiado</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Tu aliado experto en recubrimientos automotrices, arquitectónicos e industriales. Calidad superior y asesoría técnica especializada.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100086273631425", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/pintualiado/", label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Productos", href: "#productos" },
                { name: "Servicios", href: "#servicios" },
                { name: "Nosotros", href: "#nosotros" },
                { name: "Contacto", href: "#contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Información</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent flex-shrink-0 w-5 h-5 mt-0.5" />
                <span className="text-muted-foreground">Av. prolongacion Zuloaga, Los Rosales, Caracas</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0 w-5 h-5" />
                <a href="tel:+584241234567" className="text-muted-foreground hover:text-accent transition-colors">
                  +58 424 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0 w-5 h-5" />
                <a href="mailto:info@pintualiado.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                  info@pintualiado.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {currentYear} Pintualiado. C.A. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground opacity-50">Designed with precision</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

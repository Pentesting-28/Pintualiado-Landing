"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme, mounted } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
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
              <span className="text-xl sm:text-2xl font-bold tracking-tight">Pintualiado</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Venta de pinturas Automotriz, Arquitectónica e Industrial. Así como insumos afines. Visítanos en Los Rosales, Caracas.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100086273631425"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/pintualiado/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Productos
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contacto</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="text-accent flex-shrink-0 mt-0.5 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <span className="text-muted-foreground text-sm sm:text-base">Av. prolongacion Zuloaga, Los Rosales, Caracas</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="text-accent flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <a href="tel:+584241234567" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base">
                  +58 424 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="text-accent flex-shrink-0 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                <a href="mailto:info@pintualiado.com" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-all">
                  info@pintualiado.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Pintualiado. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="https://www.instagram.com/pintualiado/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                @pintualiado
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

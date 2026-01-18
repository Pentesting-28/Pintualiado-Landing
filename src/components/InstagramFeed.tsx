"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

export function InstagramFeed() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            <Instagram size={14} className="sm:w-4 sm:h-4" />
            @pintualiado
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Síguenos en Instagram
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Descubre nuestros últimos trabajos, productos y consejos de pintura.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
            <div className="flex-shrink-0 text-center lg:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-0.5 sm:p-1 mx-auto lg:mx-0 mb-3 sm:mb-4">
                <div className="relative w-full h-full rounded-full bg-card overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className={`object-contain p-2 transition-all duration-300 ${mounted && theme === "dark"
                      ? "brightness-100 contrast-100"
                      : "brightness-[0.1] contrast-150"
                      }`}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">@pintualiado</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Tienda de Pinturas</p>
              <a
                href="https://www.instagram.com/pintualiado/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-105 transition-transform duration-300"
              >
                Seguir
              </a>
            </div>

            <div className="flex-grow w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <a
                    key={item}
                    href="https://www.instagram.com/pintualiado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square bg-muted rounded-xl overflow-hidden shadow-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-orange-400/20 flex items-center justify-center">
                      <Instagram className="text-muted-foreground/30 w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 md:gap-6">
                      <div className="flex flex-col items-center gap-1 text-white">
                        <Heart size={18} fill="white" />
                        <span className="text-xs font-bold font-mono">--</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-white">
                        <MessageCircle size={18} fill="white" />
                        <span className="text-xs font-bold font-mono">--</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <a
                  href="https://www.instagram.com/pintualiado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-semibold text-sm sm:text-base hover:text-pink-500 transition-colors"
                >
                  <span className="hidden sm:inline">Ver todas las publicaciones</span>
                  <span className="sm:hidden">Ver más</span>
                  <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">También estamos en Facebook</p>
          <a
            href="https://www.facebook.com/profile.php?id=100086273631425"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="hidden sm:inline">Síguenos en Facebook</span>
            <span className="sm:hidden">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Ubicación", href: "#ubicacion" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg py-1.5"
        : "bg-background/80 backdrop-blur-sm py-2 sm:py-3"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-[56px] lg:h-[64px]">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-105">
            <div className="relative w-[36px] h-[36px] lg:w-[44px] lg:h-[44px]">
              <Image
                src="/logo.png"
                alt="Pintualiado Logo"
                fill
                className="object-contain dark:invert"
                priority
              />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground tracking-tight">
              Pintualiado
            </span>
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm xl:text-[15px] font-medium text-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-white transition-all duration-300"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {mounted && (theme === "light" ? <Moon size={18} /> : <Sun size={18} />)}
            </button>

            <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100086273631425"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-accent transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/pintualiado/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-accent transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>

            <a
              href="tel:+584241234567"
              className="hidden sm:flex items-center gap-2 bg-accent text-white px-3 lg:px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Llámanos</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-md z-[999] lg:hidden transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex justify-end p-4 sm:p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-foreground"
            aria-label="Close Menu"
          >
            <X size={32} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 sm:pt-12 space-y-6 sm:space-y-8 px-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg sm:text-xl font-semibold text-foreground hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-6 sm:pt-8">
            <button
              onClick={toggleTheme}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-white transition-all duration-300"
              aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            >
              {mounted && (theme === "light" ? <Moon size={22} /> : <Sun size={22} />)}
            </button>
          </div>

          <div className="flex space-x-6 pt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100086273631425"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-accent transition-colors"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/pintualiado/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background hover:bg-accent transition-colors"
            >
              <Instagram size={22} />
            </a>
          </div>

          <a
            href="tel:+584241234567"
            className="mt-6 flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium"
          >
            <Phone size={18} />
            <span>Llámanos</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

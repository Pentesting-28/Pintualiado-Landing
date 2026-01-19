"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, X, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${isScrolled
        ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-2 shadow-sm"
        : "bg-transparent py-4 sm:py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Pintualiado Logo"
                fill
                className={`object-contain transition-all duration-300 ${mounted && theme === "dark" ? "" : "brightness-[0.1] contrast-150"
                  }`}
                priority
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
              Pintualiado
            </span>
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:bg-white/5 hover:text-accent transition-colors duration-300"
                aria-label="Toggle Theme"
              >
                {mounted && (theme === "light" ? <Moon size={20} /> : <Sun size={20} />)}
              </button>
              <div className="w-[1px] h-6 bg-white/10" />
            </div>

            <a
              href="tel:+584241234567"
              className="hidden sm:flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">Llámanos</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[999] lg:hidden flex flex-col pt-24 px-6"
          >
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-foreground hover:text-accent transition-colors border-b border-white/5 pb-4"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  {mounted && (theme === "light" ? <Moon size={24} /> : <Sun size={24} />)}
                  <span>{theme === "light" ? "Modo Oscuro" : "Modo Claro"}</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

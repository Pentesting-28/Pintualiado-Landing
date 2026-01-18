"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Quiénes somos", href: "/quienes-somos/" },
    { name: "Productos", href: "/productos/" },
    { name: "Blog", href: "/blog/" },
    { name: "Contacto", href: "/contacto/" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-[80px] lg:h-[100px]">
          {/* Logo Area */}
          <div className="flex-1 flex items-center">
            <Link href="/" className="block relative w-[180px] lg:w-[220px] h-[45px] lg:h-[55px] transition-transform duration-300 hover:scale-105">
              <Image
                src="https://www.manpica.com/wp-content/uploads/2024/12/Manpica-Logo-Sin-RIF-Con-Borde-1024x245.png"
                alt="Logo - Manpica"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-[15px] font-semibold transition-colors duration-300 uppercase tracking-tight ${
                      isScrolled ? "text-brand-navy" : "text-brand-navy"
                    } hover:text-brand-red`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="https://www.facebook.com/Manpicave-183242275738251/?ref=pages_you_manage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-navy text-white hover:bg-brand-red transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/manpicave/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-navy text-white hover:bg-brand-red transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@manpicaven"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-navy text-white hover:bg-brand-red transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-brand-navy"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[999] lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }}
      >
        <nav className="flex flex-col items-center pt-12 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold uppercase text-brand-navy hover:text-brand-red"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex space-x-6 pt-8">
            <a
              href="https://www.facebook.com/Manpicave-183242275738251/?ref=pages_you_manage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy hover:text-brand-red"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/manpicave/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy hover:text-brand-red"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.youtube.com/@manpicaven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-navy hover:text-brand-red"
            >
              <Youtube size={24} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
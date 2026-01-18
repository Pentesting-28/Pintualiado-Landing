"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pintura Interior Mate",
    category: "Interiores",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop",
    description: "Acabado mate de alta calidad para paredes interiores",
  },
  {
    id: 2,
    name: "Esmalte Brillante",
    category: "Esmaltes",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    description: "Esmalte de alto brillo para maderas y metales",
  },
  {
    id: 3,
    name: "Pintura Exterior",
    category: "Exteriores",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "Resistente a la intemperie y rayos UV",
  },
  {
    id: 4,
    name: "Impermeabilizante",
    category: "Especiales",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
    description: "Protección total contra humedad y filtraciones",
  },
  {
    id: 5,
    name: "Pintura Satinada",
    category: "Interiores",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=400&fit=crop",
    description: "Acabado satinado lavable y duradero",
  },
  {
    id: 6,
    name: "Anticorrosivo",
    category: "Especiales",
    image: "https://images.unsplash.com/photo-1580641156506-0a2f13b1cb8a?w=400&h=400&fit=crop",
    description: "Protección profesional para superficies metálicas",
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Calidad que transforma espacios
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Descubre nuestra amplia variedad de pinturas y acabados para todo tipo de proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-accent text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/pintualiado/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="hidden sm:inline">Ver más en Instagram</span>
            <span className="sm:hidden">Instagram</span>
            <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

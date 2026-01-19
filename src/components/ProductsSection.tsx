"use client";

import React from "react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Pintura Automotriz",
    category: "Automotriz",
    image: "https://images.unsplash.com/photo-1502429892517-50798150392f?w=400&h=400&fit=crop",
    description: "Sistemas bicapa, monocapa y complementos para el repintado profesional.",
  },
  {
    id: 2,
    name: "Pintura Arquitectónica",
    category: "Arquitectónica",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    description: "Pinturas de caucho, acabados satinados y mates para interiores y exteriores.",
  },
  {
    id: 3,
    name: "Pintura Industrial",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1590486803833-ffc6f1448df3?w=400&h=400&fit=crop",
    description: "Recubrimientos epóxicos, de alto tráfico y protección anticorrosiva.",
  },
  {
    id: 4,
    name: "Insumos Afines",
    category: "Insumos",
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadc0d8?w=400&h=400&fit=crop",
    description: "Thinner, lijas, masillas y todas las herramientas necesarias.",
  },
  {
    id: 5,
    name: "Esmaltes y Barnices",
    category: "Acabados",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&h=400&fit=crop",
    description: "Protección y belleza para superficies de madera y metal.",
  },
  {
    id: 6,
    name: "Impermeabilizantes",
    category: "Especiales",
    image: "https://images.unsplash.com/photo-1517646272486-a28f669f4bd4?w=400&h=400&fit=crop",
    description: "Soluciones definitivas para filtraciones y humedad.",
  },
];

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-24 bg-secondary dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nuestros Productos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Soluciones en Pinturas e Insumos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Ofrecemos una amplia gama de productos para los sectores automotriz, arquitectónico e industrial.
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


      </div>
    </section>
  );
}

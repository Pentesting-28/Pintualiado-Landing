"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function ProductsSection() {
  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
          >
            Nuestros Productos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Soluciones en Pinturas e Insumos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0"
          >
            Ofrecemos una amplia gama de productos para los sectores automotriz, arquitectónico e industrial.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border border-white/5"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-medium text-foreground">Ver detalles</span>
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

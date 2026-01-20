"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-[72px] lg:pt-[84px]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-brand-olive/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[70%] bg-gradient-to-tr from-accent/15 to-transparent rounded-tr-[100px] sm:rounded-tr-[300px]" />

        {/* Animated Glows */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-brand-beige/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] sm:leading-tight">
              Pintura para cada{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#f4a261]">
                necesidad
              </span>
            </h1>

            <p className="text-base sm:text-l text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              En Pintualiado nos especializamos en la venta de pinturas
              <strong className="text-foreground"> Automotriz, Arquitectónica e Industrial</strong>.
              Encuentra también todos los insumos afines para tus proyectos con la mejor asesoría de Caracas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                Contáctanos
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-full font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              >
                Ver servicios
              </motion.a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 mt-4 border-t border-white/10">
              {[
                { label: "Clientes", value: "500+" },
                { label: "Colores", value: "100+" },
                { label: "Años", value: "5+" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[60px] transform rotate-6 blur-lg" />
              <div className="absolute inset-4 bg-card rounded-[50px] shadow-2xl overflow-hidden border border-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=800"
                  alt="Tienda de pinturas Pintualiado"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

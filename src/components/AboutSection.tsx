"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Línea Automotriz completa",
  "Pinturas Arquitectónicas",
  "Recubrimientos Industriales",
  "Insumos y Herramientas",
  "Igualación Computarizada",
  "Asesoría Técnica Experta",
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-card border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=800"
                alt="Personal de Pintualiado brindando asesoría"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-accent/10 hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-accent text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl hidden sm:block">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">10+</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider mt-1">Años en el sector</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div>
              <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                Sobre Nosotros
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                Especialistas en <span className="text-accent">Color</span> y <span className="text-accent">Protección</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                En <strong className="text-foreground">Pintualiado</strong> somos más que una tienda de pinturas. Nos enfocamos en proveer soluciones integrales para el sector <strong className="text-foreground">Automotriz, Arquitectónico e Industrial</strong>.
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Nuestra misión es ofrecer productos de alta calidad y la asesoría técnica que necesitas para lograr resultados profesionales en cada aplicación, desde el repintado automotriz hasta grandes proyectos industriales.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  key={index}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <CheckCircle2 className="text-accent flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                  <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contacto"
              className="inline-flex items-center justify-center bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-accent transition-all duration-300 hover:shadow-lg"
            >
              Conoce más sobre nosotros
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

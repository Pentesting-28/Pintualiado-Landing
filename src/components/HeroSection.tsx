"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Paintbrush, Palette } from "lucide-react";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-[72px] lg:pt-[84px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-foreground/5 to-transparent dark:from-white/5" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-[100px] sm:rounded-tr-[200px] dark:from-accent/5" />
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-accent/5 rounded-full blur-3xl dark:opacity-30" />
        <div className="absolute bottom-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-muted/30 rounded-full blur-3xl dark:bg-muted/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-12 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">


            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] sm:leading-tight">
              Pintura para cada
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-foreground">
                necesidad
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              En Pintualiado nos especializamos en la venta de pinturas
              <strong> Automotriz, Arquitectónica e Industrial</strong>.
              Encuentra también todos los insumos afines para tus proyectos con la mejor asesoría de Caracas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Contáctanos
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:border-accent hover:text-accent transition-all duration-300 text-sm sm:text-base"
              >
                Ver servicios
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-6 sm:pt-8 mt-4 sm:mt-0 border-t border-border">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
                <p className="text-[10px] sm:text-sm text-muted-foreground uppercase tracking-wider">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">100+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Colores</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">5+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Años</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-foreground/10 rounded-[40px] lg:rounded-[60px] transform rotate-6" />
              <div className="absolute inset-4 bg-card rounded-[30px] lg:rounded-[50px] shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?w=800"
                  alt="Tienda de pinturas Pintualiado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-card p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Paintbrush className="text-accent" size={20} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm lg:text-base">Pinturas</p>
                  <p className="text-xs lg:text-sm text-muted-foreground">Premium</p>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-card p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Palette className="text-foreground" size={20} />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm lg:text-base">Colores</p>
                  <p className="text-xs lg:text-sm text-muted-foreground">Variados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Paintbrush, Home, Building2, Palette, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Venta de Pinturas",
    description: "Distribución de pinturas Automotriz, Arquitectónica e Industrial de las mejores marcas.",
  },
  {
    icon: Truck,
    title: "Insumos Afines",
    description: "Todo en lijas, solventes, selladores y herramientas para el pintor profesional.",
  },
  {
    icon: Building2,
    title: "Soluciones Industriales",
    description: "Recubrimientos de alta resistencia para ambientes exigentes y protección de activos.",
  },
  {
    icon: Palette,
    title: "Igualación de Colores",
    description: "Servicio especializado de igualación computarizada para acabados perfectos.",
  },
  {
    icon: Shield,
    title: "Asesoría Técnica",
    description: "Contamos con expertos para asesorarte en la aplicación y elección de productos.",
  },
  {
    icon: Home,
    title: "Atención Especializada",
    description: "Visítanos en nuestra tienda física en Los Rosales para una atención personalizada.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 sm:py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">
              Excelencia en acabados
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tighter leading-[0.9]">
              Todo lo que necesitas para tus proyectos
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm lg:text-right leading-relaxed">
            Brindamos soluciones integrales en pinturas y acabados bajo los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border/50">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 sm:p-12 border-r border-b border-border/50 hover:bg-muted/30 transition-colors duration-500"
            >
              <div className="mb-8">
                <service.icon
                  strokeWidth={1.2}
                  className="text-foreground/40 group-hover:text-accent transition-colors duration-500"
                  size={48}
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

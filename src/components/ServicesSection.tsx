"use client";

import React from "react";
import { Paintbrush, Home, Building2, Palette, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Pinturas de Calidad",
    description: "Ofrecemos las mejores marcas de pinturas para interiores y exteriores con acabados duraderos.",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Home,
    title: "Para tu Hogar",
    description: "Encuentra la pintura perfecta para cada espacio de tu casa. Colores que transforman.",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Building2,
    title: "Proyectos Comerciales",
    description: "Soluciones profesionales para oficinas, locales comerciales e industrias.",
    color: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Palette,
    title: "Asesoría de Color",
    description: "Te ayudamos a elegir la combinación perfecta de colores para tu ambiente.",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: Shield,
    title: "Garantía de Calidad",
    description: "Todos nuestros productos cuentan con garantía. Tu satisfacción es prioridad.",
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: Truck,
    title: "Entrega a Domicilio",
    description: "Llevamos tus productos hasta la puerta de tu casa u obra.",
    color: "bg-teal-500/10",
    iconColor: "text-teal-500",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Todo lo que necesitas para tus proyectos
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Brindamos soluciones integrales en pinturas y acabados para cualquier tipo de proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 sm:p-6 lg:p-8 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={service.iconColor} size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

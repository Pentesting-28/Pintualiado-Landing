"use client";

import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Ubicación
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Visítanos en nuestra tienda
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0">
            Encuéntranos en Los Rosales, Caracas. Te esperamos para asesorarte en tus proyectos automotrices, industriales y de hogar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-secondary p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6">
              <MapPin className="text-accent w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Dirección</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Av. prolongacion Zuloaga, calle intermedia
              <br />
              Los Rosales, Caracas 1041
            </p>
          </div>

          <div className="bg-secondary p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6">
              <Clock className="text-accent w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Horario</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Lun - Vie: 8:00 AM - 6:00 PM
              <br />
              Sábados: 8:00 AM - 1:00 PM
            </p>
          </div>

          <div className="bg-secondary p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6">
              <Navigation className="text-accent w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Cómo Llegar</h3>
            <a
              href="https://maps.app.goo.gl/pLGyJ5RvEkBKvvzb8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm sm:text-base hover:underline"
            >
              Ver en Google Maps
              <Navigation size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8461582754376!2d-66.90530420000001!3d10.478930799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5911c73125ef%3A0x9be73e330e3e7833!2sPINTUALIADO!5e0!3m2!1ses!2sve!4v1705000000000!5m2!1ses!2sve"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Pintualiado en Google Maps"
            className="w-full sm:h-[350px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

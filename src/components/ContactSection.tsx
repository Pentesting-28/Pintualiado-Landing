"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="text-foreground">
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales.
            </p>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-accent w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Teléfono</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Llámanos para atención inmediata</p>
                  <a href="tel:+584241234567" className="text-accent text-sm sm:text-base hover:underline">
                    +58 424 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-accent w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Escríbenos</p>
                  <a href="mailto:info@pintualiado.com" className="text-accent text-sm sm:text-base hover:underline">
                    info@pintualiado.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-accent w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Ubicación</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Caracas, Venezuela</p>
                  <a
                    href="https://maps.app.goo.gl/pLGyJ5RvEkBKvvzb8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-sm sm:text-base hover:underline"
                  >
                    Ver en mapa
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-accent w-5 h-5 sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Horario</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Sáb: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border">
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Síguenos en redes sociales</p>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100086273631425"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Facebook"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/pintualiado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-sm border border-border">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
              Envíanos un mensaje
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  placeholder="+58 424 123 4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-border bg-background text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm sm:text-base sm:rows-4"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

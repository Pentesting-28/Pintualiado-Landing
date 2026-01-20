"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground"
          >
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
              {[
                { icon: Phone, title: "Teléfonos", desc: "Llámanos para atención inmediata", link: "tel:+584241890381", linkText: "0424-1890381 / 0412-5843952" },
                { icon: Mail, title: "Email", desc: "Escríbenos", link: "mailto:info@pintualiado.com", linkText: "info@pintualiado.com" },
                { icon: MapPin, title: "Ubicación", desc: "Caracas, Venezuela", link: "https://maps.app.goo.gl/pLGyJ5RvEkBKvvzb8", linkText: "Ver en mapa" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <item.icon className="text-accent group-hover:text-white w-5 h-5 sm:w-[22px] sm:h-[22px] transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                    <div className="flex flex-col gap-1">
                      {item.title === "Teléfonos" ? (
                        <>
                          <a href="tel:+584241890381" className="text-accent text-sm sm:text-base hover:underline">0424-1890381</a>
                          <a href="tel:+584125843952" className="text-accent text-sm sm:text-base hover:underline">0412-5843952</a>
                          <a href="tel:+584140334156" className="text-accent text-sm sm:text-base hover:underline">0414-0334156</a>
                        </>
                      ) : (
                        <a href={item.link} className="text-accent text-sm sm:text-base hover:underline">
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 sm:gap-4 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Clock className="text-accent group-hover:text-white w-5 h-5 sm:w-[22px] sm:h-[22px] transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">Horario</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Sáb: 8:00 AM - 1:00 PM</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-border">
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">Síguenos en redes sociales</p>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=100086273631425", label: "Facebook" },
                  { icon: Instagram, link: "https://www.instagram.com/pintualiado/", label: "Instagram" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Síguenos en ${social.label}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-sm border border-white/5"
          >
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background/50 text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background/50 text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background/50 text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm sm:text-base"
                  placeholder="0424-1890381"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background/50 text-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-sm sm:text-base sm:rows-4"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-foreground text-background py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Enviar mensaje
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

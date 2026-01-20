"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight } from "lucide-react";

const whatsappNumbers = [
    { label: "Atención al Cliente 1", number: "584241890381", display: "0424-1890381" },
    { label: "Atención al Cliente 2", number: "584140334156", display: "0414-0334156" },
];

export function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-card/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl mb-2 w-[280px]"
                    >
                        <div className="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                            <span className="font-semibold text-foreground text-sm">Contáctanos vía WhatsApp</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-2">
                            {whatsappNumbers.map((item, index) => (
                                <a
                                    key={index}
                                    href={`https://wa.me/${item.number}?text=Hola%20Pintualiado,%20quisiera%20m%C3%A1s%20informaci%C3%B3n`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-transparent hover:border-accent/20"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground">{item.label}</span>
                                        <span className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{item.display}</span>
                                    </div>
                                    <ChevronRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isOpen ? "bg-muted text-foreground rotate-45" : "bg-[#25D366] text-white hover:shadow-green-500/30"
                    }`}
            >
                {isOpen ? <X size={24} /> : (
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
            </motion.button>
        </div>
    );
}

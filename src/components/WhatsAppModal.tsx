"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

interface WhatsAppModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
    const whatsappNumbers = [
        { number: "584241890381", label: "Atención al Cliente (Principal)", icon: MessageCircle },
        { number: "584140334156", label: "Soporte Técnico / Ventas", icon: Phone },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[2001] pointer-events-none p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-card border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="bg-accent p-6 text-center relative">
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
                                    <MessageCircle size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">Contáctanos</h3>
                                <p className="text-white/80 text-sm">Selecciona una opción para chatear</p>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-3 bg-background">
                                {whatsappNumbers.map((item, index) => (
                                    <a
                                        key={index}
                                        href={`https://wa.me/${item.number}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-secondary/50 hover:bg-secondary hover:border-accent/30 transition-all duration-300 group"
                                        onClick={onClose}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
                                                {item.label}
                                            </p>
                                            <p className="text-muted-foreground text-xs font-mono mt-0.5">
                                                +{item.number}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="p-4 bg-secondary/30 text-center text-xs text-muted-foreground border-t border-white/5">
                                Respondemos en menos de 5 minutos
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

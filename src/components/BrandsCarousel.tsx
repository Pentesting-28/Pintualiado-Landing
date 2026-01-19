"use client";

import React from "react";
import Image from "next/image";

const brands = [
    { name: "Wonder-Tech", logo: "/wonder-tech.png" },
    { name: "InnoColor", logo: "/inno-color.png" },
    { name: "Sherwin-Williams", logo: "/sherwin-williams.png" },
    { name: "Mulod", logo: "/mulod.png" },
    { name: "Symplex", logo: "/symplex.png" },
    { name: "PPG", logo: "/ppg.svg" },
    { name: "Ixell", logo: "/ixell.png" },
];

export function BrandsCarousel() {
    return (
        <section className="w-full bg-background py-10 sm:py-12 overflow-hidden border-t border-b border-border">
            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>

            <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center sm:text-left">
                <p className="text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Marcas que representamos y distribuimos
                </p>
            </div>

            <div className="relative w-full pause-on-hover">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex w-fit animate-scroll items-center">
                    {[...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center mx-8 sm:mx-14 min-w-max"
                        >
                            <div className="relative h-12 sm:h-16 w-28 sm:w-36">
                                <Image
                                    src={brand.logo}
                                    alt={`Logo de ${brand.name}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

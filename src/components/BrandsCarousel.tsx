"use client";

import React from "react";

const brands = [
    "InnoColor",
    "Sherwin Williams",
    "Global Refinish",
    "Mulod",
    "Symplex",
    "Rhino Automotive",
    "PPG",
    "Ixell",
];

export function BrandsCarousel() {
    return (
        <section className="w-full bg-background py-10 sm:py-12 overflow-hidden border-t border-b border-border">
            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }
        .pause-on-hover:hover .animate-scroll,
        .pause-on-hover:hover .animate-scroll-reverse {
          animation-play-state: paused;
        }
      `}</style>

            <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center sm:text-left">
                <p className="text-[10px] sm:text-xs font-semibold text-accent uppercase tracking-[0.2em]">
                    Marcas que representamos y distribuimos
                </p>
            </div>

            <div className="relative w-full pause-on-hover mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex w-fit animate-scroll">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="flex items-center justify-center mx-6 sm:mx-12 min-w-max">
                            <span className="text-xl sm:text-2xl md:text-3xl font-black text-muted-foreground/30 hover:text-accent transition-colors duration-300 select-none tracking-tighter uppercase italic">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative w-full pause-on-hover">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div className="flex w-fit animate-scroll-reverse">
                    {[...brands, ...brands].reverse().map((brand, index) => (
                        <div key={index} className="flex items-center justify-center mx-6 sm:mx-12 min-w-max">
                            <span className="text-xl sm:text-2xl md:text-3xl font-black text-muted-foreground/30 hover:text-accent transition-colors duration-300 select-none tracking-tighter uppercase italic">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

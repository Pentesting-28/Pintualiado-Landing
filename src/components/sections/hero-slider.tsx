"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * HeroSlider component cloning the main hero section of the Manpica website.
 * Features:
 * - Blue and yellow diagonal split design.
 * - ETHERNA paint product imagery.
 * - Large white typography.
 * - "Since 1972" branding elements.
 * - Slanted transition at the bottom.
 */
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // In a real production scenario, this would be a real slider.
  // For the clone, we focus on the primary visual state shown in the screenshots.
  const totalSlides = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Main Slider Container */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full flex items-center">
        
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 z-0">
          {/* Main Diagonal Navy Block */}
          <div 
            className="absolute top-0 right-0 w-[65%] h-full bg-[#003057]" 
            style={{ 
              clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' 
            }}
          />
          {/* Yellow Branding Block (Bottom Right) */}
          <div 
            className="absolute bottom-0 right-0 w-[45%] h-[350px] bg-[#FFED00]"
            style={{ 
              clipPath: 'polygon(15% 100%, 100% 20%, 100% 100%)' 
            }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between h-full py-12">
          
          {/* Left Side: Product Imagery (Etherna Paint Can) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] animate-in fade-in slide-in-from-left duration-1000">
              <Image
                src="https://www.manpica.com/wp-content/uploads/2025/11/Banner-Etherna-Satinado-Manpica-2025.png"
                alt="Etherna Caucho Satinado"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side: Typography and Branding */}
          <div className="w-full md:w-1/2 text-white flex flex-col items-start space-y-4 px-4 md:px-0 mt-8 md:mt-0 animate-in fade-in slide-in-from-right duration-1000">
            <div className="bg-[#FFED00] text-[#003057] px-4 py-1 font-bold text-sm tracking-widest uppercase">
              Nuevo Producto
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                ETHERNA
              </h1>
              <div className="flex items-center space-x-4 mt-[-10px]">
                <span className="text-xl md:text-3xl font-bold uppercase tracking-widest">
                  Caucho
                </span>
                <span className="bg-white text-[#003057] px-4 py-1 text-xl md:text-3xl font-black uppercase rounded-sm">
                  Satinado
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-black uppercase max-w-md mt-6 leading-tight">
              Innovación Constante, <br />
              <span className="text-[#96cce4]">Protección Eterna</span>
            </h2>

            {/* Tech Badge */}
            <div className="flex items-center bg-[#004e82] p-4 pr-12 mt-4 rounded-r-full border-l-4 border-[#3bc4f3]">
              <div className="mr-6">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#3bc4f3]">Tecnología Ultra-MS1</p>
                <p className="text-5xl font-black">3500</p>
              </div>
              <div className="border-l border-white/20 pl-6">
                <p className="text-xs uppercase font-bold leading-tight">Ciclos <br /> de Fregado</p>
              </div>
            </div>

            {/* 1972 Branding */}
            <div className="mt-12 flex items-center space-x-4">
              <div className="text-right">
                <p className="text-[#FFED00] text-sm font-bold uppercase tracking-widest">Cerca de ti</p>
                <p className="text-[#FFED00] text-2xl font-black uppercase leading-none">Desde</p>
              </div>
              <div className="bg-[#003057] border-2 border-[#FFED00] px-4 py-1 flex items-center justify-center">
                <span className="text-white text-5xl font-black">1972</span>
              </div>
              {/* Paint roller graphic approximation */}
              <div className="h-10 w-16 relative">
                 <div className="absolute left-0 bottom-1 w-full h-2 bg-[#003057] border border-[#FFED00]"></div>
                 <div className="absolute left-0 bottom-0 w-1 h-6 bg-[#003057] border-l border-[#FFED00]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Pagination Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx 
                  ? "bg-[#FFED00] scale-110" 
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Slanted Bottom Transition */}
      <div 
        className="absolute bottom-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />
      
      {/* Visual Slant Shadow/Divider */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1 bg-[#FFED00] z-20"
        style={{ transform: 'skewY(-1deg)', transformOrigin: 'bottom right' }}
      />
    </section>
  );
};

export default HeroSlider;
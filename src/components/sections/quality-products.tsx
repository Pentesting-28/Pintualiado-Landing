import React from 'react';
import Image from 'next/image';

const QualityProducts = () => {
  return (
    <section className="bg-white py-[80px] w-full">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-[30px]">
          {/* Left Side: Product Image Cluster */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
              <Image
                src="https://www.manpica.com/wp-content/uploads/2021/11/IMG_5428.jpg"
                alt="Variedad de productos Manpica - Pinturas y revestimientos"
                fill
                className="object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="max-w-[540px]">
              <h2 className="text-[36px] font-[800] leading-[1.2] text-[#003057] mb-[25px] font-roboto tracking-[-0.02em] uppercase">
                PRODUCTOS DE CALIDAD Y ALTO CUBRIMIENTO
              </h2>
              <div className="space-y-[20px]">
                <p className="text-[16px] leading-[1.6] text-[#444444] font-roboto font-[400]">
                  Con el objetivo de brindar productos de calidad a los venezolanos, en Manpica contamos con una línea integral para prevenir el deterioro de diferentes superficies, además de embellecerlas con productos de excelente rendimiento, cubrimiento y larga durabilidad, los cuales llenan de armonía cada hogar, industria, local comercial o construcción en la que son usados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Part: Second Row (Fabricamos Section) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-[30px] mt-[80px]">
          {/* Right Side Image (Hands with cans) - Fallback style based on visual reference */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
              {/* Note: This specific image URL wasn't in provided section assets but is clearly part of the alternating section logic. 
                  Using a similar style placeholder if actual URL not found, but providing structure for the alternating layout. */}
              <Image
                src="https://www.manpica.com/wp-content/uploads/2021/11/IMG_5428.jpg" // Reusing representative asset per instructions if specific second one is missing
                alt="Fabricación y Distribución Manpica"
                fill
                className="object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="max-w-[540px] md:ml-auto">
              <h2 className="text-[36px] font-[800] leading-[1.2] text-[#003057] mb-[25px] font-roboto tracking-[-0.02em] uppercase">
                FABRICAMOS, COMERCIALIZAMOS Y DISTRIBUIMOS
              </h2>
              <div className="space-y-[20px]">
                <p className="text-[16px] leading-[1.6] text-[#444444] font-roboto font-[400]">
                  Productos desarrollados por nuestro equipo de profesionales y fabricados en la planta ubicada en Las Tejerías, Edo. Aragua. Ofrecemos precios competitivos para que ferreteros puedan distribuir en sus locales comerciales con el mejor diferencial calidad-precio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityProducts;
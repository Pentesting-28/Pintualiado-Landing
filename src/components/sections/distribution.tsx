import React from 'react';
import Image from 'next/image';

const DistributionSection = () => {
  // Asset from the provided list
  const workerImage = "https://www.manpica.com/wp-content/uploads/2021/11/IMG_5431.jpg";

  return (
    <section className="bg-white py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
          
          {/* Column 1: Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-[30px] lg:text-[36px] font-extrabold leading-[1.2] text-[#003057] mb-[25px] uppercase tracking-tight">
              FABRICAMOS, COMERCIALIZAMOS Y DISTRIBUIMOS
            </h2>
            
            <div className="space-y-[20px]">
              <p className="text-[16px] leading-[1.6] text-[#444444]">
                Productos desarrollados por nuestro equipo de profesionales y fabricados en la planta ubicada en Las Tejerías, Edo. Aragua. Ofrecemos precios competitivos para que ferreteros puedan distribuir en sus locales comerciales con el mejor diferencial calidad-precio.
              </p>
            </div>
          </div>

          {/* Column 2: Image Content */}
          <div className="order-1 lg:order-2 relative h-full flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto h-full min-h-[400px]">
              <Image
                src={workerImage}
                alt="Personal de Manpica manejando productos en almacén"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DistributionSection;
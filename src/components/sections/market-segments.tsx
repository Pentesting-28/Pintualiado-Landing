import React from 'react';
import Image from 'next/image';

const MarketSegments = () => {
  const segments = [
    {
      title: "DOMÉSTICO",
      description: "Contamos con diferentes productos para restaurar, proteger y embellecer distintas superficies del hogar",
      image: "https://www.manpica.com/wp-content/uploads/2021/11/IMG_5414.jpg",
      alt: "Pintado de superficie doméstica con brocha"
    },
    {
      title: "INDUSTRIAL",
      description: "Ofrecemos variedad de productos para cubrir necesidades en cuanto a protección y mantenimiento de infraestructuras.",
      image: "https://www.manpica.com/wp-content/uploads/2021/11/IMG_5419.jpg",
      alt: "Aplicación de pintura industrial con rodillo"
    },
    {
      title: "CONSTRUCCIÓN",
      description: "Disponemos de las mejores pastas profesionales, impermeabilizantes, fondos y pinturas para la construcción",
      image: "https://www.manpica.com/wp-content/uploads/2021/11/IMG_5613.jpg",
      alt: "Aplicación de pasta profesional en construcción"
    }
  ];

  return (
    <section className="py-[80px] bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-[800] text-[#003057] leading-[1.2] mb-4">
            MERCADOS QUE ABARCAMOS
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {segments.map((segment, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] mb-[25px] overflow-hidden">
                <Image
                  src={segment.image}
                  alt={segment.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Title with Underline */}
              <div className="relative mb-[35px] inline-block">
                <h3 className="text-[22px] font-[700] text-[#003057] leading-[1.3] uppercase m-0">
                  {segment.title}
                </h3>
                {/* Custom thick underline as per design instructions and global styles */}
                <div 
                  className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-[#003057]" 
                  aria-hidden="true"
                />
              </div>

              {/* Description */}
              <p className="text-[16px] font-[400] text-[#444444] leading-[1.6] max-w-[320px]">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSegments;
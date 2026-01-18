import React from 'react';
import Image from 'next/image';

const ProductLines = () => {
  const products = [
    {
      title: "LÍNEA DE FONDOS",
      image: "https://www.manpica.com/wp-content/uploads/2024/11/Fondo-Anticorrosivo-3-en-1-Gris-Manpica.png",
      bgColor: "bg-[#FFED00]", // Brand Yellow
      textColor: "text-[#003057]", // Brand Navy
      alt: "Línea de Fondos Manpica"
    },
    {
      title: "LÍNEA DE PASTAS PROFESIONALES",
      image: "https://www.manpica.com/wp-content/uploads/2024/11/Mastic-500-Manpica.png",
      bgColor: "bg-[#003057]", // Brand Navy
      textColor: "text-white",
      alt: "Línea de Pastas Profesionales Manpica"
    },
    {
      title: "LÍNEA DE ESMALTES PREMIUM",
      image: "https://www.manpica.com/wp-content/uploads/2024/11/Esmalte-Brillante-Blanco-Manpica.png",
      bgColor: "bg-[#FFED00]", // Brand Yellow
      textColor: "text-[#003057]", // Brand Navy
      alt: "Línea de Esmaltes Premium Manpica"
    },
    {
      title: "LÍNEA DE CAUCHO PREMIUM",
      image: "https://www.manpica.com/wp-content/uploads/2024/11/Fondo-Anticorrosivo-3-en-1-Gris-Manpica.png", // Using matching product style from visual reference
      bgColor: "bg-[#003057]", // Brand Navy
      textColor: "text-white",
      alt: "Línea de Caucho Premium Manpica"
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {products.map((product, index) => (
          <div 
            key={index} 
            className={`${product.bgColor} min-h-[450px] flex flex-col items-center justify-between py-12 px-6 transition-all duration-300 hover:z-10 hover:shadow-2xl group cursor-pointer`}
          >
            {/* Paint Can Image Container */}
            <div className="relative w-full aspect-square flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105">
              {/* Subtle drop shadow for depth as per design system */}
              <div className="relative w-[280px] h-[320px] filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
                {/* Fallback to generic paint can images if specific ones above fail, based on typical Manpica product structure */}
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 4}
                />
              </div>
            </div>

            {/* Product Label */}
            <div className={`mt-8 text-center max-w-[200px]`}>
              <h3 className={`${product.textColor} font-roboto font-black text-[18px] leading-[1.2] uppercase tracking-tight`}>
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductLines;
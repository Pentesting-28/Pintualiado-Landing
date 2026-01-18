import React from 'react';
import Image from 'next/image';

const AboutCompany = () => {
  return (
    <section className="bg-white py-[80px] w-full">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-[30px]">
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[480px]">
              <Image
                src="https://www.manpica.com/wp-content/uploads/2021/11/IMG_5692.jpg"
                alt="+ DE 50 AÑOS COMPROMETIDOS CON LOS VENEZOLANOS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="max-w-[570px]">
              <h4 className="text-[#003057] font-roboto font-extrabold text-[22px] md:text-[24px] leading-[1.2] uppercase mb-[25px] tracking-tight">
                + DE 50 AÑOS COMPROMETIDOS CON LOS VENEZOLANOS
              </h4>

              <div className="space-y-[20px]">
                <p className="text-[#444444] font-roboto font-normal text-[16px] leading-[1.6]">
                  Somos una empresa venezolana que nació en el año de 1972 gracias al merideño Pedro Israel Zambrano, quien con su ingenio fundó una compañía en la localidad de Caracas encargada de comercializar revestimientos para diferentes infraestructuras, superficies y espacios en exteriores e interiores.
                </p>

                <p className="text-[#444444] font-roboto font-normal text-[16px] leading-[1.6]">
                  Nuestro primer lanzamiento fue una gama de pinturas para paredes lanzada al mercado ese mismo año, tras una producción pequeñas de dos tambores. Desde entonces, hemos ampliado nuestra gama de productos para satisfacer distintas necesidades en cuanto al mantenimiento del hogar y otros espacios.
                </p>

                <p className="text-[#444444] font-roboto font-normal text-[16px] leading-[1.6]">
                  Actualmente contamos con distintas líneas de productos entre las que destacan: Línea de Esmaltes Premium, Línea de Caucho Premium, Línea de Pastas Profesionales, Línea de Fondos, Línea de Demarcación Vial, entre otras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
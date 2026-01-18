import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

/**
 * FooterContact Section
 * Clones the bright yellow pre-footer section containing the Manpica logo,
 * "Since 1972" graphic, and contact details organized in columns.
 */
const FooterContact = () => {
  return (
    <section className="bg-[#FFED00] py-[60px] md:py-[80px] w-full">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
          
          {/* Logo and Since 1972 Graphic */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="relative w-[240px] h-[75px]">
              <Image
                src="https://www.manpica.com/wp-content/uploads/2024/12/Manpica-Logo-Con-RIF.png"
                alt="Manpica Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="relative w-[200px]">
              {/* This mimics the "Cerca de ti desde 1972" graphic seen in screenshots */}
              <div className="flex flex-col">
                <span className="text-[#003057] font-black text-[18px] uppercase leading-none tracking-tight">
                  Cerca de ti
                </span>
                <span className="text-[#003057] font-black text-[28px] uppercase leading-none tracking-tight">
                  Desde
                </span>
                <div className="flex items-center mt-1">
                  <div className="bg-[#003057] text-[#FFED00] font-black text-[42px] px-3 py-1 rounded-sm leading-none flex items-center justify-center">
                    1972
                  </div>
                  <div className="ml-2 flex items-center">
                    <div className="h-[40px] w-[6px] bg-[#003057]"></div>
                    <div className="h-[6px] w-[25px] bg-[#003057]"></div>
                    <div className="h-[12px] w-[18px] bg-[#003057] ml-[-2px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto Column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Phone className="w-10 h-10 text-[#003057] fill-[#003057]" strokeWidth={1} />
            </div>
            <h3 className="text-[#003057] font-black text-[22px] uppercase mb-4 tracking-tight">
              Contacto
            </h3>
            <div className="text-[#003057] font-bold text-[14px] leading-[1.8]">
              <p>0212-4481556 / 0212-4483452</p>
              <p>0212-4483324 / 0424-1208281</p>
            </div>
          </div>

          {/* E-mail Column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Mail className="w-10 h-10 text-[#003057] fill-[#003057]" strokeWidth={1} />
            </div>
            <h3 className="text-[#003057] font-black text-[22px] uppercase mb-4 tracking-tight">
              E-mail
            </h3>
            <div className="text-[#003057] font-bold text-[14px] leading-[1.8]">
              <p>ventas@manpica.com</p>
              <p>atencionalcliente@manpica.com</p>
            </div>
          </div>

          {/* Ubicación Column */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <MapPin className="w-10 h-10 text-[#003057] fill-[#003057]" strokeWidth={1} />
            </div>
            <h3 className="text-[#003057] font-black text-[22px] uppercase mb-4 tracking-tight">
              Ubicación
            </h3>
            <div className="text-[#003057] font-bold text-[14px] leading-[1.6]">
              <p>Av. Intercomunal de Antimano,</p>
              <p>Zona Industrial La Yaguara,</p>
              <p>Calle Nº 2. - Caracas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FooterContact;
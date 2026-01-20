"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Static fallback products just in case API fails or is empty
const staticProducts = [
  {
    id: "static-1",
    name: "Pintura Automotriz",
    category: ["Automotriz"],
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=400&h=400&fit=crop",
    description: "Sistemas bicapa, monocapa y complementos para el repintado profesional.",
    link: null
  },
  {
    id: "static-2",
    name: "Pintura Arquitectónica",
    category: ["Arquitectónica"],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop",
    description: "Pinturas de caucho, acabados satinados y mates para interiores y exteriores.",
    link: null
  },
  {
    id: "static-3",
    name: "Pintura Industrial",
    category: ["Industrial"],
    image: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=400&h=400&fit=crop",
    description: "Recubrimientos epóxicos, de alto tráfico y protección anticorrosiva.",
    link: null
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

interface ProductItem {
  id: string;
  name: string;
  category: string[];
  image: string;
  description: string;
  link: string | null;
  isVideo?: boolean;
  videoUrl?: string;
}

export function ProductsSection() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInstagramProducts() {
      try {
        const res = await fetch('/api/instagram');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const mappedProducts = data.slice(0, 9).map((post: any) => ({
              id: post.id,
              name: post.category && post.category.length > 0 ? post.category[0] : "Producto Destacado", // Use category as title if available
              category: post.category || ["Novedad"],
              image: post.imageUrl,
              description: post.caption ? (post.caption.length > 80 ? post.caption.substring(0, 80) + "..." : post.caption) : "Consulta disponibilidad y precios vía WhatsApp.",
              link: post.postUrl,
              isVideo: post.isVideo,
              videoUrl: post.videoUrl
            }));

            // If we have fewer than 3 instagram posts, verify we fill with static content? 
            // For now let's just use what we get, or fallback completely if empty.
            setProducts(mappedProducts);
          } else {
            // Fallback to purely static if no data
            setProducts(staticProducts.map(p => ({ ...p, link: null })));
          }
        } else {
          setProducts(staticProducts.map(p => ({ ...p, link: null })));
        }
      } catch (error) {
        console.error("Failed to fetch instagram products", error);
        setProducts(staticProducts.map(p => ({ ...p, link: null })));
      } finally {
        setLoading(false);
      }
    }

    fetchInstagramProducts();
  }, []);

  return (
    <section id="productos" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4"
          >
            Nuestros Productos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Últimas Novedades y Stock
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg px-4 sm:px-0"
          >
            Explora nuestro catálogo en tiempo real. Productos, ofertas y trabajos recientes directamente desde nuestro feed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10 sm:mb-12 min-h-[400px]">
          {loading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-xl aspect-[4/5] animate-pulse border border-white/5" />
            ))
          ) : (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border border-white/5 flex flex-col h-full"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.play().catch(() => { });
                  }
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector('video');
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {product.isVideo && product.videoUrl ? (
                    <video
                      src={product.videoUrl}
                      muted
                      loop
                      playsInline
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {product.category.map((cat, i) => (
                      <span key={i} className="inline-block bg-background/80 backdrop-blur-sm text-foreground text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-white/10 shadow-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-medium text-foreground">
                      {product.link ? "Ver en Instagram" : "Disponible en tienda"}
                    </span>
                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                      >
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

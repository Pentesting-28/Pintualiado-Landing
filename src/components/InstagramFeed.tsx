"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, ExternalLink, Heart, MessageCircle, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export function InstagramFeed() {
  const { theme, mounted } = useTheme();
  // Using loose typing for state to match the service response structure without strict imports here
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchPosts() {
      // Fallback posts with categories
      const fallbackPosts = [
        {
          id: 'f1',
          imageUrl: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=400&h=400&fit=crop',
          postUrl: 'https://www.instagram.com/pintualiado/',
          likes: 45,
          comments: 2,
          category: ['Automotriz']
        },
        {
          id: 'f2',
          imageUrl: 'https://images.unsplash.com/photo-1599658880436-161770d99dc0?w=400&h=400&fit=crop',
          postUrl: 'https://www.instagram.com/pintualiado/',
          likes: 32,
          comments: 0,
          category: ['Insumos']
        },
        {
          id: 'f3',
          imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop',
          postUrl: 'https://www.instagram.com/pintualiado/',
          likes: 67,
          comments: 5,
          category: ['Arquitectónica']
        },
        {
          id: 'f4',
          imageUrl: 'https://images.unsplash.com/photo-1502429892517-50798150392f?w=400&h=400&fit=crop',
          postUrl: 'https://www.instagram.com/pintualiado/',
          likes: 51,
          comments: 3,
          category: ['Automotriz', 'Oferta']
        },
      ];

      try {
        const res = await fetch('/api/instagram');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPosts(data);
          } else {
            setPosts(fallbackPosts);
          }
        } else {
          setPosts(fallbackPosts);
        }
      } catch (error) {
        console.error('Failed to load Instagram posts', error);
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
              Nuestra Vitrina Virtual
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Último en @pintualiado
            </h2>
            <p className="text-muted-foreground mt-2">Descubre ofertas recientes, trabajos realizados y nuevos productos.</p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/pintualiado/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors group"
          >
            <Instagram className="w-5 h-5" />
            <span>Ver perfil completo</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            // Loading skeletons
            [1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-muted/20 rounded-xl animate-pulse" />
            ))
          ) : (
            posts.slice(0, 4).map((post, index) => (
              <motion.a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-accent/10 block border border-white/5"
                onMouseEnter={(e) => {
                  if (post.isVideo) {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.play().catch(() => { });
                      setPlayingVideos(prev => new Set(prev).add(post.id));
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  if (post.isVideo) {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                      setPlayingVideos(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(post.id);
                        return newSet;
                      });
                    }
                  }
                }}
              >
                {post.isVideo && post.videoUrl ? (
                  <>
                    <video
                      src={post.videoUrl}
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {!playingVideos.has(post.id) && (
                      <Image
                        src={post.imageUrl}
                        alt="Instagram Post"
                        fill
                        className="object-cover transition-all duration-300 z-10 group-hover:scale-110"
                      />
                    )}
                    {!playingVideos.has(post.id) && (
                      <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full z-20">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    )}
                  </>
                ) : (
                  <Image
                    src={post.imageUrl}
                    alt="Instagram post"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}

                {/* Categories Badge */}
                {post.category && post.category.length > 0 && (
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1 z-30">
                    {post.category.slice(0, 2).map((cat: string, i: number) => (
                      <span key={i} className="bg-accent/90 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white z-20 p-4 text-center">
                  <div className="flex items-center gap-4 mb-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Heart className="w-5 h-5 text-accent fill-accent" />
                      <span className="text-sm">{post.likes || 0}</span>
                    </div>
                    {(post.comments !== undefined) && (
                      <div className="flex items-center gap-1.5 font-bold">
                        <MessageCircle className="w-5 h-5 text-white" />
                        <span className="text-sm">{post.comments || 0}</span>
                      </div>
                    )}
                  </div>
                  {post.caption && (
                    <p className="text-xs text-white/90 line-clamp-3 px-2 font-medium">
                      {post.caption}
                    </p>
                  )}
                </div>
              </motion.a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

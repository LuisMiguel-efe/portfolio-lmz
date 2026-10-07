'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '@/components/particles-background';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section id="hero" className="relative flex h-[78vh] w-full items-center justify-center overflow-hidden text-center pt-6">
      <ParticlesBackground />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.2),_rgba(2,6,23,0.62)_32%,_rgba(2,6,23,0.82)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.54)_58%,rgba(2,6,23,0.72)_100%)]" />
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="-z-30 object-cover brightness-[0.32] contrast-[1.08] saturate-75"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="container z-10 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
          className="text-4xl font-bold tracking-[-0.05em] text-white [text-shadow:0_10px_30px_rgba(0,0,0,0.7)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          LMZ Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', bounce: 0.4 }}
          className="mx-auto mt-6 max-w-[760px] text-base font-light text-slate-100/95 [text-shadow:0_4px_16px_rgba(0,0,0,0.45)] md:text-xl"
        >
          Soluciones Innovadoras de Automatización e IA | Full Stack Development
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', bounce: 0.6 }}
          className="pointer-events-auto mt-8"
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-[0_15px_35px_rgba(109,40,217,0.45)] ring-1 ring-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(109,40,217,0.55)]"
            asChild
          >
            <Link href="#contact">
              Ponte en Contacto <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

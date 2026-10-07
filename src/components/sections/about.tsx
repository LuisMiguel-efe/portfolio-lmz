'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export function AboutSection() {
  const headshot = PlaceHolderImages.find((img) => img.id === 'headshot');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline"
        >
          Sobre Mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
        >
          <Card className="mt-12 overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow border-primary/20">
            <div className="grid md:grid-cols-3 items-center">
              <div className="md:col-span-1 h-full">
                {headshot && (
                  <Image
                    src={headshot.imageUrl}
                    alt={headshot.description}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover min-h-[300px]"
                    data-ai-hint={headshot.imageHint}
                  />
                )}
              </div>
              <div className="md:col-span-2">
                <CardContent className="p-8 md:p-12 space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Desarrollador Full Stack con experiencia demostrada construyendo soluciones web de producción (<span className="font-semibold text-primary">Next.js, React, Supabase</span>) e integrando automatización e Inteligencia Artificial (<span className="font-semibold text-primary">n8n, LLMs, RPA</span>) en procesos administrativos y de negocio reales.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Combino el desarrollo de software con la automatización de procesos para entregar herramientas que reemplazan tareas manuales y aportan valor medible a la operación, logrando eficiencias superiores al 90%.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <span className="font-semibold">Ingeniero en Electrónica y Telecomunicaciones (Universidad del Cauca, 2026)</span>. Cuento con certificaciones de IBM y Google en Python for Data Science & AI y Cybersecurity.
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

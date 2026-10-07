'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    id: 'rpa',
    title: 'Automatización de Procesos (RPA)',
    description: 'Diseño de flujos de trabajo con n8n y Power Automate para eliminar tareas manuales repetitivas y escalar operaciones sin aumentar costos.',
    icon: Workflow,
  },
  {
    id: 'ai',
    title: 'Integración de IA',
    description: 'Implementación de LLMs y Asistentes Virtuales disponibles 24/7 para atención al cliente y triage de datos estructurados y no estructurados.',
    icon: Bot,
  },
  {
    id: 'fullstack',
    title: 'Desarrollo Web Full Stack',
    description: 'Creación de plataformas, dashboards modernos y sistemas de gestión seguros y de alto rendimiento utilizando Next.js, React y Supabase.',
    icon: Code2,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4"
          >
            Soluciones tecnológicas diseñadas para optimizar tus recursos y acelerar tu crecimiento.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-primary/10 bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

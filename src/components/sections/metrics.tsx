'use client';

import { motion } from 'framer-motion';

const metrics = [
  {
    id: 1,
    value: '+90%',
    label: 'Eficiencia en Automatización',
  },
  {
    id: 2,
    value: '900+',
    label: 'Archivos Procesados por IA',
  },
  {
    id: 3,
    value: '-45%',
    label: 'Tiempo en Validación',
  },
];

export function MetricsSection() {
  return (
    <section className="w-full bg-primary/5 py-12 border-y border-primary/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-4"
            >
              <h3 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-2">
                {metric.value}
              </h3>
              <p className="text-muted-foreground font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

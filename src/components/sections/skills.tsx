'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';

const chartConfig = {
  proficiency: {
    label: 'Dominio',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center font-headline"
        >
          Habilidades Técnicas
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4 text-center"
        >
          Una visión general de mis principales habilidades y su nivel de dominio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mt-12 shadow-lg border-primary/10 hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle>Nivel de Dominio</CardTitle>
              <CardDescription>Medido en una escala del 0 al 100</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skills} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.5} />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 500 }}
                      width={180}
                    />
                    <ChartTooltip
                      cursor={{ fill: 'hsl(var(--accent))', opacity: 0.1 }}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Bar dataKey="proficiency" fill="var(--color-proficiency)" radius={5} animationDuration={1500} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

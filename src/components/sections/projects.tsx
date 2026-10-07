'use client';

import { useState, useMemo } from 'react';
import { projects as allProjects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    if (!searchQuery) {
      return allProjects;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return allProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowercasedQuery) ||
        project.description.toLowerCase().includes(lowercasedQuery) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery]);

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline"
            >
            Mis Proyectos
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4"
            >
            Una selección de mis proyectos. Usa la búsqueda para filtrar por tecnología o palabra clave.
            </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-lg mx-auto mt-8 mb-12"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Ej. 'Next.js' o 'automatización'..."
            className="w-full pl-10 border-primary/20 focus-visible:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Buscar proyectos"
          />
        </motion.div>

        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-16 text-muted-foreground"
          >
            <p className="text-lg">No se encontraron proyectos para "{searchQuery}".</p>
            <p>Intenta con otra palabra clave.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

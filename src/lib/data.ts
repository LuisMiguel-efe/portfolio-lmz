import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export const navLinks = [
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Servicios', href: '#services' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/LuisMiguel-efe', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/luismigueldev', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/luismigueldev', icon: Instagram },
];

const getPlaceholderImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id);
}

export const projects = [
  {
    id: '1',
    title: 'Automatización y Desarrollo Full Stack',
    description: 'Desarrollo de múltiples aplicaciones web internas para digitalizar procesos manuales: gestión de proveedores con autenticación y RLS, control de inventario y auditoría con escaneo QR. Implementación de flujos con n8n y Power Automate para leer facturas y reportes, apoyados en IA. Creación de dashboard en Power BI para análisis de más de 900 archivos.',
    techStack: ['Next.js', 'React', 'Supabase', 'n8n', 'Power Automate', 'LLMs', 'Power BI'],
    link: '#',
    image: getPlaceholderImage('project1'),
  },
  {
    id: '2',
    title: 'Proyecto Unikey - Control de Acceso Biométrico',
    description: 'Diseño e implementación de un sistema de control de acceso biométrico con huella digital y plataforma de gestión web. Comunicación cifrada entre dispositivos embebidos y servidores centrales. Reducción del 45% en los tiempos de validación y gestión segura de registros para más de 100 usuarios.',
    techStack: ['React', 'Node.js', 'FastAPI', 'Python', 'IoT', 'Full Stack'],
    link: 'https://github.com/LuisMiguel-efe/unikey',
    image: getPlaceholderImage('project2'),
  },
  {
    id: '3',
    title: 'Bot AI - Asistente Virtual 24/7',
    description: 'Creación de un asistente virtual resiliente con alta eficiencia operativa. Despliegue de microservicios con Docker en la nube bajo un flujo CI/CD. Desarrollo de Web Scraping seguro con BeautifulSoup y procesamiento de lenguaje natural en arquitectura Python.',
    techStack: ['Python', 'Docker', 'CI/CD', 'Web Scraping', 'NLP', 'Microservices'],
    link: '#',
    image: getPlaceholderImage('project3'),
  },
  {
    id: '4',
    title: 'SDN Web Application',
    description: 'Desarrollo de aplicación web para visualización de red y configuración en tiempo real de reglas OpenFlow, reduciendo tiempos de configuración SDN en un 40%.',
    techStack: ['HTML5/CSS3', 'Python', 'OpenFlow', 'SDN'],
    link: 'https://github.com/LuisMiguel-efe/sdn_app_web',
    image: getPlaceholderImage('project4'),
  },
];

export const skills = [
  { name: 'Next.js & React', proficiency: 90 },
  { name: 'Node.js & JS', proficiency: 85 },
  { name: 'Python/FastAPI', proficiency: 90 },
  { name: 'Automatización (n8n/RPA)', proficiency: 95 },
  { name: 'Integración IA & LLMs', proficiency: 90 },
  { name: 'Cloud, Docker & CI/CD', proficiency: 85 },
];

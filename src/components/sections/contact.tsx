'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  
  const { formState } = form;

  function onSubmit(data: ContactFormValues) {
    const phoneNumber = '573142288528';
    const prefilledMessage = `¡Hola, equipo de LMZ Solutions!

Mi nombre es ${data.name}.

${data.message}

(Mi correo de contacto es: ${data.email})
`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    window.open(whatsappUrl, '_blank');
    form.reset();
  }


  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Contáctame</CardTitle>
              <CardDescription className="md:text-xl mt-2">
                ¿Tienes un proyecto en mente o necesitas automatizar procesos? Envíame un mensaje.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu Nombre" className="focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu.correo@ejemplo.com" className="focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Cuéntame sobre tu proyecto..." className="min-h-[150px] focus-visible:ring-primary" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full rounded-full transition-all bg-primary hover:bg-primary/90 text-primary-foreground shadow hover:shadow-md" disabled={formState.isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    {formState.isSubmitting ? 'Redirigiendo...' : 'Enviar Mensaje por WhatsApp'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LMZ Solutions. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}

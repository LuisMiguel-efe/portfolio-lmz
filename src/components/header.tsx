'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold font-headline inline-block">LMZ Solutions</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                     <Image src="/logo-dark.png" alt="Logo" width={32} height={32} className="dark:hidden" />
                     <Image src="/logo.png" alt="Logo" width={32} height={32} className="hidden dark:block" />
                    <span className="font-bold font-headline inline-block">LMZ Solutions</span>
                  </Link>
                  <div className="flex flex-col space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="transition-colors hover:text-primary text-lg"
                    >
                      {link.name}
                    </Link>
                  ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

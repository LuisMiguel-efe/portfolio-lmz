'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-12% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-3">
      <div className="mx-auto max-w-screen-2xl rounded-full border border-border/60 bg-background/80 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 max-w-screen-2xl items-center gap-4 px-3 sm:px-6">
          <Link href="/" className="mr-2 flex items-center space-x-2 shrink-0">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-bold font-headline inline-block text-sm sm:text-base">LMZ Solutions</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 p-1 shadow-inner shadow-black/5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={[
                      'rounded-full px-3 py-2 text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border/80'
                        : 'text-muted-foreground hover:bg-background/70 hover:text-foreground',
                    ].join(' ')}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="ml-auto flex items-center justify-end gap-2 sm:gap-3">
            <ThemeToggle />
            <Button asChild className="hidden sm:inline-flex rounded-full">
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </Button>
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
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
                    <div className="flex flex-col space-y-2">
                      {navLinks.map((link) => {
                        const sectionId = link.href.replace('#', '');
                        const isActive = activeSection === sectionId;

                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={[
                              'rounded-xl px-3 py-2 text-lg transition-colors',
                              isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-primary',
                            ].join(' ')}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

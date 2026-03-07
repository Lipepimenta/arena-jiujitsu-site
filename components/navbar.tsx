'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'História', href: '/#historia' },
    { name: 'Programas', href: '/#programas' },
    { name: 'Professores', href: '/professores' },
    { name: 'Horários', href: '/horarios' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled 
          ? 'border-slate-800 bg-[#101122]/80 backdrop-blur-md py-2' 
          : 'border-transparent bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image 
                src="/images/logoarena.jpg" 
                alt="Arena JJ Logo" 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold tracking-tight uppercase leading-none">Arena JJ</h2>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">São Gabriel</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-[#0d20f2] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="https://wa.me/554199503920?text=Olá!%20👋%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20academia.%0APoderiam%20me%20informar%20os%20horários%20disponíveis%20e%20como%20funciona%20a%20primeira%20aula?"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-[#0d20f2] hover:bg-[#0d20f2]/90 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#0d20f2]/20"
            >
              Matricule-se
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? 'auto' : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-[#101122] border-b border-slate-800"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              href="https://wa.me/554199503920?text=Olá!%20👋%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20academia.%0APoderiam%20me%20informar%20os%20horários%20disponíveis%20e%20como%20funciona%20a%20primeira%20aula?"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#0d20f2] text-white px-6 py-4 rounded-lg text-base font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Matricule-se Agora
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

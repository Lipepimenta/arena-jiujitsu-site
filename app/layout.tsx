import type {Metadata} from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Academia BJJ | Domine a Arte Suave',
  description: 'Transforme sua vida através do Jiu-Jitsu Brasileiro. Oferecemos um ambiente seguro e profissional para todas as idades e níveis de habilidade.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} dark`}>
      <body suppressHydrationWarning className="bg-[#101122] font-display text-slate-100 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

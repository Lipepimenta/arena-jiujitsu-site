import { 
  VerifiedIcon, 
  GroupsIcon, 
  StarIcon, 
  LocationIcon, 
  ScheduleIcon, 
  CallIcon, 
  DirectionsIcon,
  EmailIcon,
  CameraIcon,
  PlayIcon
} from './icons';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#101122] border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/logoarena.jpg" 
                  alt="Arena JJ Logo" 
                  fill 
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold tracking-tight uppercase leading-none">Arena JJ</h2>
                <span className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">São Gabriel</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm">
              Dedicados à preservação e ensino da arte suave com excelência, ética e respeito mútuo. Junte-se à nossa família hoje mesmo.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link className="hover:text-[#0d20f2] transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-[#0d20f2] transition-colors" href="/#programas">Programas</Link></li>
              <li><Link className="hover:text-[#0d20f2] transition-colors" href="/professores">Professores</Link></li>
              <li><Link className="hover:text-[#0d20f2] transition-colors" href="/horarios">Preços</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#0d20f2] transition-all" href="mailto:arenajjsaogabriel@gmail.com">
                <EmailIcon className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#0d20f2] transition-all" href="#">
                <CameraIcon className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-[#0d20f2] transition-all" href="#">
                <PlayIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Arena JJ São Gabriel. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link className="hover:text-slate-300" href="#">Privacidade</Link>
            <Link className="hover:text-slate-300" href="#">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { VerifiedIcon, GroupsIcon, StarIcon, LocationIcon, ScheduleIcon, CallIcon, DirectionsIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" id="home">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#101122] via-[#101122]/60 to-transparent z-10"></div>
            <Image 
              src="/images/hero-arena-jj.jpg"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center md:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[#0d20f2]/20 text-[#0d20f2] text-xs font-bold tracking-widest uppercase mb-4">
                Respeito & Disciplina
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
                Domine a Arte Suave.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                A Arena JJ São Gabriel é mais que uma academia; é um centro de excelência dedicado ao desenvolvimento físico, mental e técnico através do Jiu-Jitsu Brasileiro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://wa.me/554199503920?text=Olá!%20👋%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20academia.%0APoderiam%20me%20informar%20os%20horários%20disponíveis%20e%20como%20funciona%20a%20primeira%20aula?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0d20f2] hover:bg-[#0d20f2]/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-[#0d20f2]/20 text-center"
                >
                  Agende sua Aula Experimental
                </a>
                <Link 
                  href="/horarios"
                  className="bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl text-lg font-bold backdrop-blur-sm transition-all text-center"
                >
                  Ver Horários
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features/History Section */}
        <section className="py-24 bg-[#101122]" id="historia">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold tracking-tight">Nossa História</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Há mais de uma década, nossa missão tem sido formar não apenas campeões no tatame, mas cidadãos exemplares através dos valores fundamentais do Jiu-Jitsu Brasileiro.
                </p>
                <div className="grid gap-6">
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40">
                    <VerifiedIcon className="text-[#0d20f2] w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Tradição</h3>
                      <p className="text-slate-400 text-sm">Seguindo os ensinamentos originais da linhagem Gracie com rigor e técnica.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40">
                    <GroupsIcon className="text-[#0d20f2] w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg">Comunidade</h3>
                      <p className="text-slate-400 text-sm">Um ambiente familiar e acolhedor onde todos se ajudam a evoluir diariamente.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-[#0d20f2]/20 rounded-2xl blur-2xl group-hover:bg-[#0d20f2]/30 transition duration-1000"></div>
                <div className="relative rounded-2xl shadow-2xl border border-slate-800 overflow-hidden aspect-[4/3]">
                  <Image 
                    src="/images/historia-equipe.png"
                    alt="Equipe"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-24 bg-slate-900/20" id="programas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nossos Programas</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Temos a metodologia perfeita para cada estágio da sua jornada, desde os primeiros passos até a alta performance.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Kids', img: '/images/programa-kids.jpg', desc: 'Desenvolvemos disciplina, respeito e coordenação motora em um ambiente lúdico e seguro para os pequenos guerreiros.' },
                { title: 'Fundamentos', img: '/images/programa-fundamentos.jpg', desc: 'A porta de entrada para o Jiu-Jitsu, focada no aprendizado das técnicas básicas e na construção de uma base sólida.' },
                { title: 'Avançado', img: '/images/programa-avancado.jpg', desc: 'Para graduados que buscam o refinamento técnico, estratégias de luta e preparação para competições de alto nível.' },
                { title: 'No-Gi', img: '/images/programa-nogi.jpg', desc: 'Treinamento sem quimono focado em agilidade, controle e finalizações dinâmicas, ideal para MMA e grappling.' }
              ].map((program, idx) => (
                <motion.div 
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
                >
                  <Image 
                    src={program.img}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101122] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {program.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Master Section */}
        <section className="py-24" id="mestre">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-slate-900/40 rounded-[2rem] p-6 md:p-16 border border-slate-800">
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[#0d20f2]/30 relative">
                <Image 
                  src="/images/mestre-silmar-silva.jpg"
                  alt="Silmar Silva"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[#0d20f2] font-bold tracking-widest text-sm uppercase">Nosso Líder</span>
                <h2 className="text-4xl font-bold mt-2 mb-4">Silmar Silva</h2>
                <h3 className="text-xl text-slate-400 mb-6 italic">Faixa Preta | 15+ anos de experiência</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  Faixa-preta com ampla experiência no ensino do Jiu-Jitsu, reconhecido pela didática clara e pela formação de alunos técnicos e disciplinados. Especialista no desenvolvimento de fundamentos sólidos, estratégia e evolução constante dentro e fora do tatame.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="text-center px-4 py-2 bg-slate-800 rounded-lg min-w-[140px]">
                    <p className="text-[#0d20f2] font-bold text-2xl">10.000+</p>
                    <p className="text-xs text-slate-400">Horas de Aula</p>
                  </div>
                  <div className="text-center px-4 py-2 bg-slate-800 rounded-lg min-w-[140px]">
                    <p className="text-[#0d20f2] font-bold text-2xl">Centenas</p>
                    <p className="text-xs text-slate-400">Alunos Formados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#101122] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold mb-16">O que nossos alunos dizem</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'André Luiz', rank: 'Faixa Azul', text: 'Melhor decisão que tomei. A atmosfera é incrível e os professores são extremamente técnicos e pacientes.', initials: 'AL' },
                { name: 'Mariana Santos', rank: 'Mãe de Aluno', text: 'Levei meu filho para a aula kids e hoje toda a família treina. O respeito e a disciplina mudaram nossa rotina.', initials: 'MS' },
                { name: 'Ricardo Costa', rank: 'Competidor', text: 'A técnica ensinada aqui é de outro nível. Perfeito para quem quer competir ou apenas aprender defesa pessoal.', initials: 'RC' }
              ].map((testimonial) => (
                <div key={testimonial.name} className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-300 italic mb-6">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0d20f2]/20 flex items-center justify-center text-[#0d20f2] font-bold">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.rank}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-24 bg-slate-900/20" id="localizacao">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-6">Onde Estamos</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <LocationIcon className="text-[#0d20f2] w-6 h-6 mt-1" />
                    <div>
                      <p className="font-bold text-lg">Endereço</p>
                      <p className="text-slate-400">Av. São Gabriel, 1995 - São Gabriel<br/>Colombo - PR, 83404-642</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <ScheduleIcon className="text-[#0d20f2] w-6 h-6 mt-1" />
                    <div>
                      <p className="font-bold text-lg">Horários</p>
                      <p className="text-slate-400">Segunda à Sexta: 06:00 - 22:00</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CallIcon className="text-[#0d20f2] w-6 h-6 mt-1" />
                    <div>
                      <p className="font-bold text-lg">Contato</p>
                      <p className="text-slate-400">(41) 99503-920<br/>arenajjsaogabriel@gmail.com</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Av.+São+Gabriel,+1995+-+São+Gabriel,+Colombo+-+PR,+83404-642" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-10 bg-[#0d20f2] hover:bg-[#0d20f2]/90 text-white px-8 py-3 rounded-xl font-bold transition-all inline-flex items-center gap-2 w-fit"
                >
                  <DirectionsIcon className="w-5 h-5" />
                  Como Chegar
                </a>
              </div>
              <div className="min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.5497429551756!2d-49.20295082495096!3d-25.352885729844317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce9dd986aa84d%3A0x3392f4951434aa86!2sArena%20Jiu-Jitsu%20S%C3%A3o%20Gabriel!5e0!3m2!1spt-BR!2sbr!4v1772886572727!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-90"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

'use client';

import * as React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';

const instructors = [
  {
    name: "André Ferreira",
    role: "Treinador de Fundamentos",
    rank: "FAIXA PRETA",
    desc: "Especialista em passagens de pressão e estratégias de guarda defensiva. Focado na base sólida para iniciantes.",
    img: "/images/advanced.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Diretora Feminina & Kids",
    rank: "FAIXA MARROM",
    desc: "Especializada em desenvolvimento juvenil e defesa pessoal feminina. Foco em disciplina e autoconfiança.",
    img: "/images/kids.jpg"
  },
  {
    name: "Chris Thompson",
    role: "Especialista em No-Gi & Luta Livre",
    rank: "FAIXA PRETA",
    desc: "Especialista em grappling e finalizações dinâmicas. Veterano de competições de alto nível.",
    img: "/images/nogi.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#101122] via-[#101122]/60 to-transparent z-10"></div>
          <Image 
            src="/images/hero.jpg"
            alt="Arena Jiu-Jitsu - Tatame"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <span className="inline-block px-3 py-1 rounded bg-[#0d20f2] text-xs font-bold uppercase tracking-widest text-white mb-4">Nosso Legado</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-2xl leading-tight">Domínio Através da Disciplina & Tradição.</h1>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#0d20f2]"></span>
                Nossa Filosofia
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Na Arena JJ São Gabriel, vemos a &quot;Arte Suave&quot; como mais do que apenas um esporte de combate. É um veículo para transformação pessoal. Cultivamos um ambiente onde o ego é deixado na porta, e a busca pela excelência técnica se torna uma jornada compartilhada.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-[#0d20f2]/5 border border-[#0d20f2]/10">
                  <h3 className="font-bold mb-2">Poder Físico</h3>
                  <p className="text-sm text-slate-500">Força funcional, flexibilidade e saúde cardiovascular adaptadas para a longevidade.</p>
                </div>
                <div className="p-6 rounded-xl bg-[#0d20f2]/5 border border-[#0d20f2]/10">
                  <h3 className="font-bold mb-2">Clareza Mental</h3>
                  <p className="text-sm text-slate-500">Resolução de problemas sob pressão e desenvolvimento de uma mentalidade resiliente e focada.</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-[#0d20f2]/20 relative">
                <Image 
                  src="/images/history.jpg"
                  alt="Black Belt"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0d20f2] p-8 rounded-xl hidden md:block">
                <p className="text-white text-3xl font-bold italic">&quot;Eficiência & Paciência.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Conheça os Professores</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Guiados por educadores dedicados com décadas de experiência combinada nos tatames.</p>
            </div>

            {/* Head Professor */}
            <div className="mb-20">
              <div className="bg-[#101122] rounded-2xl overflow-hidden border border-[#0d20f2]/20 flex flex-col md:flex-row">
                <div className="md:w-1/3 aspect-[4/5] md:aspect-auto relative">
                  <Image 
                    src="/images/leader.jpg"
                    alt="Mestre Silmar Silva"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#0d20f2]/10 text-[#0d20f2] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-[#0d20f2]/20">Mestre Principal</span>
                    <span className="text-slate-500 text-sm">Faixa Preta 1º Grau</span>
                  </div>
                  <h3 className="text-4xl font-bold mb-2">Mestre Silmar Silva</h3>
                  <p className="text-[#0d20f2] font-medium mb-6">Linhagem: Tradição e Excelência Técnica</p>
                  <p className="text-slate-400 mb-8 text-lg">
                    Com mais de 15 anos de experiência, o Mestre Silmar Silva dedica sua vida ao ensino do Jiu-Jitsu. Ele fundou a Arena JJ São Gabriel para criar um ambiente onde a técnica e o caráter caminham juntos, formando não apenas lutadores, mas cidadãos resilientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Assistant Instructors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructors.map((inst) => (
                <motion.div 
                  key={inst.name}
                  whileHover={{ y: -5 }}
                  className="group bg-[#101122] rounded-xl border border-slate-800 overflow-hidden hover:border-[#0d20f2] transition-all"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image 
                      src={inst.img}
                      alt={inst.name}
                      fill
                      className="object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold">{inst.rank}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-1">{inst.name}</h4>
                    <p className="text-[#0d20f2] text-sm mb-4">{inst.role}</p>
                    <p className="text-sm text-slate-500 mb-6">{inst.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-slate-500">Tudo o que você precisa saber antes de pisar no tatame.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Preciso estar em forma para começar?', a: 'Absolutamente não. Você não entra em forma para fazer Jiu-Jitsu; você faz Jiu-Jitsu para entrar em forma. Nossas aulas para iniciantes são projetadas para construir seu cardio e força progressivamente no seu próprio ritmo.' },
              { q: 'O que devo vestir na minha primeira aula?', a: 'Para sua primeira aula experimental, roupas esportivas confortáveis como camiseta e bermuda (sem zíperes) são perfeitas. Se decidir entrar, ajudaremos você a escolher o tamanho do seu Kimono tradicional ou nosso uniforme No-Gi.' },
              { q: 'Com que frequência devo treinar como iniciante?', a: 'Recomendamos começar com 2 a 3 vezes por semana. Isso permite que seu corpo se recupere enquanto mantém as técnicas frescas na sua mente. A consistência é o fator mais importante na sua progressão.' },
              { q: 'O Jiu-Jitsu é perigoso?', a: 'A segurança é nossa prioridade número 1. Nossos instrutores supervisionam todas as sessões de sparring e ensinamos os alunos a "bater" cedo para evitar lesões. Nossa cultura é construída sobre o respeito mútuo e cuidado com os parceiros de treino.' }
            ].map((item, idx) => (
              <details key={idx} className="group bg-[#0d20f2]/5 rounded-xl border border-slate-800" open={idx === 0}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold">{item.q}</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-6 pb-6 text-slate-400">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


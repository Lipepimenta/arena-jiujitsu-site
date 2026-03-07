'use client';

import * as React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { motion } from 'motion/react';
import { VerifiedIcon } from '@/components/icons';

const schedule = [
  { time: '06:00 - 07:00', mon: 'Muay Thai', tue: '', wed: 'Muay Thai', thu: '', fri: 'Muay Thai' },
  { time: '06:30 - 07:30', mon: '', tue: 'Jiu Jitsu', wed: '', thu: 'Jiu Jitsu', fri: '' },
  { time: '08:00 - 09:00', mon: 'Jiu Jitsu', tue: '', wed: 'Jiu Jitsu', thu: '', fri: 'Jiu Jitsu' },
  { time: '15:30 - 16:30', mon: 'Jiu Jitsu', tue: '', wed: 'Jiu Jitsu', thu: '', fri: 'Jiu Jitsu' },
  { time: '17:45 - 18:45', mon: '', tue: 'Jiu Jitsu Kids', wed: '', thu: 'Jiu Jitsu Kids', fri: '' },
  { time: '19:00 - 20:00', mon: '', tue: 'Luta Livre', wed: '', thu: 'Luta Livre', fri: '' },
  { time: '20:30 - 22:00', mon: 'Jiu Jitsu', tue: '', wed: 'Jiu Jitsu', thu: '', fri: 'Jiu Jitsu' },
  { time: '21:00 - 22:00', mon: '', tue: 'Muay Thai', wed: '', thu: 'Muay Thai', fri: '' },
];

const modalities = [
  {
    id: 'jiu-jitsu',
    name: 'Jiu-Jitsu',
    description: 'A arte suave para todos os níveis.',
    icon: '🥋',
    plans: [
      { type: '2x por Semana', monthly: '120', semestral: '108', annual: '96' },
      { type: '3x por Semana', monthly: '140', semestral: '126', annual: '112' },
      { type: 'Full (5x por Semana)', monthly: '180', semestral: '162', annual: '144', featured: true },
    ]
  },
  {
    id: 'muay-thai',
    name: 'Muay Thai',
    description: 'A arte das oito armas para condicionamento e defesa.',
    icon: '🥊',
    plans: [
      { type: '2x por Semana', monthly: '120', semestral: '108', annual: '96' },
      { type: 'Full (Seg a Sex)', monthly: '160', semestral: '144', annual: '128' },
    ]
  },
  {
    id: 'luta-livre',
    name: 'Luta Livre',
    description: 'Grappling focado em finalizações sem quimono.',
    icon: '🤼',
    plans: [
      { type: '2x por Semana', monthly: '120', semestral: '108', annual: '96' },
      { type: 'Full (Seg a Sex)', monthly: '160', semestral: '144', annual: '128' },
    ]
  },
  {
    id: 'completo',
    name: 'Plano Completo',
    description: 'Acesso total a todas as modalidades da academia.',
    icon: '🏆',
    plans: [
      { type: 'Black Belt (Todas Modalidades)', monthly: '240', semestral: '216', annual: '192', featured: true },
    ]
  }
];

const days = [
  { key: 'mon' as const, label: 'Segunda' },
  { key: 'tue' as const, label: 'Terça' },
  { key: 'wed' as const, label: 'Quarta' },
  { key: 'thu' as const, label: 'Quinta' },
  { key: 'fri' as const, label: 'Sexta' },
];

export default function HorariosPage() {
  const [expandedId, setExpandedId] = React.useState<string | null>('jiu-jitsu');
  const [activeDay, setActiveDay] = React.useState<typeof days[number]['key']>('mon');

  const whatsappLink = "https://wa.me/554199503920?text=Olá!%20👋%0AVim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20aula%20experimental%20gratuita%20na%20academia.%0APoderiam%20me%20informar%20os%20horários%20disponíveis%20e%20como%20funciona%20a%20primeira%20aula?";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Grade de Aulas & Planos</h2>
          <p className="text-slate-400 text-lg max-w-2xl">Encontre a aula e o plano perfeitos para sua jornada. De iniciantes a competidores avançados, temos um lugar para você.</p>
        </motion.div>

        {/* Schedule Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Grade de Horários</h2>
            
            {/* Day Selector (Mobile) */}
            <div className="flex md:hidden bg-slate-900 p-1 rounded-xl border border-slate-800 overflow-x-auto no-scrollbar">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setActiveDay(day.key)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    activeDay === day.key 
                      ? 'bg-[#0d20f2] text-white shadow-lg shadow-[#0d20f2]/20' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden shadow-xl shadow-[#0d20f2]/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800/50">
                    <th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800 w-32">Horário</th>
                    {days.map(day => (
                      <th key={day.key} className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">{day.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {schedule.map((row) => (
                    <tr key={row.time} className="hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 text-sm font-medium text-slate-400">{row.time}</td>
                      {days.map((day) => (
                        <td key={day.key} className="p-2">
                          {row[day.key] ? (
                            <div className={`p-2 rounded-lg text-xs font-bold text-center ${
                              row[day.key].includes('Avançado') || row[day.key].includes('Competição') || row[day.key] === 'Todos os Níveis Gi'
                                ? 'bg-[#0d20f2] text-white shadow-lg shadow-[#0d20f2]/20'
                                : row[day.key] === 'Open Mat'
                                ? 'bg-slate-800 border border-slate-700 text-white uppercase tracking-tighter'
                                : 'bg-[#0d20f2]/10 border border-[#0d20f2]/20 text-[#0d20f2]'
                            }`}>
                              {row[day.key]}
                            </div>
                          ) : (
                            <div className="bg-slate-800/30 p-2 rounded-lg text-xs font-medium text-center text-slate-600">—</div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile List View */}
          <div className="md:hidden space-y-3">
            {schedule.filter(row => row[activeDay]).map((row) => (
              <div key={row.time} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="text-sm font-bold text-slate-400 whitespace-nowrap">{row.time}</div>
                <div className={`flex-grow p-3 rounded-lg text-sm font-bold text-center ${
                  row[activeDay].includes('Avançado') || row[activeDay].includes('Competição') || row[activeDay] === 'Todos os Níveis Gi'
                    ? 'bg-[#0d20f2] text-white'
                    : row[activeDay] === 'Open Mat'
                    ? 'bg-slate-800 border border-slate-700 text-white'
                    : 'bg-[#0d20f2]/10 border border-[#0d20f2]/20 text-[#0d20f2]'
                }`}>
                  {row[activeDay]}
                </div>
              </div>
            ))}
            {schedule.filter(row => row[activeDay]).length === 0 && (
              <div className="text-center py-12 bg-slate-900/30 rounded-xl border border-dashed border-slate-800 text-slate-500">
                Nenhuma aula programada para este dia.
              </div>
            )}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Nossos Planos</h2>
          <p className="text-slate-400 text-lg">Selecione uma modalidade para ver os detalhes dos planos.</p>
        </div>

        <div className="space-y-4 mb-20">
          {modalities.map((modality) => (
            <div 
              key={modality.id}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                expandedId === modality.id 
                  ? 'border-[#0d20f2] bg-slate-900/80 shadow-2xl shadow-[#0d20f2]/10' 
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              <button 
                onClick={() => setExpandedId(expandedId === modality.id ? null : modality.id)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{modality.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{modality.name}</h3>
                    <p className="text-slate-400 text-sm">{modality.description}</p>
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center transition-transform duration-300 ${expandedId === modality.id ? 'rotate-180 bg-[#0d20f2] border-[#0d20f2]' : ''}`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: expandedId === modality.id ? 'auto' : 0, opacity: expandedId === modality.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-slate-800/50">
                  {/* Desktop Pricing Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-xs font-bold uppercase tracking-widest text-slate-500">
                          <th className="py-4 px-2">Tipo de Plano</th>
                          <th className="py-4 px-2">Mensal</th>
                          <th className="py-4 px-2">Semestral (mês)</th>
                          <th className="py-4 px-2">Anual (mês)</th>
                          <th className="py-4 px-2 text-right">Ação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/50">
                        {modality.plans.map((plan, idx) => (
                          <tr key={idx} className={`group ${plan.featured ? 'bg-[#0d20f2]/5' : ''}`}>
                            <td className="py-4 px-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{plan.type}</span>
                                {plan.featured && (
                                  <span className="text-[10px] bg-[#0d20f2] text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Popular</span>
                                )}
                              </div>
                            </td>
                            <td className="py-4 px-2">
                              <span className="text-lg font-bold">R$ {plan.monthly}</span>
                            </td>
                            <td className="py-4 px-2">
                              <span className="text-slate-400">R$ {plan.semestral}</span>
                            </td>
                            <td className="py-4 px-2">
                              <span className="text-slate-400">R$ {plan.annual}</span>
                            </td>
                            <td className="py-4 px-2 text-right">
                              <a 
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                                  plan.featured 
                                    ? 'bg-[#0d20f2] text-white hover:scale-105' 
                                    : 'border border-[#0d20f2] text-[#0d20f2] hover:bg-[#0d20f2] hover:text-white'
                                }`}
                              >
                                Matricule-se Agora
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Pricing Cards */}
                  <div className="md:hidden space-y-4 pt-6">
                    {modality.plans.map((plan, idx) => (
                      <div key={idx} className={`p-4 rounded-xl border ${plan.featured ? 'border-[#0d20f2] bg-[#0d20f2]/5' : 'border-slate-800 bg-slate-800/30'}`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold">{plan.type}</h4>
                              {plan.featured && (
                                <span className="text-[8px] bg-[#0d20f2] text-white px-1.5 py-0.5 rounded-full uppercase">Popular</span>
                              )}
                            </div>
                            <p className="text-2xl font-black text-white">R$ {plan.monthly}<span className="text-xs font-normal text-slate-400">/mês</span></p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="bg-slate-900/50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-500 uppercase font-bold">Semestral</p>
                            <p className="text-sm font-bold text-slate-300">R$ {plan.semestral}<span className="text-[10px] font-normal">/mês</span></p>
                          </div>
                          <div className="bg-slate-900/50 p-2 rounded-lg">
                            <p className="text-[10px] text-slate-500 uppercase font-bold">Anual</p>
                            <p className="text-sm font-bold text-slate-300">R$ {plan.annual}<span className="text-[10px] font-normal">/mês</span></p>
                          </div>
                        </div>

                        <a 
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3 rounded-lg text-center text-sm font-bold block transition-all ${
                            plan.featured 
                              ? 'bg-[#0d20f2] text-white' 
                              : 'border border-[#0d20f2] text-[#0d20f2]'
                          }`}
                        >
                          Matricule-se Agora
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 p-12 rounded-3xl bg-[#0d20f2]/10 border border-[#0d20f2]/20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Ainda tem dúvidas?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Agende uma aula experimental gratuita hoje mesmo e conheça nosso ambiente de treino. Nossos professores estão prontos para recebê-lo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#0d20f2] text-white font-bold rounded-lg hover:scale-105 transition-transform"
              >
                Agendar Aula Grátis
              </a>
              <a 
                href="mailto:arenajjsaogabriel@gmail.com"
                className="px-8 py-3 bg-slate-900 border border-slate-800 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Falar com Suporte
              </a>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#0d20f2]/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#0d20f2]/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

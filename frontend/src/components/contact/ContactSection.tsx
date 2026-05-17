import { useState } from 'react';
import { Send, User, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-24 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight">Fale com Nossos Especialistas</h2>
              <p className="mt-4 text-slate-400 text-lg">Seja para um orçamento, dúvida técnica ou parceria comercial, nossa equipe está pronta para lhe atender com agilidade.</p>
            </div>
            
            <div className="space-y-8">
              <InfoRow icon={Phone} label="Telefone / WhatsApp" value="(11) 99999-9999" />
              <InfoRow icon={Mail} label="E-mail Direto" value="contato@sp3auto.com" />
              <InfoRow icon={MapPin} label="Endereço Sede" value="Avenida Exemplo, 1234 — São Paulo/SP" />
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-blue-400" size={24} />
                <h3 className="text-lg font-bold font-heading">Horário de Atendimento</h3>
              </div>
              <div className="space-y-4 text-slate-300 text-sm">
                <div className="flex justify-between items-center pb-4 border-b border-white/5"><span className="font-medium">Segunda a Sexta</span> <span>08:00 às 18:00</span></div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5"><span className="font-medium">Sábado</span> <span>08:00 às 12:00</span></div>
                <div className="flex justify-between items-center text-slate-500 font-medium"><span>Domingos e Feriados</span> <span>Fechado</span></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-white shadow-2xl space-y-6">
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">Envie uma Mensagem</h3>
            
            <InputField icon={User} placeholder="Nome completo" value={form.nome} onChange={(v) => setForm({...form, nome: v})} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField icon={Mail} type="email" placeholder="E-mail" value={form.email} onChange={(v) => setForm({...form, email: v})} required />
              <InputField icon={Phone} type="tel" placeholder="Telefone" value={form.telefone} onChange={(v) => setForm({...form, telefone: v})} />
            </div>
            
            <div className="relative">
              <textarea
                placeholder="Como podemos ajudar?"
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm({...form, mensagem: e.target.value})}
                required
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
              />
            </div>
            <button type="submit"
              className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all cursor-pointer ${sent ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30'}`}>
              {sent ? '✓ Mensagem Enviada com Sucesso!' : <><Send size={20} /> Enviar Mensagem</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex items-start gap-5">
      <div className="p-3 rounded-xl bg-white/10 text-white">
         <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-slate-400 font-medium mb-1">{label}</p>
        <p className="text-lg font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}

function InputField({ icon: Icon, placeholder, value, onChange, type = 'text', required = false }: {
  icon: typeof User; placeholder: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div className="relative">
      <Icon size={20} className="absolute left-4 top-4 text-slate-400" />
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} required={required}
        className="w-full pl-12 pr-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all" />
    </div>
  );
}

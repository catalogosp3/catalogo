import Logo from '../ui/Logo';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Marca */}
          <div className="md:col-span-1 space-y-6">
            <Logo variant="light" size="sm" />
            <p className="text-sm text-slate-400 leading-relaxed">
              Especialistas em conectores automotivos, chicotes elétricos, sensores e terminais para o mercado industrial e automotivo de alta performance.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Acesso Rápido</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#hero" className="text-slate-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#catalogo" className="text-slate-400 hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#contato" className="text-slate-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Soluções</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#catalogo" className="text-slate-400 hover:text-white transition-colors">Conectores</a></li>
              <li><a href="#catalogo" className="text-slate-400 hover:text-white transition-colors">Chicotes Elétricos</a></li>
              <li><a href="#catalogo" className="text-slate-400 hover:text-white transition-colors">Sensores</a></li>
              <li><a href="#catalogo" className="text-slate-400 hover:text-white transition-colors">Terminais</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Contato Direto</h4>
            <div className="space-y-4 text-sm font-medium">
              <div className="flex items-center gap-3 text-slate-400"><Phone size={16} /> (11) 99999-9999</div>
              <div className="flex items-center gap-3 text-slate-400"><Mail size={16} /> contato@sp3auto.com</div>
              <div className="flex items-start gap-3 text-slate-400"><MapPin size={16} className="mt-0.5 shrink-0" /> Av. Exemplo, 1234 — São Paulo/SP</div>
              <div className="flex gap-3 pt-4">
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Linkedin} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">© 2026 SP3 — Todos os direitos reservados</p>
          <p className="text-sm font-medium text-slate-600">Catálogo Digital de Produtos v2.0</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: typeof Instagram }) {
  return (
    <a href="#" className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer">
      <Icon size={18} />
    </a>
  );
}

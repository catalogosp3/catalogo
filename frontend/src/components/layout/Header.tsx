import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';
import { categories } from '@/data/products';

interface HeaderProps {
  activeCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
  onNavigate: (section: string) => void;
}

export default function Header({ activeCategory, onSelectCategory, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5 border-b border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logotipo */}
          <button onClick={() => onNavigate('hero')} className="cursor-pointer transition-transform hover:scale-105">
            <Logo size="md" />
          </button>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink onClick={() => onNavigate('hero')}>Início</NavLink>
            <NavLink onClick={() => { onSelectCategory(null); onNavigate('catalogo'); }}>Catálogo</NavLink>
            
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 cursor-pointer">
                Categorias <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 min-w-[280px] grid grid-cols-1 gap-1">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.slug}
                        onClick={() => { onSelectCategory(cat.slug); onNavigate('catalogo'); }}
                        className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors cursor-pointer text-sm
                          ${activeCategory === cat.slug ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'}`}
                      >
                        <Icon size={18} className={activeCategory === cat.slug ? 'text-blue-600' : 'text-slate-400'} />
                        {cat.nome}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <NavLink onClick={() => onNavigate('contato')}>Contato</NavLink>
          </nav>

          {/* Chamada para Ação */}
          <div className="hidden md:block">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
              Fale Conosco
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-slate-900 cursor-pointer">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-4">
            <MobileLink onClick={() => { onNavigate('hero'); setMobileOpen(false); }}>Início</MobileLink>
            <MobileLink onClick={() => { onSelectCategory(null); onNavigate('catalogo'); setMobileOpen(false); }}>Catálogo Completo</MobileLink>
            
            <div className="py-4 border-y border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Categorias</p>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button key={cat.slug} onClick={() => { onSelectCategory(cat.slug); onNavigate('catalogo'); setMobileOpen(false); }}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors
                      ${activeCategory === cat.slug ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                    {cat.nome}
                  </button>
                ))}
              </div>
            </div>
            
            <MobileLink onClick={() => { onNavigate('contato'); setMobileOpen(false); }}>Contato</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-2 cursor-pointer">
      {children}
    </button>
  );
}

function MobileLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full text-left px-4 py-3 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer">
      {children}
    </button>
  );
}

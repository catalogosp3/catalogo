import { X } from 'lucide-react';
import { categories, montadoras } from '@/data/products';

interface FilterBarProps {
  activeCategory: string | null;
  onCategoryChange: (slug: string | null) => void;
  selectedMontadora: string | null;
  onMontadoraChange: (val: string | null) => void;
  onClearAll: () => void;
  hasActiveFilters: boolean;
}

export default function FilterBar({ activeCategory, onCategoryChange, selectedMontadora, onMontadoraChange, onClearAll, hasActiveFilters }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Filtro de Categoria */}
      <select
        value={activeCategory || ''}
        onChange={(e) => onCategoryChange(e.target.value || null)}
        className="px-3 py-2 rounded-lg text-sm bg-white border border-border text-text-light focus:border-accent focus:outline-none cursor-pointer"
      >
        <option value="">Todas as categorias</option>
        {categories.map((c) => (<option key={c.slug} value={c.slug}>{c.nome}</option>))}
      </select>

      {/* Filtro de Montadora */}
      <select
        value={selectedMontadora || ''}
        onChange={(e) => onMontadoraChange(e.target.value || null)}
        className="px-3 py-2 rounded-lg text-sm bg-white border border-border text-text-light focus:border-accent focus:outline-none cursor-pointer"
      >
        <option value="">Todas as montadoras</option>
        {montadoras.map((m) => (<option key={m} value={m}>{m}</option>))}
      </select>

      {/* Chips de Filtros Ativos */}
      {activeCategory && (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
          {categories.find(c => c.slug === activeCategory)?.nome}
          <button onClick={() => onCategoryChange(null)} className="cursor-pointer"><X size={12} /></button>
        </span>
      )}
      {selectedMontadora && (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
          {selectedMontadora}
          <button onClick={() => onMontadoraChange(null)} className="cursor-pointer"><X size={12} /></button>
        </span>
      )}

      {hasActiveFilters && (
        <button onClick={onClearAll} className="text-xs text-muted hover:text-accent cursor-pointer transition-colors">
          Limpar filtros
        </button>
      )}
    </div>
  );
}

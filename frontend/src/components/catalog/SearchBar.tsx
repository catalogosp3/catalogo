import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  resultCount: number;
}

export default function SearchBar({ value, onChange, resultCount }: SearchBarProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all bg-white ${focused ? 'border-accent shadow-sm' : 'border-border'}`}>
        <Search size={18} className="text-muted shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Buscar por nome, código ou montadora..."
          className="flex-1 bg-transparent text-sm text-text placeholder-muted/60 outline-none"
        />
        {value && (
          <button onClick={() => onChange('')} className="p-0.5 text-muted hover:text-text cursor-pointer">
            <X size={16} />
          </button>
        )}
      </div>
      {value && (
        <p className="absolute -bottom-5 right-0 text-[11px] text-muted">
          {resultCount} resultado{resultCount !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}

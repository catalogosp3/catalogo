import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onOpen: (product: Product) => void;
}

export default function ProductCard({ product, index, onOpen }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onOpen(product)}
      className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="h-48 flex items-center justify-center bg-slate-50 group-hover:bg-blue-50/50 transition-colors border-b border-slate-100 p-4">
        {product.imagem ? (
          <img src={`${import.meta.env.BASE_URL}${product.imagem.replace(/^\//, '')}`} alt={product.nome} className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <Icon size={56} strokeWidth={1} className="text-slate-300 group-hover:text-blue-500 transition-colors duration-300" />
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3 flex items-center justify-between">
           <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 uppercase tracking-widest">
             {product.categoria}
           </span>
           <span className="text-xs font-semibold text-slate-400">{product.codigo}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors flex-1">
          {product.nome}
        </h3>
        
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">{product.montadora}</p>
        </div>
        
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(product); }}
          className="w-full mt-5 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 group-hover:bg-blue-600 group-hover:text-white text-sm font-bold transition-colors cursor-pointer"
        >
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}

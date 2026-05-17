import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, Tag, Layers, Car, Wrench } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;
  const Icon = product.icon;
  const whatsappMsg = encodeURIComponent(`Olá! Gostaria de informações sobre: ${product.nome} (${product.codigo})`);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 cursor-pointer transition-colors">
              <X size={20} />
            </button>

            {/* Lado da Imagem/Ícone */}
            <div className="w-full md:w-2/5 h-64 md:h-auto flex flex-col items-center justify-center bg-slate-50 border-b md:border-b-0 md:border-r border-slate-100 p-8">
              <Icon size={100} strokeWidth={1} className="text-slate-300 mb-6" />
              <span className="inline-block px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-widest shadow-sm">
                 {product.categoria}
              </span>
            </div>

            {/* Lado do Conteúdo */}
            <div className="w-full md:w-3/5 overflow-y-auto max-h-[calc(90vh-16rem)] md:max-h-[90vh] p-8 sm:p-10">
              <div className="space-y-8">
                
                <div>
                  <p className="text-sm font-bold text-blue-600 mb-2">{product.codigo}</p>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 leading-tight">{product.nome}</h2>
                  <p className="text-base font-medium text-slate-500 mt-2">Fabricante: {product.montadora}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <Layers size={18} className="text-blue-500" /> Descrição Completa
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed">{product.descricao}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <Wrench size={18} className="text-blue-500" /> Aplicações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.aplicacoes.map((a) => (
                      <span key={a} className="px-3 py-1.5 rounded-lg bg-slate-100 text-sm font-medium text-slate-700">{a}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <Car size={18} className="text-blue-500" /> Compatibilidade
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibilidade.map((c) => (
                      <span key={c} className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-sm font-semibold text-blue-700">{c}</span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <a href={`https://wa.me/5511999999999?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-base transition-transform hover:-translate-y-1 shadow-lg shadow-green-600/20">
                    <MessageCircle size={20} /> Solicitar no WhatsApp
                  </a>
                  <a href={`mailto:contato@sp3auto.com?subject=Orçamento: ${product.codigo}`}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base transition-colors shadow-lg shadow-slate-900/20">
                    <Mail size={20} /> Orçamento por E-mail
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { categories } from '@/data/products';

interface CategoriesSectionProps {
  onSelectCategory: (slug: string) => void;
}

export default function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Nossas Linhas de Produtos</h2>
          <p className="mt-4 text-slate-500 text-lg">
            Navegue por nossas categorias especializadas e encontre a peça ideal para sua necessidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                onClick={() => onSelectCategory(cat.slug)}
                className="flex flex-col items-center justify-center gap-5 p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-400 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="text-center">
                   <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                     {cat.nome}
                   </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

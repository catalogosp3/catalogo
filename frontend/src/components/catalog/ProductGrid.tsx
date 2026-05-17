import { AnimatePresence } from 'framer-motion';
import { PackageSearch } from 'lucide-react';
import { Product } from '@/data/products';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export default function ProductGrid({ products, onOpenProduct }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch size={48} className="text-muted/25 mb-4" strokeWidth={1} />
        <h3 className="text-lg font-semibold text-muted/60 mb-1">Nenhum produto encontrado</h3>
        <p className="text-sm text-muted/40">Tente ajustar os filtros ou a pesquisa</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} onOpen={onOpenProduct} />
        ))}
      </AnimatePresence>
    </div>
  );
}

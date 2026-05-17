import { useState, useMemo, useCallback, useEffect } from 'react';
import { products, Product } from '@/data/products';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import SearchBar from '@/components/catalog/SearchBar';
import FilterBar from '@/components/catalog/FilterBar';
import ProductGrid from '@/components/catalog/ProductGrid';
import ProductModal from '@/components/catalog/ProductModal';
import ContactSection from '@/components/contact/ContactSection';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMontadora, setSelectedMontadora] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedProduct(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory) result = result.filter((p) => p.categoriaSlug === activeCategory);
    if (selectedMontadora) result = result.filter((p) => p.montadora === selectedMontadora);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.nome.toLowerCase().includes(q) ||
        p.codigo.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q) ||
        p.montadora.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        p.aplicacoes.some((a) => a.toLowerCase().includes(q)) ||
        p.compatibilidade.some((c) => c.toLowerCase().includes(q))
      );
    }
    return result;
  }, [activeCategory, selectedMontadora, searchQuery]);

  const handleNavigate = useCallback((section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleExplore = useCallback(() => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleCategorySelect = useCallback((slug: string | null) => {
    setActiveCategory(slug);
    setTimeout(() => {
      document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, []);

  const clearAll = useCallback(() => {
    setActiveCategory(null);
    setSelectedMontadora(null);
    setSearchQuery('');
  }, []);

  const hasActiveFilters = !!(activeCategory || selectedMontadora || searchQuery);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header activeCategory={activeCategory} onSelectCategory={handleCategorySelect} onNavigate={handleNavigate} />

      <main className="flex-1">
        <HeroSection onExplore={handleExplore} />
        <CategoriesSection onSelectCategory={handleCategorySelect} />

        {/* Seção de Catálogo */}
        <section id="catalogo" className="py-24 px-6 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 tracking-tight">Catálogo Completo</h2>
                <p className="mt-3 text-slate-500 text-lg">Pesquise e filtre para encontrar exatamente o que precisa.</p>
              </div>
              
              <div className="w-full md:w-auto">
                <SearchBar value={searchQuery} onChange={setSearchQuery} resultCount={filteredProducts.length} />
              </div>
            </div>

            <div className="mb-10 pb-6 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <FilterBar
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  selectedMontadora={selectedMontadora}
                  onMontadoraChange={setSelectedMontadora}
                  onClearAll={clearAll}
                  hasActiveFilters={hasActiveFilters}
                />
                
                <div className="text-sm font-medium text-slate-500">
                  Mostrando <span className="text-slate-900">{filteredProducts.length}</span> resultados
                </div>
              </div>
            </div>

            <ProductGrid products={filteredProducts} onOpenProduct={setSelectedProduct} />
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

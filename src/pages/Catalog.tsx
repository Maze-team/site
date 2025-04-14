
import { useState } from 'react';
import { products } from '@/data/products';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/product/ProductGrid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'gifts', name: 'Подарки' },
    { id: 'stars', name: 'Звезды' },
    { id: 'premium', name: 'Премиум' },
  ];
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      <section className="bg-mesh-gradient py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-white mb-8">Каталог товаров</h1>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Поиск товаров..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-maze-dark-light"
              />
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
            key="all"
            className="mb-2"
          >
            Все товары
          </Button>
          
          {categories.map((category) => (
            <Button
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              key={category.id}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl mb-2">Товары не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;


import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProductGrid from '@/components/product/ProductGrid';
import CtaSection from '@/components/home/CtaSection';
import { getFeaturedProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <Layout>
      <HeroSection />
      <div className="container mx-auto px-4">
        <CategorySection />
        <ProductGrid 
          products={featuredProducts}
          title="Популярные товары"
        />
      </div>
      <FeaturesSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;

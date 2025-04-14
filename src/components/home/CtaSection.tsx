
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-mesh-gradient p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Готовы к покупке?
          </h2>
          
          <p className="mb-8 text-lg text-gray-300 max-w-2xl">
            Выбирайте из сотни цифровых товаров для Telegram и получайте их мгновенно.
            Регистрируйтесь и получите бонус 50 звёзд на первую покупку.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalog">
              <Button size="lg" className="button-glow">
                Перейти к каталогу <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                Зарегистрироваться
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

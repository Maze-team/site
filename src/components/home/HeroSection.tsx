
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-mesh-gradient py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <div className="relative h-16 w-16 animate-float">
              <img 
                src="/lovable-uploads/8fd86fa4-bcaf-4a6a-a010-35c860bc2bba.png" 
                alt="MAZE STORE Logo" 
                className="h-full w-full logo-star"
              />
            </div>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Цифровые товары для <span className="text-telegram">Telegram</span>
          </h1>
          
          <p className="mb-8 text-lg md:text-xl text-gray-300">
            Подарки, звезды и премиум-подписки для вашего Telegram.
            Мгновенная доставка и лучшие цены.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/catalog">
              <Button size="lg" className="button-glow">
                Каталог товаров <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                Подробнее о нас
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div 
        className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-telegram/10 to-transparent opacity-30"
        style={{
          transform: 'skewX(-20deg) translateX(30%)'
        }}
      />
      <div 
        className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-telegram/10 blur-3xl"
      />
    </section>
  );
};

export default HeroSection;

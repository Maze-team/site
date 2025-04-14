
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Gift, Star, Award } from 'lucide-react';

const categories = [
  {
    id: 'gifts',
    name: 'Виртуальные подарки',
    description: 'Удивите близких и друзей оригинальными подарками в Telegram.',
    icon: <Gift className="h-6 w-6 text-telegram" />,
    color: 'bg-pink-50 dark:bg-pink-900/20',
    borderColor: 'border-pink-200 dark:border-pink-800/30'
  },
  {
    id: 'stars',
    name: 'Звезды',
    description: 'Внутренняя валюта для покупок и бонусов в экосистеме Telegram.',
    icon: <Star className="h-6 w-6 text-telegram" />,
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'border-yellow-200 dark:border-yellow-800/30'
  },
  {
    id: 'premium',
    name: 'Премиум-подписки',
    description: 'Получите доступ ко всем преимуществам Telegram Premium.',
    icon: <Award className="h-6 w-6 text-telegram" />,
    color: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800/30'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Категории товаров</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`rounded-lg border ${category.borderColor} ${category.color} p-6 transition-all duration-300 hover:shadow-md`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                {category.icon}
              </div>
              <h3 className="mb-2 text-xl font-medium">{category.name}</h3>
              <p className="mb-6 text-muted-foreground">{category.description}</p>
              <Link to={`/${category.id}`}>
                <Button className="w-full">
                  Смотреть все
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

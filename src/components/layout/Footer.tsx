import { Link } from 'react-router-dom';
import { Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <img 
                  src="/lovable-uploads/8fd86fa4-bcaf-4a6a-a010-35c860bc2bba.png" 
                  alt="MAZE STORE Logo" 
                  className="h-8 w-8 logo-star"
                />
              </div>
              <span className="font-bold text-lg">MAZE STORE</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Цифровые товары для пользователей Telegram. Подарки, звезды и премиум-подписки.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Каталог</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/gifts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Виртуальные подарки
                </Link>
              </li>
              <li>
                <Link to="/stars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Звезды
                </Link>
              </li>
              <li>
                <Link to="/premium" className="text-muted-foreground hover:text-foreground transition-colors">
                  Премиум-подписки
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  Часто задаваемые вопросы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4">Контакты</h3>
            <div className="flex space-x-4">
              <a
                href="https://t.me/maze_store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-telegram transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/maze-store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              support@maze-store.com
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MAZE STORE. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

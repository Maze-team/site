
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8fd86fa4-bcaf-4a6a-a010-35c860bc2bba.png" 
                  alt="MAZE STORE Logo" 
                  className="h-8 w-8 logo-star"
                />
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">MAZE STORE</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/catalog" className="text-foreground/70 hover:text-foreground transition-colors">
            Каталог
          </Link>
          <Link to="/gifts" className="text-foreground/70 hover:text-foreground transition-colors">
            Подарки
          </Link>
          <Link to="/stars" className="text-foreground/70 hover:text-foreground transition-colors">
            Звезды
          </Link>
          <Link to="/premium" className="text-foreground/70 hover:text-foreground transition-colors">
            Премиум
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <User className="h-5 w-5" />
          </Button>
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-telegram text-xs text-white">
                  {cartItems.length}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/gifts" 
              className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Подарки
            </Link>
            <Link 
              to="/stars" 
              className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Звезды
            </Link>
            <Link 
              to="/premium" 
              className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Премиум
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { ShoppingCart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} добавлен в вашу корзину.`,
      duration: 2000
    });
  };
  
  const handleBuyNow = () => {
    addToCart(product);
    // In a real app, we would redirect to checkout
    toast({
      title: "Быстрая покупка",
      description: "Функция быстрой покупки в разработке.",
      duration: 2000
    });
  };
  
  return (
    <div className="product-card group h-full">
      <div className="aspect-square overflow-hidden rounded-md bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium">
          <Link to={`/product/${product.id}`} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <p className="font-semibold">{product.price} ₽</p>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handleAddToCart}
              className="h-8 w-8"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button 
              onClick={handleBuyNow}
              className="h-8 button-glow"
              size="sm"
            >
              <Zap className="h-4 w-4 mr-1" /> Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Zap, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
          <Button onClick={() => navigate('/catalog')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Вернуться в каталог
          </Button>
        </div>
      </Layout>
    );
  }
  
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
    navigate('/cart');
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Назад
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="mb-4">
              <p className="text-2xl font-bold text-telegram">{product.price} ₽</p>
            </div>
            
            <div className="border-t border-border my-6 pt-6">
              <p className="mb-6 text-muted-foreground">
                {product.description}
              </p>
              
              <div className="mb-6">
                <p className="text-sm mb-2">
                  <span className="font-semibold">Категория:</span> {product.category}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Наличие:</span> {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  variant="outline"
                  className="flex-1"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Добавить в корзину
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  className="flex-1 button-glow"
                >
                  <Zap className="mr-2 h-5 w-5" /> Купить сейчас
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 bg-secondary/50 mt-6">
              <h3 className="font-medium mb-2">Мгновенная доставка</h3>
              <p className="text-sm text-muted-foreground">
                После оплаты товар будет мгновенно доставлен на ваш Telegram аккаунт.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

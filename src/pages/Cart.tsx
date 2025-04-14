
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowLeft, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [promoCode, setPromoCode] = useState('');
  
  const handleApplyPromo = () => {
    toast({
      title: "Промокод",
      description: "Функция применения промокодов в разработке.",
    });
  };
  
  const handleCheckout = () => {
    toast({
      title: "Оформление заказа",
      description: "Функция оформления заказа в разработке.",
    });
  };
  
  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-muted mb-6">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Ваша корзина пуста</h2>
            <p className="text-muted-foreground mb-6">
              Добавьте интересующие вас товары в корзину.
            </p>
            <Button onClick={() => navigate('/catalog')}>
              Перейти в каталог
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Корзина</h1>
          <Button 
            variant="ghost" 
            onClick={() => navigate('/catalog')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Продолжить покупки
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="bg-muted/30 px-6 py-3">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <span className="font-medium">Товар</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Цена</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Кол-во</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Сумма</span>
                  </div>
                </div>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.product.id} className="px-6 py-4 border-t border-border">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-border">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium">{item.product.name}</h3>
                          <p className="text-xs text-muted-foreground">Категория: {item.product.category}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-center">
                      <span>{item.product.price} ₽</span>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          className="h-8 w-8 rounded-l-md border border-r-0 border-border bg-muted/30 flex items-center justify-center"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <div className="h-8 w-10 border-y border-border bg-transparent text-center leading-8">
                          {item.quantity}
                        </div>
                        <button
                          type="button"
                          className="h-8 w-8 rounded-r-md border border-l-0 border-border bg-muted/30 flex items-center justify-center"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-span-2 flex items-center justify-center gap-2">
                      <span className="text-right">{item.product.price * item.quantity} ₽</span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300"
                onClick={() => clearCart()}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Очистить корзину
              </Button>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg border border-border p-6">
              <h2 className="text-lg font-medium mb-4">Сумма заказа</h2>
              
              <div className="space-y-2">
                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground">Сумма</span>
                  <span>{totalPrice} ₽</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-muted-foreground">Скидка</span>
                  <span>0 ₽</span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Итого</span>
                    <span>{totalPrice} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button variant="outline" onClick={handleApplyPromo}>
                    Применить
                  </Button>
                </div>
                
                <Button 
                  className="w-full button-glow" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  <Zap className="mr-2 h-5 w-5" /> Оформить заказ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

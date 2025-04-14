
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'gifts' | 'stars' | 'premium';
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutInfo {
  telegram: string;
  email: string;
  paymentMethod: string;
}

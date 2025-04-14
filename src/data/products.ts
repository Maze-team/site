
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Виртуальный подарок "Звезда"',
    description: 'Эксклюзивный подарок для особых случаев. Порадуйте друга или любимого человека.',
    image: '/placeholder.svg',
    price: 299,
    category: 'gifts',
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Виртуальный подарок "Сердце"',
    description: 'Идеальный способ выразить свои чувства. Анимированный подарок с эффектами.',
    image: '/placeholder.svg',
    price: 399,
    category: 'gifts',
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: '100 Звезд',
    description: 'Виртуальная валюта для покупок и подарков в Telegram. Мгновенное пополнение баланса.',
    image: '/placeholder.svg',
    price: 499,
    category: 'stars',
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: '250 Звезд',
    description: 'Больше звезд - больше возможностей! Экономия 15% по сравнению с покупкой по отдельности.',
    image: '/placeholder.svg',
    price: 999,
    category: 'stars',
    inStock: true
  },
  {
    id: '5',
    name: 'Премиум-подписка на 1 месяц',
    description: 'Доступ ко всем премиум-функциям Telegram на 1 месяц. Увеличенные лимиты и дополнительные возможности.',
    image: '/placeholder.svg',
    price: 599,
    category: 'premium',
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Премиум-подписка на 6 месяцев',
    description: 'Полгода премиум-доступа со скидкой 20%. Все преимущества Telegram Premium.',
    image: '/placeholder.svg',
    price: 2999,
    category: 'premium',
    inStock: true
  },
  {
    id: '7',
    name: 'Виртуальный подарок "Торт"',
    description: 'Поздравьте друга с днем рождения этим праздничным подарком.',
    image: '/placeholder.svg',
    price: 349,
    category: 'gifts',
    inStock: true
  },
  {
    id: '8',
    name: '500 Звезд',
    description: 'Большой пакет звезд со скидкой 25%. Хватит на множество подарков!',
    image: '/placeholder.svg',
    price: 1899,
    category: 'stars',
    inStock: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

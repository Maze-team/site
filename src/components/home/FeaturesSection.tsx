
import { Zap, Shield, Clock, CreditCard, Bitcoin } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-telegram" />,
    title: 'Мгновенная доставка',
    description: 'Получайте товары на свой Telegram аккаунт сразу после оплаты.'
  },
  {
    icon: <Shield className="h-6 w-6 text-telegram" />,
    title: 'Безопасная оплата',
    description: 'Все транзакции защищены современными протоколами безопасности.'
  },
  {
    icon: <Clock className="h-6 w-6 text-telegram" />,
    title: 'Поддержка 24/7',
    description: 'Наша команда поддержки готова помочь в любое время дня и ночи.'
  },
  {
    icon: <CreditCard className="h-6 w-6 text-telegram" />,
    title: 'Различные способы оплаты',
    description: 'ЮKassa, Stripe, PayPal и СБП (Сбер, Тинькофф).'
  },
  {
    icon: <Bitcoin className="h-6 w-6 text-telegram" />,
    title: 'Криптовалюты',
    description: 'Оплачивайте покупки с помощью USDT (TRC20/ERC20) и Bitcoin.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

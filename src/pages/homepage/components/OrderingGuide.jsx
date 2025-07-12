import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderingGuide = () => {
  const steps = [
    {
      id: 1,
      icon: "Search",
      title: "Browse",
      description: "Explore our curated collection of luxury perfumes and discover your perfect scent."
    },
    {
      id: 2,
      icon: "ShoppingBag",
      title: "Add to Cart",
      description: "Select your favorite fragrances and add them to your shopping cart with desired quantities."
    },
    {
      id: 3,
      icon: "MessageCircle",
      title: "Checkout via WhatsApp",
      description: "Complete your order through WhatsApp for personalized service and instant confirmation."
    },
    {
      id: 4,
      icon: "Truck",
      title: "Delivery",
      description: "Receive your luxury perfumes with premium packaging and complimentary gift wrapping."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            How to Order
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Experience our seamless ordering process designed for luxury shopping convenience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="relative z-10 text-center group">
                {/* Icon Container */}
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 luxury-shadow">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={step.icon} size={24} color="var(--color-accent-foreground)" />
                  </div>
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold font-mono">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-muted rounded-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-sm font-inter text-foreground">Secure Ordering</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Clock" size={20} className="text-accent" />
                <span className="text-sm font-inter text-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Gift" size={20} className="text-accent" />
                <span className="text-sm font-inter text-foreground">Premium Packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderingGuide;
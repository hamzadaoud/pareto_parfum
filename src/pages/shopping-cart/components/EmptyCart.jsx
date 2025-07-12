import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EmptyCart = () => {
  const suggestedProducts = [
    {
      id: 1,
      name: "Midnight Elegance",
      price: 185,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop",
      scentFamily: "Oriental"
    },
    {
      id: 2,
      name: "Garden Whisper",
      price: 165,
      image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?w=300&h=400&fit=crop",
      scentFamily: "Floral"
    },
    {
      id: 3,
      name: "Citrus Dawn",
      price: 145,
      image: "https://images.pixabay.com/photo/2020/05/11/06/20/perfume-5156966_1280.jpg?w=300&h=400&fit=crop",
      scentFamily: "Citrus"
    }
  ];

  return (
    <div className="text-center py-12 md:py-16">
      {/* Empty Cart Illustration */}
      <div className="mb-8">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground"
          >
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            <path d="M12 12l-4-4m0 4l4-4" strokeLinecap="round"/>
          </svg>
        </div>
        
        <h2 className="font-playfair font-bold text-2xl md:text-3xl text-foreground mb-3">
          Your Cart is Empty
        </h2>
        
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Discover our exquisite collection of luxury perfumes and find your signature scent
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Link to="/product-catalog">
          <Button
            variant="default"
            size="lg"
            iconName="Sparkles"
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore Perfumes
          </Button>
        </Link>
        
        <Button
          variant="outline"
          size="lg"
          iconName="MessageCircle"
          iconPosition="left"
          onClick={() => {
            const message = encodeURIComponent('Hello! I would like to learn more about your luxury perfume collection.');
            window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
          }}
          className="w-full sm:w-auto"
        >
          Get Recommendations
        </Button>
      </div>

      {/* Suggested Products */}
      <div className="max-w-4xl mx-auto">
        <h3 className="font-playfair font-semibold text-xl text-foreground mb-6">
          You Might Like
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card border border-border rounded-lg overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-inter bg-muted text-muted-foreground">
                    {product.scentFamily}
                  </span>
                </div>
                
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h4>
                
                <p className="font-playfair font-bold text-xl text-foreground mb-4">
                  ${product.price}
                </p>
                
                <div className="flex gap-2">
                  <Link to="/product-detail" className="flex-1">
                    <Button variant="outline" size="sm" fullWidth>
                      View Details
                    </Button>
                  </Link>
                  
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Plus"
                    className="px-3"
                  >
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 pt-8 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
              <span className="text-accent-foreground text-lg">🚚</span>
            </div>
            <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
              Free Delivery
            </h4>
            <p className="text-xs text-muted-foreground">
              On orders over $100
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
              <span className="text-accent-foreground text-lg">💎</span>
            </div>
            <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
              Authentic Luxury
            </h4>
            <p className="text-xs text-muted-foreground">
              100% genuine perfumes
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
              <span className="text-accent-foreground text-lg">💬</span>
            </div>
            <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
              Expert Guidance
            </h4>
            <p className="text-xs text-muted-foreground">
              Personal scent consultation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent('Hello! I would like to explore your luxury perfume collection and place an order.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury perfume bottle with elegant lighting"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <path d="M20,50 Q50,20 80,50 Q50,80 20,50" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 opacity-15">
        <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Discover Your
            <span className="block text-accent">Signature Scent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-inter font-light leading-relaxed">
            Immerse yourself in our curated collection of luxury perfumes, crafted for those who appreciate the finest fragrances in life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link to="/product-catalog" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300"
                iconName="Sparkles"
                iconPosition="left"
              >
                Shop Now
              </Button>
            </Link>
            
            <Button
              variant="default"
              size="lg"
              onClick={handleWhatsAppOrder}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-black font-semibold pulse-gold"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
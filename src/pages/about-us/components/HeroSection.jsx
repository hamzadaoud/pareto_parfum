import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = ({ onWhatsAppContact }) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-background to-muted/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="scent-waves" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q5,0 10,10 T20,10" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#scent-waves)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-tight">
                Crafting
                <span className="block text-accent">Timeless Elegance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl">
                Since 2018, we've been creating exceptional fragrances that capture the essence of luxury and sophistication, one bottle at a time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90"
              >
                Connect with Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('brand-story').scrollIntoView({ behavior: 'smooth' })}
              >
                Our Journey
              </Button>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl luxury-shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                alt="Founder of Pareto Parfum"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
            
            {/* Founder Quote */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <blockquote className="text-lg font-inter italic">
                "Every fragrance tells a story. We craft yours."
              </blockquote>
              <cite className="text-sm font-playfair font-medium mt-2 block">
                — Alexander Pareto, Founder
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
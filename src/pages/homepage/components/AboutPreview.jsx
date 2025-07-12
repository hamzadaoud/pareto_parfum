import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const AboutPreview = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
                The Art of
                <span className="block text-accent">Perfumery</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
                Founded in 2018 by master perfumer Isabella Moreau, PARETO PARFUM represents the pinnacle of luxury fragrance craftsmanship. Each scent is meticulously created using the finest ingredients sourced from around the world.
              </p>
              
              <p className="text-base text-muted-foreground mb-8 font-inter leading-relaxed">
                Our philosophy is simple: create timeless fragrances that tell stories, evoke emotions, and become an integral part of your personal identity. Every bottle represents months of careful formulation and testing to achieve perfection.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-inter text-foreground">Handcrafted Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-inter text-foreground">Premium Ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-inter text-foreground">Sustainable Practices</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm font-inter text-foreground">Limited Collections</span>
                </div>
              </div>

              <Link to="/about-us">
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-primary hover:bg-primary/90"
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg luxury-shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Master perfumer Isabella Moreau crafting luxury fragrances"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg luxury-shadow-xl border border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-playfair font-bold text-lg">IM</span>
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-foreground">Isabella Moreau</h4>
                    <p className="text-sm text-muted-foreground font-inter">Master Perfumer & Founder</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
                  <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
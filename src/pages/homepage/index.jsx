import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedCollections from './components/FeaturedCollections';
import AboutPreview from './components/AboutPreview';
import OrderingGuide from './components/OrderingGuide';
import TestimonialsCarousel from './components/TestimonialsCarousel';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Collections */}
        <FeaturedCollections />
        
        {/* About Preview */}
        <AboutPreview />
        
        {/* Ordering Guide */}
        <OrderingGuide />
        
        {/* Testimonials Carousel */}
        <TestimonialsCarousel />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-accent">
                  <circle cx="16" cy="16" r="14" fill="currentColor" />
                  <circle cx="16" cy="16" r="8" fill="var(--color-primary)" />
                  <circle cx="16" cy="16" r="4" fill="currentColor" />
                </svg>
                <span className="ml-2 text-xl font-playfair font-bold tracking-tight">
                  PARETO PARFUM
                </span>
              </div>
              <p className="text-sm text-primary-foreground/80 font-inter leading-relaxed max-w-md">
                Crafting luxury fragrances that tell stories and evoke emotions. Each scent is meticulously created using the finest ingredients from around the world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm font-inter">
                <li><a href="/product-catalog" className="text-primary-foreground/80 hover:text-accent transition-colors">Perfumes</a></li>
                <li><a href="/about-us" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
                <li><a href="/shopping-cart" className="text-primary-foreground/80 hover:text-accent transition-colors">Cart</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-playfair font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm font-inter text-primary-foreground/80">
                <li>WhatsApp: +1 (555) 123-4567</li>
                <li>Email: hello@paretoparfum.com</li>
                <li>Mon-Fri: 9AM-6PM EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm text-primary-foreground/60 font-inter">
              © {new Date().getFullYear()} PARETO PARFUM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
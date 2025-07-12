import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import HeroSection from './components/HeroSection';
import BrandStorySection from './components/BrandStorySection';
import CraftsmanshipSection from './components/CraftsmanshipSection';
import SustainabilitySection from './components/SustainabilitySection';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

const AboutUs = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Hello Pareto Parfum! I'd love to learn more about your luxury fragrances and your story. Could you help me find the perfect scent?`);
    const phoneNumber = "1234567890";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Our Story', path: '/about-us' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Story - Pareto Parfum | Luxury Fragrance Heritage</title>
        <meta name="description" content="Discover the story behind Pareto Parfum - from our founder's vision to our commitment to sustainable luxury and artisanal craftsmanship in every bottle." />
        <meta name="keywords" content="pareto parfum story, luxury perfume brand, artisanal fragrances, sustainable perfumes, master perfumer" />
        <meta property="og:title" content="Our Story - Pareto Parfum | Luxury Fragrance Heritage" />
        <meta property="og:description" content="Discover the story behind Pareto Parfum - from our founder's vision to our commitment to sustainable luxury and artisanal craftsmanship." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://paretoparfum.com/about-us" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <div className="container mx-auto px-4 lg:px-8">
            <Breadcrumbs customItems={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <HeroSection onWhatsAppContact={handleWhatsAppContact} />

          {/* Brand Story Section */}
          <BrandStorySection />

          {/* Craftsmanship Section */}
          <CraftsmanshipSection />

          {/* Sustainability Section */}
          <SustainabilitySection />

          {/* Values Section */}
          <ValuesSection />

          {/* Team Section */}
          <TeamSection />

          {/* Contact Section */}
          <ContactSection onWhatsAppContact={handleWhatsAppContact} />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary-foreground">
                    <circle cx="16" cy="16" r="14" fill="currentColor" />
                    <circle cx="16" cy="16" r="8" fill="var(--color-accent)" />
                    <circle cx="16" cy="16" r="4" fill="currentColor" />
                  </svg>
                  <span className="text-xl font-playfair font-bold tracking-tight">
                    PARETO PARFUM
                  </span>
                </div>
                <p className="text-primary-foreground/80 font-inter leading-relaxed max-w-md">
                  Crafting exceptional fragrances that capture the essence of luxury and sophistication since 2018.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-playfair font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 font-inter">
                  <li><a href="/homepage" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
                  <li><a href="/product-catalog" className="text-primary-foreground/80 hover:text-accent transition-colors">Perfumes</a></li>
                  <li><a href="/about-us" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Story</a></li>
                  <li><a href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-playfair font-bold mb-4">Contact</h3>
                <ul className="space-y-2 font-inter text-primary-foreground/80">
                  <li>Paris, France</li>
                  <li>hello@paretoparfum.com</li>
                  <li>+33 1 23 45 67 89</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-primary-foreground/60 font-inter text-sm">
                © {new Date().getFullYear()} Pareto Parfum. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
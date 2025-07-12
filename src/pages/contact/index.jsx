import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ContactForm from './components/ContactForm';
import WhatsAppContact from './components/WhatsAppContact';
import StoreInformation from './components/StoreInformation';
import SocialMediaLinks from './components/SocialMediaLinks';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Contact Us - PARETO PARFUM | Luxury Perfume Customer Service</title>
        <meta name="description" content="Get in touch with PARETO PARFUM for luxury perfume inquiries. Contact us via WhatsApp, email, or visit our Beverly Hills store. Expert fragrance consultation available." />
        <meta name="keywords" content="contact pareto parfum, luxury perfume customer service, fragrance consultation, beverly hills perfume store, whatsapp perfume ordering" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/5 py-12 lg:py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-accent/20 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-accent/20 rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <Breadcrumbs />
            
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={32} className="text-accent" />
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground mb-6 leading-tight">
                Contact Us
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
                We're here to help you discover your perfect luxury fragrance. Reach out to our expert team for personalized recommendations and exceptional service.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* WhatsApp Contact - Featured */}
            <div className="mb-12 lg:mb-16">
              <div className="max-w-2xl mx-auto">
                <WhatsAppContact />
              </div>
            </div>

            {/* Contact Form & Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
              
              {/* Store Information & Social Media */}
              <div className="space-y-8">
                <StoreInformation />
                <SocialMediaLinks />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <FAQSection />
            </div>
          </div>
        </section>

        {/* Customer Service Promise */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-8">
                Our Customer Service Promise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-2">
                    Quick Response
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    We respond to all inquiries within 24 hours, with WhatsApp messages answered in under 5 minutes during business hours.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-2">
                    Expert Guidance
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Our fragrance experts provide personalized recommendations based on your preferences and lifestyle.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-playfair font-bold text-foreground mb-2">
                    Satisfaction Guarantee
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Your satisfaction is our priority. We offer hassle-free returns and exchanges on all purchases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center">
              <p className="font-inter text-sm opacity-80">
                © {currentYear} PARETO PARFUM. All rights reserved. | Luxury Fragrances & Exceptional Service
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
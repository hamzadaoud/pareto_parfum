import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
 
const ContactSection = ({ onWhatsAppContact }) => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/paretoparfum",
      color: "hover:text-pink-500"
    },
    {
      name: "Facebook",
      icon: "Facebook",
      url: "https://facebook.com/paretoparfum",
      color: "hover:text-blue-500"
    },
    {
      name: "TikTok",
      icon: "Music",
      url: "https://tiktok.com/@paretoparfum",
      color: "hover:text-purple-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-muted/50 via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4 sm:mb-6">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-inter leading-relaxed max-w-2xl mx-auto">
              Have questions about our fragrances or want to learn more about our story? We'd love to hear from you.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-12 luxury-shadow mb-10 sm:mb-12">
            <div className="space-y-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="MessageCircle" size={36} className="text-success" />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-primary mb-2 sm:mb-3">
                  Chat with Our Fragrance Experts
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-inter leading-relaxed mb-4 sm:mb-6">
                  Get personalized recommendations, learn about our latest collections, or ask any questions about our fragrances directly through WhatsApp.
                </p>
              </div>

              <Button
                variant="default"
                size="lg"
                onClick={onWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-success hover:bg-success/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Start Conversation
              </Button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-primary mb-3 sm:mb-4">
                Follow Our Journey
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-inter">
                Stay updated with our latest fragrances, behind-the-scenes content, and fragrance tips.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 bg-card rounded-xl px-5 py-3 sm:px-6 sm:py-4 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                >
                  <Icon name={social.icon} size={22} className="transition-colors duration-300" />
                  <span className="text-sm sm:text-base font-inter font-medium text-foreground group-hover:text-current transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="MapPin" size={22} className="text-accent mx-auto mb-1 sm:mb-2" />
                <p className="text-sm font-inter text-muted-foreground">
                  Paris, France
                </p>
              </div>
              <div>
                <Icon name="Clock" size={22} className="text-accent mx-auto mb-1 sm:mb-2" />
                <p className="text-sm font-inter text-muted-foreground">
                  Mon-Fri: 9AM-6PM CET
                </p>
              </div>
              <div>
                <Icon name="Mail" size={22} className="text-accent mx-auto mb-1 sm:mb-2" />
                <p className="text-sm font-inter text-muted-foreground">
                  hello@paretoparfum.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
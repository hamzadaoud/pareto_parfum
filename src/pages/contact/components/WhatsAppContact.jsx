import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WhatsAppContact = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Hello PARETO PARFUM! 

I'm interested in learning more about your luxury perfume collection. Could you please provide me with:

• Information about your signature fragrances
• Current promotions or new arrivals
• Personalized fragrance recommendations
• Delivery options and timeframes

Thank you for your time. I look forward to hearing from you soon!

Best regards`);
    
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-success/5 to-success/10 rounded-lg p-6 lg:p-8 border border-success/20">
      <div className="text-center">
        <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4 pulse-gold">
          <Icon name="MessageCircle" size={40} color="white" />
        </div>
        
        <h3 className="text-xl lg:text-2xl font-playfair font-bold text-foreground mb-2">
          Chat with Us on WhatsApp
        </h3>
        
        <p className="text-muted-foreground font-inter mb-6 max-w-sm mx-auto">
          Get instant responses to your questions about our luxury perfumes. Our fragrance experts are here to help!
        </p>
        
        <Button
          variant="default"
          size="lg"
          onClick={handleWhatsAppContact}
          iconName="MessageCircle"
          iconPosition="left"
          className="bg-success hover:bg-success/90 text-success-foreground font-inter font-medium animate-bounce-gentle"
        >
          Start WhatsApp Chat
        </Button>
        
        <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-muted-foreground font-inter">
          <Icon name="Clock" size={16} />
          <span>Usually responds within 5 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppContact;
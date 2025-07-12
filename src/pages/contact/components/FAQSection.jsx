import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I place an order through WhatsApp?",
      answer: `Simply click on any "Order via WhatsApp" button on our website, and you'll be redirected to WhatsApp with a pre-filled message containing your selected items. Our team will confirm your order details, provide payment instructions, and arrange delivery within 24-48 hours.`
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: `We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and cash on delivery for local orders. All payments are processed securely through our encrypted payment gateway.`
    },
    {
      id: 3,
      question: "How long do your perfumes last?",
      answer: `Our luxury perfumes are crafted with high-quality ingredients and typically last 6-8 hours on the skin. Longevity can vary based on skin type, application method, and environmental factors. We recommend applying to pulse points for maximum longevity.`
    },
    {
      id: 4,
      question: "Do you offer international shipping?",
      answer: `Yes, we ship worldwide! International shipping typically takes 5-10 business days depending on your location. Shipping costs are calculated at checkout based on destination and order weight. All international orders are fully insured.`
    },
    {
      id: 5,
      question: "Can I return or exchange a perfume?",
      answer: `We offer a 30-day return policy for unopened items in their original packaging. For hygiene reasons, opened perfumes cannot be returned unless defective. If you're unsure about a fragrance, we recommend ordering samples first.`
    },
    {
      id: 6,
      question: "Do you offer fragrance samples?",
      answer: `Absolutely! We offer 2ml sample vials for most of our fragrances. Samples are perfect for testing before committing to a full bottle. You can order up to 5 samples per order, and sample costs can be credited toward future full-size purchases.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-card rounded-lg p-6 lg:p-8 luxury-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <Icon name="HelpCircle" size={20} className="text-accent" />
        </div>
        <h3 className="text-2xl font-playfair font-bold text-foreground">Frequently Asked Questions</h3>
      </div>
      
      <p className="text-muted-foreground font-inter mb-8">
        Find answers to common questions about our luxury perfumes, ordering process, and customer service.
      </p>
      
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-accent/30"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
            >
              <span className="font-inter font-medium text-foreground pr-4">
                {faq.question}
              </span>
              <Icon
                name={openFAQ === faq.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-muted-foreground transition-transform duration-200 ${
                  openFAQ === faq.id ? 'text-accent' : ''
                }`}
              />
            </button>
            
            {openFAQ === faq.id && (
              <div className="px-6 pb-4 border-t border-border bg-muted/20">
                <p className="text-muted-foreground font-inter leading-relaxed pt-4">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={20} className="text-accent mt-1" />
          <div>
            <h4 className="font-inter font-semibold text-foreground mb-2">
              Still have questions?
            </h4>
            <p className="text-muted-foreground font-inter text-sm">
              Our customer service team is here to help. Contact us via WhatsApp, email, or phone for personalized assistance with your luxury perfume needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
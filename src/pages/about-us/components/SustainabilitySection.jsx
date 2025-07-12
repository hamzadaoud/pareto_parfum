import React from 'react';
import Icon from '../../../components/AppIcon';

const SustainabilitySection = () => {
  const sustainabilityFeatures = [
    {
      icon: "Leaf",
      title: "Eco-Friendly Packaging",
      description: "Our bottles are made from 100% recycled glass, and our packaging uses biodegradable materials sourced from sustainable forests."
    },
    {
      icon: "Recycle",
      title: "Refillable Bottles",
      description: "Reduce waste with our elegant refillable bottle program. Return your empty bottles for a discount on your next purchase."
    },
    {
      icon: "Heart",
      title: "Ethical Sourcing",
      description: "We partner directly with farmers and suppliers, ensuring fair trade practices and supporting local communities worldwide."
    },
    {
      icon: "Globe",
      title: "Carbon Neutral",
      description: "Our production process is carbon neutral, and we offset our shipping emissions through verified environmental projects."
    },
    {
      icon: "Shield",
      title: "Cruelty-Free",
      description: "All our products are certified cruelty-free. We never test on animals and work only with suppliers who share our values."
    },
    {
      icon: "Droplets",
      title: "Water Conservation",
      description: "Our distillation process uses 40% less water than traditional methods, and we recycle 95% of the water used in production."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Sustainable Luxury
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            We believe that true luxury should never come at the expense of our planet. Our commitment to sustainability is woven into every aspect of our business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sustainabilityFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 h-full luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon name={feature.icon} size={32} className="text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-playfair font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-4">
              Join Our Sustainability Journey
            </h3>
            <p className="text-muted-foreground font-inter leading-relaxed mb-6 max-w-2xl mx-auto">
              Every purchase supports our environmental initiatives and helps us create a more sustainable future for luxury fragrances.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm font-inter">
              <div className="flex items-center gap-2 text-success">
                <Icon name="Check" size={16} />
                <span>100% Sustainable Materials</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <Icon name="Check" size={16} />
                <span>Carbon Neutral Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-success">
                <Icon name="Check" size={16} />
                <span>Ethical Supply Chain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
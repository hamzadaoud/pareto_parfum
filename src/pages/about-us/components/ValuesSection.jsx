import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const values = [
    {
      icon: "Crown",
      title: "Excellence",
      description: "We pursue perfection in every aspect of our craft, from ingredient selection to the final product.",
      color: "text-accent"
    },
    {
      icon: "Users",
      title: "Authenticity",
      description: "Our fragrances are genuine expressions of artistry, created with passion and integrity.",
      color: "text-primary"
    },
    {
      icon: "Sparkles",
      title: "Innovation",
      description: "We blend traditional techniques with modern innovation to create truly unique fragrances.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Our Values
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do, from creation to customer experience.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 h-full text-center luxury-shadow hover:luxury-shadow-lg transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon name={value.icon} size={40} className={value.color} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
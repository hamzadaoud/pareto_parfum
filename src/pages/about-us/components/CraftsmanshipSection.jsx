import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CraftsmanshipSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const craftingSteps = [
    {
      id: 1,
      title: "Ingredient Sourcing",
      description: "We travel the world to source the finest raw materials from trusted suppliers in Bulgaria, India, and Madagascar.",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      details: "Our rose petals come from the Valley of Roses in Bulgaria, while our vanilla is sourced directly from Madagascar's finest plantations."
    },
    {
      id: 2,
      title: "Extraction Process",
      description: "Using traditional steam distillation and modern CO2 extraction methods to preserve the purest essence of each ingredient.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      details: "Our extraction process can take up to 72 hours for a single ingredient, ensuring maximum purity and potency."
    },
    {
      id: 3,
      title: "Blending Artistry",
      description: "Master perfumers carefully blend each note, creating harmonious compositions that evolve beautifully on the skin.",
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=400&fit=crop",
      details: "Each fragrance undergoes over 100 iterations before reaching the perfect balance of top, heart, and base notes."
    },
    {
      id: 4,
      title: "Maturation & Bottling",
      description: "Our fragrances mature for 6-8 weeks in temperature-controlled environments before being hand-bottled in our signature vessels.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop",
      details: "Each bottle is individually inspected and sealed by hand, ensuring the highest quality standards."
    }
  ];

  const openLightbox = (step) => {
    setSelectedImage(step);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              The Art of Craftsmanship
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
              Discover the meticulous process behind every bottle of Pareto Parfum, where tradition meets innovation.
            </p>
          </div>

          {/* Crafting Steps Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {craftingSteps.map((step, index) => (
              <div key={step.id} className="group cursor-pointer" onClick={() => openLightbox(step)}>
                <div className="bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-mono font-bold">
                        {step.id}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                        <Icon name="ZoomIn" size={24} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden luxury-shadow-xl">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-primary"
            >
              <Icon name="X" size={24} />
            </Button>

            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-mono font-bold text-sm">
                    {selectedImage.id}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {selectedImage.title}
                  </h3>
                </div>
                <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                  {selectedImage.description}
                </p>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed italic">
                  {selectedImage.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CraftsmanshipSection;
import React from 'react';
import Image from '../../../components/AppImage';

const BrandStorySection = () => {
  const storyBlocks = [
    {
      title: "Our Beginning",
      content: `Founded in the heart of Paris in 2018, Pareto Parfum emerged from a passion for creating extraordinary fragrances that transcend time and trends.\n\nOur founder, Alexander Pareto, spent years studying under master perfumers in Grasse, France, learning the ancient art of fragrance creation while developing his own unique approach to scent composition.`
    },
    {
      title: "The Philosophy",
      content: `We believe that fragrance is the most intimate form of self-expression. Each of our perfumes is crafted to evoke emotions, memories, and dreams.\n\nOur philosophy centers on the 80/20 principle - 80% of the impact comes from 20% of the ingredients. We source only the finest, most precious materials to create our signature scents.`
    },
    {
      title: "Artisanal Excellence",
      content: `Every bottle of Pareto Parfum represents months of careful development, testing, and refinement. We use traditional techniques combined with modern innovation to achieve the perfect balance.\n\nOur small-batch production ensures that each fragrance maintains its integrity and exclusivity, making every bottle a treasured possession.`
    }
  ];

  return (
    <section id="brand-story" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            A journey of passion, craftsmanship, and the relentless pursuit of olfactory perfection.
          </p>
        </div>

        {/* Story Blocks */}
        <div className="space-y-16">
          {storyBlocks.map((block, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                  {block.title}
                </h3>
                <div className="prose prose-lg max-w-none">
                  {block.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground font-inter leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl luxury-shadow-lg">
                  <Image
                    src={index === 0 
                      ? "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=400&fit=crop"
                      : index === 1 
                      ? "https://images.unsplash.com/photo-1594736797933-d0d8e5a0d6f7?w=600&h=400&fit=crop"
                      : "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=600&h=400&fit=crop"
                    }
                    alt={`${block.title} illustration`}
                    className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStorySection;
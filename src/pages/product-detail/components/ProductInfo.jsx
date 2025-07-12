import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const infoSections = [
    {
      id: 'notes',
      title: 'Scent Notes',
      icon: 'Flower2',
      content: `Top Notes: Bergamot, Pink Pepper, Cardamom\nHeart Notes: Rose, Jasmine, Violet\nBase Notes: Sandalwood, Vanilla, Musk\n\nA sophisticated blend that opens with sparkling citrus and spice, evolving into a romantic floral heart before settling into a warm, sensual base.`
    },
    {
      id: 'inspiration',
      title: 'Inspiration Story',
      icon: 'Sparkles',
      content: `Inspired by the golden hour in a Parisian garden, this fragrance captures the essence of romance and elegance. Created by master perfumer Antoine Dubois, it represents the perfect balance between classic French perfumery and modern sophistication.\n\nEach bottle is a testament to our commitment to luxury and artisanal craftsmanship.`
    },
    {
      id: 'longevity',
      title: 'Longevity & Projection',
      icon: 'Clock',
      content: `Longevity: 8-10 hours\nProjection: Moderate to Strong\nSillage: 6-8 feet\n\nThis Eau de Parfum concentration ensures excellent performance throughout the day, with the fragrance evolving beautifully on the skin while maintaining its sophisticated character.`
    },
    {
      id: 'usage',
      title: 'Usage Tips',
      icon: 'Info',
      content: `Apply to pulse points: wrists, neck, and behind ears\nSpray from 6 inches away for optimal distribution\nBest worn during evening events or special occasions\nLayer with our matching body lotion for enhanced longevity\n\nStore in a cool, dry place away from direct sunlight to preserve the fragrance integrity.`
    }
  ];

  return (
    <div className="space-y-6">
      {/* Product Title and Price */}
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground">
          {product.name}
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-inter font-bold text-accent">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg font-inter text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Quick Description */}
      <p className="text-lg font-inter text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <Icon 
          name="Package" 
          size={20} 
          className={product.inStock ? "text-success" : "text-destructive"} 
        />
        <span className={`font-inter font-medium ${
          product.inStock ? "text-success" : "text-destructive"
        }`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        {product.inStock && (
          <span className="text-muted-foreground font-inter">
            • Ships within 2-3 business days
          </span>
        )}
      </div>

      {/* Expandable Information Sections */}
      <div className="space-y-3">
        {infoSections.map((section) => (
          <div key={section.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <Icon name={section.icon} size={20} className="text-accent" />
                <span className="font-inter font-medium text-foreground">
                  {section.title}
                </span>
              </div>
              <Icon 
                name={expandedSection === section.id ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-muted-foreground"
              />
            </button>
            
            {expandedSection === section.id && (
              <div className="p-4 bg-background border-t border-border">
                <p className="font-inter text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social Sharing */}
      <div className="pt-4 border-t border-border">
        <h3 className="font-inter font-medium text-foreground mb-3">Share this fragrance</h3>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent"
          >
            <Icon name="Instagram" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent"
          >
            <Icon name="Facebook" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent"
          >
            <Icon name="Twitter" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent"
          >
            <Icon name="Share2" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
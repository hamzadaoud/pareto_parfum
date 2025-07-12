// src/components/sections/FeaturedCollections.js
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';  // Updated path
import Image from '../../../components/AppImage';   // Updated path
import { useCart } from '../../../contexts/CartContext'; // check this path carefully!


const FeaturedCollections = () => {
  const { addToCart } = useCart();

  const featuredPerfumes = [
    {
      id: 1,
      name: "Midnight Elegance",
      description: "A sophisticated blend of bergamot, jasmine, and sandalwood that captures the essence of luxury evenings.",
      price: "$285",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      scentFamily: "Oriental",
      notes: ["Bergamot", "Jasmine", "Sandalwood"]
    },
    {
      id: 2,
      name: "Golden Dawn",
      description: "Fresh citrus notes with warm amber undertones, perfect for those who embrace new beginnings.",
      price: "$320",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      scentFamily: "Citrus",
      notes: ["Orange Blossom", "Amber", "Vanilla"]
    },
    {
      id: 3,
      name: "Velvet Rose",
      description: "An enchanting floral bouquet with deep rose petals and hints of musk for timeless femininity.",
      price: "$295",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      scentFamily: "Floral",
      notes: ["Rose Petals", "Peony", "White Musk"]
    },
    {
      id: 4,
      name: "Forest Whisper",
      description: "Earthy and mysterious with cedar, pine, and subtle leather notes for the modern adventurer.",
      price: "$310",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      scentFamily: "Woody",
      notes: ["Cedar", "Pine", "Leather"]
    }
  ];

  const handleAddToCart = (perfume) => {
    // Mock add to cart functionality
    console.log(`Added ${perfume.name} to cart`);
  };

   const handleWhatsAppOrder = (perfume) => {
    const message = encodeURIComponent(`Hello! I would like to order ${perfume.name} (${perfume.price}). Please provide more details about availability and delivery.`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Discover our most coveted fragrances, each carefully crafted to tell a unique story and evoke unforgettable emotions.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPerfumes.map((perfume) => (
            <div
              key={perfume.id}
              className="group bg-card rounded-lg luxury-shadow hover:luxury-shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={perfume.image}
                  alt={perfume.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/product-detail" state={{ perfume }}>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white backdrop-blur-sm"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      Quick View
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-inter font-medium text-accent uppercase tracking-wide">
                    {perfume.scentFamily}
                  </span>
                </div>
                
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {perfume.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 font-inter leading-relaxed">
                  {perfume.description}
                </p>

                {/* Scent Notes */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {perfume.notes.map((note, index) => (
                      <span
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-inter"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-playfair font-bold text-foreground mb-6">
                  {perfume.price}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
        variant="default"
        fullWidth
        onClick={() => addToCart(perfume)}
        iconName="ShoppingBag"
        iconPosition="left"
        className="bg-primary hover:bg-primary/90"
      >
        Add to Cart
      </Button>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={() => handleWhatsAppOrder(perfume)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    Order via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/product-catalog">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Perfumes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
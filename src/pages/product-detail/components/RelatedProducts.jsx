import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ currentProductId }) => {
  const scrollRef = useRef(null);

  const relatedProducts = [
    {
      id: 2,
      name: "Midnight Elegance",
      price: 145,
      originalPrice: 165,
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=400&h=400&fit=crop",
      description: "A mysterious and alluring fragrance with deep woody notes",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Summer Breeze",
      price: 98,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=400&fit=crop",
      description: "Fresh and vibrant citrus blend perfect for daytime wear",
      rating: 4.6,
      inStock: true
    },
    {
      id: 4,
      name: "Royal Amber",
      price: 189,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      description: "Luxurious oriental fragrance with rich amber and spices",
      rating: 4.9,
      inStock: false
    },
    {
      id: 5,
      name: "Garden Romance",
      price: 112,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
      description: "Delicate floral bouquet with rose and peony notes",
      rating: 4.7,
      inStock: true
    }
  ];

  const filteredProducts = relatedProducts.filter(product => product.id !== currentProductId);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleWhatsAppOrder = (product) => {
    const message = encodeURIComponent(
      `Hello! I would like to inquire about:\n\n` +
      `Product: ${product.name}\n` +
      `Price: $${product.price}\n\n` +
      `Please provide more details. Thank you!`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-playfair font-bold text-foreground">
          You Might Also Like
        </h2>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollLeft}
            className="w-10 h-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollRight}
            className="w-10 h-10"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-none w-72 bg-card rounded-lg luxury-shadow hover:luxury-shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}

                {product.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-inter font-medium">
                      Sale
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-playfair font-semibold text-foreground text-lg line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-accent fill-current' :'text-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-inter text-muted-foreground">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-inter font-bold text-accent">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-inter text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link to="/product-detail" className="block">
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Eye"
                      iconPosition="left"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      View Details
                    </Button>
                  </Link>
                  
                  <Button
                    variant="ghost"
                    fullWidth
                    onClick={() => handleWhatsAppOrder(product)}
                    iconName="MessageCircle"
                    iconPosition="left"
                    disabled={!product.inStock}
                    className="text-success hover:text-success/80"
                  >
                    WhatsApp Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="flex justify-center md:hidden">
        <div className="flex space-x-2">
          {filteredProducts.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-border"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
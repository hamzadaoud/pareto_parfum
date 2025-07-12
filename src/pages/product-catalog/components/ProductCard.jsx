import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering:\n\n${product.name}\nPrice: $${product.price}\nQuantity: ${quantity}\nTotal: $${(product.price * quantity).toFixed(2)}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const formatScentNotes = (notes) => {
    if (Array.isArray(notes)) {
      return notes.slice(0, 3).join(', ');
    }
    return notes;
  };

  return (
    <div 
      className="group bg-card border border-border rounded-lg overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent text-accent-foreground text-xs font-mono font-medium px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-primary text-primary-foreground text-xs font-mono font-medium px-2 py-1 rounded">
              BESTSELLER
            </span>
          )}
          {product.isLimitedEdition && (
            <span className="bg-destructive text-destructive-foreground text-xs font-mono font-medium px-2 py-1 rounded">
              LIMITED
            </span>
          )}
        </div>

        {/* Quick View Button */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onQuickView(product)}
            iconName="Eye"
            iconPosition="left"
            className="bg-background/90 backdrop-blur-sm"
          >
            Quick View
          </Button>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors">
          <Icon name="Heart" size={16} className="text-muted-foreground hover:text-destructive" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Name and Price */}
        <div className="space-y-1">
          <Link 
            to="/product-detail" 
            state={{ product }}
            className="block"
          >
            <h3 className="font-playfair font-semibold text-foreground hover:text-accent transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-lg font-inter font-bold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Scent Notes */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {formatScentNotes(product.scentNotes)}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(product.rating) ? 'text-accent fill-current' : 'text-border'}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-mono">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-inter font-medium text-foreground">Quantity:</span>
          <div className="flex items-center border border-border rounded">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-1 hover:bg-muted transition-colors"
              disabled={quantity <= 1}
            >
              <Icon name="Minus" size={14} />
            </button>
            <span className="px-3 py-1 text-sm font-mono font-medium min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-1 hover:bg-muted transition-colors"
            >
              <Icon name="Plus" size={14} />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            variant="default"
            fullWidth
            onClick={handleAddToCart}
            iconName="ShoppingCart"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90"
          >
            Add to Cart
          </Button>
          <Button
            variant="outline"
            fullWidth
            onClick={handleWhatsAppOrder}
            iconName="MessageCircle"
            iconPosition="left"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Order via WhatsApp
          </Button>
        </div>

        {/* Stock Status */}
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`} />
          <span className={`text-xs font-inter font-medium ${product.inStock ? 'text-success' : 'text-destructive'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          {product.inStock && product.stockCount <= 5 && (
            <span className="text-xs text-warning">
              Only {product.stockCount} left
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
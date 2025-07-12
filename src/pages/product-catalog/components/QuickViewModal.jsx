import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen || !product) return null;

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    onClose();
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering:\n\n${product.name}\nPrice: $${product.price}\nQuantity: ${quantity}\nTotal: $${(product.price * quantity).toFixed(2)}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const productImages = product.images || [product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-lg luxury-shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative bg-muted">
            <div className="aspect-square">
              <Image
                src={productImages[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            {productImages.length > 1 && (
              <div className="absolute bottom-4 left-4 right-4 flex space-x-2 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                      selectedImageIndex === index ? 'border-accent' : 'border-border'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
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
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 flex flex-col justify-between max-h-[90vh] overflow-y-auto">
            <div className="space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <h2 className="text-2xl font-playfair font-bold text-foreground">
                  {product.name}
                </h2>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-inter font-bold text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < Math.floor(product.rating) ? 'text-accent fill-current' : 'text-border'}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-foreground">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description || `Experience the luxurious essence of ${product.name}. This exquisite fragrance combines carefully selected notes to create a unique and memorable scent that embodies elegance and sophistication.`}
                </p>
              </div>

              {/* Scent Notes */}
              <div className="space-y-2">
                <h3 className="font-inter font-semibold text-foreground">Scent Notes</h3>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(product.scentNotes) ? product.scentNotes : product.scentNotes.split(', ')).map((note, index) => (
                    <span
                      key={index}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-inter"
                    >
                      {note.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`} />
                <span className={`text-sm font-inter font-medium ${product.inStock ? 'text-success' : 'text-destructive'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                {product.inStock && product.stockCount <= 5 && (
                  <span className="text-sm text-warning">
                    Only {product.stockCount} left
                  </span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-6 border-t border-border">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between">
                <span className="font-inter font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Icon name="Minus" size={16} />
                  </button>
                  <span className="px-4 py-2 font-mono font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-muted transition-colors"
                  >
                    <Icon name="Plus" size={16} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  fullWidth
                  onClick={handleAddToCart}
                  iconName="ShoppingCart"
                  iconPosition="left"
                  disabled={!product.inStock}
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
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

                <Link to="/product-detail" state={{ product }}>
                  <Button
                    variant="ghost"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={onClose}
                  >
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../contexts/CartContext';

const OrderSection = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // simulate delay
    addToCart({ ...product, quantity });
    setIsAddingToCart(false);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\n` +
      `Product: ${product.name}\n` +
      `Quantity: ${quantity}\n` +
      `Price: $${(product.price * quantity).toFixed(2)}\n\n` +
      `Please confirm availability and provide payment details. Thank you!`
    );
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="space-y-6 p-6 bg-muted/30 rounded-lg luxury-shadow">
      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-inter font-medium text-foreground">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {['30ml', '50ml', '100ml'].map((size, index) => (
            <button
              key={size}
              className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                index === 1 
                  ? 'border-accent bg-accent/10 text-accent' 
                  : 'border-border hover:border-accent/50 text-muted-foreground'
              }`}
            >
              <div className="text-center">
                <div className="font-inter font-medium">{size}</div>
                <div className="text-sm">
                  ${index === 0 ? '89' : index === 1 ? product.price : '189'}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="space-y-3">
        <h3 className="font-inter font-medium text-foreground">Quantity</h3>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="icon" onClick={decreaseQuantity} disabled={quantity <= 1} className="w-10 h-10">
            <Icon name="Minus" size={16} />
          </Button>
          <div className="flex-1 text-center">
            <span className="text-lg font-inter font-medium text-foreground">{quantity}</span>
          </div>
          <Button variant="outline" size="icon" onClick={increaseQuantity} className="w-10 h-10">
            <Icon name="Plus" size={16} />
          </Button>
        </div>
      </div>

      {/* Total Price */}
      <div className="p-4 bg-background rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <span className="font-inter font-medium text-foreground">Total</span>
          <span className="text-xl font-inter font-bold text-accent">
            ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button
          variant="outline"
          fullWidth
          onClick={handleAddToCart}
          loading={isAddingToCart}
          iconName="ShoppingBag"
          iconPosition="left"
          disabled={!product.inStock}
          className="h-12 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          {isAddingToCart ? 'Adding to Cart...' : 'Add to Cart'}
        </Button>

        <Button
          variant="default"
          fullWidth
          onClick={handleWhatsAppOrder}
          iconName="MessageCircle"
          iconPosition="left"
          disabled={!product.inStock}
          className="h-12 bg-success hover:bg-success/90 text-success-foreground pulse-gold"
        >
          Order via WhatsApp
        </Button>
      </div>

      {/* Delivery Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center space-x-3">
          <Icon name="Truck" size={20} className="text-accent" />
          <div>
            <div className="font-inter font-medium text-foreground">Free Shipping</div>
            <div className="text-sm text-muted-foreground">On orders over $100</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={20} className="text-accent" />
          <div>
            <div className="font-inter font-medium text-foreground">Authenticity Guaranteed</div>
            <div className="text-sm text-muted-foreground">100% genuine products</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={20} className="text-accent" />
          <div>
            <div className="font-inter font-medium text-foreground">30-Day Returns</div>
            <div className="text-sm text-muted-foreground">Easy return policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
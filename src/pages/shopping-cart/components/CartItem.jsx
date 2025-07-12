import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1) return;
    setIsUpdating(true);
    await new Promise(resolve => setTimeout(resolve, 300)); // Simulate API call
    onUpdateQuantity(item.id, newQuantity);
    setIsUpdating(false);
  };

  const handleRemove = () => {
    if (showRemoveConfirm) {
      onRemove(item.id);
      setShowRemoveConfirm(false);
    } else {
      setShowRemoveConfirm(true);
      setTimeout(() => setShowRemoveConfirm(false), 3000);
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-full sm:w-24 md:w-32 h-32 md:h-40 rounded-lg overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <div className="flex-1">
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-1 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {item.scentNotes.slice(0, 3).map((note, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-inter bg-muted text-muted-foreground"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-playfair font-semibold text-foreground">
                ${item.price.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">
                per bottle
              </p>
            </div>
          </div>

          {/* Quantity Controls and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-inter text-muted-foreground">Qty:</span>
              <div className="flex items-center border border-border rounded-lg bg-background">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  disabled={item.quantity <= 1 || isUpdating}
                  className="h-8 w-8 p-0 rounded-l-lg rounded-r-none border-r border-border"
                >
                  <Icon name="Minus" size={16} />
                </Button>
                
                <div className="flex items-center justify-center w-12 h-8 text-sm font-mono font-medium text-foreground bg-background">
                  {isUpdating ? (
                    <div className="w-3 h-3 border border-accent border-t-transparent rounded-full animate-spin" />
                  ) : (
                    item.quantity
                  )}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  disabled={isUpdating}
                  className="h-8 w-8 p-0 rounded-r-lg rounded-l-none border-l border-border"
                >
                  <Icon name="Plus" size={16} />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Subtotal */}
              <div className="text-right mr-4">
                <p className="text-sm text-muted-foreground">Subtotal</p>
                <p className="font-playfair font-semibold text-foreground">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <Button
                variant={showRemoveConfirm ? "destructive" : "ghost"}
                size="sm"
                onClick={handleRemove}
                iconName={showRemoveConfirm ? "Trash2" : "X"}
                iconPosition="left"
                className={`transition-all duration-200 ${
                  showRemoveConfirm ? 'animate-bounce-gentle' : ''
                }`}
              >
                {showRemoveConfirm ? 'Confirm' : 'Remove'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
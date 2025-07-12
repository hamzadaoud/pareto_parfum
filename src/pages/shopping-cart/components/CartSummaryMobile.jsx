import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CartSummaryMobile = ({ cartItems, onWhatsAppCheckout }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 100 ? 0 : 15;
  const total = subtotal + deliveryFee;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatWhatsAppMessage = () => {
    const orderDetails = cartItems.map(item => 
      `• ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    return encodeURIComponent(`Hello! I would like to place an order for the following perfumes:

${orderDetails}

Subtotal: $${subtotal.toFixed(2)}
Delivery: ${deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
Total: $${total.toFixed(2)}

Please confirm availability and provide payment details. Thank you!`);
  };

  const handleWhatsAppOrder = () => {
    const message = formatWhatsAppMessage();
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
    onWhatsAppCheckout();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border luxury-shadow-xl z-40 md:hidden">
      {/* Expandable Summary */}
      {isExpanded && (
        <div className="p-4 border-b border-border bg-card">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                Items ({totalItems})
              </span>
              <span className="font-mono font-medium text-foreground">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">
                Delivery
              </span>
              <span className="font-mono font-medium text-foreground">
                {deliveryFee === 0 ? (
                  <span className="text-success font-semibold">FREE</span>
                ) : (
                  `$${deliveryFee.toFixed(2)}`
                )}
              </span>
            </div>

            {subtotal < 100 && (
              <div className="bg-muted rounded-lg p-2">
                <p className="text-xs text-muted-foreground text-center">
                  Add ${(100 - subtotal).toFixed(2)} more for free delivery
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Action Bar */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Order Summary</span>
            <Icon 
              name={isExpanded ? "ChevronDown" : "ChevronUp"} 
              size={16}
              className="transition-transform duration-200"
            />
          </button>
          
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="font-playfair font-bold text-lg text-foreground">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>

        <Button
          variant="default"
          fullWidth
          size="lg"
          onClick={handleWhatsAppOrder}
          iconName="MessageCircle"
          iconPosition="left"
          className="bg-success hover:bg-success/90 text-success-foreground font-semibold"
        >
          Checkout via WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default CartSummaryMobile;
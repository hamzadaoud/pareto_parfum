import React from 'react';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ cartItems, onWhatsAppCheckout, onContinueShopping }) => {
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
    <div className="bg-card border border-border rounded-lg p-6 luxury-shadow sticky top-24">
      <h2 className="font-playfair font-bold text-xl text-foreground mb-6">
        Order Summary
      </h2>

      {/* Order Details */}
      <div className="space-y-4 mb-6">
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
          <div className="bg-muted rounded-lg p-3">
            <p className="text-xs text-muted-foreground text-center">
              Add ${(100 - subtotal).toFixed(2)} more for free delivery
            </p>
          </div>
        )}

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="font-playfair font-semibold text-lg text-foreground">
              Total
            </span>
            <span className="font-playfair font-bold text-xl text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="bg-muted rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-accent-foreground text-xs font-bold">🚚</span>
          </div>
          <div>
            <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
              Estimated Delivery
            </h4>
            <p className="text-xs text-muted-foreground">
              3-5 business days via premium courier
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Signature required for luxury items
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
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

        <Button
          variant="outline"
          fullWidth
          onClick={onContinueShopping}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Continue Shopping
        </Button>
      </div>

      {/* Security Badge */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
            <span className="text-success-foreground text-xs">✓</span>
          </div>
          <span>Secure WhatsApp checkout</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
// src/pages/ShoppingCart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useCart } from '../../contexts/CartContext';
import Header from '../../components/ui/Header';
import Breadcrumbs from "@components/ui/Breadcrumbs";
import Icon from '../../components/AppIcon';
import Button from "@components/ui/Button";  // Fixed import
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import EmptyCart from './components/EmptyCart';
import CartSummaryMobile from './components/CartSummaryMobile';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();

  const handleWhatsAppCheckout = () => {
    console.log('WhatsApp checkout initiated');
  };

  const handleContinueShopping = () => {
    navigate('/product-catalog');
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Shopping Cart', path: '/shopping-cart' }
  ];

  return (
    <>
      <Helmet>
        <title>{`Shopping Cart (${cartCount}) - PARETO PARFUM`}</title>
        <meta name="description" content="Review your luxury perfume selections and proceed to checkout via WhatsApp" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 lg:px-8 py-8 pb-32 md:pb-8">
          <Breadcrumbs customItems={breadcrumbItems} />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-2">
                Shopping Cart
              </h1>
              {cartItems.length > 0 && (
                <p className="text-muted-foreground">
                  {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
                </p>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="hidden md:flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={handleContinueShopping}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Continue Shopping
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={() => {
                    const message = encodeURIComponent('Hello! I need help with my perfume selection.');
                    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                  }}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-success hover:text-success/80"
                >
                  Get Help
                </Button>
              </div>
            )}
          </div>

          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>

                <div className="mt-8 md:hidden">
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="outline"
                      fullWidth
                      onClick={handleContinueShopping}
                      iconName="ArrowLeft"
                      iconPosition="left"
                    >
                      Continue Shopping
                    </Button>
                    
                    <Button
                      variant="ghost"
                      fullWidth
                      onClick={() => {
                        const message = encodeURIComponent('Hello! I need help with my perfume selection.');
                        window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
                      }}
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="text-success hover:text-success/80"
                    >
                      Get Help via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 hidden lg:block">
                <OrderSummary
                  cartItems={cartItems}
                  onWhatsAppCheckout={handleWhatsAppCheckout}
                  onContinueShopping={handleContinueShopping}
                />
              </div>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Icon name="Shield" size={20} className="text-accent-foreground" />
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
                    Secure Checkout
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    WhatsApp encrypted messaging
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Icon name="Truck" size={20} className="text-accent-foreground" />
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
                    Fast Delivery
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    3-5 business days
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Icon name="Award" size={20} className="text-accent-foreground" />
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
                    Authentic Products
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    100% genuine luxury
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                    <Icon name="RotateCcw" size={20} className="text-accent-foreground" />
                  </div>
                  <h4 className="font-inter font-semibold text-sm text-foreground mb-1">
                    Easy Returns
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    30-day return policy
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Mobile Cart Summary */}
        {cartItems.length > 0 && (
          <CartSummaryMobile
            cartItems={cartItems}
            onWhatsAppCheckout={handleWhatsAppCheckout}
          />
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
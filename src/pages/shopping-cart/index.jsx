import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import EmptyCart from './components/EmptyCart';
import CartSummaryMobile from './components/CartSummaryMobile';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock cart data
  const mockCartItems = [
    {
      id: 1,
      name: "Midnight Elegance",
      description: "A sophisticated blend of dark berries, vanilla, and sandalwood that captures the essence of luxury",
      price: 185,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      scentNotes: ["Dark Berries", "Vanilla", "Sandalwood", "Amber"]
    },
    {
      id: 2,
      name: "Garden Whisper",
      description: "Fresh floral bouquet with hints of jasmine, rose petals, and morning dew",
      price: 165,
      quantity: 1,
      image: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?w=400&h=500&fit=crop",
      scentNotes: ["Jasmine", "Rose Petals", "Morning Dew", "White Musk"]
    },
    {
      id: 3,
      name: "Ocean Breeze",
      description: "Refreshing aquatic fragrance with sea salt, citrus, and marine accords",
      price: 155,
      quantity: 1,
      image: "https://images.pixabay.com/photo/2020/05/11/06/20/perfume-5156966_1280.jpg?w=400&h=500&fit=crop",
      scentNotes: ["Sea Salt", "Bergamot", "Marine Accord", "Driftwood"]
    }
  ];

  useEffect(() => {
    // Simulate loading cart data
    const loadCartData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setCartItems(mockCartItems);
      setIsLoading(false);
    };

    loadCartData();
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleWhatsAppCheckout = () => {
    // Analytics or tracking can be added here
    console.log('WhatsApp checkout initiated');
  };

  const handleContinueShopping = () => {
    navigate('/product-catalog');
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Shopping Cart', path: '/shopping-cart' }
  ];

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Shopping Cart - PARETO PARFUM</title>
          <meta name="description" content="Review your luxury perfume selections and proceed to checkout via WhatsApp" />
        </Helmet>
        
        <div className="min-h-screen bg-background">
          <Header />
          
          <main className="container mx-auto px-4 lg:px-8 py-8">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-64 mb-6"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-6">
                      <div className="flex gap-4">
                        <div className="w-32 h-40 bg-muted rounded-lg"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-6 bg-muted rounded w-3/4"></div>
                          <div className="h-4 bg-muted rounded w-full"></div>
                          <div className="h-4 bg-muted rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="h-6 bg-muted rounded w-32 mb-6"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-12 bg-muted rounded mt-6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Shopping Cart ({cartItems.length}) - PARETO PARFUM</title>
        <meta name="description" content="Review your luxury perfume selections and proceed to checkout via WhatsApp" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 lg:px-8 py-8 pb-32 md:pb-8">
          {/* Breadcrumbs */}
          <Breadcrumbs customItems={breadcrumbItems} />

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="font-playfair font-bold text-3xl md:text-4xl text-foreground mb-2">
                Shopping Cart
              </h1>
              {cartItems.length > 0 && (
                <p className="text-muted-foreground">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
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

          {/* Cart Content */}
          {cartItems.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </div>

                {/* Additional Actions (Mobile) */}
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

              {/* Order Summary (Desktop) */}
              <div className="lg:col-span-1 hidden lg:block">
                <OrderSummary
                  cartItems={cartItems}
                  onWhatsAppCheckout={handleWhatsAppCheckout}
                  onContinueShopping={handleContinueShopping}
                />
              </div>
            </div>
          )}

          {/* Trust Signals */}
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
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import OrderSection from './components/OrderSection';
import RelatedProducts from './components/RelatedProducts';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    name: "Eternal Essence",
    price: 129,
    originalPrice: 149,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d32?w=800&h=800&fit=crop",
    description: "A captivating blend of floral and woody notes that embodies timeless elegance and sophistication. Perfect for the modern individual who appreciates luxury and refinement.",
    inStock: true,
    rating: 4.8,
    reviews: 127
  };

  const breadcrumbItems = [
    { label: 'Home', path: '/homepage' },
    { label: 'Perfumes', path: '/product-catalog' },
    { label: product.name, path: '/product-detail' }
  ];

  const handleAddToCart = (product, quantity) => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    };
    
    setCartItems(prev => [...prev, newItem]);
    setShowAddedToCart(true);
    
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 3000);
  };

  const handleBackToProducts = () => {
    navigate('/product-catalog');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <Breadcrumbs customItems={breadcrumbItems} />

        {/* Back Button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleBackToProducts}
            iconName="ArrowLeft"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Back to Perfumes
          </Button>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Product Images - Left Column */}
          <div className="lg:col-span-6">
            <ProductImageGallery product={product} />
          </div>

          {/* Product Information - Right Column */}
          <div className="lg:col-span-6 space-y-8">
            <ProductInfo product={product} />
            <OrderSection 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <RelatedProducts currentProductId={product.id} />
        </div>
      </main>

      {/* Added to Cart Notification */}
      {showAddedToCart && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-bounce-gentle">
          <div className="bg-success text-success-foreground px-6 py-3 rounded-lg luxury-shadow-lg flex items-center space-x-3">
            <Icon name="CheckCircle" size={20} />
            <span className="font-inter font-medium">Added to cart successfully!</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/shopping-cart')}
              className="text-success-foreground hover:text-success-foreground/80 underline"
            >
              View Cart
            </Button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-40 lg:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={() => {
            const message = encodeURIComponent(
              `Hello! I'm interested in ${product.name} ($${product.price}). Please provide more details.`
            );
            window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
          }}
          className="h-14 w-14 rounded-full bg-success hover:bg-success/90 luxury-shadow-lg pulse-gold"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import FilterSidebar from './components/FilterSidebar';
import FilterChips from './components/FilterChips';
import SortDropdown from './components/SortDropdown';
import ProductGrid from './components/ProductGrid';
import QuickViewModal from './components/QuickViewModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ProductCatalog = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    scentFamilies: [],
    priceRanges: [],
    features: []
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "Midnight Elegance",
      price: 285,
      originalPrice: 320,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
      images: [
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400"
      ],
      scentNotes: ["Black Rose", "Vanilla", "Sandalwood", "Amber"],
      rating: 4.8,
      reviewCount: 127,
      isNew: false,
      isBestseller: true,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 12,
      scentFamily: 'oriental',
      priceRange: '200-300',
      features: ['bestseller', 'long-lasting'],
      description: `A sophisticated evening fragrance that captures the essence of midnight luxury. This exquisite blend opens with mysterious black rose, evolving into warm vanilla and grounding sandalwood base notes.`
    },
    {
      id: 2,
      name: "Citrus Dawn",
      price: 165,
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400",
      images: [
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400"
      ],
      scentNotes: ["Bergamot", "Lemon", "White Tea", "Musk"],
      rating: 4.6,
      reviewCount: 89,
      isNew: true,
      isBestseller: false,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 25,
      scentFamily: 'citrus',
      priceRange: '100-200',
      features: ['new-arrival', 'unisex'],
      description: `A refreshing morning fragrance that awakens the senses with vibrant citrus notes and clean white tea undertones.`
    },
    {
      id: 3,
      name: "Royal Garden",
      price: 425,
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
      images: [
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
        "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400"
      ],
      scentNotes: ["Peony", "Jasmine", "Cedar", "White Musk"],
      rating: 4.9,
      reviewCount: 203,
      isNew: false,
      isBestseller: true,
      isLimitedEdition: true,
      inStock: true,
      stockCount: 3,
      scentFamily: 'floral',
      priceRange: '300-500',
      features: ['bestseller', 'limited-edition', 'long-lasting'],
      description: `An opulent floral masterpiece inspired by English rose gardens, featuring rare peony and jasmine blooms.`
    },
    {
      id: 4,
      name: "Ocean Breeze",
      price: 195,
      image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400",
      images: [
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
      ],
      scentNotes: ["Sea Salt", "Driftwood", "Aquatic Notes", "Ambergris"],
      rating: 4.4,
      reviewCount: 156,
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 18,
      scentFamily: 'fresh',
      priceRange: '100-200',
      features: ['unisex'],
      description: `Capture the essence of coastal serenity with this fresh aquatic fragrance that evokes ocean waves and sea breeze.`
    },
    {
      id: 5,
      name: "Spiced Amber",
      price: 340,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400"
      ],
      scentNotes: ["Cardamom", "Cinnamon", "Amber", "Oud"],
      rating: 4.7,
      reviewCount: 92,
      isNew: true,
      isBestseller: false,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 8,
      scentFamily: 'spicy',
      priceRange: '300-500',
      features: ['new-arrival', 'long-lasting'],
      description: `A warm and exotic blend of precious spices and amber, creating an intoxicating oriental experience.`
    },
    {
      id: 6,
      name: "Forest Whisper",
      price: 275,
      image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400",
      images: [
        "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400"
      ],
      scentNotes: ["Pine", "Cedarwood", "Moss", "Vetiver"],
      rating: 4.5,
      reviewCount: 74,
      isNew: false,
      isBestseller: false,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 15,
      scentFamily: 'woody',
      priceRange: '200-300',
      features: ['unisex', 'long-lasting'],
      description: `Immerse yourself in the tranquility of an ancient forest with this earthy, woody composition.`
    },
    {
      id: 7,
      name: "Golden Sunset",
      price: 580,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
      images: [
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
        "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400"
      ],
      scentNotes: ["Saffron", "Rose Gold", "Oud", "Precious Woods"],
      rating: 4.9,
      reviewCount: 45,
      isNew: false,
      isBestseller: true,
      isLimitedEdition: true,
      inStock: true,
      stockCount: 2,
      scentFamily: 'oriental',
      priceRange: 'over-500',
      features: ['bestseller', 'limited-edition', 'long-lasting'],
      description: `The pinnacle of luxury perfumery, featuring rare saffron and precious oud in perfect harmony.`
    },
    {
      id: 8,
      name: "Spring Bloom",
      price: 145,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400"
      ],
      scentNotes: ["Cherry Blossom", "Lily", "Green Leaves", "Light Musk"],
      rating: 4.3,
      reviewCount: 118,
      isNew: true,
      isBestseller: false,
      isLimitedEdition: false,
      inStock: true,
      stockCount: 22,
      scentFamily: 'floral',
      priceRange: '100-200',
      features: ['new-arrival'],
      description: `Celebrate the renewal of spring with this delicate floral bouquet that captures blooming gardens.`
    }
  ];

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...allProducts];

    // Apply scent family filters
    if (filters.scentFamilies.length > 0) {
      filtered = filtered.filter(product => 
        filters.scentFamilies.includes(product.scentFamily)
      );
    }

    // Apply price range filters
    if (filters.priceRanges.length > 0) {
      filtered = filtered.filter(product => 
        filters.priceRanges.includes(product.priceRange)
      );
    }

    // Apply feature filters
    if (filters.features.length > 0) {
      filtered = filtered.filter(product => 
        filters.features.some(feature => product.features.includes(feature))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'bestseller':
        filtered.sort((a, b) => b.isBestseller - a.isBestseller);
        break;
      default:
        // relevance - keep original order
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  return (
    <>
      <Helmet>
        <title>Luxury Perfume Collection | PARETO PARFUM</title>
        <meta name="description" content="Discover our exclusive collection of luxury perfumes. Browse by scent family, price range, and features. Premium fragrances with WhatsApp ordering." />
        <meta name="keywords" content="luxury perfumes, designer fragrances, premium scents, perfume collection, exclusive perfumes" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 lg:px-8 py-6">
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Luxury Perfume Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Discover our curated selection of premium fragrances, each crafted with the finest ingredients 
              and designed to create unforgettable olfactory experiences.
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <FilterSidebar
              isOpen={false}
              onClose={() => {}}
              filters={filters}
              onFilterChange={setFilters}
              isMobile={false}
            />

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile Filter Button & Sort */}
              <div className="flex items-center justify-between mb-6 md:hidden">
                <Button
                  variant="outline"
                  onClick={() => setIsMobileFilterOpen(true)}
                  iconName="Filter"
                  iconPosition="left"
                >
                  Filters
                </Button>
                <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
              </div>

              {/* Desktop Sort */}
              <div className="hidden md:flex items-center justify-between mb-6">
                <div className="flex-1">
                  <FilterChips
                    filters={filters}
                    onFilterChange={setFilters}
                    totalResults={filteredProducts.length}
                  />
                </div>
                <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
              </div>

              {/* Mobile Filter Chips */}
              <div className="md:hidden">
                <FilterChips
                  filters={filters}
                  onFilterChange={setFilters}
                  totalResults={filteredProducts.length}
                />
              </div>

              {/* Product Grid */}
              <ProductGrid
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                onQuickView={handleQuickView}
              />

              {/* Load More Button (for future infinite scroll) */}
              {filteredProducts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="ChevronDown"
                    iconPosition="right"
                    className="px-8"
                  >
                    Load More Perfumes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          filters={filters}
          onFilterChange={setFilters}
          isMobile={true}
        />

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          isOpen={isQuickViewOpen}
          onClose={closeQuickView}
          onAddToCart={handleAddToCart}
        />

        {/* Floating Cart Button (Mobile) */}
        {cartItems.length > 0 && (
          <div className="fixed bottom-6 right-6 z-40 md:hidden">
            <Button
              variant="default"
              size="icon"
              className="h-14 w-14 rounded-full bg-accent hover:bg-accent/90 luxury-shadow-lg relative"
            >
              <Icon name="ShoppingBag" size={24} />
              <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-mono font-medium flex items-center justify-center">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCatalog;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange, isMobile = false }) => {
  const [expandedSections, setExpandedSections] = useState({
    scent: true,
    price: true,
    features: true
  });

  const scentFamilies = [
    { id: 'floral', label: 'Floral', count: 24 },
    { id: 'woody', label: 'Woody', count: 18 },
    { id: 'citrus', label: 'Citrus', count: 15 },
    { id: 'oriental', label: 'Oriental', count: 12 },
    { id: 'fresh', label: 'Fresh', count: 20 },
    { id: 'spicy', label: 'Spicy', count: 8 }
  ];

  const priceRanges = [
    { id: 'under-100', label: 'Under $100', min: 0, max: 100, count: 12 },
    { id: '100-200', label: '$100 - $200', min: 100, max: 200, count: 28 },
    { id: '200-300', label: '$200 - $300', min: 200, max: 300, count: 35 },
    { id: '300-500', label: '$300 - $500', min: 300, max: 500, count: 22 },
    { id: 'over-500', label: 'Over $500', min: 500, max: 9999, count: 8 }
  ];

  const features = [
    { id: 'bestseller', label: 'Bestseller', count: 15 },
    { id: 'new-arrival', label: 'New Arrival', count: 8 },
    { id: 'limited-edition', label: 'Limited Edition', count: 5 },
    { id: 'unisex', label: 'Unisex', count: 18 },
    { id: 'long-lasting', label: 'Long Lasting', count: 42 }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleScentChange = (scentId, checked) => {
    const newScents = checked 
      ? [...filters.scentFamilies, scentId]
      : filters.scentFamilies.filter(id => id !== scentId);
    onFilterChange({ ...filters, scentFamilies: newScents });
  };

  const handlePriceChange = (priceId, checked) => {
    const newPrices = checked 
      ? [...filters.priceRanges, priceId]
      : filters.priceRanges.filter(id => id !== priceId);
    onFilterChange({ ...filters, priceRanges: newPrices });
  };

  const handleFeatureChange = (featureId, checked) => {
    const newFeatures = checked 
      ? [...filters.features, featureId]
      : filters.features.filter(id => id !== featureId);
    onFilterChange({ ...filters, features: newFeatures });
  };

  const clearAllFilters = () => {
    onFilterChange({
      scentFamilies: [],
      priceRanges: [],
      features: []
    });
  };

  const hasActiveFilters = filters.scentFamilies.length > 0 || 
                          filters.priceRanges.length > 0 || 
                          filters.features.length > 0;

  const sidebarContent = (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-lg font-playfair font-bold text-foreground">Filters</h2>
        <div className="flex items-center space-x-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              Clear All
            </Button>
          )}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <Icon name="X" size={20} />
            </Button>
          )}
        </div>
      </div>

      {/* Filter Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Scent Family */}
        <div className="border-b border-border">
          <button
            onClick={() => toggleSection('scent')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-inter font-medium text-foreground">Scent Family</span>
            <Icon 
              name={expandedSections.scent ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              className="text-muted-foreground"
            />
          </button>
          {expandedSections.scent && (
            <div className="px-6 pb-6 space-y-3">
              {scentFamilies.map((scent) => (
                <div key={scent.id} className="flex items-center justify-between">
                  <Checkbox
                    label={scent.label}
                    checked={filters.scentFamilies.includes(scent.id)}
                    onChange={(e) => handleScentChange(scent.id, e.target.checked)}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground font-mono">
                    {scent.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price Range */}
        <div className="border-b border-border">
          <button
            onClick={() => toggleSection('price')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-inter font-medium text-foreground">Price Range</span>
            <Icon 
              name={expandedSections.price ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              className="text-muted-foreground"
            />
          </button>
          {expandedSections.price && (
            <div className="px-6 pb-6 space-y-3">
              {priceRanges.map((price) => (
                <div key={price.id} className="flex items-center justify-between">
                  <Checkbox
                    label={price.label}
                    checked={filters.priceRanges.includes(price.id)}
                    onChange={(e) => handlePriceChange(price.id, e.target.checked)}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground font-mono">
                    {price.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        <div>
          <button
            onClick={() => toggleSection('features')}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-inter font-medium text-foreground">Features</span>
            <Icon 
              name={expandedSections.features ? "ChevronUp" : "ChevronDown"} 
              size={16} 
              className="text-muted-foreground"
            />
          </button>
          {expandedSections.features && (
            <div className="px-6 pb-6 space-y-3">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center justify-between">
                  <Checkbox
                    label={feature.label}
                    checked={filters.features.includes(feature.id)}
                    onChange={(e) => handleFeatureChange(feature.id, e.target.checked)}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground font-mono">
                    {feature.count}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="fixed top-0 left-0 h-full w-80 luxury-shadow-xl">
              {sidebarContent}
            </div>
          </div>
        )}
      </>
    );
  }

  // Desktop sidebar
  return (
    <div className="hidden md:block w-80 luxury-shadow border-r border-border">
      {sidebarContent}
    </div>
  );
};

export default FilterSidebar;
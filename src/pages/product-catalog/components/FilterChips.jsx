import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterChips = ({ filters, onFilterChange, totalResults }) => {
  const scentFamilyLabels = {
    'floral': 'Floral',
    'woody': 'Woody',
    'citrus': 'Citrus',
    'oriental': 'Oriental',
    'fresh': 'Fresh',
    'spicy': 'Spicy'
  };

  const priceRangeLabels = {
    'under-100': 'Under $100',
    '100-200': '$100-$200',
    '200-300': '$200-$300',
    '300-500': '$300-$500',
    'over-500': 'Over $500'
  };

  const featureLabels = {
    'bestseller': 'Bestseller',
    'new-arrival': 'New Arrival',
    'limited-edition': 'Limited Edition',
    'unisex': 'Unisex',
    'long-lasting': 'Long Lasting'
  };

  const removeFilter = (type, value) => {
    const newFilters = { ...filters };
    newFilters[type] = newFilters[type].filter(item => item !== value);
    onFilterChange(newFilters);
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

  if (!hasActiveFilters) {
    return (
      <div className="flex items-center justify-between py-4">
        <span className="text-sm text-muted-foreground font-inter">
          Showing all {totalResults} perfumes
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-3 py-4">
      {/* Results Count and Clear All */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground font-inter">
          {totalResults} perfumes found
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          iconName="X"
          iconPosition="left"
          className="text-muted-foreground hover:text-foreground"
        >
          Clear All
        </Button>
      </div>

      {/* Active Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {/* Scent Family Chips */}
        {filters.scentFamilies.map((scent) => (
          <div
            key={`scent-${scent}`}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-3 py-1 text-sm font-inter font-medium"
          >
            <span>{scentFamilyLabels[scent]}</span>
            <button
              onClick={() => removeFilter('scentFamilies', scent)}
              className="hover:bg-accent/20 rounded-full p-0.5 transition-colors"
            >
              <Icon name="X" size={12} />
            </button>
          </div>
        ))}

        {/* Price Range Chips */}
        {filters.priceRanges.map((price) => (
          <div
            key={`price-${price}`}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-sm font-inter font-medium"
          >
            <span>{priceRangeLabels[price]}</span>
            <button
              onClick={() => removeFilter('priceRanges', price)}
              className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
            >
              <Icon name="X" size={12} />
            </button>
          </div>
        ))}

        {/* Feature Chips */}
        {filters.features.map((feature) => (
          <div
            key={`feature-${feature}`}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-3 py-1 text-sm font-inter font-medium"
          >
            <span>{featureLabels[feature]}</span>
            <button
              onClick={() => removeFilter('features', feature)}
              className="hover:bg-secondary/20 rounded-full p-0.5 transition-colors"
            >
              <Icon name="X" size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterChips;
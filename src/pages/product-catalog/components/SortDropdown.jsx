import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sortOptions = [
    { value: 'relevance', label: 'Relevance', icon: 'Target' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'bestseller', label: 'Best Sellers', icon: 'TrendingUp' }
  ];

  const currentSort = sortOptions.find(option => option.value === sortBy) || sortOptions[0];

  const handleSortSelect = (value) => {
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        iconName="ChevronDown"
        iconPosition="right"
        className="min-w-[180px] justify-between"
      >
        <div className="flex items-center space-x-2">
          <Icon name={currentSort.icon} size={16} />
          <span className="hidden sm:inline">{currentSort.label}</span>
          <span className="sm:hidden">Sort</span>
        </div>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-lg luxury-shadow-lg z-20">
            <div className="py-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSortSelect(option.value)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted transition-colors ${
                    sortBy === option.value ? 'bg-accent/10 text-accent' : 'text-foreground'
                  }`}
                >
                  <Icon 
                    name={option.icon} 
                    size={16} 
                    className={sortBy === option.value ? 'text-accent' : 'text-muted-foreground'}
                  />
                  <span className="font-inter font-medium">{option.label}</span>
                  {sortBy === option.value && (
                    <Icon name="Check" size={16} className="ml-auto text-accent" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortDropdown;
import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductImageGallery = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=800&fit=crop"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative bg-muted rounded-lg overflow-hidden luxury-shadow">
        <div className="aspect-square relative">
          <Image
            src={images[currentImageIndex]}
            alt={`${product.name} - View ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover cursor-zoom-in transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            onClick={toggleZoom}
          />
          
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 w-10 h-10"
          >
            <Icon name="ChevronLeft" size={20} />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 w-10 h-10"
          >
            <Icon name="ChevronRight" size={20} />
          </Button>

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleZoom}
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90 w-10 h-10"
            >
              <Icon name={isZoomed ? "ZoomOut" : "ZoomIn"} size={16} />
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-sm font-mono text-foreground">
              {currentImageIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              currentImageIndex === index
                ? 'border-accent luxury-shadow'
                : 'border-border hover:border-accent/50'
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* 360° View Button */}
      <Button
        variant="outline"
        fullWidth
        iconName="RotateCcw"
        iconPosition="left"
        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
      >
        360° View
      </Button>
    </div>
  );
};

export default ProductImageGallery;
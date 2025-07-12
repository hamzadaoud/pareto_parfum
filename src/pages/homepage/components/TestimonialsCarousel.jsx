import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Fashion Designer",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      quote: "PARETO PARFUM has completely transformed my fragrance collection. The Midnight Elegance scent is absolutely divine and receives compliments everywhere I go. The quality is unmatched!"
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Business Executive",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      quote: "As someone who appreciates luxury, I can confidently say that PARETO PARFUM delivers exceptional quality. The Forest Whisper fragrance has become my signature scent."
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Art Curator",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      quote: "The attention to detail in every aspect, from the fragrance composition to the packaging, is remarkable. Golden Dawn is my go-to perfume for special occasions."
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Luxury Consultant",
      image: "https://randomuser.me/api/portraits/men/38.jpg",
      rating: 5,
      quote: "I've tried many luxury perfume brands, but PARETO PARFUM stands out for its unique scent profiles and exceptional longevity. Highly recommended for discerning customers."
    },
    {
      id: 5,
      name: "Isabella Martinez",
      role: "Interior Designer",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      rating: 5,
      quote: "Velvet Rose is absolutely stunning! The fragrance evolves beautifully throughout the day, and the customer service through WhatsApp made ordering so convenient."
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-border"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter leading-relaxed">
            Discover why luxury fragrance enthusiasts choose PARETO PARFUM for their signature scents.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-lg luxury-shadow-lg p-8 lg:p-12 text-center min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden luxury-shadow">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Rating Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-lg lg:text-xl text-foreground font-inter leading-relaxed mb-6 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author Info */}
            <div>
              <h4 className="text-xl font-playfair font-semibold text-foreground mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm text-muted-foreground font-inter">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200 luxury-shadow"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-200 luxury-shadow"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-accent scale-110' :'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">500+</div>
            <p className="text-sm text-muted-foreground font-inter">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">4.9</div>
            <p className="text-sm text-muted-foreground font-inter">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-accent mb-2">98%</div>
            <p className="text-sm text-muted-foreground font-inter">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
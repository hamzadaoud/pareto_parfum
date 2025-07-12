import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useCart } from '../../contexts/CartContext'; // ✅ use the context to get real cart data

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { cartItems } = useCart(); // ✅ Get cart items from context
  const cartItemCount = cartItems.length; // ✅ Count total items

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Perfumes', path: '/product-catalog', icon: 'Sparkles' },
    { label: 'Our Story', path: '/about-us', icon: 'Heart' },
    { label: 'Contact', path: '/contact', icon: 'MessageCircle' },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your luxury perfumes.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/homepage" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
                  <circle cx="16" cy="16" r="14" fill="currentColor" />
                  <circle cx="16" cy="16" r="8" fill="var(--color-accent)" />
                  <circle cx="16" cy="16" r="4" fill="currentColor" />
                </svg>
                <span className="ml-2 text-xl font-playfair font-bold text-primary tracking-tight">
                  PARETO PARFUM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-inter font-medium transition-colors duration-200 hover:text-accent ${
                    isActivePath(item.path) ? 'text-accent border-b-2 border-accent pb-1' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleWhatsAppContact}
                iconName="MessageCircle"
                iconPosition="left"
                className="text-success hover:text-success/80"
              >
                WhatsApp
              </Button>

              <Link to="/shopping-cart" className="relative">
                <Button
                  variant={isActivePath('/shopping-cart') ? 'default' : 'ghost'}
                  size="icon"
                  className="relative"
                >
                  <Icon name="ShoppingBag" size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-mono font-medium flex items-center justify-center animate-bounce-gentle">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Link to="/shopping-cart" className="relative">
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="ShoppingBag" size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs font-mono font-medium flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-foreground"
              >
                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleMobileMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-background luxury-shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="text-lg font-playfair font-bold text-primary">Menu</span>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <Icon name="X" size={24} />
                </Button>
              </div>

              {/* Mobile Navigation Items */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={toggleMobileMenu}
                      className={`flex items-center space-x-3 text-base font-inter font-medium transition-colors duration-200 hover:text-accent ${
                        isActivePath(item.path) ? 'text-accent' : 'text-foreground'
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-border">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    handleWhatsAppContact();
                    toggleMobileMenu();
                  }}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-success border-success hover:bg-success hover:text-success-foreground"
                >
                  Contact via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button
          variant="default"
          size="icon"
          onClick={handleWhatsAppContact}
          className="h-14 w-14 rounded-full bg-success hover:bg-success/90 luxury-shadow-lg pulse-gold"
        >
          <Icon name="MessageCircle" size={24} color="white" />
        </Button>
      </div>
    </>
  );
};

export default Header;

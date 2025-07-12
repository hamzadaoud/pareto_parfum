import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-lg p-8 luxury-shadow animate-bounce-gentle">
        <div className="text-center">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Check" size={32} color="white" />
          </div>
          <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-muted-foreground font-inter">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg p-6 lg:p-8 luxury-shadow">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-playfair font-bold text-foreground mb-2">
          Get in Touch
        </h2>
        <p className="text-muted-foreground font-inter">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleInputChange}
          error={errors.name}
          required
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
          description="We'll never share your email with anyone else"
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-inter font-medium text-foreground">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            placeholder="Tell us about your inquiry or how we can help you..."
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md font-inter text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors duration-200 resize-none ${
              errors.message 
                ? 'border-destructive focus:ring-destructive' :'border-border'
            }`}
          />
          {errors.message && (
            <p className="text-sm text-destructive font-inter">{errors.message}</p>
          )}
          <p className="text-xs text-muted-foreground font-inter">
            Minimum 10 characters required
          </p>
        </div>

        <Button
          type="submit"
          variant="default"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="font-inter font-medium"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
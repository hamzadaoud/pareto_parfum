import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StoreInformation = () => {
  const storeDetails = {
    address: "123 Luxury Avenue, Beverly Hills, CA 90210",
    phone: "+1 (555) 123-4567",
    email: "hello@paretoparfum.com",
    hours: [
      { day: "Monday - Friday", time: "10:00 AM - 8:00 PM" },
      { day: "Saturday", time: "10:00 AM - 9:00 PM" },
      { day: "Sunday", time: "12:00 PM - 6:00 PM" }
    ]
  };

  const handlePhoneCall = () => {
    window.open(`tel:${storeDetails.phone}`, '_self');
  };

  const handleEmailContact = () => {
    window.open(`mailto:${storeDetails.email}?subject=Inquiry about PARETO PARFUM`, '_self');
  };

  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(storeDetails.address);
    window.open(`https://maps.google.com?q=${encodedAddress}`, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Store Hours */}
      <div className="bg-card rounded-lg p-6 luxury-shadow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <Icon name="Clock" size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-playfair font-bold text-foreground">Store Hours</h3>
        </div>
        
        <div className="space-y-3">
          {storeDetails.hours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="font-inter font-medium text-foreground">{schedule.day}</span>
              <span className="font-inter text-muted-foreground">{schedule.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-card rounded-lg p-6 luxury-shadow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-playfair font-bold text-foreground">Contact Details</h3>
        </div>
        
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start space-x-3">
            <Icon name="MapPin" size={18} className="text-muted-foreground mt-1" />
            <div className="flex-1">
              <p className="font-inter text-foreground">{storeDetails.address}</p>
              <Button
                variant="link"
                size="sm"
                onClick={handleDirections}
                iconName="ExternalLink"
                iconPosition="right"
                className="p-0 h-auto text-accent hover:text-accent/80 font-inter"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={18} className="text-muted-foreground" />
            <div className="flex-1">
              <p className="font-inter text-foreground">{storeDetails.phone}</p>
              <Button
                variant="link"
                size="sm"
                onClick={handlePhoneCall}
                iconName="Phone"
                iconPosition="right"
                className="p-0 h-auto text-accent hover:text-accent/80 font-inter"
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={18} className="text-muted-foreground" />
            <div className="flex-1">
              <p className="font-inter text-foreground">{storeDetails.email}</p>
              <Button
                variant="link"
                size="sm"
                onClick={handleEmailContact}
                iconName="ExternalLink"
                iconPosition="right"
                className="p-0 h-auto text-accent hover:text-accent/80 font-inter"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-card rounded-lg p-6 luxury-shadow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <Icon name="Map" size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-playfair font-bold text-foreground">Find Us</h3>
        </div>
        
        <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="PARETO PARFUM Store Location"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=34.0736,-118.4004&z=15&output=embed"
            className="border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default StoreInformation;
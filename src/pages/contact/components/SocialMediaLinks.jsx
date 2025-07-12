import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialMediaLinks = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/paretoparfum',
      description: 'Follow us for daily fragrance inspiration',
      followers: '25.4K',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/paretoparfum',
      description: 'Join our luxury perfume community',
      followers: '18.2K',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'TikTok',
      icon: 'Music',
      url: 'https://tiktok.com/@paretoparfum',
      description: 'Discover fragrance trends and tips',
      followers: '12.8K',
      color: 'from-black to-gray-800'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-card rounded-lg p-6 luxury-shadow">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <Icon name="Share2" size={20} className="text-accent" />
        </div>
        <h3 className="text-lg font-playfair font-bold text-foreground">Follow Us</h3>
      </div>
      
      <p className="text-muted-foreground font-inter mb-6">
        Stay connected with PARETO PARFUM for the latest fragrance collections, behind-the-scenes content, and exclusive offers.
      </p>
      
      <div className="space-y-4">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="group cursor-pointer"
            onClick={() => handleSocialClick(platform.url)}
          >
            <div className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:border-accent/30 transition-all duration-200 hover:luxury-shadow">
              <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <Icon name={platform.icon} size={24} color="white" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-inter font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                    {platform.name}
                  </h4>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-mono">
                    {platform.followers}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-inter">
                  {platform.description}
                </p>
              </div>
              
              <Icon 
                name="ExternalLink" 
                size={18} 
                className="text-muted-foreground group-hover:text-accent transition-colors duration-200" 
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center space-x-4">
          {socialPlatforms.map((platform) => (
            <Button
              key={platform.name}
              variant="ghost"
              size="icon"
              onClick={() => handleSocialClick(platform.url)}
              className="hover:bg-accent/10 hover:text-accent transition-colors duration-200"
            >
              <Icon name={platform.icon} size={20} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
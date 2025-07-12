import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alexander Pareto",
      role: "Founder & Master Perfumer",
      bio: "With over 15 years of experience in fragrance creation, Alexander studied under master perfumers in Grasse and has created over 200 unique fragrances.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Isabella Chen",
      role: "Head of Product Development",
      bio: "Isabella brings a background in chemistry and a passion for sustainable beauty. She leads our innovation in eco-friendly packaging and formulations.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      bio: "Marcus oversees our brand aesthetic and customer experience. His vision shapes how our fragrances are presented and experienced by our customers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      instagram: "#"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto leading-relaxed">
            The passionate individuals behind every bottle of Pareto Parfum, dedicated to creating exceptional fragrances.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <Icon name="Linkedin" size={20} className="text-primary" />
                    </a>
                    <a
                      href={member.instagram}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                    >
                      <Icon name="Instagram" size={20} className="text-primary" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-accent font-inter font-medium">
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground font-inter leading-relaxed text-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
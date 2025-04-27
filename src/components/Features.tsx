import React from 'react';
import { features } from '../data/content';
import { Building, Users, Shield, Zap, MessageCircle, Search } from 'lucide-react';

const Features: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    const props = { className: "w-10 h-10 text-indigo-600 mb-4" };
    
    switch (iconName) {
      case 'Building':
        return <Building {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'MessageCircle':
        return <MessageCircle {...props} />;
      case 'Search':
        return <Search {...props} />;
      default:
        return <Building {...props} />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Find Your Perfect Home
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            My Homies combines powerful tools and intuitive design to make finding a flat and flatmates simple and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 transform hover:-translate-y-1 transition-transform"
            >
              {renderIcon(feature.icon)}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
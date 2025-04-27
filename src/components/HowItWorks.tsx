import React from 'react';
import { Download, Search, Users, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <Download className="w-10 h-10 text-white" />,
      title: "Download the App",
      description: "Get started by downloading My Homies from the App Store or Google Play Store."
    },
    {
      id: 2,
      icon: <Search className="w-10 h-10 text-white" />,
      title: "Create Your Profile",
      description: "Tell us about yourself, your lifestyle, and what you're looking for in a flat and flatmates."
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Browse & Connect",
      description: "Explore available flats and potential flatmates, and connect with those who match your preferences."
    },
    {
      id: 4,
      icon: <Home className="w-10 h-10 text-white" />,
      title: "Move In",
      description: "Schedule viewings, finalize details, and move into your new home with your new flatmates!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            How My Homies Works
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Finding your ideal living situation has never been easier. Just follow these simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-indigo-100">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
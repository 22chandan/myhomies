import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50 z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 mt-12 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your <span className="text-indigo-600">Perfect Flat</span> and <span className="text-indigo-600">Ideal Flatmates</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
              Connect with compatible flatmates and discover your dream flat in just a few taps. Join thousands of happy users who found their home away from home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#download" 
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-indigo-700 transition-all transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                <span>Download Now</span>
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white text-indigo-600 border border-indigo-600 px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-indigo-50 transition-all"
              >
                <span>Learn More</span>
                <ChevronDown className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8 flex items-center text-gray-500">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span className="ml-4 text-sm">Join 10,000+ happy users</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 md:w-80 lg:w-96 h-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden p-2">
                <img 
                  src="/mockups/app-mockup.png" 
                  alt="My Homies App" 
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
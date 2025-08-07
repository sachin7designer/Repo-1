import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Shield, Infinity } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import memoryCapsule1 from '../assets/memory_capsule_1.png';
import memoryCapsule2 from '../assets/memory_capsule_2.png';
import memoryCapsule3 from '../assets/memory_capsule_3.png';

const DestinationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const memoryOptions = [
    {
      id: 1,
      name: "Personal Memory Capsule",
      description: "Upload photos, voice recordings, and messages to create your personal digital time capsule.",
      image: memoryCapsule1,
      duration: "Eternal Orbit",
      capacity: "Up to 100MB",
      highlights: ["Photos & Videos", "Voice Messages", "Text Letters"]
    },
    {
      id: 2,
      name: "Family Legacy Archive",
      description: "Preserve your family's history and stories for future generations among the stars.",
      image: memoryCapsule2,
      duration: "Multi-Generation",
      capacity: "Up to 500MB",
      highlights: ["Family Photos", "Genealogy Data", "Shared Stories"]
    },
    {
      id: 3,
      name: "Eternal Memory Satellite",
      description: "Join thousands of memories in our deep space preservation satellite network.",
      image: memoryCapsule3,
      duration: "Forever",
      capacity: "Unlimited",
      highlights: ["Deep Space Storage", "Redundant Backups", "Cosmic Preservation"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memoryOptions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memoryOptions.length) % memoryOptions.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Memory Preservation Options
          </h2>
          <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
            Choose how you want to preserve your most precious memories for eternity. 
            Each option ensures your legacy travels safely through the cosmos.
          </p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {memoryOptions.map((option) => (
                <div key={option.id} className="w-full flex-shrink-0">
                  <Card className="bg-transparent border-none">
                    <CardContent className="p-0">
                      <div className="relative h-96 md:h-[500px]">
                        <img
                          src={option.image}
                          alt={option.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl" />
                        
                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <div className="grid md:grid-cols-2 gap-8 items-end">
                            <div>
                              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-4">
                                {option.name}
                              </h3>
                              <p className="font-rajdhani text-lg text-gray-300 mb-6">
                                {option.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                                  <Infinity className="h-4 w-4 text-cyan-400" />
                                  <span className="font-rajdhani text-sm text-white">{option.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2 glass px-3 py-2 rounded-full">
                                  <Shield className="h-4 w-4 text-cyan-400" />
                                  <span className="font-rajdhani text-sm text-white">{option.capacity}</span>
                                </div>
                              </div>
                              
                              <Button 
                                className="bg-cyan-500 hover:bg-cyan-600 text-black font-rajdhani font-semibold rounded-full px-6 py-2 transition-all duration-300 hover-scale"
                              >
                                Choose This Option
                              </Button>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="font-orbitron text-lg font-semibold text-white">What You Can Upload</h4>
                              {option.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                  <span className="font-rajdhani text-gray-300">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass border-white/30 text-white hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass border-white/30 text-white hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {memoryOptions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 glow-cyan' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;


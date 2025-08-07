import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Upload } from 'lucide-react';
import memoryCapsuleHero from '../assets/memory_capsule_hero.png';

const HeroSection = ({ setCurrentPage }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${memoryCapsuleHero})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      {/* Animated Stars Overlay */}
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 right-40 w-1 h-1 bg-blue-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-float">
          <h1 className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Preserve Your Memory
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text animate-glow">
              Among the Stars
            </span>
          </h1>
        </div>
        
        <p className="font-rajdhani text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Send a piece of you into deep space. Upload your most precious memories—photos, voice recordings, 
          and messages—to be preserved for eternity in our digital memory capsules orbiting the cosmos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => setCurrentPage('upload')}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glow-cyan group"
          >
            <Upload className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Upload Your Memory
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('about');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="border-2 border-white/30 text-white hover:bg-white/10 font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glass group"
          >
            Learn About Our Mission
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
    </section>
  );
};

export default HeroSection;


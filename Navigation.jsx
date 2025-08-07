import React, { useState } from 'react';
import { Button } from './ui/button';
import { Rocket, Menu, X, Upload } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'upload', label: 'Upload Memory' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (itemId) => {
    if (itemId === 'home') {
      setCurrentPage('home');
    } else if (itemId === 'about') {
      scrollToSection('about');
    } else if (itemId === 'contact') {
      scrollToSection('contact');
    } else if (itemId === 'upload') {
      setCurrentPage('upload');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setCurrentPage('home')}
          >
            <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="font-orbitron text-xl font-bold text-white">
              Cosmic Odyssey
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`font-rajdhani font-medium transition-all duration-300 hover:text-cyan-400 ${
                  currentPage === item.id || (item.id === 'home' && currentPage === 'home')
                    ? 'text-cyan-400 glow-text' 
                    : 'text-white'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('login')}
              className="font-rajdhani font-medium text-white hover:text-cyan-400 transition-colors"
            >
              Login
            </Button>
            <Button
              onClick={() => setCurrentPage('signup')}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold px-6 py-2 rounded-full transition-all duration-300 hover-scale glow-cyan"
            >
              <Upload className="mr-2 h-4 w-4" />
              Preserve Memory
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className={`font-rajdhani font-medium justify-start transition-all duration-300 ${
                    currentPage === item.id || (item.id === 'home' && currentPage === 'home')
                      ? 'text-cyan-400 glow-text' 
                      : 'text-white hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCurrentPage('login');
                    setIsMenuOpen(false);
                  }}
                  className="font-rajdhani font-medium text-white hover:text-cyan-400 justify-start w-full"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setCurrentPage('signup');
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold rounded-full transition-all duration-300 hover-scale glow-cyan w-full"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Preserve Memory
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;


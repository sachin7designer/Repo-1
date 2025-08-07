import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, Rocket, Users, Globe, Database, Shield, Infinity } from 'lucide-react';
import spaceStationImage from '../assets/kSCkyknLXHKn.jpg';

const AboutPage = ({ setCurrentPage }) => {
  const [counters, setCounters] = useState({
    memories: 0,
    explorers: 0,
    capsules: 0,
    preservation: 0
  });

  const finalCounts = {
    memories: 2847,
    explorers: 15420,
    capsules: 156,
    preservation: 99
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const timers = Object.keys(finalCounts).map(key => {
      const increment = finalCounts[key] / steps;
      let currentStep = 0;

      return setInterval(() => {
        currentStep++;
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(Math.floor(increment * currentStep), finalCounts[key])
        }));

        if (currentStep >= steps) {
          clearInterval(timers.find(t => t === this));
        }
      }, stepDuration);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 stars-bg opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button
            onClick={() => setCurrentPage('home')}
            variant="outline"
            className="mb-8 border-white/30 text-white hover:bg-white/10 glass"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 animate-float">
              <Database className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl font-bold text-white mb-6">
              Our Mission
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To preserve human memories and experiences for eternity by launching them into deep space. 
              We believe that our stories, emotions, and connections deserve to outlast Earth itself, 
              traveling among the stars as a testament to humanity's existence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-4xl font-bold text-white mb-6">
                Preserving Humanity's Legacy
              </h2>
              <p className="font-rajdhani text-lg text-gray-300 mb-6 leading-relaxed">
                Since our founding in 2019, Cosmic Odyssey has been pioneering the field of cosmic memory preservation. 
                Our goal is to launch human memories into the cosmos to preserve our existence long after Earth is gone. 
                Each upload becomes part of a digital time capsule orbiting the stars.
              </p>
              <p className="font-rajdhani text-lg text-gray-300 mb-8 leading-relaxed">
                Through advanced encryption and redundant storage systems, we ensure that your most precious memories—
                photos, voice recordings, messages, and stories—are protected for millennia as they journey through 
                the infinite expanse of space.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="font-rajdhani text-gray-300">Quantum-encrypted memory storage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="font-rajdhani text-gray-300">Deep space satellite network</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="font-rajdhani text-gray-300">Multi-generational preservation</span>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glow-cyan">
                Learn More About Our Technology
              </Button>
            </div>

            <div className="relative">
              <img
                src={spaceStationImage}
                alt="Memory Preservation Technology"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                  Advanced Memory Preservation
                </h3>
                <p className="font-rajdhani text-gray-300">
                  Experience the future of memory storage with our quantum-encrypted capsules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 glass">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="font-orbitron text-3xl font-bold text-white mb-2">
                  {counters.memories.toLocaleString()}+
                </div>
                <div className="font-rajdhani text-gray-400">Memories Preserved</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 glass">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="font-orbitron text-3xl font-bold text-white mb-2">
                  {counters.explorers.toLocaleString()}+
                </div>
                <div className="font-rajdhani text-gray-400">Memory Keepers</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 glass">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4">
                  <Rocket className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="font-orbitron text-3xl font-bold text-white mb-2">
                  {counters.capsules}
                </div>
                <div className="font-rajdhani text-gray-400">Capsules Launched</div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 glass">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="font-orbitron text-3xl font-bold text-white mb-2">
                  {counters.preservation}%
                </div>
                <div className="font-rajdhani text-gray-400">Data Integrity</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Memory Guardians
            </h2>
            <p className="font-rajdhani text-xl text-gray-400 max-w-3xl mx-auto">
              Our team combines decades of space exploration experience with cutting-edge 
              memory preservation technology expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-gray-800 glass overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={spaceStationImage}
                    alt="Dr. Sarah Chen"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Dr. Sarah Chen</h3>
                  <p className="font-rajdhani text-cyan-400 mb-3">Chief Memory Architect</p>
                  <p className="font-rajdhani text-gray-400 text-sm">
                    Leading expert in quantum storage systems with 15+ years developing 
                    preservation technologies for NASA's deep space missions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 glass overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-cyan-400 animate-pulse" />
                </div>
                <div className="p-6">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Commander Alex Rodriguez</h3>
                  <p className="font-rajdhani text-cyan-400 mb-3">Mission Director</p>
                  <p className="font-rajdhani text-gray-400 text-sm">
                    Former ISS commander with 3 spacewalks and 400+ days in space. 
                    Oversees all memory capsule launch operations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 glass overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={spaceStationImage}
                    alt="Dr. Yuki Tanaka"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Dr. Yuki Tanaka</h3>
                  <p className="font-rajdhani text-cyan-400 mb-3">Quantum Preservation Lead</p>
                  <p className="font-rajdhani text-gray-400 text-sm">
                    Pioneer in quantum encryption technology and long-term data preservation 
                    for interstellar travel applications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass p-8 rounded-2xl">
            <h2 className="font-orbitron text-4xl font-bold text-white mb-6">
              Ready to Preserve Your Legacy?
            </h2>
            <p className="font-rajdhani text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of memory keepers who are already preserving their most precious 
              moments for eternity. Your memories deserve to travel among the stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setCurrentPage('upload')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glow-cyan"
              >
                Start Preserving Memories
              </Button>
              <Button 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glass"
              >
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, Globe, Clock, Users } from 'lucide-react';
import earthImage from '../assets/gxBOLBO5Hi5e.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Contact form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@cosmic-odyssey.com',
      description: 'Send us a message anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-SPACE',
      description: '24/7 mission support'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Houston, TX',
      description: 'Mission Control Center'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM CST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM CST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 stars-bg opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle" />
      <div className="absolute top-80 right-40 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <Globe className="h-12 w-12 text-cyan-400 animate-float" />
            </div>
          </div>
          <h2 className="font-orbitron text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Mission Control
          </h2>
          <p className="font-rajdhani text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your cosmic journey? Our team of space exploration experts is here to guide you 
            through the universe. Reach out to us and let's explore the stars together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-cyan-500/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="font-orbitron text-2xl font-bold text-white">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-rajdhani text-white">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-rajdhani text-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-rajdhani text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-rajdhani text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your cosmic aspirations..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold py-3 rounded-lg transition-all duration-300 hover-scale glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Transmitting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass border-cyan-500/20 hover-scale transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                        <info.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-orbitron text-lg font-bold text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="font-rajdhani text-cyan-400 text-lg mb-1">
                          {info.value}
                        </p>
                        <p className="font-rajdhani text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Earth Map */}
            <Card className="glass border-cyan-500/20">
              <CardContent className="p-0">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={earthImage}
                    alt="Earth from Space"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-orbitron text-xl font-bold text-white mb-2">
                      Our Home Planet
                    </h3>
                    <p className="font-rajdhani text-gray-300 text-sm">
                      Mission Control operates from Houston, Texas, coordinating space exploration missions worldwide.
                    </p>
                  </div>
                  {/* Location Marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse glow-cyan" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="glass border-cyan-500/20">
              <CardHeader>
                <CardTitle className="font-orbitron text-xl font-bold text-white flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-cyan-400" />
                  Mission Control Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="font-rajdhani text-gray-300">{schedule.day}</span>
                    <span className="font-rajdhani text-cyan-400">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Users className="h-8 w-8 text-cyan-400" />
                  <div>
                    <h3 className="font-orbitron text-lg font-bold text-white">
                      Response Time
                    </h3>
                    <p className="font-rajdhani text-gray-400">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-orbitron text-2xl font-bold text-cyan-400">98%</div>
                    <div className="font-rajdhani text-sm text-gray-400">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="font-orbitron text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="font-rajdhani text-sm text-gray-400">Emergency Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;


import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Eye, EyeOff, Mail, Lock, User, Rocket, ArrowLeft, Globe, Shield } from 'lucide-react';
import galaxyImage from '../assets/1ZHuweJeUkLY.jpg';

const SignupPage = ({ setCurrentPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${galaxyImage})`,
          filter: 'brightness(0.2)'
        }}
      />
      
      {/* Animated Stars Overlay */}
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 right-40 w-1 h-1 bg-blue-400 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
      
      {/* Back Button */}
      <Button
        variant="ghost"
        className="absolute top-8 left-8 text-white hover:text-cyan-400 transition-colors duration-300 z-20"
        onClick={() => setCurrentPage('home')}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Home
      </Button>
      
      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-4">
        <Card className="glass border-cyan-500/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <Rocket className="h-8 w-8 text-cyan-400 animate-float" />
              </div>
            </div>
            <CardTitle className="font-orbitron text-2xl font-bold text-white">
              Join the Cosmic Odyssey
            </CardTitle>
            <CardDescription className="font-rajdhani text-gray-400">
              Create your account and start exploring the universe
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-rajdhani text-white">
                    First Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-rajdhani text-white">
                    Last Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-rajdhani text-white">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@galaxy.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-rajdhani text-white">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-rajdhani text-white">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-white/5 border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 transition-all duration-300"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 mt-1 rounded border-gray-300 text-cyan-400 focus:ring-cyan-400 focus:ring-offset-0 bg-white/5 border-white/20"
                  required
                />
                <label htmlFor="terms" className="font-rajdhani text-sm text-gray-400 leading-relaxed">
                  I agree to the{' '}
                  <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-rajdhani text-sm">
                    Terms of Service
                  </Button>
                  {' '}and{' '}
                  <Button variant="link" className="text-cyan-400 hover:text-cyan-300 p-0 h-auto font-rajdhani text-sm">
                    Privacy Policy
                  </Button>
                </label>
              </div>
              
              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold py-3 rounded-lg transition-all duration-300 hover-scale glow-cyan"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Begin Your Journey
              </Button>
            </form>
            
            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-gray-400 font-rajdhani">Or sign up with</span>
              </div>
            </div>
            
            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 transition-all duration-300 font-rajdhani"
              >
                <Globe className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 transition-all duration-300 font-rajdhani"
              >
                <Shield className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
            
            {/* Login Link */}
            <div className="text-center">
              <span className="font-rajdhani text-gray-400">Already have an account? </span>
              <Button
                variant="link"
                onClick={() => setCurrentPage('login')}
                className="font-rajdhani text-cyan-400 hover:text-cyan-300 transition-colors duration-300 p-0"
              >
                Sign in here
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </section>
  );
};

export default SignupPage;


import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DestinationSlider from './components/DestinationSlider';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UploadPage from './components/UploadPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignupPage setCurrentPage={setCurrentPage} />;
      case 'upload':
        return <UploadPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <div>
            <HeroSection setCurrentPage={setCurrentPage} />
            <DestinationSlider />
            <div id="about">
              <AboutPage setCurrentPage={setCurrentPage} />
            </div>
            <div id="contact">
              <ContactPage setCurrentPage={setCurrentPage} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
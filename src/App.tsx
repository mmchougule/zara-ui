import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Architecture from './components/Architecture';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E6FFFA]">
      <Hero />
      <About />
      <Features />
      <Architecture />
      <Footer />
    </div>
  );
}
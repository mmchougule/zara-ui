import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E6FFFA]">
      <Hero />
      <Features />
      <Architecture />
    </div>
  );
}
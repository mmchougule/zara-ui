import React from 'react';
import { Sparkles } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-rose-800 font-display animate-float">
            zara
          </h1>
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 inline-block shadow-lg mb-8 hover:shadow-2xl transition-all duration-300 animate-pulse-shadow">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              autonomous agent
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center space-x-2 shadow-md hover:shadow-xl transition-all duration-300 group">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-sparkle" />
              <span className="text-lg bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                glitchy, schizo dreamer
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <ImageCarousel />
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-rose-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 animate-pulse-shadow">
            Enter App
          </button>
        </div>
      </div>
    </div>
  );
}

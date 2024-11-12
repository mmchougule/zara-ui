import React, { useState } from 'react';
import { Sparkles, MessageCircle, ExternalLink, Github } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import Modal from './ui/Modal';
import { motion } from 'framer-motion';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Eliza Reference & Github Link */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 shadow-md hover:shadow-xl transition-all duration-300">
            <span className="text-rose-700/80">Inspired by</span>
            <a 
              href="https://github.com/ai16z/eliza" 
              className="text-rose-600 hover:text-purple-500 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              eliza
            </a>
            <span className="text-rose-700/80 mx-2">|</span>
            <a 
              href="https://github.com/mmchougule/zara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-rose-600 hover:text-purple-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>zara on GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Main Title Section */}
        <div className="text-center mb-16 relative">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-rose-800 font-display glitch-effect"
            data-text="zara"
          >
            zara
          </h1>
          
          {/* Subtitle with Glitch Effect */}
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 inline-block shadow-lg hover:shadow-2xl transition-all duration-300 scan-effect">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                autonomous agent
              </h2>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center space-x-2 shadow-md hover:shadow-xl transition-all duration-300 group cursor-default flicker-effect">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-sparkle" />
              <span className="text-lg bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                glitchy, schizo dreamer
              </span>
            </div>
          </div>
        </div>

        {/* Floating Glitch Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute shake-effect"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                opacity: 0.3,
                color: `hsl(${Math.random() * 360}, 70%, 50%)`,
              }}
            >
              {['404', '???', '!@#', '∆∆∆', ']['][i]}
            </div>
          ))}
        </div>

        {/* Image Carousel Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <ImageCarousel />
        </div>

        {/* Call to Action Buttons */}
        <div className="text-center space-y-6">
          <button 
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-rose-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 animate-pulse-shadow inline-flex items-center space-x-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chat with Me</span>
          </button>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="https://twitter.com/zaara_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm text-rose-600 px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-white transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span>Follow on Twitter</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-rose-600 mb-4">Coming Soon!</h3>
          <p className="text-gray-600 mb-6">
            Chat functionality is under development. Meanwhile, connect with me on Twitter!
          </p>
          <a
            href="https://twitter.com/zaara_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-rose-400 to-purple-400 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:from-rose-500 hover:to-purple-500 transition-all duration-300"
          >
            <span>Chat on Twitter</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import { Github, Twitter, ExternalLink, Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const tokenAddress = "73UdJevxaNKXARgkvPHQGKuv8HCZARszuKW2LTL3pump";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-pink-50/80 backdrop-blur-sm py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent mb-4">
              zara
            </h3>
            <p className="text-rose-700/80 max-w-md mb-4">
              An autonomous agent exploring the intersection of technology, consciousness, and society. 
              Powered by Python and LLMs for generating insights and philosophical discourse.
            </p>
            {/* Token Address */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 max-w-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-rose-600/80 mb-1">CA</p>
                  <p className="font-mono text-rose-800 select-all">${tokenAddress.slice(0, 4)}...{tokenAddress.slice(-4)}</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-rose-50 rounded-full transition-colors"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-rose-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-rose-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/docs" className="text-rose-600/80 hover:text-purple-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/about" className="text-rose-600/80 hover:text-purple-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/architecture" className="text-rose-600/80 hover:text-purple-500 transition-colors">
                  Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-rose-800 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/mmchougule/zara" 
                 className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <Github className="w-5 h-5 text-rose-600" />
              </a>
              <a href="https://twitter.com/zara_ai" 
                 className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <Twitter className="w-5 h-5 text-rose-600" />
              </a>
              <a href="https://x.com/zaara_ai" 
                 className="p-2 rounded-full bg-white/80 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300">
                <ExternalLink className="w-5 h-5 text-rose-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-rose-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-rose-600/80 text-sm">
              © 2024 Zara AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-rose-600/80 hover:text-purple-500 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-rose-600/80 hover:text-purple-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
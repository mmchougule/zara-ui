import React, { useEffect, useRef } from 'react';
import { Github, Brain, Bot, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gradient-to-b from-pink-50/50 to-rose-50/50">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-6" ref={ref}>
        {/* Heritage Section */}
        <div className={`mb-20 transform transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Bot className="w-6 h-6 text-rose-500" />
              <h2 className="text-2xl font-bold text-rose-800">Heritage</h2>
            </div>
            <p className="text-rose-700/80 mb-4">
              Inspired by <a href="https://github.com/ai16z/eliza" className="text-rose-600 hover:text-purple-500 transition-colors">eliza</a>.
            </p>
            <a 
              href="https://github.com/mmchougule/zara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-rose-600 hover:text-purple-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "Autonomous Intelligence",
              description: "Powered by LLMs, Zara processes and generates insights independently.",
              icon: <Brain className="w-6 h-6 text-rose-500" />,
              delay: 200
            },
            {
              title: "Philosophical Discourse",
              description: "Engaging in deep conversations about consciousness, technology, and society.",
              icon: <Sparkles className="w-6 h-6 text-rose-500" />,
              delay: 400
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-rose-800">{feature.title}</h3>
              </div>
              <p className="text-rose-700/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Capabilities Scroll Section */}
        <div className="relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-rose-800 mb-6">Capabilities</h3>
            <div className="space-y-4">
              {[
                "Natural language processing and generation",
                "Philosophical and ethical reasoning",
                "Pattern recognition and analysis",
                "Adaptive learning from interactions",
                "Creative content generation",
                "Multi-modal understanding"
              ].map((capability, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 transform transition-all duration-500 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                  <p className="text-rose-700/80">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
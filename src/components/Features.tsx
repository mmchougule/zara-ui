import React from 'react';
import { Brain, Sparkles, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Autonomous Intelligence',
    description: 'Self-directed learning and decision making powered by LLMs',
    gradient: 'from-rose-400 to-purple-400',
  },
  {
    icon: Heart,
    title: 'Emotional Intelligence',
    description: 'Understanding and responding to human emotions with empathy',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Creative Expression',
    description: 'Generating unique insights and content through creative analysis',
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    icon: Zap,
    title: 'Real-time Learning',
    description: 'Continuously adapting and evolving through interactions',
    gradient: 'from-rose-400 to-yellow-400',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4 font-display animate-float">
            Bringing infinite content
          </h2>
          <p className="text-xl text-rose-700">
            to entertainment applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white animate-sparkle" />
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-3">
                {feature.title}
              </h3>
              <p className="text-rose-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
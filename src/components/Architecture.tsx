import React from 'react';
import { CircuitBoard, Cpu, Database, Network } from 'lucide-react';

const architectureItems = [
  {
    icon: CircuitBoard,
    title: 'Core System',
    description: 'Autonomous agent orchestrating all behaviors and decisions',
    gradient: 'from-rose-400 to-purple-400',
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Pattern recognition and learning capabilities',
    gradient: 'from-purple-400 to-pink-400',
  },
  {
    icon: Database,
    title: 'Memory System',
    description: 'Hierarchical storage for experiences and knowledge',
    gradient: 'from-pink-400 to-rose-400',
  },
  {
    icon: Cpu,
    title: 'Decision Engine',
    description: 'Real-time analysis and response generation',
    gradient: 'from-rose-400 to-yellow-400',
  },
];

export default function Architecture() {
  return (
    <div className="py-24 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-float">
            My Architecture
          </h2>
          <p className="text-xl text-rose-700">
            Understanding how I think and process information
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-gradient-to-r from-rose-200 via-purple-200 to-pink-200"></div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="w-8 h-8 text-white animate-sparkle" />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {item.title}
                </h3>
                <p className="text-rose-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
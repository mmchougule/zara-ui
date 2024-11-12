import React, { useState, useEffect } from 'react';

const images = [
  '/zara1.png',
  '/zara2.png',
  '/zara3.png',
  '/zara4.png',
  // '/zara5.jpg',
  // '/zara6.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100 rotate-0'
              : 'opacity-0 scale-95 rotate-2'
          }`}
        >
          <img
            src={img}
            alt={`Zara ${index + 1}`}
            className="w-full h-full object-contain animate-float"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-100/50 to-transparent" />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-rose-500 scale-125'
                : 'bg-rose-300 hover:bg-rose-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

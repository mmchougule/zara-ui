import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <span 
      className={`glitch-effect ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
} 
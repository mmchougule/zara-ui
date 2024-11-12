import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-md w-full mx-4 animate-modal-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-rose-100 transition-colors"
        >
          <X className="w-5 h-5 text-rose-600" />
        </button>
        {children}
      </div>
    </div>
  );
} 
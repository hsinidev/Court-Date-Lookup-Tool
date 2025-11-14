
import React, { useState, useEffect, useCallback } from 'react';
import Modal from './Modal';
import { MODAL_CONTENT, MODAL_KEYS, ModalKey } from '../constants';

interface Star {
  id: number;
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkle_duration: number;
  twinkle_delay: number;
}

const Starfield: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const numStars = window.innerWidth > 768 ? 200 : 100;
      const newStars: Star[] = [];
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkle_duration: Math.random() * 3 + 2,
          twinkle_delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#000011] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000011] via-transparent to-transparent"></div>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.radius}px`,
            height: `${star.radius}px`,
            opacity: star.opacity,
            animationDuration: `${star.twinkle_duration}s`,
            animationDelay: `${star.twinkle_delay}s`,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);

  const openModal = useCallback((modalKey: ModalKey) => {
    setActiveModal(modalKey);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);
  
  const currentModalContent = activeModal ? MODAL_CONTENT[activeModal] : null;

  return (
    <div className="relative min-h-screen font-sans antialiased text-slate-300">
      <Starfield />
      <header className="bg-black/30 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">Court Record Portal</h1>
            <nav className="hidden md:flex space-x-4">
              {MODAL_KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => openModal(key)}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {MODAL_CONTENT[key].title}
                </button>
              ))}
            </nav>
            <div className="md:hidden">
              <select onChange={(e) => openModal(e.target.value as ModalKey)} className="bg-slate-700 border border-slate-600 rounded-md p-1 text-sm">
                <option>Menu</option>
                 {MODAL_KEYS.map((key) => (
                    <option key={key} value={key}>{MODAL_CONTENT[key].title}</option>
                 ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-black/30 mt-auto py-6">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p className="mb-2">
            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>
              Powered by HSINI MOHAMED
            </a>
          </p>
          <p>
            Contact: <a href="http://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-white">hsini.web@gmail.com</a>
          </p>
        </div>
      </footer>
      
      {activeModal && currentModalContent && (
        <Modal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={currentModalContent.title}
        >
          {currentModalContent.content}
        </Modal>
      )}
    </div>
  );
};

export default Layout;

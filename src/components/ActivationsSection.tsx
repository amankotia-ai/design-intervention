import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ActivationsSectionProps {
  className?: string;
}

export const ActivationsSection: React.FC<ActivationsSectionProps> = ({
  className = ''
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  // Card data
  const cards = [
    { title: "Corporate XR Studios", height: "h-80", bgImage: "/assets/images/xr.png" },
    { title: "Exhibition Spaces", height: "h-64", bgImage: "/assets/images/exhibition.png" },
    { title: "Film & TV Sets", height: "h-96", bgImage: "/assets/images/studio.png" },
    { title: "Interactive Installations", height: "h-72", bgImage: "/assets/images/interactive.png" },
    { title: "Live Event Productions", height: "h-88", bgImage: "/assets/images/live.png" }
  ];

  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <motion.section 
      ref={ref}
      className={`py-24 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header and Text Section - Same Row */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
              <span>(Activations)</span>
            </div>
          </motion.div>

          {/* Right Column - Large Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: "easeOut" 
            }}
          >
            <p className="text-4xl lg:text-5xl font-normal text-black leading-tight">
              Exhibitions, Studios, Interactive Installations, Live shows.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scrolling Cards - Full Width */}
      <motion.div 
        className="overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 30
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.8,
          ease: "easeOut" 
        }}
      >
        <div className="relative">
          <div 
            className="flex space-x-6 animate-scroll"
            style={{
              animation: 'scroll 120s linear infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
              width: 'fit-content'
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div 
                key={index}
                className={`w-96 ${card.height} rounded-none relative overflow-hidden group cursor-pointer flex-shrink-0`}
                style={{ 
                  backgroundColor: card.bgImage ? 'transparent' : '#f9fafb',
                  backgroundImage: card.bgImage ? `url(${card.bgImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Overlay for better text readability when there's a background image */}
                {card.bgImage && (
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                )}

                <div className="absolute bottom-3 left-3 text-gray-700 flex items-center space-x-2 z-10">
                  <p className={`text-sm font-medium ${card.bgImage ? 'text-white' : 'text-gray-700'}`}>
                    {card.title}
                  </p>
                  <span className={`text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1 ${card.bgImage ? 'text-yellow-400' : ''}`} style={{ color: card.bgImage ? '#fbbf24' : '#F15F22' }}>
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}; 
import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ActivationsSectionProps {
  className?: string;
  label?: string;
  paragraph?: string;
}

export const ActivationsSection: React.FC<ActivationsSectionProps> = ({
  className = '',
  label = '(Activations)',
  paragraph = 'Exhibitions, Studios, Interactive Installations, Live shows.'
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  // Images to render in the 3x3 grid from public/assets/images/activations
  const gridItems = [
    { title: 'Activation 1', src: '/assets/images/activations/Frame 633711.png' },
    { title: 'Activation 2', src: '/assets/images/activations/Frame 633712.png' },
    { title: 'Activation 3', src: '/assets/images/activations/Frame 633712-1.png' },
    { title: 'Activation 4', src: '/assets/images/activations/Frame 633712-2.png' },
    { title: 'Activation 5', src: '/assets/images/activations/Frame 633713.png' },
    { title: 'Activation 6', src: '/assets/images/activations/Frame 633713-1.png' },
    { title: 'Activation 7', src: '/assets/images/activations/Frame 633714.png' },
    { title: 'Activation 8', src: '/assets/images/activations/Frame 633714-1.png' },
    { title: 'Activation 9', src: '/assets/images/activations/Frame 633715.png' }
  ];

  return (
    <motion.section 
      ref={ref}
      className={`py-16 lg:py-24 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header and Text Section - Same Row */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-12 lg:mb-20 items-start">
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
              <span>{label}</span>
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
            <p className="text-2xl sm:text-3xl lg:text-5xl font-normal text-black leading-tight">
              {paragraph}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2x3 full-width grid with square images */}
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
      >
        <div className="w-full px-6 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            {gridItems.map((item, index) => (
              <div key={index} className="relative w-full aspect-[3/2] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}; 
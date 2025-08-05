import React from 'react';
import { motion, useInView } from 'framer-motion';

interface HeroButton {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface HeroSectionProps {
  breadcrumb?: string;
  title: string | React.ReactNode;
  description: string;
  buttons?: HeroButton[];
  className?: string;
  backgroundColor?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  breadcrumb,
  title,
  description,
  buttons,
  className = "",
  backgroundColor = "bg-white"
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      ref={ref}
      className={`w-full flex items-center justify-center ${backgroundColor} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 w-full">
        {/* Title */}
        <motion.h1 
          className="text-6xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight tracking-tight normal-case"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.1,
            ease: "easeOut" 
          }}
        >
          {title}
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20
          }}
          transition={{ 
            duration: 0.4, 
            delay: 0.2,
            ease: "easeOut" 
          }}
        >
          {description}
        </motion.p>
        
        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20
            }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3,
              ease: "easeOut" 
            }}
          >
            <motion.button
              onClick={buttons[0].onClick}
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-base font-normal transition-colors flex items-center space-x-2 group"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f3f4f6"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span>{buttons[0].text}</span>
              <motion.span 
                className="transition-colors duration-200 group-hover:text-[#F15F22]"
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}; 
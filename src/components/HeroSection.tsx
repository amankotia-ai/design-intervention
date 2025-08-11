import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface HeroButton {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface HeroSectionProps {
  title: string | React.ReactNode;
  description: string;
  buttons?: HeroButton[];
  className?: string;
  backgroundColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  leftColClassName?: string;
  rightColClassName?: string;
  imageClassName?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttons,
  className = "",
  backgroundColor = "bg-white",
  imageSrc = "/assets/images/hero-banner.png",
  imageAlt = "Hero section illustration",
  leftColClassName = "lg:w-4/12",
  rightColClassName = "lg:w-8/12 lg:ml-auto lg:mr-[-2rem]",
  imageClassName = "w-full h-auto object-contain"
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  // Match Work/Contact behavior on small screens: ensure content is visible
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const update = () => setIsSmallScreen(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <motion.section 
      ref={ref}
      className={`w-screen h-screen flex items-center justify-center ${backgroundColor} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: (isInView || isSmallScreen) ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 pt-28 lg:pt-36 pb-16 w-full">
        <div className={`w-full ${leftColClassName} order-2 lg:order-1 text-center lg:text-left`}>
          {/* Title */}
          <motion.h1 
            className="text-4xl lg:text-7xl font-normal text-gray-900 mb-6 lg:mb-8 leading-snug tracking-tight normal-case"
            style={{ willChange: 'transform, filter' }}
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ 
              opacity: (isInView || isSmallScreen) ? 1 : 0,
              y: (isInView || isSmallScreen) ? 0 : 12,
              filter: (isInView || isSmallScreen) ? 'blur(0px)' : 'blur(6px)'
            }}
            transition={{ 
              duration: 0.55, 
              delay: 0.1,
              ease: "easeOut" 
            }}
        >
          {title}
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-base font-normal text-gray-600 mb-8 lg:mb-12 max-w-md leading-relaxed mx-auto lg:mx-0 text-center lg:text-left"
          style={{ willChange: 'transform, filter' }}
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ 
            opacity: (isInView || isSmallScreen) ? 1 : 0,
            y: (isInView || isSmallScreen) ? 0 : 12,
            filter: (isInView || isSmallScreen) ? 'blur(0px)' : 'blur(4px)'
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            ease: "easeOut" 
          }}
        >
          {description}
        </motion.p>
        
        {/* Buttons */}
        {buttons && buttons.length > 0 && (
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ 
              opacity: (isInView || isSmallScreen) ? 1 : 0,
              y: (isInView || isSmallScreen) ? 0 : 12
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.28,
              ease: "easeOut" 
            }}
          >
            <motion.button
              onClick={buttons[0].onClick}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-normal transition-colors flex items-center space-x-2 group"
              whileHover={{ backgroundColor: "#f3f4f6" }}
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
        <motion.div 
          className={`w-full ${rightColClassName} order-1 lg:order-2`}
          initial={{ opacity: 0, x: 18 }}
          animate={{ 
            opacity: (isInView || isSmallScreen) ? 1 : 0,
            x: (isInView || isSmallScreen) ? 0 : 18
          }}
          transition={{ 
            duration: 0.55, 
            delay: 0.12,
            ease: "easeOut" 
          }}
        >
          <motion.img 
            src={imageSrc}
            alt={imageAlt}
            className={`${imageClassName} mx-auto lg:mx-0`}
            style={{ willChange: 'transform, filter' }}
            initial={{ opacity: 0, scale: 1.01, filter: 'blur(8px)' }}
            animate={{ 
              opacity: (isInView || isSmallScreen) ? 1 : 0, 
              scale: (isInView || isSmallScreen) ? 1.04 : 1.01,
              filter: (isInView || isSmallScreen) ? 'blur(0px)' : 'blur(8px)'
            }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}; 
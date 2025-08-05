import React from 'react';
import { motion, useInView } from 'framer-motion';

interface BiohackingSectionProps {
  className?: string;
}

export const BiohackingSection: React.FC<BiohackingSectionProps> = ({
  className = ''
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section 
      ref={ref}
      className={`py-24 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4">
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
              <h2 className="text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
                We are the future of<br />
                Biohacking.
              </h2>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Our goal is to create a thriving and healthy human population. Our team of 
                scientists develops the new standards for your future.
              </p>
              
              <button className="bg-black text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                Explore products
              </button>
            </motion.div>
          </div>

          {/* Center Diagram */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0.8
              }}
              transition={{ 
                duration: 1.0, 
                delay: 0.4,
                ease: "easeOut" 
              }}
            >
              <span className="text-6xl font-light text-gray-300 mb-4 block">02</span>
              
                             {/* Vacuum Diagram */}
               <div className="relative w-80 h-60 flex items-center justify-center">
                 <svg width="320" height="240" viewBox="0 0 320 240" className="absolute">
                   {/* Concentric ellipses */}
                   <ellipse cx="160" cy="120" rx="140" ry="80" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                   <ellipse cx="160" cy="120" rx="120" ry="68" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                   <ellipse cx="160" cy="120" rx="100" ry="56" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                   <ellipse cx="160" cy="120" rx="80" ry="44" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="2,2"/>
                   <ellipse cx="160" cy="120" rx="60" ry="32" fill="none" stroke="#000" strokeWidth="2"/>
                   
                   {/* Red dots around the ellipses */}
                   <circle cx="80" cy="120" r="3" fill="#ef4444"/>
                   <circle cx="120" cy="100" r="3" fill="#ef4444"/>
                   <circle cx="160" cy="90" r="3" fill="#ef4444"/>
                   <circle cx="200" cy="100" r="3" fill="#ef4444"/>
                   <circle cx="240" cy="120" r="3" fill="#ef4444"/>
                   <circle cx="200" cy="140" r="3" fill="#ef4444"/>
                   <circle cx="160" cy="150" r="3" fill="#ef4444"/>
                   <circle cx="120" cy="140" r="3" fill="#ef4444"/>
                   
                   {/* Additional dots on outer rings - positioned horizontally */}
                   <circle cx="270" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="280" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="290" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="300" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="310" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="50" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="40" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="30" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="20" cy="120" r="2" fill="#ef4444"/>
                   <circle cx="10" cy="120" r="2" fill="#ef4444"/>
                 </svg>
               </div>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-600 text-center max-w-xs leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8,
                ease: "easeOut" 
              }}
            >
              Our unique capsules are created in a vacuum, ensuring maximum purity and potency.
            </motion.p>
          </div>

          {/* Right Content Cards */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-none"
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: "easeOut" 
              }}
            >
              <h3 className="text-lg font-medium text-black mb-3 leading-tight">
                Vacuum changes how minerals are preserved
              </h3>
              <p className="text-sm text-gray-500">Ph.D Joseph Straus</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 p-6 rounded-none"
              initial={{ opacity: 0, x: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                ease: "easeOut" 
              }}
            >
              <h3 className="text-lg font-medium text-black mb-3 leading-tight">
                Free from plastic and contaminants
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each capsule delivers potent, compounds to enhance cognitive clarity, physical vitality, and overall wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 
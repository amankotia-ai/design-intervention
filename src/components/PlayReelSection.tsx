import React from 'react';
import { motion, useInView } from 'framer-motion';

interface PlayReelSectionProps {
  title: string;
  clients?: string[];
  className?: string;
}

export const PlayReelSection: React.FC<PlayReelSectionProps> = ({
  title,
  clients,
  className = ''
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Split clients into 2 rows of 4 each
  const firstRow = clients?.slice(0, 4) || [];
  const secondRow = clients?.slice(4, 8) || [];

  return (
    <motion.section 
      ref={ref}
      className={`py-16 backdrop-blur-sm ${className}`}
      style={{
        background: isInView 
          ? 'linear-gradient(135deg, rgba(249, 250, 251, 0.7) 0%, rgba(249, 250, 251, 0.4) 50%, rgba(249, 250, 251, 0.1) 100%)'
          : 'linear-gradient(135deg, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0) 50%, rgba(249, 250, 251, 0) 100%)'
      }}
      transition={{ 
        duration: 1.2, 
        ease: "easeInOut" 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut" 
          }}
        >
          <h4 className="text-2xl lg:text-3xl font-normal leading-tight mb-2" style={{ color: '#F15F22' }}>
            Powering the world's best companies.
          </h4>
          <p className="text-2xl lg:text-3xl font-normal text-black leading-tight">
            From next-gen startups to established enterprises.
          </p>
        </motion.div>
        
        {/* Logos Container */}
        {clients && clients.length > 0 && (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            <div className="rounded-none">
              {/* First Row */}
              <div className="grid grid-cols-4">
                {firstRow.map((client, index) => (
                  <motion.div 
                    key={index}
                    className="text-gray-800 text-lg font-medium hover:text-gray-900 transition-colors cursor-pointer text-center py-4 px-1 flex items-center justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 30
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                  >
                    {index === 0 ? (
                      <img 
                        src="/assets/logos/image 11 (1).png" 
                        alt={client}
                        className="h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : index === 1 ? (
                      <img 
                        src="/assets/logos/image 12.png" 
                        alt={client}
                        className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : index === 2 ? (
                      <img 
                        src="/assets/logos/CNBC_TV18_2025.svg.png" 
                        alt={client}
                        className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : index === 3 ? (
                      <img 
                        src="/assets/logos/logo-large.svg" 
                        alt={client}
                        className="h-7 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      client
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Second Row */}
              {secondRow.length > 0 && (
                <div className="grid grid-cols-4">
                  {secondRow.map((client, index) => (
                    <motion.div 
                      key={index}
                      className="text-gray-800 text-lg font-medium hover:text-gray-900 transition-colors cursor-pointer text-center py-4 px-1 flex items-center justify-center"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 30
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + (index * 0.1),
                        ease: "easeOut" 
                      }}
                    >
                      {index === 0 ? (
                        <img 
                          src="/assets/logos/1200px-Pidilite_logo.svg_.png" 
                          alt={client}
                          className="h-9 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : index === 1 ? (
                        <img 
                          src="/assets/logos/welspun-word-logo.png" 
                          alt={client}
                          className="h-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : index === 2 ? (
                        <img 
                          src="/assets/logos/image 13.png" 
                          alt={client}
                          className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : index === 3 ? (
                        <img 
                          src="/assets/logos/VH1_logonew.svg.png" 
                          alt={client}
                          className="h-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : (
                        client
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}; 
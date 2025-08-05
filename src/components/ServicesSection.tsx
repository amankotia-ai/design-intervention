import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ServicesSectionProps {
  className?: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  className = ''
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      title: "XR Studios",
      description: "Extended Reality studios - India's most advanced corporate studios",
      gradient: "from-orange-500 via-red-600 to-orange-800"
    },
    {
      title: "Exhibition Design", 
      description: "Award-winning exhibition pavilions and immersive brand experiences",
      gradient: "from-gray-700 via-gray-800 to-black"
    },
    {
      title: "Film & TV Production",
      description: "Production sets and specialty fabrication for film industry", 
      gradient: "from-blue-500 via-purple-600 to-blue-800"
    },
    {
      title: "Specialty Fabrication",
      description: "Custom fabrication projects demanding precision and innovation",
      gradient: "from-green-600 via-teal-600 to-green-800"
    },
    {
      title: "Interior Design",
      description: "Bespoke interior solutions for offices, studios, and commercial spaces",
      gradient: "from-purple-600 via-pink-500 to-orange-400"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className={`py-24 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
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
              <span>(What We Do)</span>
            </div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut" 
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
              Our Expertise at a Glance
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              From designing high-tech XR studios to crafting award-winning exhibition pavilions, our expertise spans multiple verticals. 
              We create immersive exhibition stalls integrated with interactive tech like touchscreens, video walls, and projection mapping.
            </p>
          </motion.div>
        </div>

        {/* Services Cards Row */}
        <motion.div 
          className="grid grid-cols-5 gap-8"
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
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 30
              }}
              whileHover="hover"
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + (index * 0.1),
                ease: "easeOut" 
              }}
            >
              {/* Card Container */}
              <div 
                className="relative h-64 w-full rounded-none overflow-hidden mb-4"
                style={{ backgroundColor: '#f9fafb' }}
              >
              </div>
              
              {/* Content below card */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-medium text-gray-700">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" style={{ color: '#F15F22' }}>
                    →
                  </span>
                </div>
                <div className="h-16">
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed pt-2 h-full"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: 0, 
                      y: -10,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    variants={{
                      hover: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }
                    }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}; 
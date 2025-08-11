import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ServicesSectionProps {
  className?: string;
  onNavigate?: (pageId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  className = '',
  onNavigate
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: 'xr-studios',
      title: "XR Studios",
      description: "Extended Reality studios - India's most advanced corporate studios",
      gradient: "from-orange-500 via-red-600 to-orange-800"
    },
    {
      id: 'exhibition-design',
      title: "Exhibition Design", 
      description: "Award-winning exhibition pavilions and immersive brand experiences",
      gradient: "from-gray-700 via-gray-800 to-black"
    },
    {
      id: 'film-tv-production',
      title: "Film & TV Production",
      description: "Production sets and specialty fabrication for film industry", 
      gradient: "from-blue-500 via-purple-600 to-blue-800"
    },
    {
      id: 'specialty-fabrication',
      title: "Specialty Fabrication",
      description: "Custom fabrication projects demanding precision and innovation",
      gradient: "from-green-600 via-teal-600 to-green-800"
    },
    {
      id: 'interior-design',
      title: "Interior Design",
      description: "Bespoke interior solutions for offices, studios, and commercial spaces",
      gradient: "from-purple-600 via-pink-500 to-orange-400"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className={`pt-12 pb-16 sm:py-16 md:py-20 lg:py-24 bg-white ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 mb-12 sm:mb-16 lg:mb-20 items-start">
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
            <div className="flex items-center text-base sm:text-lg" style={{ color: '#F15F22' }}>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black leading-tight mb-4 sm:mb-6 lg:mb-8 text-left">
              Our Expertise at a Glance
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-left">
              From designing high-tech XR studios to crafting award-winning exhibition pavilions, our expertise spans multiple verticals. 
              We create immersive exhibition stalls integrated with interactive tech like touchscreens, video walls, and projection mapping.
            </p>
          </motion.div>
        </div>

        {/* Services Cards Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
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
              role="button"
              tabIndex={0}
              onClick={() => onNavigate && onNavigate(service.id)}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && onNavigate) {
                  e.preventDefault();
                  onNavigate(service.id);
                }
              }}
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
                className="relative w-full aspect-square rounded overflow-hidden mb-3 sm:mb-4 bg-gray-50 p-6 flex items-center justify-center"
              >
                {service.title === 'XR Studios' && (
                  <img
                    src="/assets/images/5896c42d-4610-43a7-8bcc-043184751e98.png"
                    alt={service.title}
                    className="max-h-full max-w-full object-contain mx-auto"
                    loading="lazy"
                  />
                )}
                {service.title === 'Exhibition Design' && (
                  <img
                    src="/assets/images/Group 633402.png"
                    alt={service.title}
                    className="max-h-full max-w-full object-contain mx-auto"
                    loading="lazy"
                  />
                )}
                {service.title === 'Specialty Fabrication' && (
                  <img
                    src="/assets/images/1f769fc8-6bde-4fef-8ea2-4ecd6bce4a9a.png"
                    alt={service.title}
                    className="max-h-full max-w-full object-contain mx-auto"
                    loading="lazy"
                  />
                )}
                {service.title === 'Film & TV Production' && (
                  <img
                    src="/assets/images/0db1632b-e229-43d9-aa97-4b0530471c61 (1).png"
                    alt={service.title}
                    className="max-h-full max-w-full object-contain mx-auto"
                    loading="lazy"
                  />
                )}
                {service.title === 'Interior Design' && (
                  <img
                    src="/assets/images/5826ff5d-c71b-481f-8437-e6822f02691e.png"
                    alt={service.title}
                    className="max-h-full max-w-full object-contain mx-auto"
                    loading="lazy"
                  />
                )}
              </div>
              
              {/* Content below card */}
              <div className="text-center">
                <div className="mb-2">
                  <h3 className="text-base sm:text-lg font-medium text-gray-700 text-center">
                    {service.title}
                  </h3>
                </div>
                <div className="h-0 sm:h-14 lg:h-16 overflow-hidden">
                  <motion.p 
                    className="hidden sm:block text-gray-600 text-xs sm:text-sm leading-relaxed sm:pt-2 h-full text-center"
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
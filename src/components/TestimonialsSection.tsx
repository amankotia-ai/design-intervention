import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
  companyLogo?: string;
}

interface TestimonialsSectionProps {
  breadcrumb?: string;
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  backgroundColor?: string;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  breadcrumb,
  title,
  subtitle,
  testimonials,
  backgroundColor = 'bg-white',
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className={`py-24 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Left Column - Header (4 columns) */}
          <div className="lg:col-span-4">
            {breadcrumb && (
              <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
                <span>({breadcrumb})</span>
              </div>
            )}
            
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
              {title}
            </h2>
            
            {subtitle && (
              <div className="mb-8">
                <span className="text-lg font-medium text-yellow-500 underline">
                  {subtitle}
                </span>
              </div>
            )}
          </div>
          
          {/* Right Column - Testimonials with infinite scrolling (8 columns for wider cards area) */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden relative">
              {/* Left fade overlay */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              
              {/* Right fade overlay */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              
              <div className="relative">
                <div 
                  className="flex space-x-6"
                  style={{
                    animation: 'testimonials-scroll 120s linear infinite',
                    animationPlayState: isHovered ? 'paused' : 'running',
                    width: 'fit-content'
                  }}
                >
                  {duplicatedTestimonials.map((testimonial, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-80 bg-gray-100 p-8 rounded-none min-h-[200px] group cursor-pointer"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {/* Company Logo/Name */}
                      <div className="mb-6">
                        <span className="text-2xl font-bold text-gray-900">
                          {testimonial.company.toLowerCase()}
                        </span>
                      </div>
                      
                      {/* Quote */}
                      <p className="text-gray-700 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
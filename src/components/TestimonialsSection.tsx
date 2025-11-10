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
      {/* Header/Text content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {breadcrumb && (
          <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
            <span>{breadcrumb}</span>
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

      {/* Full-width testimonials scroller below the text */}
      <div className="mt-12 w-full">
        <div className="overflow-hidden relative">
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
                  className="flex-shrink-0 w-[75vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] bg-gray-100 p-8 min-h-[200px] group cursor-pointer"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-gray-900">
                      {testimonial.company.toLowerCase()}
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
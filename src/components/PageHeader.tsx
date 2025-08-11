import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  description: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  breadcrumb, 
  title, 
  description, 
  className = "" 
}) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className={`pt-32 pb-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Small orange breadcrumb text */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-normal" style={{ color: '#F15F22' }}>
              {breadcrumb}
            </span>
          </motion.div>
          
          {/* Large title with subtle rise */}
          <motion.h1 
            className="text-4xl lg:text-6xl font-normal text-gray-900 mb-12 leading-tight max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10, filter: inView ? 'blur(0px)' : 'blur(6px)' }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>
          
          {/* Description fade-in */}
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl leading-relaxed mx-auto font-normal"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10, filter: inView ? 'blur(0px)' : 'blur(4px)' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}; 
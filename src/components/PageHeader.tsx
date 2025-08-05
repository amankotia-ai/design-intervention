import React from 'react';

interface PageHeaderProps {
  breadcrumb: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ 
  breadcrumb, 
  title, 
  description, 
  icon,
  className = "" 
}) => {
  return (
    <section className={`pt-32 pb-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Small orange breadcrumb text */}
          <div className="mb-12">
            <span className="text-sm font-normal" style={{ color: '#F15F22' }}>
              {breadcrumb}
            </span>
          </div>
          
          {/* Large bold title */}
          <h1 className="text-4xl lg:text-6xl font-normal text-gray-900 mb-12 leading-tight max-w-5xl mx-auto">
            {title}
          </h1>
          
          {/* Description text */}
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mx-auto font-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}; 
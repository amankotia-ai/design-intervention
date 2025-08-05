import React from 'react';

interface FeaturePoint {
  text: string;
}

interface FeatureSectionProps {
  breadcrumb?: string;
  title: string;
  description: string;
  features?: FeaturePoint[];
  imageGradient: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  className?: string;
  actionButton?: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'link';
  };
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  breadcrumb,
  title,
  description,
  features,
  imageGradient,
  imagePosition = 'right',
  backgroundColor = 'bg-white',
  className = '',
  actionButton
}) => {
  const contentDiv = (
    <div className={imagePosition === 'left' ? 'lg:order-2' : ''}>
      {breadcrumb && (
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
            {breadcrumb}
          </span>
        </div>
      )}
      
      <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
        {title}
      </h2>
      
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      )}
      
      {actionButton && (
        <div className="mt-8">
          <button
            onClick={actionButton.onClick}
            className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-base font-normal hover:bg-gray-200 transition-colors flex items-center space-x-2"
          >
            <span>{actionButton.text}</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );

  const imageDiv = (
    <div className={`w-full h-96 ${imageGradient} rounded-none ${imagePosition === 'left' ? 'lg:order-1' : ''}`}></div>
  );

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {imagePosition === 'left' ? imageDiv : contentDiv}
          {imagePosition === 'left' ? contentDiv : imageDiv}
        </div>
      </div>
    </section>
  );
}; 
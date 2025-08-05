import React from 'react';

interface GridItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  gradient?: string;
  onClick?: () => void;
}

interface ContentGridProps {
  breadcrumb?: string;
  title: string;
  description?: string;
  items: GridItem[];
  columns?: 2 | 3 | 4 | 5;
  itemType?: 'service' | 'portfolio' | 'feature';
  backgroundColor?: string;
  className?: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({
  breadcrumb,
  title,
  description,
  items,
  columns = 3,
  itemType = 'service',
  backgroundColor = 'bg-white',
  className = ''
}) => {
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'md:grid-cols-2';
      case 3: return 'md:grid-cols-3';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      case 5: return 'md:grid-cols-5';
      default: return 'md:grid-cols-3';
    }
  };

  const renderServiceItem = (item: GridItem, index: number) => (
    <div key={index} className="text-center">
      <div className="w-24 h-24 bg-gray-100 rounded-none flex items-center justify-center mx-auto mb-6">
        {item.icon && <div className="w-12 h-12 text-gray-400">{item.icon}</div>}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );

  const renderPortfolioItem = (item: GridItem, index: number) => (
    <div 
      key={index} 
      className="group cursor-pointer"
      onClick={item.onClick}
    >
      <div className={`w-full h-64 ${item.gradient || 'bg-gradient-to-br from-gray-200 to-gray-400'} rounded-none mb-6 group-hover:shadow-lg transition-shadow`}></div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  );

  const renderFeatureItem = (item: GridItem, index: number) => (
    <div key={index} className="text-center">
      <div className="w-16 h-16 bg-white rounded-none shadow-sm flex items-center justify-center mx-auto mb-6">
        <div className="w-8 h-8 bg-gray-300 rounded-none"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
      <p className="text-gray-600 leading-relaxed">{item.description}</p>
    </div>
  );

  const renderItem = (item: GridItem, index: number) => {
    switch (itemType) {
      case 'service': return renderServiceItem(item, index);
      case 'portfolio': return renderPortfolioItem(item, index);
      case 'feature': return renderFeatureItem(item, index);
      default: return renderServiceItem(item, index);
    }
  };

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {breadcrumb && (
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {breadcrumb}
            </span>
          </div>
        )}
        
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {title}
        </h2>
        
        {description && (
          <p className="text-lg text-gray-600 mb-16 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
        
        <div className={`grid ${getGridCols()} gap-8`}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </section>
  );
}; 
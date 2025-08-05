import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  title: string;
  description?: string;
  stats: Stat[];
  backgroundColor?: string;
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  title,
  description,
  stats,
  backgroundColor = 'bg-white',
  className = ''
}) => {
  return (
    <section className={`py-32 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">{title}</h2>
        {description && (
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-6xl font-bold text-gray-900 mb-4">{stat.value}</h3>
              <p className="text-xl text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
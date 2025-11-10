import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  breadcrumb?: string;
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  backgroundColor?: string; // e.g., 'bg-white' or 'bg-gray-50'
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  breadcrumb,
  title = 'Frequently Asked Questions',
  subtitle,
  items,
  className = '',
  backgroundColor = 'bg-white'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const contentHeights = useRef<number[]>([]);
  const [, forceRender] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const measureHeights = () => {
    contentHeights.current = itemRefs.current.map((el) => el?.scrollHeight || 0);
    // force a re-render so updated heights are used
    forceRender((x) => x + 1);
  };

  useLayoutEffect(() => {
    measureHeights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  useEffect(() => {
    const onResize = () => measureHeights();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`py-24 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {breadcrumb && (
          <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
            <span>{breadcrumb}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 mb-8 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-4">{title}</h2>
            {subtitle && (
              <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  type="button"
                  className="w-full flex items-start justify-between text-left group"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-medium text-gray-900 pr-6">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 mt-1 text-gray-600 transition-transform duration-200 ease-out ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.12l3.71-2.89a.75.75 0 11.92 1.18l-4.25 3.31a.75.75 0 01-.92 0L5.21 8.41a.75.75 0 01.02-1.2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="overflow-hidden"
                  style={{
                    height: isOpen ? contentHeights.current[index] : 0,
                    transition: 'height 220ms ease',
                    willChange: 'height'
                  }}
                >
                  <div className={`pt-3 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150 ease-out`}>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



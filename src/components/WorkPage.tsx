import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
}

interface WorkPageProps {
  className?: string;
  onProjectClick?: (projectId: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ className = '', onProjectClick }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  // Scroll progress not required for current animations

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });

  // Ensure visibility on small screens where IntersectionObserver can be flaky
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const update = () => setIsSmallScreen(window.innerWidth < 768);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'XR Studios', 'Exhibitions', 'Film & TV', 'Interactive'];

  const projects: Project[] = [
    {
      id: '1',
      title: 'Republic Day Parade Tableau – 2012',
      category: 'XR Studios',
      description: 'State-of-the-art extended reality studio with motion capture and virtual production capabilities.',
      image: '/assets/images/xr.png',
      tags: ['XR', 'Motion Capture', 'Virtual Production'],
      year: '2024'
    },
    {
      id: '2', 
      title: 'ICICI Bank Smart Vault – 2015',
      category: 'Exhibitions',
      description: 'Award-winning interactive exhibition space featuring projection mapping and touchscreen interfaces.',
      image: '/assets/images/exhibition.png',
      tags: ['Interactive', 'Projection Mapping', 'Touchscreens'],
      year: '2024'
    },
    {
      id: '3',
      title: 'Flight – 2021 (Indian Feature Film)',
      category: 'Film & TV',
      description: 'Custom-built production set with modular design and integrated lighting systems.',
      image: '/assets/images/studio.png',
      tags: ['Production Design', 'Modular', 'Lighting'],
      year: '2023'
    },
    {
      id: '4',
      title: 'PowerGen - Adani',
      category: 'Interactive',
      description: 'Immersive digital installation combining physical and virtual elements.',
      image: '/assets/images/interactive.png',
      tags: ['Digital Art', 'Sensors', 'Real-time'],
      year: '2024'
    },
    {
      id: '5',
      title: 'Rising Rajasthan - Adani',
      category: 'Film & TV',
      description: 'Dynamic stage design with LED walls and automated set changes.',
      image: '/assets/images/live.png',
      tags: ['LED Walls', 'Automation', 'Live Events'],
      year: '2023'
    },
    {
      id: '6',
      title: 'NorthernLights - Shapoorji Pallonji',
      category: 'Exhibitions',
      description: 'Immersive brand storytelling space with multi-sensory experiences.',
      image: '/assets/images/exhibition.png',
      tags: ['Brand Experience', 'Multi-sensory', 'Storytelling'],
      year: '2024'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Subtle parallax effect (disabled for now)

  return (
    <div ref={containerRef} className={`${className}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="w-full flex items-center justify-center bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 w-full">
          <motion.div
            className="flex items-center justify-center text-lg mb-8"
            style={{ color: '#F15F22' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: (heroInView || isSmallScreen) ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Our Work</span>
          </motion.div>

          <motion.h1 
            className="text-6xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight tracking-tight normal-case"
            initial={{ opacity: 0, y: 8 }}
            animate={{ 
              opacity: (heroInView || isSmallScreen) ? 1 : 0,
              y: (heroInView || isSmallScreen) ? 0 : 8
            }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting Tomorrow's<br />
            Experiences Today
          </motion.h1>
          
          <motion.p 
            className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: (heroInView || isSmallScreen) ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Explore our portfolio of immersive installations, cutting-edge studios, and award-winning exhibition designs that push the boundaries of what's possible.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section 
        ref={portfolioRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: (portfolioInView || isSmallScreen) ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>Featured Projects</span>
              </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: (portfolioInView || isSmallScreen) ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Selected Projects
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From concept to completion, each project showcases our commitment to innovation, precision, and creating unforgettable experiences.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: (portfolioInView || isSmallScreen) ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-500 ease-out ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#F15F22' : undefined
                }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: (portfolioInView || isSmallScreen) ? 1 : 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 4 }}
                animate={{ 
                  opacity: (portfolioInView || isSmallScreen) ? 1 : 0,
                  y: (portfolioInView || isSmallScreen) ? 0 : 4
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.4 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => onProjectClick?.(project.id)}
                whileHover={{ y: -2 }}
              >
                <motion.div 
                  className="h-80 rounded-none relative overflow-hidden mb-6"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/5"
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <motion.span 
                      className="text-sm font-medium" 
                      style={{ color: '#F15F22' }}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        x: hoveredProject === project.id ? 0 : -4
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      →
                    </motion.span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{project.category}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded transition-colors duration-300 hover:bg-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section 
        ref={testimonialsRef}
        className="py-24 bg-orange-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: (testimonialsInView || isSmallScreen) ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center">
              <blockquote className="text-3xl lg:text-4xl font-normal leading-tight mb-12" style={{ color: '#F15F22' }}>
                "The team delivered beyond our expectations. Their innovative approach to XR studio design has transformed how we create content."
              </blockquote>
              <div className="flex items-center justify-center">
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-1">Sarah Johnson</p>
                  <p className="text-base text-gray-600">Creative Director, Tech Innovation Labs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  readTime: string;
}

interface NewsPageProps {
  className?: string;
}

export const NewsPage: React.FC<NewsPageProps> = ({ className = '' }) => {
  const heroRef = React.useRef(null);
  const featuredRef = React.useRef(null);
  const articlesRef = React.useRef(null);
  const newsletterRef = React.useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const articlesInView = useInView(articlesRef, { once: true, amount: 0.2 });
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.2 });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredArticle, setHoveredArticle] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const categories = ['All', 'Industry Insights', 'Project Updates', 'Technology', 'Company News'];

  const articles: Article[] = [
    {
      id: '1',
      title: 'The Future of XR Studios in Corporate Communication',
      excerpt: 'How extended reality is transforming the way companies communicate internally and with their audiences through immersive experiences.',
      category: 'Industry Insights',
      date: '2024-01-15',
      author: 'Rajesh Kumar',
      image: '/assets/images/xr.png',
      featured: true,
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Behind the Scenes: Adani XR Studio Project',
      excerpt: 'An inside look at how we designed and built India\'s most advanced corporate XR studio, from concept to completion.',
      category: 'Project Updates',
      date: '2024-01-10',
      author: 'Priya Sharma',
      image: '/assets/images/studio.png',
      featured: true,
      readTime: '12 min read'
    },
    {
      id: '3',
      title: 'Interactive Exhibition Design: Lessons from 20 Years',
      excerpt: 'Key insights and evolving trends in exhibition design, from traditional displays to immersive digital experiences.',
      category: 'Industry Insights',
      date: '2024-01-05',
      author: 'Sarah Chen',
      image: '/assets/images/exhibition.png',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'New Technology Integration: AR in Retail Spaces',
      excerpt: 'Exploring how augmented reality is revolutionizing retail environments and customer engagement strategies.',
      category: 'Technology',
      date: '2023-12-28',
      author: 'Amit Patel',
      image: '/assets/images/interactive.png',
      readTime: '10 min read'
    },
    {
      id: '5',
      title: 'Design Intervention Wins Excellence Award 2023',
      excerpt: 'Recognition for our innovative approach to immersive design and contribution to the Indian creative industry.',
      category: 'Company News',
      date: '2023-12-20',
      author: 'Design Intervention Team',
      image: '/assets/images/live.png',
      readTime: '4 min read'
    },
    {
      id: '6',
      title: 'Sustainable Fabrication: Our Green Initiative',
      excerpt: 'How we\'re implementing environmentally conscious practices in our fabrication processes and material choices.',
      category: 'Company News',
      date: '2023-12-15',
      author: 'Rajesh Kumar',
      image: '/assets/images/exhibition.png',
      readTime: '7 min read'
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles.filter(article => !article.featured)
    : articles.filter(article => article.category === selectedCategory && !article.featured);

  const featuredArticles = articles.filter(article => article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Add actual newsletter signup logic here
  };

  return (
    <div className={`${className}`}>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="w-screen flex items-center justify-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center pt-40 pb-20">
          <motion.div
            className="flex items-center justify-center text-lg mb-8"
            style={{ color: '#F15F22' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: heroInView ? 1 : 0,
              y: heroInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.1,
              ease: "easeOut" 
            }}
          >
            <span>(News & Insights)</span>
          </motion.div>

          <motion.h1 
            className="text-6xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight tracking-tight normal-case"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: heroInView ? 1 : 0,
              y: heroInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            Stories from the<br />
            Cutting Edge
          </motion.h1>
          
          <motion.p 
            className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: heroInView ? 1 : 0,
              y: heroInView ? 0 : 20
            }}
            transition={{ 
              duration: 0.4, 
              delay: 0.3,
              ease: "easeOut" 
            }}
          >
            Industry insights, project updates, and thought leadership from our team of designers, engineers, and creative innovators.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Articles Section */}
      <motion.section 
        ref={featuredRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: featuredInView ? 1 : 0,
                y: featuredInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut" 
              }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>(Featured Stories)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: featuredInView ? 1 : 0,
                y: featuredInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: "easeOut" 
              }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Latest Highlights
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our most recent insights, project breakthroughs, and industry perspectives that are shaping the future of immersive design.
              </p>
            </motion.div>
          </div>

          {/* Featured Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: featuredInView ? 1 : 0,
                  y: featuredInView ? 0 : 30
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.2),
                  ease: "easeOut" 
                }}
                onMouseEnter={() => setHoveredArticle(article.id)}
                onMouseLeave={() => setHoveredArticle(null)}
              >
                <div 
                  className="h-80 rounded-none relative overflow-hidden mb-6"
                  style={{ 
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-none">
                    <span className="text-xs font-medium text-gray-700">{article.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur px-4 py-3 rounded-none">
                      <p className="text-gray-900 font-medium text-sm">{article.readTime}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <h3 className="text-xl font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <span 
                      className={`text-sm font-medium transition-all duration-300 transform ${
                        hoveredArticle === article.id 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-0 translate-x-0'
                      }`} 
                      style={{ color: '#F15F22' }}
                    >
                      →
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-gray-500 space-x-4">
                    <span>{formatDate(article.date)}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Articles Section */}
      <motion.section 
        ref={articlesRef}
        className="py-24"
        style={{
          background: articlesInView 
            ? 'linear-gradient(135deg, rgba(249, 250, 251, 0.7) 0%, rgba(249, 250, 251, 0.4) 50%, rgba(249, 250, 251, 0.1) 100%)'
            : 'linear-gradient(135deg, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0) 50%, rgba(249, 250, 251, 0) 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: articlesInView ? 1 : 0,
                y: articlesInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: "easeOut" 
              }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>(All Articles)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: articlesInView ? 1 : 0,
                y: articlesInView ? 0 : 30
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                ease: "easeOut" 
              }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Explore All Stories
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Browse through our complete collection of articles, insights, and updates across different categories.
              </p>
            </motion.div>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: articlesInView ? 1 : 0
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: "easeOut" 
            }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? '#F15F22' : undefined
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: articlesInView ? 1 : 0
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + (index * 0.08),
                  ease: "easeOut" 
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: articlesInView ? 1 : 0,
              y: articlesInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.8,
              ease: "easeOut" 
            }}
          >
            {filteredArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                className="group cursor-pointer bg-white/50 backdrop-blur rounded-none overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: articlesInView ? 1 : 0,
                  y: articlesInView ? 0 : 30
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0 + (index * 0.1),
                  ease: "easeOut" 
                }}
                onMouseEnter={() => setHoveredArticle(article.id)}
                onMouseLeave={() => setHoveredArticle(null)}
              >
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{ 
                    backgroundImage: `url(${article.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-none text-xs font-medium text-gray-700">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                      {article.title}
                    </h3>
                    <span 
                      className={`text-sm font-medium transition-all duration-300 transform flex-shrink-0 ${
                        hoveredArticle === article.id 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-0 translate-x-0'
                      }`} 
                      style={{ color: '#F15F22' }}
                    >
                      →
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{formatDate(article.date)}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        ref={newsletterRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: newsletterInView ? 1 : 0,
              y: newsletterInView ? 0 : 50
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
          >
            <h4 className="text-2xl lg:text-3xl font-normal leading-tight mb-2" style={{ color: '#F15F22' }}>
              Stay Connected
            </h4>
            <p className="text-2xl lg:text-3xl font-normal text-black leading-tight mb-8">
              Get the latest insights delivered to your inbox.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive project updates, industry insights, and innovative design perspectives from our team.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: newsletterInView ? 1 : 0,
              y: newsletterInView ? 0 : 50
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-gray-900 placeholder-gray-500"
              />
              <motion.button 
                type="submit"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-normal flex items-center space-x-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Subscribe</span>
                <motion.span 
                  className="transition-colors duration-200 group-hover:text-[#F15F22]"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  readTime: string;
  slug: string;
}

interface BlogPageProps {
  className?: string;
  onArticleClick?: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ className = '', onArticleClick }) => {
  const heroRef = React.useRef(null);
  const featuredRef = React.useRef(null);
  const articlesRef = React.useRef(null);
  const newsletterRef = React.useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuredInView = useInView(featuredRef, { once: true, amount: 0.2 });
  const articlesInView = useInView(articlesRef, { once: true, amount: 0.2 });
  const newsletterInView = useInView(newsletterRef, { once: true, amount: 0.2 });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const categories = ['All', 'Design Insights', 'Technology', 'Case Studies', 'Industry Trends', 'Behind the Scenes'];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Evolution of XR Studios: From Concept to Reality',
      excerpt: 'Exploring how extended reality studios have transformed from experimental setups to essential corporate communication tools, and what the future holds.',
      category: 'Technology',
      date: '2024-01-20',
      author: 'Rajesh Kumar',
      image: '/assets/images/xr.png',
      featured: true,
      readTime: '12 min read',
      slug: 'evolution-of-xr-studios'
    },
    {
      id: '2',
      title: 'Design Philosophy: Creating Spaces That Tell Stories',
      excerpt: 'Our approach to spatial design goes beyond aesthetics – it\'s about crafting narratives that resonate with audiences on an emotional level.',
      category: 'Design Insights',
      date: '2024-01-18',
      author: 'Priya Sharma',
      image: '/assets/images/exhibition.png',
      featured: true,
      readTime: '8 min read',
      slug: 'design-philosophy-storytelling-spaces'
    },
    {
      id: '3',
      title: 'Case Study: Transforming Adani\'s Corporate Communication',
      excerpt: 'A deep dive into how we designed and implemented India\'s most advanced corporate XR studio, revolutionizing internal and external communications.',
      category: 'Case Studies',
      date: '2024-01-15',
      author: 'Sarah Chen',
      image: '/assets/images/studio.png',
      readTime: '15 min read',
      slug: 'adani-xr-studio-case-study'
    },
    {
      id: '4',
      title: 'The Future of Interactive Exhibitions',
      excerpt: 'How emerging technologies like AI, AR, and IoT are reshaping the exhibition landscape and creating more engaging visitor experiences.',
      category: 'Industry Trends',
      date: '2024-01-12',
      author: 'Amit Patel',
      image: '/assets/images/interactive.png',
      readTime: '10 min read',
      slug: 'future-interactive-exhibitions'
    },
    {
      id: '5',
      title: 'Behind the Scenes: Fabricating the Impossible',
      excerpt: 'Take a look inside our workshop where traditional craftsmanship meets cutting-edge technology to bring the most ambitious designs to life.',
      category: 'Behind the Scenes',
      date: '2024-01-10',
      author: 'Design Intervention Team',
      image: '/assets/images/live.png',
      readTime: '6 min read',
      slug: 'fabricating-the-impossible'
    },
    {
      id: '6',
      title: 'Sustainable Design in Modern Exhibitions',
      excerpt: 'How we\'re pioneering eco-friendly practices in exhibition design without compromising on creativity or impact.',
      category: 'Design Insights',
      date: '2024-01-08',
      author: 'Meera Desai',
      image: '/assets/images/exhibition.png',
      readTime: '7 min read',
      slug: 'sustainable-exhibition-design'
    },
    {
      id: '7',
      title: 'Motion Capture Technology in Creative Spaces',
      excerpt: 'Exploring how motion capture technology is being integrated into interactive installations and immersive experiences.',
      category: 'Technology',
      date: '2024-01-05',
      author: 'Vikram Singh',
      image: '/assets/images/xr.png',
      readTime: '9 min read',
      slug: 'motion-capture-creative-spaces'
    },
    {
      id: '8',
      title: 'Client Spotlight: ICICI Bank Smart Vault Innovation',
      excerpt: 'How we reimagined banking experiences through intuitive design and robotics integration in ICICI\'s revolutionary Smart Vault system.',
      category: 'Case Studies',
      date: '2024-01-03',
      author: 'Neha Kapoor',
      image: '/assets/images/interactive.png',
      readTime: '11 min read',
      slug: 'icici-smart-vault-innovation'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts.filter(post => !post.featured)
    : blogPosts.filter(post => post.category === selectedCategory && !post.featured);

  const featuredPosts = blogPosts.filter(post => post.featured);

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
  };

  const handlePostClick = (slug: string) => {
    if (onArticleClick) {
      onArticleClick(slug);
    }
  };

  return (
    <div className={`${className}`}>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="w-full flex items-center justify-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 w-full">
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
            <span>(Blog)</span>
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
            Insights from the<br />
            Creative Frontier
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
            Dive deep into our design philosophy, technology innovations, and the creative process behind our most ambitious projects.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Posts Section */}
      <motion.section 
        ref={featuredRef}
        className="py-24 bg-orange-50"
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
                <span>(Featured Posts)</span>
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
                Editor's Picks
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our most impactful articles exploring design innovation, technology breakthroughs, and creative methodology.
              </p>
            </motion.div>
          </div>

          {/* Featured Posts Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
            {featuredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
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
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                onClick={() => handlePostClick(post.slug)}
              >
                <div 
                  className="h-80 rounded-none relative overflow-hidden mb-6"
                  style={{ 
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                </div>

                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <h3 className="text-xl font-medium text-gray-900 text-left">
                      {post.title}
                    </h3>
                    <span 
                      className={`text-sm font-medium transition-all duration-300 transform ${
                        hoveredPost === post.id 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-0 translate-x-0'
                      }`} 
                      style={{ color: '#F15F22' }}
                    >
                      →
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed text-left">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-start text-xs text-gray-500 space-x-2 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded inline-block">
                    {post.category}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* All Posts Section */}
      <motion.section 
        ref={articlesRef}
        className="py-24 bg-white"
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
                <span>(All Posts)</span>
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
                Explore All Content
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Browse through our complete collection of design insights, technology deep-dives, and creative process documentation.
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

          {/* Posts Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
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
            {filteredPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="group cursor-pointer"
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
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
                onClick={() => handlePostClick(post.slug)}
              >
                <div 
                  className="h-48 relative overflow-hidden mb-6"
                  style={{ 
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                </div>

                <div>
                  <div className="flex items-start space-x-2 mb-3">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2 text-left">
                      {post.title}
                    </h3>
                    <span 
                      className={`text-sm font-medium transition-all duration-300 transform flex-shrink-0 ${
                        hoveredPost === post.id 
                          ? 'opacity-100 translate-x-1' 
                          : 'opacity-0 translate-x-0'
                      }`} 
                      style={{ color: '#F15F22' }}
                    >
                      →
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 text-left">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-start text-xs text-gray-500 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded inline-block">
                    {post.category}
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
              Stay Inspired
            </h4>
            <p className="text-2xl lg:text-3xl font-normal text-black leading-tight mb-8">
              Get creative insights delivered to your inbox.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Subscribe to receive our latest design thoughts, project stories, and technological innovations directly from our creative team.
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
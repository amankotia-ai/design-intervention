import React from 'react';
import { motion, useInView } from 'framer-motion';

interface BlogArticleProps {
  className?: string;
  onBackClick?: () => void;
  slug?: string;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  authorBio: string;
  image: string;
  readTime: string;
  tags: string[];
}

export const BlogArticlePage: React.FC<BlogArticleProps> = ({ 
  className = '', 
  onBackClick,
  slug = 'evolution-of-xr-studios'
}) => {
  const heroRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const relatedRef = React.useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const relatedInView = useInView(relatedRef, { once: true, amount: 0.2 });

  // Mock data - in a real app, this would be fetched based on the slug
  const articles: { [key: string]: Article } = {
    'evolution-of-xr-studios': {
      id: '1',
      title: 'The Evolution of XR Studios: From Concept to Reality',
      excerpt: 'Exploring how extended reality studios have transformed from experimental setups to essential corporate communication tools, and what the future holds.',
      category: 'Technology',
      date: '2024-01-20',
      author: 'Rajesh Kumar',
      authorBio: 'Senior Technical Director at Design Intervention with over 15 years of experience in immersive technology and spatial design.',
      image: '/assets/images/xr.png',
      readTime: '12 min read',
      tags: ['XR', 'Virtual Production', 'Technology', 'Innovation'],
      content: `
# The Dawn of Extended Reality

Extended Reality (XR) studios represent one of the most significant technological leaps in how we create and consume media content. What began as experimental setups in research labs has now evolved into sophisticated production environments that are reshaping industries from entertainment to corporate communications.

## The Genesis: From Vision to Reality

When we first embarked on creating XR studios in India, the technology landscape was vastly different. Virtual production was in its infancy, and the concept of real-time rendering combined with physical sets seemed almost impossible. Today, these studios have become the backbone of modern content creation.

### Early Challenges

The initial challenges were numerous:

- **Hardware limitations**: Early LED panels had significant limitations in resolution and color accuracy
- **Software integration**: Real-time engines like Unreal Engine were not yet optimized for broadcast-quality output
- **Talent adaptation**: Teams needed extensive retraining to work in virtual environments
- **Cost considerations**: The initial investment required was substantial

## Technical Breakthroughs

### LED Wall Technology

The advancement in LED wall technology has been remarkable. Modern panels offer:

- **4K and 8K resolution** at various pixel pitches
- **HDR support** for enhanced color reproduction
- **Low latency** critical for camera tracking
- **Improved viewing angles** for better color consistency

### Real-Time Rendering

The integration of game engines into production pipelines has revolutionized content creation:

\`\`\`javascript
// Example of real-time content synchronization
const studioSync = {
  cameraTracking: true,
  ledWallContent: 'realtime',
  colorSpace: 'rec2020',
  frameRate: 60
};
\`\`\`

### Camera Tracking Systems

Modern camera tracking systems provide:

- **Sub-millimeter accuracy** in position tracking
- **Real-time lens data** for perfect perspective matching
- **Multi-camera support** for complex productions
- **Integration** with broadcast systems

## Industry Impact

### Corporate Communications

XR studios have transformed how corporations communicate:

1. **Immersive presentations** that engage audiences
2. **Cost-effective** alternative to location shoots
3. **Consistent branding** across all communications
4. **Weather-independent** production schedules

### Entertainment Industry

The entertainment sector has seen revolutionary changes:

- **Virtual sets** that would be impossible to build physically
- **Real-time compositing** reducing post-production time
- **Actor comfort** in controlled environments
- **Creative freedom** unlimited by physical constraints

## Case Study: Adani Corporate XR Studio

Our work with Adani Group represents a pinnacle achievement in corporate XR implementation. The studio features:

### Technical Specifications

- **270-degree LED volume** with 2.8mm pixel pitch
- **Overhead LED ceiling** for complete light wrap
- **Multiple camera positions** with automated tracking
- **Real-time color grading** and compositing

### Design Philosophy

The design prioritized:

1. **Flexibility**: Adaptable to various content types
2. **Scalability**: Future-proof technology integration
3. **User Experience**: Intuitive operation for content creators
4. **Brand Integration**: Seamless incorporation of corporate identity

## The Future Landscape

### Emerging Technologies

Several technologies are poised to further transform XR studios:

#### Artificial Intelligence
- **Automated lighting** adjustment based on content
- **Real-time rendering** optimization
- **Content generation** and modification

#### Advanced Haptics
- **Physical feedback** systems for presenters
- **Tactile interfaces** for control systems
- **Environmental simulation** capabilities

#### Improved Display Technology
- **MicroLED panels** with perfect black levels
- **Transparent displays** for mixed reality applications
- **Flexible screens** for curved and irregular surfaces

### Industry Adoption Trends

The adoption of XR technology is accelerating across sectors:

- **Education**: Virtual classrooms and interactive learning
- **Healthcare**: Medical training and patient consultation
- **Retail**: Virtual showrooms and product demonstrations
- **Real Estate**: Immersive property tours and presentations

## Best Practices for Implementation

### Planning Phase

1. **Define clear objectives** for the XR studio
2. **Assess content requirements** and production workflows
3. **Budget appropriately** for hardware, software, and training
4. **Plan for future upgrades** and technology evolution

### Technical Considerations

- **Calibration protocols** for consistent color reproduction
- **Network infrastructure** for high-bandwidth content
- **Backup systems** for critical production elements
- **Environmental controls** for optimal hardware performance

### Team Training

Successful XR studio operation requires:

- **Technical training** for operators and technicians
- **Creative workshops** for content creators
- **Ongoing education** as technology evolves
- **Cross-functional collaboration** between departments

## Measuring Success

### Key Performance Indicators

- **Production efficiency** improvements
- **Content quality** metrics
- **Cost savings** compared to traditional methods
- **User engagement** and audience response

### Return on Investment

XR studios typically demonstrate ROI through:

1. **Reduced location costs** and travel expenses
2. **Faster content production** cycles
3. **Increased content volume** capabilities
4. **Enhanced brand perception** and engagement

## Challenges and Solutions

### Current Limitations

Despite significant progress, challenges remain:

- **Color matching** between LED and practical elements
- **Moiré patterns** in certain camera configurations
- **Reflection management** in highly reflective environments
- **Content creation** complexity and skill requirements

### Innovative Solutions

Our team has developed several solutions:

#### Custom Calibration Tools
We've created proprietary calibration software that ensures color accuracy across the entire LED volume.

#### Reflection Mitigation
Strategic placement of diffusion materials and specialized coating techniques minimize unwanted reflections.

#### Simplified Workflows
User-friendly interfaces make complex technology accessible to content creators without technical backgrounds.

## Environmental Considerations

### Sustainable Design

Modern XR studios incorporate sustainability through:

- **Energy-efficient LED panels** with improved power consumption
- **Smart cooling systems** that adapt to usage patterns
- **Recyclable materials** in construction and components
- **Reduced travel** eliminating location-based shoots

### Carbon Footprint Reduction

XR studios contribute to environmental goals by:

1. **Eliminating location travel** for many productions
2. **Reducing set construction** and waste
3. **Extending content lifespan** through reusability
4. **Optimizing energy usage** through intelligent systems

## Global Perspective

### International Adoption

XR technology adoption varies globally:

- **North America**: Leading in entertainment applications
- **Europe**: Focus on corporate and educational uses
- **Asia-Pacific**: Rapid growth in commercial implementations
- **India**: Emerging as a key market for corporate XR

### Cultural Adaptations

Different markets require unique approaches:

- **Content localization** for regional preferences
- **Cultural sensitivity** in virtual environment design
- **Language support** for user interfaces
- **Regional compliance** with broadcasting standards

## Conclusion: The Road Ahead

The evolution of XR studios from experimental concepts to essential business tools represents a remarkable journey of innovation and adaptation. As we look to the future, several trends are clear:

1. **Democratization**: XR technology will become more accessible to smaller organizations
2. **Integration**: Seamless blending with existing production workflows
3. **Specialization**: Purpose-built solutions for specific industries
4. **Innovation**: Continuous advancement in display and processing technology

The transformation we've witnessed is just the beginning. As virtual and augmented reality technologies continue to mature, XR studios will become even more integral to how we create, share, and experience content.

For organizations considering XR implementation, the question is no longer whether to adopt this technology, but how quickly they can integrate it into their communication strategies. The future belongs to those who embrace the possibilities of extended reality.

*The author, Rajesh Kumar, has been instrumental in designing and implementing over 50 XR studios across India and internationally. His expertise spans technical implementation, creative direction, and strategic planning for immersive technology adoption.*
      `
    },
    'design-philosophy-storytelling-spaces': {
      id: '2',
      title: 'Design Philosophy: Creating Spaces That Tell Stories',
      excerpt: 'Our approach to spatial design goes beyond aesthetics – it\'s about crafting narratives that resonate with audiences on an emotional level.',
      category: 'Design Insights',
      date: '2024-01-18',
      author: 'Priya Sharma',
      authorBio: 'Creative Director with expertise in spatial storytelling and experiential design. Led over 200 exhibition projects worldwide.',
      image: '/assets/images/exhibition.png',
      readTime: '8 min read',
      tags: ['Design Philosophy', 'Storytelling', 'Spatial Design', 'User Experience'],
      content: `
# The Art of Spatial Storytelling

At Design Intervention, we believe that every space has a story to tell. Our design philosophy is rooted in the understanding that great design doesn't just look beautiful—it communicates, it engages, and it transforms the way people experience and understand information.

## The Foundation of Our Approach

### Human-Centered Design

Every project begins with understanding the human element:

- **Who** will experience this space?
- **What** emotions do we want to evoke?
- **How** will people move through and interact with the environment?
- **Why** does this story matter to them?

### Narrative Architecture

We approach each space as a three-dimensional story with:

1. **A clear beginning** that establishes context
2. **A compelling middle** that develops the narrative
3. **A memorable conclusion** that reinforces key messages

## Case Studies in Storytelling

### The Pidilite Innovation Journey

Our work with Pidilite Industries demonstrates how product innovation can be transformed into an immersive narrative experience...

[Content continues with detailed examples and insights]
      `
    }
  };

  const currentArticle = articles[slug] || articles['evolution-of-xr-studios'];

  const relatedArticles = [
    {
      id: '2',
      title: 'Design Philosophy: Creating Spaces That Tell Stories',
      category: 'Design Insights',
      image: '/assets/images/exhibition.png',
      readTime: '8 min read',
      slug: 'design-philosophy-storytelling-spaces'
    },
    {
      id: '3',
      title: 'Case Study: Transforming Adani\'s Corporate Communication',
      category: 'Case Studies',
      image: '/assets/images/studio.png',
      readTime: '15 min read',
      slug: 'adani-xr-studio-case-study'
    },
    {
      id: '4',
      title: 'The Future of Interactive Exhibitions',
      category: 'Industry Trends',
      image: '/assets/images/interactive.png',
      readTime: '10 min read',
      slug: 'future-interactive-exhibitions'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderContent = (content: string) => {
    // Simple markdown-like rendering for demo purposes
    console.log('Rendering content:', content.length, 'characters');
    
    return content
      .trim() // Remove leading/trailing whitespace
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('# ')) {
          return <h2 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0">{line.slice(2)}</h2>;
        }
        if (line.startsWith('## ')) {
          return <h3 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-10">{line.slice(3)}</h3>;
        }
        if (line.startsWith('### ')) {
          return <h4 key={index} className="text-xl font-semibold text-gray-900 mb-4 mt-8">{line.slice(4)}</h4>;
        }
        if (line.startsWith('#### ')) {
          return <h5 key={index} className="text-lg font-semibold text-gray-900 mb-3 mt-6">{line.slice(5)}</h5>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="text-gray-700 leading-relaxed mb-2">{line.slice(2)}</li>;
        }
        if (line.match(/^\d+\. /)) {
          const text = line.replace(/^\d+\. /, '');
          return <li key={index} className="text-gray-700 leading-relaxed mb-2">{text}</li>;
        }
        if (line.startsWith('```')) {
          return null; // Skip code block markers for now
        }
        if (line.trim() === '') {
          return <br key={index} />;
        }
        if (line.trim().length > 0) {
          return <p key={index} className="text-gray-700 leading-relaxed mb-4">{line}</p>;
        }
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className={`${className}`}>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Back Navigation */}
        <div className="absolute top-20 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.button
              onClick={onBackClick}
              className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors bg-black/20 backdrop-blur px-4 py-2 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: heroInView ? 1 : 0,
                x: heroInView ? 0 : -20
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>←</span>
              <span>Back to Blog</span>
            </motion.button>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className="h-screen relative overflow-hidden"
          style={{ 
            backgroundImage: `url(${currentArticle.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-20 text-center text-white">
              <motion.div
                className="flex items-center justify-center text-lg mb-6"
                style={{ color: '#F15F22' }}
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
                <span>({currentArticle.category})</span>
              </motion.div>

              <motion.h1 
                className="text-5xl lg:text-7xl font-normal mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: heroInView ? 1 : 0,
                  y: heroInView ? 0 : 30
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  ease: "easeOut" 
                }}
              >
                {currentArticle.title}
              </motion.h1>

              <motion.p 
                className="text-xl mb-8 leading-relaxed opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: heroInView ? 0.9 : 0,
                  y: heroInView ? 0 : 20
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.4,
                  ease: "easeOut" 
                }}
              >
                {currentArticle.excerpt}
              </motion.p>

              <motion.div 
                className="flex items-center justify-center space-x-6 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: heroInView ? 1 : 0,
                  y: heroInView ? 0 : 20
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5,
                  ease: "easeOut" 
                }}
              >
                <span>{formatDate(currentArticle.date)}</span>
                <span>•</span>
                <span>{currentArticle.readTime}</span>
                <span>•</span>
                <span>{currentArticle.author}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section 
        ref={contentRef}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Author Info */}
          <motion.div 
            className="flex items-center space-x-4 mb-12 pb-8 border-b border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: contentInView ? 1 : 0,
              y: contentInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{currentArticle.author}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{currentArticle.authorBio}</p>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: contentInView ? 1 : 0,
              y: contentInView ? 0 : 20
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "easeOut" 
            }}
          >
            {currentArticle.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-none"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Article Content */}
          <motion.article 
            className="max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: contentInView ? 1 : 0,
              y: contentInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: "easeOut" 
            }}
          >
            <div className="bg-gray-50 p-4 rounded-none mb-8">
              <p className="text-sm text-gray-600 mb-2">Debug: Content length: {currentArticle.content.length}</p>
              <p className="text-sm text-gray-600">First 100 chars: {currentArticle.content.substring(0, 100)}...</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {renderContent(currentArticle.content)}
            </div>
            
            {/* Fallback content for testing */}
            <div className="mt-8 p-4 border border-gray-200 rounded-none">
              <h3 className="text-xl font-bold mb-4">Test Content (Fallback)</h3>
              <p className="text-gray-700 mb-4">This is a test paragraph to verify that text rendering works.</p>
              <h4 className="text-lg font-semibold mb-2">Test Heading</h4>
              <ul className="list-disc pl-6">
                <li>Test bullet point 1</li>
                <li>Test bullet point 2</li>
              </ul>
            </div>
          </motion.article>

          {/* Share Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: contentInView ? 1 : 0,
              y: contentInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              ease: "easeOut" 
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h4>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'Facebook', 'Email'].map((platform, index) => (
                <button
                  key={platform}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                >
                  {platform}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Related Articles */}
      <motion.section 
        ref={relatedRef}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: relatedInView ? 1 : 0,
              y: relatedInView ? 0 : 30
            }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: "easeOut" 
            }}
          >
            <div className="flex items-center justify-center text-lg mb-6" style={{ color: '#F15F22' }}>
              <span>(Related Reading)</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight">
              Continue Exploring
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <motion.article 
                key={article.id}
                className="group cursor-pointer bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: relatedInView ? 1 : 0,
                  y: relatedInView ? 0 : 30
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut" 
                }}
                onClick={() => window.location.reload()} // Placeholder for navigation
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
                  <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-[#F15F22] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{article.readTime}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#F15F22' }}>
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}; 
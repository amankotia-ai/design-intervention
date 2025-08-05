import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  image: string;
}

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface AboutPageProps {
  className?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ className = '' }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);
  const locationRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.2 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const locationInView = useInView(locationRef, { once: true, amount: 0.2 });

  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology and creative solutions to push the boundaries of what's possible in design and fabrication.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3L15.09 8.26L22 9L17 14.14L18.18 21.02L13 18.5L7.82 21.02L9 14.14L4 9L10.91 8.26L13 3Z"/>
        </svg>
      )
    },
    {
      title: "Precision Craftsmanship", 
      description: "Every project reflects our commitment to meticulous attention to detail and uncompromising quality standards.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
        </svg>
      )
    },
    {
      title: "Collaborative Partnership",
      description: "We work closely with our clients, ensuring their vision becomes reality through transparent communication and shared expertise.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
        </svg>
      )
    },
    {
      title: "Sustainable Future",
      description: "We're committed to environmentally conscious practices and creating designs that contribute to a sustainable tomorrow.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      )
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Creative Director",
      bio: "15+ years in immersive design and fabrication, leading the vision for next-generation experiential spaces.",
      email: "rajesh@designintervention.biz",
      phone: "+91 98765 43210",
      image: "/assets/images/xr.png"
    },
    {
      name: "Priya Sharma",
      role: "Technical Director",
      bio: "Expert in XR technologies and interactive systems, ensuring seamless integration of cutting-edge tech.",
      email: "priya@designintervention.biz",
      phone: "+91 87654 32109",
      image: "/assets/images/interactive.png"
    },
    {
      name: "Amit Patel",
      role: "Production Manager",
      bio: "Master craftsman with expertise in specialty fabrication and project execution across diverse verticals.",
      email: "amit@designintervention.biz",
      phone: "+91 76543 21098",
      image: "/assets/images/studio.png"
    },
    {
      name: "Sarah Chen",
      role: "Design Lead",
      bio: "Award-winning designer specializing in exhibition spaces and brand experience environments.",
      email: "sarah@designintervention.biz",
      phone: "+91 65432 10987",
      image: "/assets/images/exhibition.png"
    }
  ];

  const stats: Stat[] = [
    {
      number: "200+",
      label: "Projects Delivered",
      description: "Successful installations across India and internationally"
    },
    {
      number: "50+",
      label: "Enterprise Clients",
      description: "From startups to Fortune 500 companies"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Pioneering immersive design since 2009"
    },
    {
      number: "25+",
      label: "Industry Awards",
      description: "Recognition for innovation and excellence"
    }
  ];

  // Subtle parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <div ref={containerRef} className={`${className}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="w-screen flex items-center justify-center bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center pt-40 pb-20">
          <motion.div
            className="flex items-center justify-center text-lg mb-8"
            style={{ color: '#F15F22' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>(About Us)</span>
          </motion.div>

          <motion.h1 
            className="text-6xl lg:text-8xl font-normal text-gray-900 mb-8 leading-tight tracking-tight normal-case"
            initial={{ opacity: 0, y: 8 }}
            animate={{ 
              opacity: heroInView ? 1 : 0,
              y: heroInView ? 0 : 8
            }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Designing the Future<br />
            of Experiences
          </motion.h1>
          
          <motion.p 
            className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            We are a multidisciplinary team of designers, engineers, and craftspeople dedicated to creating immersive experiences that inspire and transform.
          </motion.p>
        </div>
      </section>

      {/* Company Story Section */}
      <section 
        ref={storyRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: storyInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
                <span>(Our Story)</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Born from a Vision to Transform Spaces
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: storyInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, we began with a simple belief: that physical spaces have the power to tell stories, evoke emotions, and create lasting memories. What started as a small design studio has evolved into India's leading immersive experience company.
                </p>
                <p>
                  Today, we specialize in XR studios, exhibition design, film & TV production sets, and interactive installations. Our work spans from cutting-edge corporate environments to award-winning exhibition pavilions that have redefined visitor engagement.
                </p>
                <p>
                  We've had the privilege of working with some of the world's most innovative companies, helping them bring their visions to life through our unique blend of creativity, technology, and craftsmanship.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <motion.section 
        ref={valuesRef}
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, rgba(241, 95, 34, 0.05) 0%, rgba(241, 95, 34, 0.03) 50%, rgba(241, 95, 34, 0.01) 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: valuesInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>(Our Values)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: valuesInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                What Drives Us Forward
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our core values shape every project we undertake and every relationship we build. They're not just words on a wall—they're the foundation of who we are.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: valuesInView ? 1 : 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 4 }}
                animate={{ 
                  opacity: valuesInView ? 1 : 0,
                  y: valuesInView ? 0 : 4
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -2 }}
              >
                <div className="h-full">
                  <div className="text-orange-500 mb-6" style={{ color: '#F15F22' }}>
                    {value.icon}
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      {value.title}
                    </h3>
                    <motion.span 
                      className="text-sm font-medium" 
                      style={{ color: '#F15F22' }}
                      initial={{ opacity: 0, x: -4 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      →
                    </motion.span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: teamInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>(Our Team)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: teamInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Meet the Visionaries
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our diverse team brings together expertise from design, technology, fabrication, and business to deliver exceptional experiences.
              </p>
            </motion.div>
          </div>

          {/* Team Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: teamInView ? 1 : 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="group"
                initial={{ opacity: 0, y: 4 }}
                animate={{ 
                  opacity: teamInView ? 1 : 0,
                  y: teamInView ? 0 : 4
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <motion.div 
                  className="h-64 rounded-none relative overflow-hidden mb-4"
                  style={{ 
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-600">
                    <p className="text-sm font-medium text-gray-900">{member.role}</p>
                    <p>{member.email}</p>
                    <p>{member.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.7) 0%, rgba(249, 250, 251, 0.4) 50%, rgba(249, 250, 251, 0.1) 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: useTransform(scrollYProgress, [0.6, 1], ['0%', '-5%']) }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Two Column Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: statsInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>(Our Impact)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: statsInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Delivering Results That Matter
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our track record speaks for itself. From innovative installations to award-winning designs, we've consistently delivered excellence across every project.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: statsInView ? 1 : 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-left"
                initial={{ opacity: 0, y: 4 }}
                animate={{ 
                  opacity: statsInView ? 1 : 0,
                  y: statsInView ? 0 : 4
                }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.3 + (index * 0.05),
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="text-5xl lg:text-6xl font-normal mb-4 leading-none" style={{ color: '#F15F22' }}>
                  {stat.number}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {stat.label}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Location & Contact Section */}
      <section 
        ref={locationRef}
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: locationInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
                <span>(Visit Us)</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Where Innovation Happens
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Mumbai Studio</h3>
                  <p>Andheri East, Mumbai - 400069<br />Maharashtra, India</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Connect</h3>
                  <p>hello@yourcompany.com<br />+91 98765 43210</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: locationInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="h-96 rounded-none relative overflow-hidden"
                style={{ backgroundColor: '#f9fafb' }}
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-gray-600">Our Mumbai Studio</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}; 
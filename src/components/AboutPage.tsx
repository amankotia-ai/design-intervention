import React, { useRef } from 'react';
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

  // Removed unused hoveredMember state to satisfy linter

  const values = [
    {
      title: "Commitment to high-impact exhibition solutions",
      description: "We design exhibition environments that maximize visibility, outcomes, and brand impact.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 3L15.09 8.26L22 9L17 14.14L18.18 21.02L13 18.5L7.82 21.02L9 14.14L4 9L10.91 8.26L13 3Z"/>
        </svg>
      )
    },
    {
      title: "Focus on audience engagement and brand storytelling", 
      description: "Every space is crafted to capture attention, communicate your narrative, and drive participation.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
        </svg>
      )
    },
    {
      title: "Tailored solutions for exhibitors — big or small",
      description: "From compact booths to large pavilions, we adapt our approach to fit every scale and budget.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
        </svg>
      )
    },
    {
      title: "Unique & innovative solutions combining design and technology",
      description: "We fuse thoughtful design with cutting‑edge technology to create memorable, measurable experiences.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      )
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Amit Pathania",
      role: "Director - DI Mumbai",
      bio: "Design + Tech leader with 25+ years experience across 500+ projects.",
      email: "amit@designintervention.biz",
      phone: "+91 98200 51503",
      image: "/assets/images/Screenshot 2025-08-11 at 10.16.42 PM 1.png"
    },
    {
      name: "Madhura Auddy",
      role: "Sr. Manager - Operations",
      bio: "Operations specialist ensuring seamless delivery and client success.",
      email: "madhura@designintervention.biz",
      phone: "+91 87654 32109",
      image: "/assets/images/Screenshot 2025-08-11 at 10.16.02 PM 1.png"
    },
    {
      name: "Dr. Vijaya Chandak",
      role: "Head - Business Development",
      bio: "Leads strategic partnerships and business growth.",
      email: "vijaya@designintervention.biz",
      phone: "+91 98765 43210",
      image: "/assets/images/Screenshot 2025-08-11 at 10.12.33 PM 1.png"
    },
    {
      name: "Sunil Vishwakarma",
      role: "Project Manager",
      bio: "Drives on-site execution and project management.",
      email: "sunil@designintervention.biz",
      phone: "+91 76543 21098",
      image: "/assets/images/Screenshot 2025-08-11 at 10.15.07 PM 1.png"
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
        className="w-full flex items-center justify-center bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 w-full">
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
                  Over the past two decades, we have excelled across design and production—from news studios and interiors to exhibitions, product and furniture design, and large-scale builds. Our hands-on approach infuses every engagement with a holistic richness that stands apart. With 500+ diverse projects delivered across India’s major cities, we turn complex ideas into outcomes that perform in the real world.
                </p>
                <p>
                  Our execution arm began as an in-house unit and has grown into a turnkey partner for leading design and architectural firms. Along the way, we earned national recognition and expanded capabilities across specialty fabrication and premium hospitality interiors. Our content team brings strategy, scripting, production and post together—drawing on deep experience from advertising and film to deliver complete media solutions.
                </p>
                <p>
                  We also build cutting-edge interactive and immersive experiences—AR/VR, interactive floors and walls, and XR studios. A recent transformational milestone was creating an advanced corporate XR studio for a leading Indian conglomerate, redefining corporate communication with a hybrid of AR and VR. This continues to be our mission: elevating everyday moments into extraordinary memories through the power of design and technology.
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
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-64 lg:h-64 mx-auto mb-4 rounded-full overflow-hidden bg-transparent"
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-full bg-transparent"
                  />
                </motion.div>

                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
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
                  <p>
                    307, Kilfire Premises, Daliya Industrial Estate,<br />
                    Near Lotus Business Park, Andheri West,<br />
                    Mumbai - 53
                  </p>
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
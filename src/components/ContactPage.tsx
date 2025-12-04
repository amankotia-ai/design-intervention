import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

interface ContactInfo {
  title: string;
  location: string;
  address: string[];
  phone: string;
  email: string;
  hours: string;
}

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  specialties: string[];
  image: string;
}

interface ContactPageProps {
  className?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ className = '' }) => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const locationsRef = useRef(null);
  const teamRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const locationsInView = useInView(locationsRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  });

  // Removed unused hoveredTeamMember state to satisfy linter
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    'XR Studio',
    'Exhibition Design',
    'Film & TV Production',
    'Interactive Installation',
    'Interior Design',
    'Other'
  ];

  const timelines = [
    'Immediate (1-2 months)',
    'Short-term (3-6 months)',
    'Medium-term (6-12 months)',
    'Long-term (12+ months)',
    'Just exploring'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs',
    '₹10 - 50 Lakhs',
    '₹50 Lakhs - 2 Crores',
    '₹2 - 10 Crores',
    '₹10+ Crores',
    'Prefer not to say'
  ];

  const offices: ContactInfo[] = [
    {
      title: 'Mumbai Head Office',
      location: 'Andheri West, Mumbai',
      address: [
        '307, Kilfire Premises, Daliya Industrial Estate',
        'Near Lotus Business Park, Andheri West',
        'Mumbai - 53'
      ],
      phone: '+91 9820051503',
      email: 'amit@designintervention.biz',
      hours: '10:00 AM - 7:00 PM IST, Monday - Friday'
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Amit Pathania',
      role: 'Director - DI Mumbai',
      email: 'amit@designintervention.biz',
      phone: '+91 9820051503',
      specialties: ['Design + Tech Leadership', 'Studio Strategy'],
      image: '/assets/images/Screenshot 2025-08-11 at 10.16.42 PM 1.png'
    },
    {
      name: 'Madhura Auddy',
      role: 'Sr. Manager - Operations',
      email: 'madhura@designintervention.biz',
      phone: '+91 87654 32109',
      specialties: ['Operations', 'Client Servicing'],
      image: '/assets/images/Screenshot 2025-08-11 at 10.16.02 PM 1.png'
    },
    {
      name: 'Dr. Vijaya Chandak',
      role: 'Head - Business Development',
      email: 'vijaya@designintervention.biz',
      phone: '+91 98765 43210',
      specialties: ['Business Development', 'Partnerships'],
      image: '/assets/images/Screenshot 2025-08-11 at 10.12.33 PM 1.png'
    },
    {
      name: 'Sunil Vishwakarma',
      role: 'Project Manager',
      email: 'sunil@designintervention.biz',
      phone: '+91 76543 21098',
      specialties: ['Project Management', 'On-site Execution'],
      image: '/assets/images/Screenshot 2025-08-11 at 10.15.07 PM 1.png'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      timeline: '',
      budget: '',
      message: ''
    });
    
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.');
  };

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
            <span>Get In Touch</span>
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
            Let's Create Something<br />
            Extraordinary Together
          </motion.h1>
          
          <motion.p 
            className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Ready to transform your vision into reality? Whether you have a detailed brief or just an exciting idea, we're here to listen and collaborate.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <motion.section 
        ref={formRef}
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.7) 0%, rgba(249, 250, 251, 0.4) 50%, rgba(249, 250, 251, 0.1) 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Two Column Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: formInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>Project Inquiry</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: formInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Tell Us About Your Project
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Ready to bring your vision to life? Share your project details and let's start creating something extraordinary together.
              </p>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: formInView ? 1 : 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Your full name"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="your.email@company.com"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Your company name"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="+91 9820051503"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <motion.select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </motion.select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <motion.select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                        whileFocus={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </motion.select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Budget
                    </label>
                    <motion.select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-white"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </motion.select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none bg-white"
                      placeholder="Tell us about your project vision, requirements, and any specific challenges you'd like us to address..."
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-normal text-base flex items-center justify-center space-x-2 group transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    {!isSubmitting && (
                      <motion.span 
                        className="transition-colors duration-200 group-hover:text-[#F15F22]"
                        initial={{ opacity: 0, x: -4 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Direct Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Two Column Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: formInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>Direct Contact</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: formInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Prefer to Talk Directly?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Sometimes a conversation is worth a thousand words. Get in touch directly for immediate assistance.
              </p>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: formInView ? 1 : 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">General Inquiries</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>amit@designintervention.biz</p>
                      <p>+91 9820051503</p>
                      <p>
                        <a href="https://www.designintervention.biz" className="underline hover:no-underline" target="_blank" rel="noreferrer">
                          www.designintervention.biz
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10:00 AM - 7:00 PM IST<br />Saturday: 10:00 AM - 2:00 PM IST</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">Response Time</h3>
                    <p className="text-gray-600">We typically respond to all inquiries within 24 hours during business days.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Company Profile</h3>
                    <p className="text-gray-600 mb-4">Download our detailed company profile with case studies and client references.</p>
                    <motion.button 
                      className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg text-sm font-normal hover:bg-gray-200 transition-colors flex items-center space-x-2 group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                    >
                      <span>Download PDF</span>
                      <motion.span 
                        className="transition-colors duration-200 group-hover:text-[#F15F22]"
                        initial={{ opacity: 0, x: -4 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <motion.section 
        ref={locationsRef}
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.7) 0%, rgba(249, 250, 251, 0.4) 50%, rgba(249, 250, 251, 0.1) 100%)'
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: useTransform(scrollYProgress, [0.4, 1], ['0%', '-5%']) }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Two Column Header */}
          <div className="grid lg:grid-cols-2 gap-20 mb-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: locationsInView ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center text-lg" style={{ color: '#F15F22' }}>
                <span>Our Locations</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: locationsInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Visit Our Studio
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Based in Mumbai, we're strategically positioned to serve clients across India and beyond.
              </p>

              {/* Mumbai Office Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: locationsInView ? 1 : 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="text-xl font-medium text-gray-900 mb-2">{offices[0].title}</h3>
                <p className="text-gray-600 mb-4">{offices[0].location}</p>
                
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Address:</h4>
                    {offices[0].address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Contact:</h4>
                    <p>{offices[0].phone}</p>
                    <p>{offices[0].email}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Hours:</h4>
                    <p>{offices[0].hours}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Contact Section */}
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
                <span>Key Contacts</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: teamInView ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Connect with Our Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Get in touch with the right team member for your specific project needs and requirements.
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
    </div>
  );
}; 
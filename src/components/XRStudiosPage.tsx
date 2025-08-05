import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';

export const XRStudiosPage: React.FC = () => {
  const heroRef = React.useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="space-y-24">
      {/* Header */}
      <motion.section 
        ref={heroRef}
        className="w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'rgba(241, 95, 34, 0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20 w-full">
          {/* Big XR Icon */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: heroInView ? 1 : 0,
              scale: heroInView ? 1 : 0.8
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-24 h-24 flex items-center justify-center" style={{ color: '#F15F22' }}>
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-full h-full"
              >
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
                <path d="M12,12L14,14L12,16L10,14L12,12Z"/>
                <path d="M12,8L16,12L12,16L8,12L12,8Z"/>
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center text-lg mb-8"
            style={{ color: '#F15F22' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>(XR Studios)</span>
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
            XR Experiences<br />
            Powered by Disguise
          </motion.h1>
          
          <motion.p 
            className="text-base font-normal text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Immersive extended reality experiences that transform how brands connect with their audiences.
          </motion.p>
        </div>
      </motion.section>

      {/* Activations Section */}
      <ActivationsSection />

      {/* Key Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>(XR Capabilities)</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Immersive Technology<br />
                That Transforms Reality
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our XR solutions blend virtual and physical worlds to create experiences that 
                captivate audiences and drive meaningful engagement across all industries.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
                  <path d="M12,12L14,14L12,16L10,14L12,12Z"/>
                  <path d="M12,8L16,12L12,16L8,12L12,8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mixed Reality Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly blend virtual content with real-world environments using advanced AR/VR technology for truly immersive experiences.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-time Rendering</h3>
              <p className="text-gray-600 leading-relaxed">
                High-performance graphics processing ensures smooth, responsive XR experiences with minimal latency and maximum visual impact.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Experiences</h3>
              <p className="text-gray-600 leading-relaxed">
                Create engaging, interactive XR content that responds to user input and creates memorable, participatory experiences.
              </p>
            </div>
            
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                From intimate VR experiences to large-scale AR installations, our XR technology adapts to any environment and audience size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
                <span>(Process)</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
                Built on strong foundations
              </h2>
              
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We're shaping the future of experience. By putting feelings first, we redefine 
                how people connect with brands, each other, and the world around them.
              </p>
              
              <hr className="border-gray-300 mb-12" />
              
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Research & Strategy</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      We analyse objectives, trends, markets, and audiences to devise strategies that set you 
                      up for success.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Design & Planning</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      We bring visionary ideas to life with stunning designs that are not only seen, but felt.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Production & Supervision</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      We orchestrate every step of production and implementation, keeping the project on track 
                      and on time, from start to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full min-h-[600px] bg-gradient-to-br from-blue-600 via-purple-500 to-orange-400 rounded-none relative overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="Hear from our customers"
        testimonials={[
          {
            quote: "Design Intervention's XR solutions transformed our brand presence with innovative virtual experiences that exceeded our expectations and delivered remarkable results.",
            authorName: "John Doe",
            authorTitle: "Project Director",
            company: "Adani",
            companyLogo: "adani"
          },
          {
            quote: "Their XR technology helped us create immersive experiences that truly connect with our audience and set new standards in our industry.",
            authorName: "Jane Smith",
            authorTitle: "Creative Head",
            company: "VH1",
            companyLogo: "VH1"
          },
          {
            quote: "The XR studio they built for us revolutionized our production workflow and enabled us to create content that was previously impossible.",
            authorName: "Rajesh Kumar",
            authorTitle: "Marketing Director",
            company: "CNBC TV18",
            companyLogo: "CNBC"
          },
          {
            quote: "Their attention to detail and creative vision in XR technology helped us create experiences that truly connect with our audience.",
            authorName: "Priya Sharma",
            authorTitle: "Brand Manager",
            company: "Pidilite",
            companyLogo: "Pidilite"
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to build your XR studio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your vision and create an immersive production environment 
            that sets new standards in your industry.
          </p>
          <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}; 
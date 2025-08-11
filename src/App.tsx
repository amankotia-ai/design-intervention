import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { 
  PageHeader, 
  HeroSection,
  ActivationsSection, 
  StatsSection, 
  TestimonialsSection, 
  FAQSection,
  PlayReelSection,
  ServicesSection,
  WorkPage as NewWorkPage,
  AboutPage as NewAboutPage,
  ContactPage as NewContactPage,
  BlogPage as NewBlogPage,
  BlogArticlePage as NewBlogArticlePage,
  ProjectDetailPage,
  FilmTVProductionPage,
  SpecialtyFabricationPage,
  InteriorDesignPage,
  StartProjectModal
} from './components';
import { XRStudiosPage } from './components/XRStudiosPage';
import { ExhibitionDesignPage } from './components/ExhibitionDesignPage';
import { projectDetails } from './data/projectDetails';

const Navigation = ({ currentPage, setCurrentPage, onOpenStartProject }: { currentPage: string; setCurrentPage: (page: string) => void; onOpenStartProject: () => void }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'portfolio', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const serviceItems = [
    { id: 'xr-studios', label: 'XR Studios', description: 'Extended Reality studios and corporate environments' },
    { id: 'exhibition-design', label: 'Exhibition Design', description: 'Experiential booths and pavilions, concept to turnkey' },
    { id: 'film-tv-production', label: 'Film & TV Production', description: 'Production sets and specialty fabrication for film and TV' },
    { id: 'specialty-fabrication', label: 'Specialty Fabrication', description: 'Precision builds, advanced materials, and on-site delivery' },
    { id: 'interior-design', label: 'Interior Design', description: 'Bespoke interiors for offices, studios, and commercial spaces' }
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3 text-xl font-normal text-black hover:opacity-70 transition-opacity"
            >
              <img 
                src="/assets/logos/DI_LOGO (1).svg" 
                alt="Design Intervention Logo" 
                className="w-8 h-8"
              />
              <span>Design Intervention Pvt. Ltd.</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-base font-normal transition-colors ${
                  currentPage === item.id
                    ? 'text-[#F15F22]'
                    : 'text-gray-600 hover:text-[#F15F22]'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={`flex items-center space-x-1 text-base font-normal transition-colors ${
                  currentPage.includes('services') || currentPage.includes('xr-') || currentPage.includes('exhibition-') || currentPage.includes('film-') || currentPage.includes('specialty-') || currentPage.includes('interior-')
                    ? 'text-[#F15F22]'
                    : 'text-gray-600 hover:text-[#F15F22]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 shadow-lg rounded-none z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="py-2">
                    {serviceItems.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setCurrentPage(service.id);
                          setIsServicesOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{service.label}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Blog */}
            <button 
              onClick={() => setCurrentPage('blog')}
              className={`text-base font-normal transition-colors ${
                currentPage === 'blog'
                  ? 'text-[#F15F22]'
                  : 'text-gray-600 hover:text-[#F15F22]'
              }`}
            >
              Blog
            </button>

            {/* Start Your Project CTA */}
            <button
              onClick={onOpenStartProject}
              className="ml-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-normal hover:bg-gray-200 transition-colors flex items-center space-x-2 group"
            >
              <span>Start Your Project</span>
              <motion.span 
                className="transition-colors duration-200 group-hover:text-[#F15F22]"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={handleMobileMenuToggle}
              className="text-gray-600 hover:text-[#F15F22] transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleMobileMenuToggle}>
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-4 space-y-4">
              {/* Main Navigation Items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`block w-full text-left py-3 text-base font-normal transition-colors ${
                    currentPage === item.id
                      ? 'text-[#F15F22]'
                      : 'text-gray-600 hover:text-[#F15F22]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Services Section */}
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm font-medium text-gray-500 mb-3">Services</div>
                {serviceItems.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleMobileNavClick(service.id)}
                    className={`block w-full text-left py-3 transition-colors ${
                      currentPage === service.id
                        ? 'text-[#F15F22]'
                        : 'text-gray-600 hover:text-[#F15F22]'
                    }`}
                  >
                    <div className="font-medium">{service.label}</div>
                    <div className="text-sm text-gray-500">{service.description}</div>
                  </button>
                ))}
              </div>
              
              {/* Blog */}
              <div className="border-t border-gray-200 pt-4">
                <button
                  onClick={() => handleMobileNavClick('blog')}
                  className={`block w-full text-left py-3 text-base font-normal transition-colors ${
                    currentPage === 'blog'
                      ? 'text-[#F15F22]'
                      : 'text-gray-600 hover:text-[#F15F22]'
                  }`}
                >
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = ({ onNavigate, onStartProject }: { onNavigate?: (page: string) => void; onStartProject?: () => void }) => (
  <div className="space-y-0">
    {/* Hero Section */}
    <HeroSection
      title={<>The Cutting<br />Edge of Visual<br />Experiences</>}
      description="We are a multidisciplinary, innovative design company delivering holistic turnkey solutions across exhibitions, XR studios, interiors, and specialty fabrications."
      buttons={[
        { text: "Start Your Project", onClick: () => onStartProject && onStartProject() },
        { text: "View Our Work", onClick: () => console.log("View Work"), variant: "secondary" }
      ]}
      imageClassName="w-full h-auto object-contain pr-8 sm:pr-12 md:pr-0"
    />

    {/* Flagship Projects Section */}
    <PlayReelSection
      title="Flagship Projects & Innovations"
      clients={['Adani Group', 'ICICI Bank', 'CNBC TV18', 'ET Now', 'Pidilite', 'Welspun', 'Shapoorji Pallonji', 'Placeholder']}
    />

    {/* Activations Section */}
    <ActivationsSection />

    {/* Services Section */}
    <ServicesSection onNavigate={onNavigate} />

    {/* Process Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Process Content */}
          <div>
            {/* Header */}
            <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
              <span>(Process)</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
              Built on strong foundations
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              We're shaping the future of experience. By putting feelings first, we redefine how people connect with brands, each other, and the world around them.
            </p>
            
            <hr className="border-gray-300 mb-12" />
            
            {/* Process Steps */}
            <div className="space-y-12">
              <div className="grid grid-cols-5 gap-6 items-start">
                <div className="col-span-2">
                  <h3 className="font-semibold text-gray-900 text-base">Research & Strategy</h3>
                </div>
                <div className="col-span-3">
                  <p className="text-gray-600 leading-relaxed">
                    We analyse objectives, trends, markets, and audiences to devise strategies that set you up for success.
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
                    We orchestrate every step of production and implementation, keeping the project on track and on time, from start to finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Single Full Height Image */}
          <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/images/08a8ef1f-39a3-42b4-959d-de2cc4278abf.png')" }}
            ></div>
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
          quote: "We're shaping the future of experience. By putting feelings first, we redefine how people connect with brands, each other, and the world around them.",
          authorName: "John Doe",
          authorTitle: "Project Director",
          company: "Adani",
          companyLogo: "adani"
        },
        {
          quote: "We're shaping the future of experience. By putting feelings first, we redefine how people connect with brands and the world around them.",
          authorName: "Jane Smith",
          authorTitle: "Creative Head",
          company: "VH1",
          companyLogo: "VH1"
        },
        {
          quote: "Design Intervention transformed our brand presence with innovative solutions that exceeded our expectations and delivered remarkable results.",
          authorName: "Rajesh Kumar",
          authorTitle: "Marketing Director",
          company: "CNBC TV18",
          companyLogo: "CNBC"
        },
        {
          quote: "Their attention to detail and creative vision helped us create immersive experiences that truly connect with our audience.",
          authorName: "Priya Sharma",
          authorTitle: "Brand Manager",
          company: "Pidilite",
          companyLogo: "Pidilite"
        },
        {
          quote: "Outstanding work quality and professional approach. They brought our vision to life in ways we never imagined possible.",
          authorName: "Michael Johnson",
          authorTitle: "Creative Lead",
          company: "Welspun",
          companyLogo: "Welspun"
        }
      ]}
    />

    {/* FAQ Section */}
    <FAQSection
      breadcrumb="FAQ"
      title="Frequently asked questions"
      subtitle="Quick answers about our process, timelines and engagement model"
      backgroundColor="bg-white"
      items={[
        {
          question: 'How do we get started on a project?',
          answer: 'Reach out via the contact form with a brief. We schedule a discovery call to align on objectives, scope, timelines and budget, then share a proposal with phased deliverables.'
        },
        {
          question: 'What is a typical project timeline?',
          answer: 'Small engagements can be 2–4 weeks. Larger turnkey programs (exhibitions, studios, interiors) typically run 8–16 weeks depending on approvals, procurement and site conditions.'
        },
        {
          question: 'Do you handle turnkey execution?',
          answer: 'Yes. We offer concept, design, detailing, fabrication, procurement, logistics and on‑site installation with single‑point ownership.'
        },
        {
          question: 'Can you work with our in‑house or partner vendors?',
          answer: 'Absolutely. We can collaborate with your internal teams and approved vendors, or supply a complete turnkey team as needed.'
        },
        {
          question: 'Where do you operate?',
          answer: 'We are Mumbai‑based and deliver projects across India. For multi‑city programs we plan modularity, packing and repeatable detailing.'
        }
      ]}
    />
  </div>
);



const ServicesPage = ({ setCurrentPage }: { setCurrentPage?: (page: string) => void }) => (
  <div className="space-y-32">
    {/* Header */}
    <PageHeader
      breadcrumb="(Services)"
      title="XR Experiences"
      description="Powered by Disguise"
    />

    {/* Activations Section */}
    <ActivationsSection />

    {/* Hero Image Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="w-full h-96 bg-gradient-to-br from-red-500 to-orange-600 rounded-none"></div>
          <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-none"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20 mt-8">
          <div>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('xr-studios')}
              className="text-xl font-semibold text-gray-900 mb-4 hover:text-[#F15F22] transition-colors cursor-pointer"
            >
              Interactive Studios →
            </button>
          </div>
          <div>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('xr-studios')}
              className="text-xl font-semibold text-gray-900 mb-4 hover:text-[#F15F22] transition-colors cursor-pointer"
            >
              Live Shows →
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            With experience in both public and industrial spaces, we design wayfinding systems that bring clarity to 
            even the most complex environments. Our approach focuses on simplifying navigation, ensuring that 
            every visitor can confidently find their way.
          </p>
        </div>
      </div>
    </section>

    {/* Integrated Solutions Section */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center text-lg mb-8" style={{ color: '#F15F22' }}>
            <span>(Granular Control)</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Integrated Solutions to Unlock<br />
            Spectacular Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We use holistic thinking, cutting-edge technology and flawless creativity to 
            deliver immersive experiences that make people feel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-none mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Plan and view every pixel</h3>
            <p className="text-sm text-gray-600">
              Build a highly accurate representation of your show where you can view and edit in every pixel.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-none mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Flexibility</h3>
            <p className="text-sm text-gray-600">
              Receive and handle all types of content and input formats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-none mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Timeline control</h3>
            <p className="text-sm text-gray-600">
              A timeline-based sequencer to automate your show according to time.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-none mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Speed and precision</h3>
            <p className="text-sm text-gray-600">
              Make rapid changes to your show content in seconds.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-none mx-auto mb-4"></div>
            <h3 className="font-semibold text-gray-900 mb-2">Integrations</h3>
            <p className="text-sm text-gray-600">
              Integrate with all your existing systems and applications.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* XR Studios Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <button 
              onClick={() => setCurrentPage && setCurrentPage('xr-studios')}
              className="block w-full text-left hover:opacity-80 transition-opacity"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight hover:text-[#F15F22] transition-colors">
                XR Studios & Corporate Environments
              </h2>
            </button>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Pioneer in XR studio setup in India, offering end-to-end design and build services 
              for Extended Reality studios and next-gen corporate environments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Spatial design and acoustics optimization</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">LED volume stages and AR graphics integration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Camera tracking systems and control room design</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Training and post-installation support</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setCurrentPage && setCurrentPage('xr-studios')}
            className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-none hover:opacity-90 transition-opacity"
          ></button>
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
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Built on strong<br />
              foundations
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
          
          <div className="h-full min-h-[600px] rounded-none relative overflow-hidden bg-transparent">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/images/08a8ef1f-39a3-42b4-959d-de2cc4278abf.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
);



const ClientsPage = () => (
  <div className="space-y-32">
    {/* Header */}
    <PageHeader
      breadcrumb="Clients"
      title="Trusted by Fortune 500 companies and leading brands"
      description="Building long-term partnerships across industries with our commitment to excellence."
    />

    {/* Client Categories */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Corporate & Industry</h3>
            <div className="space-y-3">
              {['Adani Group', 'ICICI Bank', 'Pidilite Industries', 'Welspun', 'Reliance Industries', 'Godrej'].map((client, index) => (
                <p key={index} className="text-gray-600">{client}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Media & Entertainment</h3>
            <div className="space-y-3">
              {['CNBC-TV18', 'ET Now', 'Star TV', 'Viacom18 (MTV)', 'Zee Network', 'Yash Raj Films'].map((client, index) => (
                <p key={index} className="text-gray-600">{client}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Finance & Tech</h3>
            <div className="space-y-3">
              {['HSBC', 'Kotak Mahindra Bank', 'Forbes Technosys', 'TCS', 'Wipro', 'Google India'].map((client, index) => (
                <p key={index} className="text-gray-600">{client}</p>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Government & Public</h3>
            <div className="space-y-3">
              {['Ministry of HRD', 'NITI Aayog', 'Indian Navy'].map((client, index) => (
                <p key={index} className="text-gray-600">{client}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-normal text-gray-900 mb-20 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-none shadow-sm">
            <p className="text-xl text-gray-900 mb-8 leading-relaxed italic">
              "Design Intervention developed a delightful, user-friendly, and luxurious experience 
              keeping in mind the exclusive clientele. The Smart Vault's awesome looking futuristic 
              kiosk aptly complements the hi-tech robotic service."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Kumar Ashish</p>
                <p className="text-gray-600 text-sm">Senior GM, ICICI Bank</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-none shadow-sm">
            <p className="text-xl text-gray-900 mb-8 leading-relaxed italic">
              "They understand not only the design and aesthetics of the exterior but also the 
              manufacturability of the design in terms of cost and time efficiency."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Feroze Katila</p>
                <p className="text-gray-600 text-sm">AVP, Forbes Technosys</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <StatsSection
      title="Long-term Partnerships"
      description="One of our very first clients is still partnering with us 20+ years later"
      stats={[
        { value: "500+", label: "Projects Completed" },
        { value: "20+", label: "Years of Experience" },
        { value: "100%", label: "Client Satisfaction" }
      ]}
    />
  </div>
);

const TechnologyPage = () => (
  <div className="space-y-32">
    {/* Header */}
    <PageHeader
      breadcrumb="Technology"
      title="At the forefront of design technology and fabrication techniques"
      description="Innovation isn't just a buzzword for us – it's the cornerstone of our practice."
    />

    {/* Technology Areas */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-32">
          {/* XR & Virtual Production */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">XR & Virtual Production</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Early adopters of Extended Reality environments, combining LED displays, 
                real-time rendering, and motion tracking for immersive experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">LED wall technology and pixel pitch optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Camera tracking and content server sync</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Game engine integration (Unreal/Unity)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Turnkey XR studio solutions</p>
                </div>
              </div>
            </div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-none"></div>
          </div>

          {/* AR/VR Solutions */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="w-full h-96 bg-gradient-to-br from-green-400 to-teal-600 rounded-none lg:order-1"></div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">AR/VR Solutions</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Developing interactive AR/VR experiences that add digital layers to physical 
                environments for enhanced visitor engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Augmented reality mobile applications</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">360° VR content creation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Interactive virtual showrooms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">VR training simulators</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Technologies */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Interactive Technologies</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Exploring sensors, touchscreens, gesture control, and IoT to create responsive 
                installations that engage visitors meaningfully.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Multi-touch interactive displays</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Gesture recognition systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">RFID/NFC personalized experiences</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">IoT-enabled real-time data visualization</p>
                </div>
              </div>
            </div>
            <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-600 rounded-none"></div>
          </div>

          {/* Advanced Fabrication */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="w-full h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-none lg:order-1"></div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Advanced Fabrication</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our workshop combines digital fabrication with traditional craftsmanship, 
                experimenting with new materials and innovative techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">CNC cutting and 3D printing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Laser cutting and precision machining</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Smart materials and thermochromic paints</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Sustainable and recycled composites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Innovation Showcase */}
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-20 text-center">Innovation Highlights</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: 'Adani XR Studio', desc: 'India\'s most advanced corporate XR studio implementation' },
            { title: 'Interactive Floor Systems', desc: 'Pressure-sensitive floors with projection mapping' },
            { title: 'Robotic Integration', desc: 'ICICI Smart Vault with automated locker systems' }
          ].map((innovation, index) => (
            <div key={index} className="bg-white p-8 rounded-none shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-400 rounded-none mb-6"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{innovation.title}</h3>
              <p className="text-gray-600 leading-relaxed">{innovation.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentArticle, setCurrentArticle] = useState<string | null>(null);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  // Ensure we always start at the top on any navigation-like change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPage, currentArticle, currentProject]);

  const handleBlogArticleClick = (slug: string) => {
    setCurrentArticle(slug);
    setCurrentPage('blog-article');
  };

  const handleBackToBlog = () => {
    setCurrentArticle(null);
    setCurrentPage('blog');
  };

  const handleProjectClick = (projectId: string) => {
    setCurrentProject(projectId);
    setCurrentPage('project-detail');
  };

  const handleBackToWork = () => {
    setCurrentProject(null);
    setCurrentPage('portfolio');
  };

  // Footer links should mirror the navbar pages and services
  const footerServiceItems = [
    { id: 'xr-studios', label: 'XR Studios' },
    { id: 'exhibition-design', label: 'Exhibition Design' },
    { id: 'film-tv-production', label: 'Film & TV Production' },
    { id: 'specialty-fabrication', label: 'Specialty Fabrication' },
    { id: 'interior-design', label: 'Interior Design' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} onStartProject={() => setIsStartModalOpen(true)} />;
      case 'about': return <NewAboutPage />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'xr-studios': return <XRStudiosPage onStartProject={() => setIsStartModalOpen(true)} />;
      case 'exhibition-design': return <ExhibitionDesignPage onStartProject={() => setIsStartModalOpen(true)} />;
      case 'film-tv-production': return <FilmTVProductionPage />;
      case 'specialty-fabrication': return <SpecialtyFabricationPage />;
      case 'interior-design': return <InteriorDesignPage />;
      case 'portfolio': return <NewWorkPage onProjectClick={handleProjectClick} />;
      case 'project-detail': 
        return currentProject && projectDetails[currentProject] ? (
          <ProjectDetailPage 
            project={projectDetails[currentProject]} 
            onBackClick={handleBackToWork}
            onRelatedProjectClick={handleProjectClick}
          />
        ) : <NewWorkPage onProjectClick={handleProjectClick} />;
      case 'clients': return <ClientsPage />;
      case 'technology': return <TechnologyPage />;
      case 'blog': return <NewBlogPage onArticleClick={handleBlogArticleClick} />;
      case 'blog-article': return <NewBlogArticlePage slug={currentArticle || undefined} onBackClick={handleBackToBlog} />;
      case 'contact': return <NewContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} onOpenStartProject={() => setIsStartModalOpen(true)} />
      <main>
        {renderPage()}
      </main>
      <StartProjectModal isOpen={isStartModalOpen} onClose={() => setIsStartModalOpen(false)} />
      <footer className="bg-[#f3f4f6] text-gray-600 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="flex items-center space-x-3 text-xl font-normal text-black hover:opacity-70 transition-opacity"
                >
                  <img 
                    src="/assets/logos/DI_LOGO (1).svg" 
                    alt="Design Intervention Logo" 
                    className="w-8 h-8"
                  />
                </button>
              </div>
              <p className="leading-relaxed">
                Where immersive design meets cutting-edge technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <div className="space-y-3">
                {footerServiceItems.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setCurrentPage(service.id)}
                    className="hover:opacity-90 cursor-pointer transition-opacity block text-left"
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <p className="mb-2">Mumbai</p>
              <p>projects@designintervention.biz</p>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-16 pt-8 text-center">
            <p className="text-gray-600">&copy; 2025 Design Intervention India Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
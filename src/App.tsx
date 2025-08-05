import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, ExternalLink, Play, Users, Building, Zap, Settings } from 'lucide-react';
import { 
  PageHeader, 
  HeroSection,
  ActivationsSection, 
  FeatureSection, 
  ContentGrid, 
  StatsSection, 
  TestimonialsSection, 
  ContactForm, 
  PlayReelSection,
  BiohackingSection,
  ServicesSection,
  WorkPage as NewWorkPage,
  AboutPage as NewAboutPage,
  NewsPage as NewNewsPage,
  ContactPage as NewContactPage,
  BlogPage as NewBlogPage,
  BlogArticlePage as NewBlogArticlePage,
  ProjectDetailPage,
  XRStudiosPage
} from './components';
import { projectDetails } from './data/projectDetails';

const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const navItems = [
    { id: 'portfolio', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const serviceItems = [
    { id: 'xr-studios', label: 'XR Studios', description: 'Extended Reality studios and corporate environments' }
  ];

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
            
            {/* Search Icon */}
            <button className="text-gray-600 hover:text-[#F15F22] transition-colors p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
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
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#F15F22] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HomePage = () => (
  <div className="space-y-0">
    {/* Hero Section */}
    <HeroSection
      title={<>The Cutting<br />Edge of Visual<br />Experiences</>}
      description="We are a multidisciplinary, innovative design company delivering holistic turnkey solutions across exhibitions, XR studios, interiors, and specialty fabrications."
      buttons={[
        { text: "Start Your Project", onClick: () => console.log("Start Project") },
        { text: "View Our Work", onClick: () => console.log("View Work"), variant: "secondary" }
      ]}
    />

    {/* Flagship Projects Section */}
    <PlayReelSection
      title="Flagship Projects & Innovations"
      clients={['Adani Group', 'ICICI Bank', 'CNBC TV18', 'ET Now', 'Pidilite', 'Welspun', 'Shapoorji Pallonji', 'Placeholder']}
    />

    {/* Activations Section */}
    <ActivationsSection />

    {/* Services Section */}
    <ServicesSection />

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
          <div className="h-full min-h-[600px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-none relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="absolute inset-0 bg-cover bg-center" 
                 style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 600\"%3E%3Cdefs%3E%3ClinearGradient id=\"a\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"%3E%3Cstop offset=\"0\" stop-color=\"%23667eea\"/%3E%3Cstop offset=\"1\" stop-color=\"%23764ba2\"/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"400\" height=\"600\" fill=\"url(%23a)\"/%3E%3C/svg%3E')"}}></div>
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
          
          <div className="h-full min-h-[600px] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-none relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <NewAboutPage />;
      case 'services': return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'xr-studios': return <XRStudiosPage />;
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
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white rounded-none flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-black rounded-none"></div>
                </div>
                <h3 className="text-xl font-semibold">Design Intervention</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Where immersive design meets cutting-edge technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <div className="space-y-3">
                {['XR Studios', 'Exhibition Design', 'Film Production', 'Specialty Fabrication'].map((service, index) => (
                  <p key={index} className="text-gray-400 hover:text-white cursor-pointer transition-colors">{service}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                {['About Us', 'Portfolio', 'Clients', 'Technology'].map((item, index) => (
                  <p key={index} className="text-gray-400 hover:text-white cursor-pointer transition-colors">{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <p className="text-gray-400 mb-2">Mumbai</p>
              <p className="text-gray-400">projects@designintervention.biz</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Design Intervention India Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
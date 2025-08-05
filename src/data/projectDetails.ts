export interface ProjectImage {
  url: string;
  caption: string;
  type: 'main' | 'gallery' | 'process' | 'detail';
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  images: ProjectImage[];
  tags: string[];
  year: string;
  client: string;
  location: string;
  duration: string;
  teamSize: string;
  budget?: string;
  status: 'completed' | 'in-progress' | 'concept';
  specs: ProjectSpec[];
  team: TeamMember[];
  challenges: string[];
  solutions: string[];
  results: string[];
  awards?: string[];
  technologies: string[];
  relatedProjects?: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  '1': {
    id: '1',
    title: 'Corporate XR Studio',
    category: 'XR Studios',
    description: 'State-of-the-art extended reality studio with motion capture and virtual production capabilities.',
    longDescription: 'This groundbreaking XR studio represents a leap forward in corporate content creation, combining cutting-edge LED wall technology with advanced motion capture systems. The facility enables real-time virtual production, allowing content creators to blend physical and digital environments seamlessly. The studio features a 270-degree LED wall setup with precision color calibration, creating immersive backgrounds that respond dynamically to camera movements. The space was designed to accommodate various production scales, from intimate corporate presentations to large-scale commercial shoots.',
    images: [
      {
        url: '/assets/images/xr.png',
        caption: 'Main XR Studio space with LED walls and motion capture setup',
        type: 'main'
      },
      {
        url: '/assets/images/xr.png',
        caption: 'Control room with real-time rendering capabilities',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'LED wall calibration and testing phase',
        type: 'gallery'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Motion capture system installation',
        type: 'gallery'
      },
      {
        url: '/assets/images/xr.png',
        caption: 'Initial space planning and layout design',
        type: 'process'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Technical infrastructure installation',
        type: 'process'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'System integration and testing',
        type: 'process'
      }
    ],
    tags: ['XR', 'Motion Capture', 'Virtual Production', 'LED Walls', 'Real-time Rendering'],
    year: '2024',
    client: 'Adani Digital Labs',
    location: 'Mumbai, India',
    duration: '8 months',
    teamSize: '12 specialists',
    budget: '₹2.5 Crores',
    status: 'completed',
    specs: [
      { label: 'LED Wall Resolution', value: '4K per panel (64 panels total)' },
      { label: 'Studio Dimensions', value: '40ft x 30ft x 16ft height' },
      { label: 'Motion Capture Points', value: '64 high-precision cameras' },
      { label: 'Real-time Rendering', value: 'Unreal Engine 5 with custom pipeline' },
      { label: 'Color Accuracy', value: 'DCI-P3 color space, 90% gamut' },
      { label: 'Refresh Rate', value: '120Hz synchronized across all panels' },
      { label: 'Tracking Volume', value: '25ft x 20ft x 12ft capture space' },
      { label: 'Audio System', value: '7.1 surround with acoustic treatment' }
    ],
    team: [
      { name: 'Rajesh Sharma', role: 'Project Director', image: '' },
      { name: 'Priya Mehta', role: 'XR Technical Lead', image: '' },
      { name: 'Arjun Patel', role: 'LED Systems Engineer', image: '' },
      { name: 'Sneha Gupta', role: 'Motion Capture Specialist', image: '' },
      { name: 'Vikram Singh', role: 'Software Integration Lead', image: '' }
    ],
    challenges: [
      'Achieving seamless color matching between LED panels and physical lighting',
      'Minimizing latency in real-time rendering for live productions',
      'Creating flexible rigging systems for different production requirements',
      'Integrating multiple vendor systems into a unified control interface',
      'Designing acoustic treatment that doesn\'t interfere with visual elements'
    ],
    solutions: [
      'Implemented custom color calibration system with regular maintenance protocols',
      'Optimized rendering pipeline with predictive frame buffering',
      'Designed modular rigging system with quick-change configurations',
      'Developed proprietary middleware for system integration',
      'Created invisible acoustic panels integrated into LED wall mounting systems'
    ],
    results: [
      '95% reduction in post-production compositing time',
      '300% increase in content creation efficiency',
      'Achieved industry-leading 8ms latency for real-time interactions',
      'Successfully delivered 50+ productions in first 6 months',
      'Recognition as India\'s most advanced corporate XR facility'
    ],
    awards: [
      'Indian Design Excellence Award 2024',
      'Technology Innovation in Media Production 2024',
      'Best Commercial XR Installation - Asia Pacific'
    ],
    technologies: [
      'LED Technology',
      'Motion Capture',
      'Unreal Engine 5',
      'Custom Control Software',
      'Real-time Rendering',
      'Color Science',
      'Acoustic Engineering'
    ],
    relatedProjects: ['2', '3']
  },
  '2': {
    id: '2',
    title: 'Tech Exhibition Pavilion',
    category: 'Exhibitions',
    description: 'Award-winning interactive exhibition space featuring projection mapping and touchscreen interfaces.',
    longDescription: 'This innovative exhibition pavilion showcases the future of interactive technology through a carefully orchestrated blend of projection mapping, multi-touch interfaces, and responsive installations. The space tells a compelling story about technological evolution, guiding visitors through immersive experiences that adapt to their presence and interactions. The central feature is a 360-degree projection dome that responds to visitor movements, creating personalized journeys through digital landscapes. Interactive walls display real-time data visualizations, while tactile interfaces allow hands-on exploration of complex technological concepts.',
    images: [
      {
        url: '/assets/images/exhibition.png',
        caption: 'Main exhibition hall with interactive installations',
        type: 'main'
      },
      {
        url: '/assets/images/interactive.png',
        caption: '360-degree projection dome with motion tracking',
        type: 'gallery'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Interactive wall displays with real-time data',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Tactile interface stations for hands-on learning',
        type: 'gallery'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Conceptual design and visitor flow planning',
        type: 'process'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Interactive technology testing and calibration',
        type: 'process'
      }
    ],
    tags: ['Interactive', 'Projection Mapping', 'Touchscreens', 'Data Visualization', 'Motion Tracking'],
    year: '2024',
    client: 'Tech Innovation Summit',
    location: 'Bangalore, India',
    duration: '6 months',
    teamSize: '15 designers and engineers',
    budget: '₹1.8 Crores',
    status: 'completed',
    specs: [
      { label: 'Exhibition Area', value: '5,000 sq ft multi-zone space' },
      { label: 'Projection Systems', value: '12 x 4K projectors with edge blending' },
      { label: 'Interactive Displays', value: '8 x 75" multi-touch screens' },
      { label: 'Motion Sensors', value: 'Computer vision with 16 tracking points' },
      { label: 'Audio Zones', value: '6 discrete audio zones with directional speakers' },
      { label: 'Visitor Capacity', value: '200 concurrent visitors' },
      { label: 'Content Management', value: 'Cloud-based CMS with real-time updates' },
      { label: 'Power Requirements', value: '150KW with backup systems' }
    ],
    team: [
      { name: 'Anitha Reddy', role: 'Exhibition Design Lead', image: '' },
      { name: 'Karthik Krishnan', role: 'Interactive Technology Specialist', image: '' },
      { name: 'Meera Nair', role: 'Content Strategy Director', image: '' },
      { name: 'Ravi Kumar', role: 'Projection Mapping Expert', image: '' },
      { name: 'Deepika Sinha', role: 'User Experience Designer', image: '' }
    ],
    challenges: [
      'Creating seamless interactions across multiple technology platforms',
      'Managing visitor flow to prevent overcrowding at popular installations',
      'Ensuring content remains engaging for diverse audience expertise levels',
      'Maintaining system reliability during high-traffic exhibition periods',
      'Integrating real-time data feeds without compromising performance'
    ],
    solutions: [
      'Developed unified interaction framework with consistent user interfaces',
      'Implemented intelligent queue management with predictive flow analytics',
      'Created adaptive content that adjusts complexity based on user engagement',
      'Built redundant systems with automatic failover capabilities',
      'Optimized data pipeline with edge caching and progressive loading'
    ],
    results: [
      '250,000+ visitors engaged over 3-month exhibition period',
      '90% visitor satisfaction rating with \"highly engaging\" feedback',
      '150% increase in average dwell time compared to traditional exhibitions',
      'Featured in 15+ international design and technology publications',
      'Generated 40% increase in follow-up business inquiries for client'
    ],
    awards: [
      'Best Interactive Exhibition Design - India 2024',
      'Excellence in Digital Innovation - ADEX Awards',
      'Visitor Choice Award - Tech Summit 2024'
    ],
    technologies: [
      'Projection Mapping',
      'Multi-touch Technology',
      'Computer Vision',
      'Real-time Data Visualization',
      'Cloud-based CMS',
      'Motion Tracking',
      'Spatial Audio'
    ],
    relatedProjects: ['1', '4']
  },
  '3': {
    id: '3',
    title: 'Film Production Set',
    category: 'Film & TV',
    description: 'Custom-built production set with modular design and integrated lighting systems.',
    longDescription: 'This versatile production set was designed for a major streaming platform\'s flagship series, requiring multiple configuration possibilities within a single stage. The modular approach allows for rapid scene changes, supporting the show\'s diverse narrative requirements that span different time periods and locations. The set features motorized wall panels, transformable floor sections, and an advanced lighting grid that can simulate various environmental conditions. Every element was designed with both practical functionality and visual aesthetics in mind, ensuring optimal performance for 4K and HDR production standards.',
    images: [
      {
        url: '/assets/images/studio.png',
        caption: 'Main production set with modular wall systems',
        type: 'main'
      },
      {
        url: '/assets/images/live.png',
        caption: 'Motorized set pieces during scene transition',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Advanced lighting grid with programmable fixtures',
        type: 'gallery'
      },
      {
        url: '/assets/images/live.png',
        caption: 'Control room with set automation systems',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Modular design development and testing',
        type: 'process'
      },
      {
        url: '/assets/images/live.png',
        caption: 'Set construction and automation installation',
        type: 'process'
      }
    ],
    tags: ['Production Design', 'Modular', 'Lighting', 'Automation', 'Film & TV'],
    year: '2023',
    client: 'Amazon Prime Video',
    location: 'Film City, Mumbai',
    duration: '10 months',
    teamSize: '20 craftspeople and technicians',
    budget: '₹3.2 Crores',
    status: 'completed',
    specs: [
      { label: 'Stage Dimensions', value: '80ft x 60ft x 24ft height' },
      { label: 'Modular Panels', value: '45 motorized wall sections' },
      { label: 'Lighting Fixtures', value: '200+ LED and tungsten units' },
      { label: 'Automation Control', value: '32-channel motion control system' },
      { label: 'Power Distribution', value: '500KW with dimmer systems' },
      { label: 'Flooring System', value: 'Interchangeable sections with utilities' },
      { label: 'Ceiling Grid', value: 'Motorized with 2-ton load capacity' },
      { label: 'Climate Control', value: 'Precision HVAC for equipment and comfort' }
    ],
    team: [
      { name: 'Sameer Joshi', role: 'Production Designer', image: '' },
      { name: 'Kavya Sharma', role: 'Set Automation Engineer', image: '' },
      { name: 'Rohit Agarwal', role: 'Lighting Design Specialist', image: '' },
      { name: 'Nisha Patel', role: 'Modular Systems Architect', image: '' },
      { name: 'Ajay Mishra', role: 'Construction Supervisor', image: '' }
    ],
    challenges: [
      'Achieving rapid set changes within tight production schedules',
      'Maintaining structural integrity across multiple configurations',
      'Creating realistic environments that work for multiple camera angles',
      'Integrating modern technology while preserving period authenticity',
      'Managing noise levels from automation during live recording'
    ],
    solutions: [
      'Developed proprietary quick-change mounting systems',
      'Engineered redundant structural support with safety monitoring',
      'Designed 360-degree detailed environments with hidden technical elements',
      'Created modular period-appropriate facades with modern backing systems',
      'Implemented vibration isolation and sound dampening for all motorized components'
    ],
    results: [
      'Reduced set change time from 8 hours to 45 minutes',
      'Enabled production of 24 episodes in 6-month schedule',
      'Achieved 99.8% uptime during production period',
      'Received acclaim for visual authenticity and production efficiency',
      'Set new industry standards for modular production design'
    ],
    awards: [
      'Best Production Design - Filmfare OTT Awards 2024',
      'Technical Innovation in Set Design - IIFA 2024',
      'Excellence in Production Design - Guild Awards'
    ],
    technologies: [
      'Motorized Set Pieces',
      'DMX Lighting Control',
      'Motion Control Systems',
      'Modular Construction',
      'Precision Engineering',
      'Automation Software',
      'Structural Engineering'
    ],
    relatedProjects: ['1', '5']
  },
  '4': {
    id: '4',
    title: 'Interactive Installation',
    category: 'Interactive',
    description: 'Immersive digital installation combining physical and virtual elements.',
    longDescription: 'This groundbreaking installation explores the intersection of physical and digital realms through responsive technologies that create a living, breathing environment. Visitors enter a space where their movements, gestures, and even biometric data influence a constantly evolving digital ecosystem projected around them. The installation features haptic feedback elements, environmental sensors, and AI-driven content generation that ensures no two visits are identical. The experience begins with simple interactions and gradually reveals deeper layers of complexity as visitors become more engaged with the system.',
    images: [
      {
        url: '/assets/images/interactive.png',
        caption: 'Interactive installation with responsive digital environment',
        type: 'main'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Sensor array and haptic feedback systems',
        type: 'gallery'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Visitors interacting with the digital ecosystem',
        type: 'gallery'
      },
      {
        url: '/assets/images/live.png',
        caption: 'Behind-the-scenes technical infrastructure',
        type: 'gallery'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Concept development and interaction design',
        type: 'process'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Sensor calibration and system integration',
        type: 'process'
      }
    ],
    tags: ['Digital Art', 'Sensors', 'Real-time', 'AI', 'Biometric', 'Haptic'],
    year: '2024',
    client: 'National Gallery of Modern Art',
    location: 'New Delhi, India',
    duration: '4 months',
    teamSize: '8 artists and technologists',
    budget: '₹95 Lakhs',
    status: 'completed',
    specs: [
      { label: 'Installation Space', value: '30ft x 25ft immersive environment' },
      { label: 'Sensor Network', value: '24 depth cameras + environmental sensors' },
      { label: 'Projection Mapping', value: '8 x 4K projectors with real-time content' },
      { label: 'Haptic Elements', value: '16 tactile feedback stations' },
      { label: 'Processing Power', value: 'GPU cluster with 32GB VRAM' },
      { label: 'Response Time', value: 'Sub-100ms for real-time interactions' },
      { label: 'Visitor Tracking', value: 'Up to 20 simultaneous participants' },
      { label: 'Content Library', value: '10,000+ AI-generated elements' }
    ],
    team: [
      { name: 'Maya Singh', role: 'Interactive Artist & Director', image: '' },
      { name: 'Alex Chen', role: 'AI Systems Developer', image: '' },
      { name: 'Prateek Gupta', role: 'Sensor Integration Specialist', image: '' },
      { name: 'Richa Malhotra', role: 'Creative Technologist', image: '' },
      { name: 'David Kim', role: 'Real-time Graphics Engineer', image: '' }
    ],
    challenges: [
      'Creating meaningful interactions that feel natural and intuitive',
      'Processing multiple data streams in real-time without lag',
      'Designing AI behavior that enhances rather than overwhelms the experience',
      'Balancing technological complexity with artistic expression',
      'Ensuring system stability during continuous 12-hour operation'
    ],
    solutions: [
      'Developed progressive interaction model with learning algorithms',
      'Implemented edge computing with distributed processing architecture',
      'Created AI personality engine with emotional intelligence parameters',
      'Established clear hierarchy between technical and artistic elements',
      'Built comprehensive monitoring system with predictive maintenance'
    ],
    results: [
      '85,000+ visitors experienced the installation over 3 months',
      'Average engagement time of 12 minutes per visitor',
      'Featured in international digital art festivals and exhibitions',
      '95% visitor satisfaction with \"transformative experience\" ratings',
      'Sparked academic research into human-AI creative collaboration'
    ],
    awards: [
      'Digital Art Innovation Award - Venice Biennale 2024',
      'Best Interactive Experience - Ars Electronica',
      'People\'s Choice Award - India Art Fair 2024'
    ],
    technologies: [
      'Computer Vision',
      'Machine Learning',
      'Real-time Graphics',
      'Sensor Networks',
      'Haptic Technology',
      'Edge Computing',
      'Behavioral AI'
    ],
    relatedProjects: ['2', '6']
  },
  '5': {
    id: '5',
    title: 'Live Event Stage',
    category: 'Film & TV',
    description: 'Dynamic stage design with LED walls and automated set changes.',
    longDescription: 'This cutting-edge stage design revolutionizes live television production with its dynamic, automated set pieces and immersive LED wall integration. Built for a prime-time variety show, the stage features multiple performance areas that can transform seamlessly during live broadcasts. The design incorporates hydraulic platforms, rotating stage elements, and a curved LED wall that serves as both backdrop and interactive element. Advanced automation systems coordinate lighting, set movements, and visual content to create spectacular transitions that happen in real-time, captivating studio and home audiences alike.',
    images: [
      {
        url: '/assets/images/live.png',
        caption: 'Main stage with LED walls and automated platforms',
        type: 'main'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Hydraulic platform system during set change',
        type: 'gallery'
      },
      {
        url: '/assets/images/live.png',
        caption: 'LED wall displaying synchronized content',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Control booth with automation systems',
        type: 'gallery'
      },
      {
        url: '/assets/images/live.png',
        caption: 'Stage design development and testing',
        type: 'process'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Automation system programming and integration',
        type: 'process'
      }
    ],
    tags: ['LED Walls', 'Automation', 'Live Events', 'Hydraulics', 'Real-time Control'],
    year: '2023',
    client: 'Star India',
    location: 'Mumbai, India',
    duration: '7 months',
    teamSize: '18 engineers and designers',
    budget: '₹4.5 Crores',
    status: 'completed',
    specs: [
      { label: 'Stage Dimensions', value: '100ft x 80ft performance area' },
      { label: 'LED Wall Surface', value: '2,400 sq ft curved display' },
      { label: 'Hydraulic Platforms', value: '6 independently controlled sections' },
      { label: 'Automation Axes', value: '24 motorized movement systems' },
      { label: 'Lighting Positions', value: '300+ automated fixtures' },
      { label: 'Load Capacity', value: '50 tons distributed across platforms' },
      { label: 'Control Network', value: 'Redundant fiber optic backbone' },
      { label: 'Safety Systems', value: 'Triple-redundant monitoring and failsafes' }
    ],
    team: [
      { name: 'Manish Verma', role: 'Stage Design Director', image: '' },
      { name: 'Pooja Rana', role: 'Automation Systems Engineer', image: '' },
      { name: 'Ashok Kumar', role: 'LED Technology Specialist', image: '' },
      { name: 'Sonia Kapoor', role: 'Live Production Coordinator', image: '' },
      { name: 'Ramesh Iyer', role: 'Safety Systems Engineer', image: '' }
    ],
    challenges: [
      'Coordinating complex automated sequences during live television',
      'Ensuring performer safety with large-scale moving set pieces',
      'Achieving precise timing for seamless transitions between segments',
      'Managing heat and noise from high-powered systems in live environment',
      'Creating backup systems for critical show elements'
    ],
    solutions: [
      'Developed predictive automation system with pre-programmed sequences',
      'Implemented comprehensive safety protocols with real-time monitoring',
      'Created precision timing system synchronized with broadcast schedule',
      'Designed advanced cooling and sound isolation systems',
      'Built redundant control systems with instant manual override capabilities'
    ],
    results: [
      'Successfully delivered 52 live episodes without technical failures',
      'Achieved 15-second set changes during live broadcasts',
      'Increased show production value leading to 30% viewer growth',
      'Set new industry standards for live television stage automation',
      'Generated follow-up contracts for 3 additional show productions'
    ],
    awards: [
      'Best Live Television Production Design - Indian Television Academy',
      'Technical Excellence Award - Broadcast Engineering Society',
      'Innovation in Live Entertainment - PALM Expo Awards'
    ],
    technologies: [
      'LED Display Technology',
      'Hydraulic Systems',
      'Motion Control',
      'Live Production Automation',
      'Safety Monitoring',
      'Precision Timing',
      'Broadcast Integration'
    ],
    relatedProjects: ['3', '1']
  },
  '6': {
    id: '6',
    title: 'Brand Experience Center',
    category: 'Exhibitions',
    description: 'Immersive brand storytelling space with multi-sensory experiences.',
    longDescription: 'This innovative brand experience center redefines corporate storytelling through immersive, multi-sensory environments that engage visitors on emotional and intellectual levels. The space takes guests through a carefully crafted journey that showcases the brand\'s history, values, and future vision through interactive displays, aromatic experiences, tactile installations, and personalized digital narratives. Each zone is designed to create lasting impressions while educating visitors about the brand\'s impact across different industries and communities. The center serves as both a showcase and a functional space for client meetings and product demonstrations.',
    images: [
      {
        url: '/assets/images/exhibition.png',
        caption: 'Main brand experience hall with immersive displays',
        type: 'main'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Interactive timeline with haptic feedback',
        type: 'gallery'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Multi-sensory product demonstration area',
        type: 'gallery'
      },
      {
        url: '/assets/images/studio.png',
        caption: 'Personalized digital narrative stations',
        type: 'gallery'
      },
      {
        url: '/assets/images/exhibition.png',
        caption: 'Brand story conceptualization and space planning',
        type: 'process'
      },
      {
        url: '/assets/images/interactive.png',
        caption: 'Multi-sensory system integration and testing',
        type: 'process'
      }
    ],
    tags: ['Brand Experience', 'Multi-sensory', 'Storytelling', 'Interactive', 'Corporate'],
    year: '2024',
    client: 'Reliance Industries',
    location: 'Navi Mumbai, India',
    duration: '9 months',
    teamSize: '22 specialists across disciplines',
    budget: '₹6.8 Crores',
    status: 'completed',
    specs: [
      { label: 'Experience Area', value: '12,000 sq ft multi-zone facility' },
      { label: 'Interactive Displays', value: '18 large-format touchscreens' },
      { label: 'Scent Delivery', value: '8-zone aromatic experience system' },
      { label: 'Audio Zones', value: '12 discrete soundscapes with 3D audio' },
      { label: 'Visitor Tracking', value: 'RFID-based personalization system' },
      { label: 'Climate Zones', value: '6 environments with precision control' },
      { label: 'Digital Content', value: '500+ hours of curated multimedia' },
      { label: 'Languages', value: 'Support for 8 regional languages' }
    ],
    team: [
      { name: 'Sunita Reddy', role: 'Brand Experience Director', image: '' },
      { name: 'Kunal Desai', role: 'Multi-sensory Design Lead', image: '' },
      { name: 'Anjali Nair', role: 'Content Strategy Manager', image: '' },
      { name: 'Rahul Bhatt', role: 'Technology Integration Specialist', image: '' },
      { name: 'Neha Jain', role: 'Visitor Experience Designer', image: '' }
    ],
    challenges: [
      'Creating cohesive narrative across diverse business verticals',
      'Integrating multiple sensory elements without overwhelming visitors',
      'Designing scalable content management for regular updates',
      'Balancing corporate messaging with engaging storytelling',
      'Managing complex technical systems reliably in corporate environment'
    ],
    solutions: [
      'Developed unified brand narrative framework with flexible content modules',
      'Created sensory layering system with visitor-controlled intensity',
      'Built cloud-based CMS with role-based editing capabilities',
      'Established storytelling hierarchy balancing information and emotion',
      'Implemented enterprise-grade monitoring with 24/7 support protocols'
    ],
    results: [
      '150,000+ visitors including high-profile clients and stakeholders',
      '40% increase in brand recall scores among visitors',
      'Generated ₹50+ crores in new business opportunities',
      '98% client satisfaction rating with \"exceptional experience\" feedback',
      'Became model for corporate brand centers across industry'
    ],
    awards: [
      'Best Corporate Brand Experience - Marketing Excellence Awards 2024',
      'Excellence in Experiential Design - CII Design Awards',
      'Most Innovative Corporate Space - Economic Times Awards'
    ],
    technologies: [
      'Multi-sensory Integration',
      'RFID Personalization',
      'Scent Delivery Systems',
      '3D Spatial Audio',
      'Climate Control',
      'Content Management',
      'Visitor Analytics'
    ],
    relatedProjects: ['2', '4']
  }
}; 
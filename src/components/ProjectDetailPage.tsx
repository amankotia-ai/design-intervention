import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ExternalLink, Calendar, Users, MapPin, Award, Camera, Play } from 'lucide-react';

interface ProjectImage {
  url: string;
  caption: string;
  type: 'main' | 'gallery' | 'process' | 'detail';
}

interface ProjectSpec {
  label: string;
  value: string;
}

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

interface ProjectDetail {
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

interface ProjectDetailPageProps {
  project: ProjectDetail;
  onBackClick: () => void;
  onRelatedProjectClick?: (projectId: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ 
  project, 
  onBackClick, 
  onRelatedProjectClick 
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  
  // Reset modal state when component mounts
  React.useEffect(() => {
    setShowImageModal(false);
    setSelectedImageIndex(0);
  }, [project.id]);
  
  const heroRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const detailsRef = React.useRef(null);
  const specsRef = React.useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
  const detailsInView = useInView(detailsRef, { once: true, amount: 0.2 });
  const specsInView = useInView(specsRef, { once: true, amount: 0.2 });

  const mainImage = project.images.find(img => img.type === 'main') || project.images[0];
  const galleryImages = project.images.filter(img => img.type === 'gallery');

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setShowImageModal(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Project Header/Navigation */}
      <motion.div 
        className="fixed top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBackClick}
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{project.category}</span>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative pt-56 pb-12 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: heroInView ? 1 : 0,
                x: heroInView ? 0 : -50
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center text-lg mb-6" style={{ color: '#F15F22' }}>
                <span>({project.category})</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-normal text-black mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium text-gray-900">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-900">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">{project.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{project.duration}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: heroInView ? 1 : 0,
                x: heroInView ? 0 : 50
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className="relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer group"
                onClick={() => handleImageClick(0)}
              >
                <img 
                  src={mainImage.url} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={24} className="text-white" />
                </div>
              </div>
              {mainImage.caption && (
                <p className="text-sm text-gray-500 mt-3">{mainImage.caption}</p>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Project Overview */}
      <motion.section 
        ref={detailsRef}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: detailsInView ? 1 : 0,
                y: detailsInView ? 0 : 30
              }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-normal text-black mb-6">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed mb-6">{project.longDescription}</p>
                
                {project.challenges.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-black mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.solutions.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-black mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.results.length > 0 && (
                  <div>
                    <h3 className="text-xl font-medium text-black mb-4">Results</h3>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: detailsInView ? 1 : 0,
                y: detailsInView ? 0 : 30
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-none shadow-sm">
                <h3 className="text-xl font-medium text-black mb-6">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Status</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                      project.status === 'completed' ? 'bg-green-100 text-green-700' :
                      project.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Team Size</p>
                    <p className="font-medium text-gray-900">{project.teamSize}</p>
                  </div>

                  {project.budget && (
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Budget</p>
                      <p className="font-medium text-gray-900">{project.budget}</p>
                    </div>
                  )}

                  {project.technologies.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.awards && project.awards.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Awards</p>
                      <div className="space-y-2">
                        {project.awards.map((award, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Award size={16} className="text-yellow-500" />
                            <span className="text-sm text-gray-700">{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Team */}
              {project.team.length > 0 && (
                <div className="bg-white p-6 rounded-none shadow-sm mt-6">
                  <h3 className="text-xl font-medium text-black mb-4">Team</h3>
                  <div className="space-y-3">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <span className="text-sm font-medium text-gray-600">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{member.name}</p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Specifications */}
      {project.specs.length > 0 && (
        <motion.section 
          ref={specsRef}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: specsInView ? 1 : 0,
                y: specsInView ? 0 : 30
              }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-normal text-black mb-12">Technical Specifications</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {project.specs.map((spec, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <p className="text-gray-600">{spec.label}</p>
                      <p className="font-medium text-black text-right ml-4">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <motion.section 
          ref={galleryRef}
          className="py-20 bg-gray-50"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: galleryInView ? 1 : 0,
                y: galleryInView ? 0 : 30
              }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-normal text-black mb-12">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative aspect-[4/3] rounded-none overflow-hidden cursor-pointer group"
                    onClick={() => handleImageClick(index + 1)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: galleryInView ? 1 : 0,
                      scale: galleryInView ? 1 : 0.9
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img 
                      src={image.url} 
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowImageModal(false)}
        >
          <motion.div
            className="max-w-5xl max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={project.images[selectedImageIndex]?.url} 
              alt={project.images[selectedImageIndex]?.caption}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}; 
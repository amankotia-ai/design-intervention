import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, Calendar, Users, MapPin, Camera } from 'lucide-react';

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
  onBackClick
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
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });

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
        className="relative min-h-screen pt-28 pb-12 bg-white flex items-center"
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
                <span>{project.category}</span>
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
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
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
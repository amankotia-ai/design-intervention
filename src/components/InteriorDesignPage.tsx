import React from 'react';
import { HeroSection } from './HeroSection';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface InteriorDesignPageProps {
  onStartProject?: () => void;
}

export const InteriorDesignPage: React.FC<InteriorDesignPageProps> = ({ onStartProject }) => {
  return (
    <div className="space-y-0">
      <HeroSection
        title={<>Interior<br />Design</>}
        description="Brand-led interiors for offices, studios, and commercial spaces — strategy, spatial planning, bespoke joinery, and execution under one roof."
        imageSrc="/assets/images/5826ff5d-c71b-481f-8437-e6822f02691e.png"
        imageAlt="Interior design hero visual"
        leftColClassName="lg:w-5/12"
        rightColClassName="lg:w-7/12 lg:ml-auto lg:mr-[-2rem]"
        imageClassName="w-full h-auto object-contain scale-90 lg:scale-75 origin-center"
        buttons={[{ text: 'Start Your Project', onClick: () => onStartProject && onStartProject() }]}
      />

      <ActivationsSection 
        className="mt-24"
        label="Interior Highlights"
        paragraph="Workplace strategy, collaborative zones, material palettes, acoustic control, and lighting integration — designed for performance and brand expression."
        items={[
          { title: 'Realty 1', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.10.37 PM.png' },
          { title: 'Realty 2', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.10.46 PM.png' },
          { title: 'Realty 3', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.10.53 PM.png' },
          { title: 'Realty 4', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.11.07 PM.png' },
          { title: 'Realty 5', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.11.23 PM.png' },
          { title: 'Realty 6', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.11.33 PM.png' },
          { title: 'Realty 7', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.11.45 PM.png' },
          { title: 'Realty 8', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.11.50 PM.png' },
          { title: 'Realty 9', src: '/assets/images/Realty/Screenshot 2025-09-03 at 4.12.45 PM.png' }
        ]}
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>Interior Capabilities</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Human‑centric Spaces<br />That Work Beautifully
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We design interior environments that balance aesthetics with ergonomics and operations. 
                From concept to build, our team ensures every space performs — day one and every day.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2V10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Workplace Strategy & Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Zoning, adjacencies, and flows that support collaboration, focus, and brand experiences — backed by data and user insights.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v12H4zM6 8h12v8H6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Bespoke Joinery & Finishes</h3>
              <p className="text-gray-600 leading-relaxed">
                Custom furniture, storage systems, and reception elements with durable, premium finishes and integrated lighting.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4h18v2H3zM3 18h18v2H3zM7 8h10v8H7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">MEP Coordination & Acoustics</h3>
              <p className="text-gray-600 leading-relaxed">
                Services planned with the design — HVAC, electrical, data, and acoustic treatments aligned for comfort and compliance.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l4 7-4 7-4-7 4-7zm6 13l4 7H2l4-7h12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Sustainable Materials & Wellness</h3>
              <p className="text-gray-600 leading-relaxed">
                Low‑VOC finishes, daylighting, biophilic elements, and material choices that enhance wellbeing and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Content */}
            <div>
              {/* Header */}
              <div className="flex items-center text-lg mb-8" style={{ color: '#F15F22' }}>
                <span>Process</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
                From Strategy to Build
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We align brand, culture, and operations to design spaces that are beautiful, robust, and practical. 
                Our integrated team manages drawings, vendor coordination, and execution.
              </p>

              <hr className="border-gray-300 mb-12" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Briefing & Concept Design</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Understand people, workflows, and brand. Translate into moodboards, layouts, and material directions.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Detailed Design & BOQs</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Technical drawings, services coordination, specifications, and BOQs ready for procurement and build.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Execution & Handover</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Site supervision, quality checks, and phased delivery to ensure minimal downtime and a clean handover.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/5826ff5d-c71b-481f-8437-e6822f02691e.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="What partners say about our interior projects"
        testimonials={[
          {
            quote:
              'They balanced brand aesthetics with practical needs — the space feels premium and works brilliantly for the team.',
            authorName: 'R. Gupta',
            authorTitle: 'Admin & Facilities',
            company: 'CNBC TV18'
          },
          {
            quote:
              'Detailing and material selection were on point. Execution was smooth, with minimal disruption to operations.',
            authorName: 'S. Iyer',
            authorTitle: 'Project Manager',
            company: 'Pidilite'
          },
          {
            quote:
              'Our studio upgrade improved acoustics and lighting dramatically. The team delivered exactly as promised.',
            authorName: 'A. Verma',
            authorTitle: 'Studio Lead',
            company: 'Welspun'
          }
        ]}
        className="mt-16 lg:mt-24"
      />

      {/* FAQ Section */}
      <FAQSection
        breadcrumb="FAQ"
        title="Interior Design — FAQs"
        subtitle="Planning, procurement and delivery timelines"
        backgroundColor="bg-white"
        items={[
          {
            question: 'What is a typical office fit‑out timeline?',
            answer:
              'Small studios can complete in 6–8 weeks; larger offices take 10–16 weeks depending on detailed design, approvals, procurement and phasing on site.'
          },
          {
            question: 'Can you work in an occupied space?',
            answer:
              'Yes. We plan phasing, night works and temporary partitions to minimise disruption. Safety and cleanliness protocols are followed strictly.'
          },
          {
            question: 'Do you supply furniture and bespoke joinery?',
            answer:
              'We design and supply custom joinery, reception elements and storage. We can also procure loose furniture as per approved specs.'
          },
          {
            question: 'How do you handle MEP coordination?',
            answer:
              'We coordinate HVAC, electrical, data and acoustics with the design to ensure compliance, comfort and clean integrations.'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#F15F22' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Designing a new office or studio?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let’s craft a space that reflects your brand and supports your people — beautifully and efficiently.
          </p>
          <button 
            className="bg-white text-black px-8 py-3 font-normal hover:bg-white/90 transition-colors"
            onClick={() => onStartProject && onStartProject()}
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};



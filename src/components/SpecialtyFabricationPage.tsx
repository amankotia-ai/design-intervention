import React from 'react';
import { HeroSection } from './HeroSection';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface SpecialtyFabricationPageProps {
  onStartProject?: () => void;
}

export const SpecialtyFabricationPage: React.FC<SpecialtyFabricationPageProps> = ({ onStartProject }) => {
  return (
    <div className="space-y-0">
      <HeroSection
        title={<>Specialty<br />Fabrication</>}
        description="Engineering-led fabrication for complex builds — from precision metalwork and custom joinery to composites, CNC machining, and specialist finishes. Built to perform, built to last."
        imageSrc="/assets/images/1f769fc8-6bde-4fef-8ea2-4ecd6bce4a9a.png"
        imageAlt="Specialty fabrication hero visual"
        leftColClassName="lg:w-5/12"
        rightColClassName="lg:w-7/12 lg:ml-auto lg:mr-[-2rem]"
        imageClassName="w-full h-auto object-contain scale-90 lg:scale-75 origin-center"
        buttons={[{ text: 'Start Your Project', onClick: () => onStartProject && onStartProject() }]}
      />

      <ActivationsSection 
        className="mt-24"
        label="(Fabrication Highlights)"
        paragraph="Bespoke builds for exhibitions, studios, retail, and sets — technical detailing, prototyping, production, and on‑site installation under one roof."
        items={[
          { title: 'Specialty 1', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.20.33 PM.png' },
          { title: 'Specialty 2', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.20.41 PM.png' },
          { title: 'Specialty 3', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.20.51 PM.png' },
          { title: 'Specialty 4', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.20.59 PM.png' },
          { title: 'Specialty 5', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.21.20 PM.png' },
          { title: 'Specialty 6', src: '/assets/images/Specialty/Screenshot 2025-09-03 at 4.21.27 PM.png' }
        ]}
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>(Fabrication Capabilities)</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Precision Builds<br />For Demanding Projects
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine digital fabrication with craftsmanship to deliver robust, high‑finish builds. 
                Our team engineers details for reliability, repeatability, and speed on site.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 7l-9 5-9-5 9-5 9 5zm0 4l-9 5-9-5v6l9 5 9-5v-6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Metal, Wood & Hybrid Structures</h3>
              <p className="text-gray-600 leading-relaxed">
                TIG/MIG fabrication, premium joinery, and hybrid assemblies engineered for strength, tolerances, and clean integration of services.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v2H4V4zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">CNC, Laser, and Complex Geometry</h3>
              <p className="text-gray-600 leading-relaxed">
                3‑axis CNC routing, laser cutting, and parametric detailing for precise, repeatable components and curved forms.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l4 7-4 7-4-7 4-7zm6 13l4 7H2l4-7h12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Composites & Advanced Finishes</h3>
              <p className="text-gray-600 leading-relaxed">
                FRP, acrylics, and engineered veneers with specialty coatings: high‑gloss, textured, metallic, and thermochromic systems.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">On‑site Installation & QA</h3>
              <p className="text-gray-600 leading-relaxed">
                Pre‑assembly, packaging, logistics, and fast, tidy installs with documented QA and handover.
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
                <span>(Process)</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-8 leading-tight">
                Engineered for Reliability
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Complex fabrications demand rigor. Our workflows integrate CAD/CAM, prototyping, and controlled production 
                to de‑risk builds and accelerate installation.
              </p>

              <hr className="border-gray-300 mb-12" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Technical Detailing & Prototype</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Translate concept to build‑ready documentation, material trials, and sample finishes to validate risk areas early.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Fabrication & Finishing</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      CNC/laser programs, jigging, pre‑assembly, and surface finishing to achieve consistent quality across batches.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Logistics, Install & Handover</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Packed for efficiency, installed with safety and speed, and documented for maintenance and future reuse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/1f769fc8-6bde-4fef-8ea2-4ecd6bce4a9a.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="What partners say about our fabrication work"
        testimonials={[
          {
            quote:
              'Their technical depth and finishing quality stood out. The build survived a punishing show schedule and still looked brand‑new.',
            authorName: 'D. Patel',
            authorTitle: 'Production Head',
            company: 'ET Now'
          },
          {
            quote:
              'They prototyped critical joints and solved tolerances early. Installation was fast, clean, and exactly on spec.',
            authorName: 'S. Nair',
            authorTitle: 'Design Lead',
            company: 'Pidilite'
          },
          {
            quote:
              'Complex geometry, tight timelines — delivered flawlessly with impeccable finish levels.',
            authorName: 'M. Khan',
            authorTitle: 'Experience Manager',
            company: 'Welspun'
          }
        ]}
        className="mt-16 lg:mt-24"
      />

      {/* FAQ Section */}
      <FAQSection
        breadcrumb="FAQ"
        title="Specialty Fabrication — FAQs"
        subtitle="Engineering, finishes and installation planning"
        backgroundColor="bg-white"
        items={[
          {
            question: 'Which materials and processes do you support?',
            answer:
              'We work across metal and joinery, CNC/laser, FRP/acrylics and specialty coatings. We recommend systems based on structure, finish and budget.'
          },
          {
            question: 'Do you prototype critical details?',
            answer:
              'Yes. For complex joints, mechanisms and finishes, we prototype early to validate tolerances and speed up approvals.'
          },
          {
            question: 'How do you plan for fast on‑site installs?',
            answer:
              'We pre‑assemble, label and pack modules for efficient sequencing on site, with clear drawings and a trained crew.'
          },
          {
            question: 'Can you match specific finish samples?',
            answer:
              'We run finish trials and submit samples for sign‑off. Specialty paints and textures are matched under representative lighting.'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#F15F22' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Got a fabrication brief that needs precision?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with a team that sweats the details — from engineering drawings to on‑site delivery.
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



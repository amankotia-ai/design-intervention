import React from 'react';
import { HeroSection } from './HeroSection';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface XRStudiosPageProps {
  onStartProject?: () => void;
}

export const XRStudiosPage: React.FC<XRStudiosPageProps> = ({ onStartProject }) => {
  return (
    <div className="space-y-0">
      <HeroSection
        title={<>XR Studios<br />& Environments</>}
        description="End‑to‑end design and build for XR studios — LED volumes, camera tracking, real‑time rendering, and control rooms integrated for broadcast‑grade production."
        imageSrc="/assets/images/5896c42d-4610-43a7-8bcc-043184751e98.png"
        imageAlt="XR studios hero visual"
        leftColClassName="lg:w-5/12"
        rightColClassName="lg:w-7/12 lg:ml-auto lg:mr-[-2rem]"
        imageClassName="w-full h-auto object-contain scale-90 lg:scale-75 origin-center"
        buttons={[{ text: 'Start Your Project', onClick: () => onStartProject && onStartProject() }]}
      />

      <ActivationsSection 
        className="mt-24"
        label="XR Highlights"
        paragraph="XR studios for newsrooms, corporate comms, and content creators — spatial design, LED stages, Unreal/Disguise pipelines, and training."
        items={[
          { title: 'XR Studio 1', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.15.46 PM.png' },
          { title: 'XR Studio 2', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.15.55 PM.png' },
          { title: 'XR Studio 3', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.16.03 PM.png' },
          { title: 'XR Studio 4', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.16.13 PM.png' },
          { title: 'XR Studio 5', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.16.21 PM.png' },
          { title: 'XR Studio 6', src: '/assets/images/XR Studios/Screenshot 2025-09-03 at 4.16.28 PM.png' }
        ]}
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>XR Capabilities</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Virtual Production,<br />Real‑world Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We design XR spaces that are technically precise and operator‑friendly — optimised for acoustics, sightlines, lighting, and fast on‑air workflows.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">LED Volumes & Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Curved/flat LED stages, pixel mapping, camera tracking systems, and genlock/timecode sync for seamless composites.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v12H4zM6 8h12v8H6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Rendering & Graphics Pipelines</h3>
              <p className="text-gray-600 leading-relaxed">
                Unreal/Unity, Disguise, and MOS‑compliant workflows with lower latency, repeatable presets, and show control.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l4 7-4 7-4-7 4-7zm6 13l4 7H2l4-7h12z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Acoustics, Lighting & Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Spatial acoustics, broadcast lighting layouts, power/data planning, and ergonomic control rooms.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Training & Post‑Install Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Operator training, SOPs, and maintenance so your team can deliver reliably day after day.
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
                Built on strong foundations
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                XR studios succeed when spatial design and technology integrate seamlessly. Our process aligns objectives, workflow, and tooling to deliver broadcast‑ready environments.
              </p>

              <hr className="border-gray-300 mb-12" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Discovery & Specification</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Align content goals, space constraints, show formats, tracking and render needs. Define pixel pitches, optics, and IO.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Design & Simulation</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Plans, elevations, and virtual previs for sightlines, acoustics, lighting, and render performance.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Integration & Commissioning</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Install LED and tracking, configure render pipelines, calibrate, train operators, and hand over SOPs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/xr_design.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="What partners say about our XR work"
        testimonials={[
          {
            quote:
              'The studio design improved our on‑air workflow and consistency. The integration was meticulous and on schedule.',
            authorName: 'N. Rao',
            authorTitle: 'Broadcast Ops Lead',
            company: 'CNBC TV18'
          },
          {
            quote:
              'Tracking and LED calibration were spot on. Our team went on‑air with confidence from day one.',
            authorName: 'P. Singh',
            authorTitle: 'Technical Director',
            company: 'ET Now'
          },
          {
            quote:
              'Clear documentation and training. The space is robust, quiet, and looks fantastic on camera.',
            authorName: 'K. Desai',
            authorTitle: 'Studio Manager',
            company: 'Adani'
          }
        ]}
        className="mt-16 lg:mt-24"
      />

      {/* FAQ Section */}
      <FAQSection
        breadcrumb="FAQ"
        title="XR Studios — FAQs"
        subtitle="Key questions on XR planning, LED volumes, and integrations"
        backgroundColor="bg-white"
        items={[
          {
            question: 'What space and ceiling height do we need for an XR studio?',
            answer:
              'Ideal heights are 14–20 ft to accommodate LED volumes, lighting and truss. We assess sightlines, throw distances and access to propose workable layouts for smaller spaces too.'
          },
          {
            question: 'Which render engine and tracking do you support?',
            answer:
              'We work with Unreal/Unity pipelines and support camera tracking systems commonly used in broadcast and virtual production. We recommend based on content, budget and latency targets.'
          },
          {
            question: 'How long does an XR studio build take?',
            answer:
              'Typical programs run 8–12 weeks from sign‑off to commissioning, depending on LED lead times, acoustics, MEP, and calibration/training.'
          },
          {
            question: 'Do you provide training and SOPs?',
            answer:
              'Yes. We handover SOPs and provide operator training to ensure smooth on‑air workflows and consistent results.'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#F15F22' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Ready to build your XR studio?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let’s plan, integrate, and commission a production‑ready XR environment tailored to your content.
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
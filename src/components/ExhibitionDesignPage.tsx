import React from 'react';
import { HeroSection } from './HeroSection';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface ExhibitionDesignPageProps {
  onStartProject?: () => void;
}

export const ExhibitionDesignPage: React.FC<ExhibitionDesignPageProps> = ({ onStartProject }) => {
  return (
    <div className="space-y-0">
      <HeroSection
        title={<>Exhibition<br />Design</>}
        description="Immersive, brand-forward exhibition environments—from concept to turnkey build—crafted to attract, engage, and convert."
        imageSrc="/assets/images/Group 633402.png"
        imageAlt="Exhibition design hero visual"
        leftColClassName="lg:w-5/12"
        rightColClassName="lg:w-7/12 lg:ml-auto lg:mr-[-2rem]"
        imageClassName="w-full h-auto object-contain scale-90 lg:scale-75 origin-center"
        buttons={[
          { text: 'Start Your Project', onClick: () => onStartProject && onStartProject() },
        ]}
      />

      <ActivationsSection 
        className="mt-24"
        label="(Exhibition Highlights)"
        paragraph="Experiential booths, pavilions and brand worlds—strategy, design and turnkey build for trade shows and expos."
        items={[
          { title: 'Exhibition 1', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.02.29 PM.png' },
          { title: 'Exhibition 2', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.02.41 PM.png' },
          { title: 'Exhibition 3', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.02.51 PM.png' },
          { title: 'Exhibition 4', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.03 PM.png' },
          { title: 'Exhibition 5', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.12 PM.png' },
          { title: 'Exhibition 6', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.31 PM.png' },
          { title: 'Exhibition 7', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.39 PM.png' },
          { title: 'Exhibition 8', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.49 PM.png' },
          { title: 'Exhibition 9', src: '/assets/images/Exhibitions/Screenshot 2025-09-03 at 4.03.58 PM.png' }
        ]}
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>(Exhibition Capabilities)</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Exhibition Design<br />
                That Captures Attention
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We plan, design, and deliver high-impact exhibition spaces that tell brand stories,
                drive footfall, and convert interest into meaningful business outcomes.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14H8v-2h5v2zm3-4H8V8h8v4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Strategic Concept & Storytelling</h3>
              <p className="text-gray-600 leading-relaxed">
                Position your brand with a clear narrative, zoned layouts, and purposeful visitor flows
                that guide discovery and deepen engagement.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h3v3H8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Modular Booth Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Scalable, reusable modules optimized for different footprints and show constraints
                without compromising on design impact.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7l3-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Premium Fabrication & Finishes</h3>
              <p className="text-gray-600 leading-relaxed">
                Precision fabrication, bespoke detailing, lighting, and material palettes that
                elevate perception and build trust.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Logistics & On‑site Management</h3>
              <p className="text-gray-600 leading-relaxed">
                End‑to‑end coordination—production, shipping, install and dismantle—for seamless
                delivery across venues and geographies.
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
                Built on strong foundations
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Exhibition programs succeed when strategy, design and execution move in lockstep. Our
                process ensures your booth performs on brand, on time and on budget—every show.
              </p>

              <hr className="border-gray-300 mb-12" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Discovery & Briefing</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Align on objectives, audiences, show constraints, and success metrics. Map
                      required zones, hero moments, and engagement goals.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Concept & 3D Visualisation</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Translate strategy into spatial storytelling with mood boards, plans and 3D
                      renders that optimise flows, visibility, and brand presence.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Fabrication & On‑site Build</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Engineer details, produce and pre‑assemble, manage logistics, and deliver a
                      flawless on‑site install, handover and post‑show dismantle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/Group 633402.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="What partners say about our exhibition work"
        testimonials={[
          {
            quote:
              'Their exhibition booth design created a clear visitor journey and doubled our qualified conversations compared to last year.',
            authorName: 'A. Sharma',
            authorTitle: 'Head of Marketing',
            company: 'Pidilite'
          },
          {
            quote:
              'From concept to installation, the team delivered a premium build on a tight schedule—flawless execution end to end.',
            authorName: 'R. Mehta',
            authorTitle: 'Brand Lead',
            company: 'Welspun'
          },
          {
            quote:
              'Smart modularity helped us adapt across two expo footprints while keeping the same high-impact brand presence.',
            authorName: 'K. Patel',
            authorTitle: 'Events Manager',
            company: 'CNBC TV18'
          }
        ]}
        className="mt-16 lg:mt-24"
      />

      {/* FAQ Section */}
      <FAQSection
        breadcrumb="FAQ"
        title="Exhibition Design — FAQs"
        subtitle="Answers on timelines, approvals and show logistics"
        backgroundColor="bg-white"
        items={[
          {
            question: 'How early should we start for a major expo?',
            answer:
              'For large booths, begin 10–12 weeks prior to the show to allow for concept, approvals, fabrication and shipping. Smaller stalls can be executed faster with timely sign‑offs.'
          },
          {
            question: 'Do you handle venue approvals and utilities?',
            answer:
              'Yes. We prepare required drawings, coordinate with organizers for approvals, and plan power/data/utilities as per venue guidelines.'
          },
          {
            question: 'Can the booth be reused across shows?',
            answer:
              'We design modular systems where possible so elements can be reconfigured for multiple footprints, optimizing costs over the season.'
          },
          {
            question: 'Do you provide storage and logistics?',
            answer:
              'We plan packing and can arrange storage/transport between shows. Options depend on program scale and timelines.'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#F15F22' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Ready to elevate your exhibition presence?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From concept to turnkey build, we create booths and pavilions that attract visitors,
            tell your brand story, and drive measurable outcomes.
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



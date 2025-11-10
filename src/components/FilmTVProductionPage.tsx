import React from 'react';
import { HeroSection } from './HeroSection';
import { ActivationsSection } from './ActivationsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';

interface FilmTVProductionPageProps {
  onStartProject?: () => void;
}

export const FilmTVProductionPage: React.FC<FilmTVProductionPageProps> = ({ onStartProject }) => {
  return (
    <div className="space-y-0">
      <HeroSection
        title={<>Film & TV<br />Production</>}
        description="Production design support, specialty fabrication, and on‑set delivery for film, TV and streaming—built to schedule and built to last."
        imageSrc="/assets/images/0db1632b-e229-43d9-aa97-4b0530471c61 (1).png"
        imageAlt="Film and TV production hero visual"
        leftColClassName="lg:w-5/12"
        rightColClassName="lg:w-7/12 lg:ml-auto lg:mr-[-2rem]"
        imageClassName="w-full h-auto object-contain scale-90 lg:scale-75 origin-center"
        buttons={[
          { text: 'Start Your Production', onClick: () => onStartProject && onStartProject() },
        ]}
      />

      <ActivationsSection 
        className="mt-24"
        label="Production Highlights"
        paragraph="From hero sets to modular backdrops and specialty props—we design, fabricate and deliver for features, series and commercials."
      />

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header and Text Section - Same Row */}
          <div className="grid lg:grid-cols-2 gap-20 mb-20 items-start">
            {/* Left Column - Header */}
            <div className="flex items-center text-lg font-normal" style={{ color: '#F15F22' }}>
              <span>Production Capabilities</span>
            </div>

            {/* Right Column - Large Text */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-normal text-black leading-tight mb-8">
                Sets and builds<br />
                that shoot beautifully
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We partner with producers and art departments to engineer practical, camera‑ready
                environments that move fast and look premium on screen.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 6h16v12H4V6zm2 2v8h12V8H6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Production Design Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Look development, set planning and technical drawings aligned to the director’s vision
                and camera language.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 7h18v10H3V7zm2 2v6h14V9H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Set Fabrication & Scenic</h3>
              <p className="text-gray-600 leading-relaxed">
                Carpentry, metal, foam, scenic textures and paint finishes that hold up in close‑ups
                and wides alike.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7l3-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Mechanicals & Special Props</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive elements, rigs and custom props engineered for reliability and safety on set.
              </p>
            </div>

            <div className="text-left">
              <div className="w-16 h-16 flex items-center justify-start mb-6" style={{ color: '#F15F22' }}>
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 6h18v2H3V6zm2 4h14v2H5v-2zm-2 4h18v2H3v-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">On‑Set Installation & Strike</h3>
              <p className="text-gray-600 leading-relaxed">
                Tight turnarounds handled end‑to‑end—transport, install, standby maintenance and efficient strike.
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
                Built for speed and reliability
              </h2>

              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                A streamlined workflow that keeps departments aligned and days on schedule, without
                compromising quality on screen.
              </p>

              <hr className="border-gray-300 mb-12" />

              {/* Steps */}
              <div className="space-y-12">
                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Brief & Tech Recce</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Align with production design, VFX/stunts and camera; capture dimensions, access
                      constraints and safety requirements.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Shop Drawings & Approvals</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      Detailed drawings, materials and finishes for quick sign‑off across departments.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Fabrication, Pre‑Rig & QA</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      In‑house build, pre‑fit and camera tests where needed to de‑risk on‑set time.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-6 items-start">
                  <div className="col-span-2">
                    <h3 className="font-semibold text-gray-900 text-base">Install, Support & Strike</h3>
                  </div>
                  <div className="col-span-3">
                    <p className="text-gray-600 leading-relaxed">
                      On‑set delivery, standby crew for resets/repairs, and efficient strike and storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative overflow-hidden bg-transparent aspect-square lg:aspect-auto lg:h-full lg:min-h-[600px] rounded-none">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/0db1632b-e229-43d9-aa97-4b0530471c61 (1).png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        breadcrumb="Testimonials"
        title="What crews say about our production work"
        testimonials={[
          {
            quote:
              'Their sets were camera‑ready out of the truck—clean builds, smart engineering and zero surprises on shoot days.',
            authorName: 'M. Gupta',
            authorTitle: 'Series Producer',
            company: 'Originals Unit'
          },
          {
            quote:
              'Fast approvals, impeccable finishes and a crew that understands how a set needs to work for camera and actors.',
            authorName: 'R. Iyer',
            authorTitle: 'Production Designer',
            company: 'Feature Film'
          },
          {
            quote:
              'Tight timelines met without drama. Reliable partners from recce to strike.',
            authorName: 'S. Khan',
            authorTitle: 'Line Producer',
            company: 'Commercials'
          }
        ]}
        className="mt-16 lg:mt-24"
      />

      {/* FAQ Section */}
      <FAQSection
        breadcrumb="FAQ"
        title="Film & TV — FAQs"
        subtitle="Key questions on builds, safety and schedules"
        backgroundColor="bg-white"
        items={[
          {
            question: 'How do you ensure on‑set safety and compliance?',
            answer:
              'We coordinate early with production, stunts and VFX for loads, anchoring and materials. Risk areas are prototyped and documented; on‑site installs follow safety SOPs.'
          },
          {
            question: 'What are typical lead times for hero sets?',
            answer:
              'Simple sets can be turned around in 1–2 weeks. Complex builds with special finishes/mechanicals need 3–5+ weeks depending on approvals and availability.'
          },
          {
            question: 'Can you work night shifts and tight shoot windows?',
            answer:
              'Yes. We plan manpower and pre‑rig to meet night installs, continuity holds, and rapid strikes as per the call sheet.'
          },
          {
            question: 'Do you supply scenic textures and paint?',
            answer:
              'We offer full scenic services — textures, aging, specialty coatings — matched to camera tests where required.'
          }
        ]}
      />

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: '#F15F22' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-8 leading-tight">
            Ready to build your next set?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From commercials to long‑form, we deliver camera‑ready builds with zero drama.
          </p>
          <button 
            className="bg-white text-black px-8 py-3 font-normal hover:bg-white/90 transition-colors"
            onClick={() => onStartProject && onStartProject()}
          >
            Start Your Production
          </button>
        </div>
      </section>
    </div>
  );
};



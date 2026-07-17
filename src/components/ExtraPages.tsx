import React, { useState } from 'react';
import { Award, ShieldCheck, Factory, ChevronDown, BookOpen, Clock, ArrowRight, CornerDownRight, Settings, HelpCircle, Download, FileText, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { certifications, faqs, blogs } from '../data/products';
import { Certification, FAQItem, BlogItem } from '../types';

interface ExtraPagesProps {
  pageId: string;
  onOpenQuoteModal: () => void;
}

export default function ExtraPages({ pageId, onOpenQuoteModal }: ExtraPagesProps) {
  const [activeFaqId, setActiveFaqId] = useState<string | null>('faq-moq');
  const [activeCertDetail, setActiveCertDetail] = useState<Certification | null>(null);
  const [activeBlog, setActiveBlog] = useState<BlogItem | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-slate-800">
      
      {/* 1. ABOUT US PAGE */}
      {pageId === 'about' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Our Corporate Heritage</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Namya EcoPack
            </h2>
            <p className="text-sm text-slate-500 font-medium">Sustainable Packaging. Crafted for the Future.</p>
            <div className="h-1 w-12 bg-teal-700 mx-auto rounded-full" />
          </div>

          {/* Editorial Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Our Core Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Namya EcoPack is an premier Indian enterprise pioneering high-volume manufacturing of compostable, biodegradable, and sustainable food packaging solutions. Formulated entirely from agricultural byproduct fibers of sugarcane bagasse, we replace fragile single-use plastic and heavy wood-paper pulp with structurally robust, chemical-free alternatives.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Headquartered in Gurgaon with our high-capacity, state-of-the-art production plant situated in Sanand, Gujarat, we have built an elite supply-chain network delivering bulk full containers directly to distributors, airline catering hubs, food franchises, and hotels across 28+ countries.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-teal-700 font-mono">1.2M</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Daily Mold Output</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-teal-700 font-mono">28+</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">Export Destinations</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl bg-slate-100 border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop" 
                alt="Beautiful plantation representation" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent flex items-end p-6">
                <p className="text-xs text-white font-mono leading-relaxed max-w-sm">
                  Utilising 100% waste biomass fibers leftover from regional sugar refinery crushers in Gujarat.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Manufacturing Excellence', desc: 'Operating advanced automated molding tunnels, inline robotic trimming, and strict water recycling loops to keep production carbon footprints at historic lows.', icon: Factory },
              { title: 'Zero Deforestation', desc: 'By replacing wood-paper boards with annual sugarcane crops, we prevent virgin forest clear-cutting and conserve heavy forest canopy soils.', icon: Award },
              { title: 'Corporate Reliability', desc: 'Meticulous quality control, prompt shipping logs, vacuum pallet wrapping, and flawless international customs clearance paperwork.', icon: ShieldCheck }
            ].map((val, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <val.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{val.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 2. OEM & PRIVATE LABEL PAGES */}
      {(pageId === 'oem' || pageId === 'privatelabel') && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Bespoke Enterprise Tooling</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              {pageId === 'oem' ? 'OEM Customized Shape Engineering' : 'Private Label Bottom Embossing'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We engineer bespoke sustainable shapes and provide high-fidelity brand embossing directly inside our heavy hydraulic molds for major food chains, hotel networks, and aviation groups.
            </p>
            <div className="h-1 w-12 bg-teal-700 mx-auto rounded-full mt-2" />
          </div>

          {/* Custom Molding process steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Visual CAD */}
            <div className="bg-slate-900 text-white p-6 sm:p-10 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
              <div className="flex justify-between items-center text-xs text-teal-400 font-mono">
                <span>CAD PROTOTYPING STATION</span>
                <span>STATUS: STABLE</span>
              </div>
              
              <div className="border border-slate-800 rounded-2xl h-64 bg-slate-950 flex flex-col justify-between p-4 font-mono text-[10px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                <div className="flex justify-between text-slate-500">
                  <span>[MOLD_PROTOTYPE_v2.4]</span>
                  <span>GRID: 0.1mm</span>
                </div>
                
                {/* Vector simulated CAD circle plate */}
                <div className="flex flex-col items-center justify-center flex-grow py-4">
                  <div className="w-28 h-28 rounded-full border-2 border-dashed border-teal-500/40 flex items-center justify-center relative animate-spin-slow">
                    <div className="w-20 h-20 rounded-full border border-teal-500/30 flex items-center justify-center">
                      <span className="text-[8px] text-teal-400 font-bold uppercase tracking-widest">[CLIENT_LOGO]</span>
                    </div>
                    {/* Dimension arrows */}
                    <div className="absolute inset-x-0 top-1/2 h-px bg-teal-500/20" />
                    <div className="absolute inset-y-0 left-1/2 w-px bg-teal-500/20" />
                  </div>
                  <p className="text-[8px] text-slate-400 mt-2 font-mono">Reinforced Rim Tolerance Check: PASS</p>
                </div>

                <div className="flex justify-between text-[8px] text-slate-500">
                  <span>Tooling CNC: 4-Axis</span>
                  <span>Mold Material: Chrome Steel</span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 text-center leading-relaxed font-mono">
                Rapid physical sample dispatch in 15 days from 3D design approval under absolute NDA protection.
              </p>
            </div>

            {/* Explanatory text */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight">The OEM / Private Label Pipeline</h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                {[
                  { step: '01', title: '3D Prototyping & CAD CAD Mock', text: 'Provide your dimensional sketches or food container blueprints. Our in-house engineering team designs fully-dimensioned 3D CAD models and checks structural partition load stress.' },
                  { step: '02', title: 'CNC Metal Tooling Fabrication', text: 'We machine premium chrome-steel or high-durability alloy molds using state-of-the-art 4-axis CNC engraving systems, maintaining absolute bottom-logo text legibility.' },
                  { step: '03', title: 'Sample Run & Lab Validation', text: 'We press an initial trial batch of 500 units, conducting rigorous grease-holding, oven-baking, and seal-tightness tests in our quality assurance laboratory before dispatching samples.' },
                  { step: '04', title: 'Mass Scale Molding production', text: 'Upon coordinate clearance signoff, the custom molds are locked into our 400-ton automated hydraulic presses, cranking out over 150,000 customized containers daily.' }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-4">
                    <span className="text-lg font-black text-teal-700 font-mono mt-0.5">{item.step}</span>
                    <div>
                      <p className="font-bold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Initiate OEM Design Quote
                </button>
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Submit NDA Document
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      )}

      {/* 3. CERTIFICATIONS LIST */}
      {pageId === 'certificates' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Accredited Sovereign Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Global Compliance & Certifications
            </h2>
            <p className="text-sm text-slate-500 font-medium">Verified food-contact safe, compostable, and plant-safe credentials.</p>
            <div className="h-1 w-12 bg-teal-700 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveCertDetail(cert)}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-xl ${cert.badgeColor} text-white flex items-center justify-center font-bold text-xs`}>
                    {cert.id.toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 duration-200">{cert.name}</h4>
                    <p className="text-[10px] font-mono text-teal-600 font-semibold mt-1">{cert.code}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
                <div className="pt-4 text-xs font-bold text-teal-700 flex items-center space-x-1 group-hover:translate-x-1 duration-200">
                  <span>View Certification parameters</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

          {/* Details modal overlay */}
          <AnimatePresence>
            {activeCertDetail && (
              <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-slate-100"
                >
                  <button
                    onClick={() => setActiveCertDetail(null)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-4 text-center sm:text-left">
                    <div className={`w-14 h-14 rounded-2xl ${activeCertDetail.badgeColor} text-white flex items-center justify-center font-bold text-lg mx-auto sm:mx-0`}>
                      {activeCertDetail.id.toUpperCase()}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-bold text-slate-950">{activeCertDetail.name}</h4>
                      <p className="text-xs font-mono text-teal-700 font-semibold">{activeCertDetail.code}</p>
                    </div>
                    <div className="h-px bg-slate-100" />
                    <div className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                      <p><span className="font-bold text-slate-800">Testing Authority:</span> {activeCertDetail.authority}</p>
                      <p><span className="font-bold text-slate-800">Compliance Standard:</span> Verified physical and biological disintegration under controlled moisture, thermal incubation, and oxygen concentration. 0% toxic residual metals or hazardous synthetics remaining.</p>
                      <p>{activeCertDetail.description}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCertDetail(null)}
                    className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Close Sheet
                  </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* 4. FREQUENTLY ASKED QUESTIONS FAQ */}
      {pageId === 'faq' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12 max-w-3xl mx-auto">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">B2B Trade Assistance</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 font-medium">Everything you need to know about sugarcane importing and logistics.</p>
            <div className="h-1 w-12 bg-teal-700 mx-auto rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = faq.id === activeFaqId;
              return (
                <div
                  key={faq.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-colors duration-200"
                >
                  <button
                    onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm font-bold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-185' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-slate-100 bg-slate-50/50"
                      >
                        <p className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* 5. EDUCATIONAL INDUSTRY BLOGS */}
      {pageId === 'blog' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
          
          {activeBlog ? (
            /* Selected Blog Content View */
            <div className="max-w-3xl mx-auto space-y-8">
              <button
                onClick={() => setActiveBlog(null)}
                className="text-xs text-teal-700 font-bold hover:underline flex items-center space-x-1"
              >
                <span>← Back to all articles</span>
              </button>

              <div className="space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">{activeBlog.category}</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">{activeBlog.title}</h3>
                <div className="flex items-center space-x-4 text-xs text-slate-400 font-semibold font-mono">
                  <span>{activeBlog.date}</span>
                  <span>•</span>
                  <span>{activeBlog.readTime}</span>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden aspect-video bg-slate-100 border border-slate-200 shadow-lg">
                <img src={activeBlog.image} alt={activeBlog.title} className="object-cover w-full h-full" referrerPolicy="no-referrer" />
              </div>

              <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
                <p className="font-semibold text-slate-900 text-base">{activeBlog.excerpt}</p>
                <p>{activeBlog.content}</p>
                <p>
                  As importing regulations tighten in major European and North American metropolitan zones, distributors who establish proactive alignments with certified, scalable sugarcane processing centers like Namya EcoPack will secure substantial market advantages. Reach out to our B2B cargo desk today on WhatsApp or fill out our trade questionnaire to procure certified test samples.
                </p>
              </div>
            </div>
          ) : (
            /* Blogs List Grid */
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">B2B Trade Educational Portal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Trade Insights & Articles
                </h2>
                <p className="text-sm text-slate-500 font-medium">Navigating composting laws, customs tariffs, and material analysis sheets.</p>
                <div className="h-1 w-12 bg-teal-700 mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {blogs.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => setActiveBlog(blog)}
                    className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="aspect-video bg-slate-100 overflow-hidden border-b border-slate-100 relative">
                      <img src={blog.image} alt={blog.title} className="object-cover w-full h-full transform group-hover:scale-105 duration-500" referrerPolicy="no-referrer" />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest font-mono text-teal-800 px-3 py-1 rounded-md border border-slate-100/30">
                        {blog.category}
                      </span>
                    </div>

                    <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400 font-semibold">
                          <span>{blog.date}</span>
                          <span>•</span>
                          <span>{blog.readTime}</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-teal-700 duration-200 leading-tight">{blog.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                      </div>

                      <div className="pt-4 flex items-center text-xs font-bold text-teal-700 group-hover:translate-x-1 duration-200">
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      )}

    </div>
  );
}

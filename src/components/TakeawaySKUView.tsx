import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MessageCircle, FileText, CheckCircle, HelpCircle, X, ChevronRight, Package, ShieldCheck, Container, Minimize } from 'lucide-react';
import takeawayImg from '../assets/images/sugarcane_clamshell_box_1784290602529.jpg';

interface TakeawaySKUViewProps {
  onOpenQuoteModal: () => void;
  onBackToCatalog: () => void;
}

interface TakeawaySKU {
  id: string;
  name: string;
  capacity: string;
  dimensions: string;
  weight: string;
  pcsPerCtn: number;
  description: string;
  heatResistance: string;
}

export default function TakeawaySKUView({ onOpenQuoteModal, onBackToCatalog }: TakeawaySKUViewProps) {
  const [selectedSku, setSelectedSku] = useState<TakeawaySKU | null>(null);
  const [showSampleForm, setShowSampleForm] = useState(false);
  const [sampleSuccess, setSampleSuccess] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: 'Please send physical sample packs of 500ml, 750ml, and 1000ml Rectangular Takeaway Containers with matching bagasse lids.'
  });

  const takeawaySkus: TakeawaySKU[] = [
    {
      id: 'takeaway-500',
      name: '500ml Rectangular Takeaway Container',
      capacity: '500 ml / 17 oz',
      dimensions: '180 × 125 × 45 mm',
      weight: '14.0 g',
      pcsPerCtn: 500,
      description: 'Ideal size for single-portion meals, side dishes, stir-fries, and premium desserts. Features high-rigidity structural ribbing.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe'
    },
    {
      id: 'takeaway-750',
      name: '750ml Premium Takeaway Container',
      capacity: '750 ml / 25 oz',
      dimensions: '230 × 135 × 45 mm',
      weight: '19.0 g',
      pcsPerCtn: 500,
      description: 'Our absolute bestseller. Perfect for pasta, main rice dishes, noodles, and gourmet salads. Snaps perfectly with our matching sugarcane lids.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe'
    },
    {
      id: 'takeaway-1000',
      name: '1000ml Large Takeaway Container',
      capacity: '1000 ml / 34 oz',
      dimensions: '230 × 135 × 60 mm',
      weight: '22.0 g',
      pcsPerCtn: 500,
      description: 'Deep profile, heavy-duty container designed for family portions, mixed curries, salads, and bulk food deliveries.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe'
    },
    {
      id: 'takeaway-2c',
      name: '2-Compartment Delivery Container',
      capacity: '800 ml (total)',
      dimensions: '230 × 135 × 48 mm',
      weight: '20.5 g',
      pcsPerCtn: 500,
      description: 'Designed to keep mains and side sauces isolated. Excellent for combo meal packs, keeping textures fresh during transit.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe'
    },
    {
      id: 'takeaway-lid',
      name: 'Universal Rectangular Sugarcane Lid',
      capacity: 'N/A',
      dimensions: '235 × 140 × 10 mm',
      weight: '8.0 g',
      pcsPerCtn: 500,
      description: 'Fits our 750ml, 1000ml, and 2-Compartment container range perfectly. Patented leak-resistant double lock lip seals tightly.',
      heatResistance: 'Steam resistant, hot oil resistant, and 100% compostable'
    }
  ];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSuccess(true);
    setTimeout(() => {
      setSampleSuccess(false);
      setShowSampleForm(false);
      setSampleForm({ name: '', company: '', email: '', phone: '', notes: 'Please send physical sample packs of 500ml, 750ml, and 1000ml Rectangular Takeaway Containers with matching bagasse lids.' });
    }, 3000);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Namya EcoPack Export Team, I am interested in your Sugarcane Takeaway Packaging range (500ml to 1000ml containers & lids). Please share MOQ terms and FOB pricing coordinates to our region.`;
    return `https://wa.me/919909900000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 py-6 text-slate-800">
      
      {/* Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div className="flex items-center space-x-2 text-xs font-medium text-slate-500">
          <button 
            onClick={onBackToCatalog}
            className="hover:text-teal-700 transition-colors flex items-center space-x-1 font-semibold"
          >
            <span>Products</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800 font-semibold">Takeaway Packaging</span>
        </div>

        <button 
          onClick={onBackToCatalog}
          className="text-xs font-bold text-teal-700 hover:text-teal-900 transition-colors flex items-center space-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>
      </div>

      {/* Hero Presentation */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold">
            <Package className="w-3.5 h-3.5" />
            <span>Premium B2B Export Grade</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            High-Performance Takeaway Containers
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Meet the modern delivery standard. Our organic sugarcane bagasse takeaway rectangular containers offer exceptional leak protection, structural rigidity, and heat insulation. Completely plastic-free, PFAS-free, and designed with a double tight-lock rim for perfect lids.
          </p>

          {/* Key structural points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
            {[
              { title: 'Zero Soggy Breakdown', desc: 'Moisture absorbing sugarcane fibers maintain crispness' },
              { title: 'Double Tight-Lock Rim', desc: 'Fits both pulp and recyclable rPET lids perfectly' },
              { title: '100% Microwave Safe', desc: 'Base is ready for rapid reheating up to 120°C' },
              { title: 'Nestable & Space-Saving', desc: 'Saves 35% kitchen shelf space with high-nest design' }
            ].map((pt, i) => (
              <div key={i} className="flex items-start space-x-2.5">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{pt.title}</h4>
                  <p className="text-[11px] text-slate-500">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setShowSampleForm(true)}
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-teal-900/10 flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Build Sample Kit</span>
            </button>
            
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 hover:border-emerald-300 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 stroke-none" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Hero image frame */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-square bg-slate-100 shadow-xl border border-slate-200">
            <img 
              src={takeawayImg} 
              alt="Sugarcane Takeaway Containers" 
              className="object-cover w-full h-full transform hover:scale-103 duration-700 transition-all"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
              <p className="text-[11px] font-mono font-bold text-teal-800 uppercase tracking-wider">Sustainable Delivery</p>
              <p className="text-xs text-slate-600 mt-1 leading-tight">Sugarcane rectangular containers ready for cloud kitchen deliveries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKU Range Grid */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            PORTFOLIO SIZES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Compostable delivery packaging, engineered to ecofy.io specs.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {takeawaySkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-4 flex flex-col justify-between hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* Specs Badge */}
                <span className="absolute top-3 right-3 bg-[#113C2E] text-white text-[8px] font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded-md shadow-sm z-10">
                  SPECS
                </span>

                {/* SVG Container representation */}
                <div className="aspect-square w-full rounded-xl bg-white/40 flex items-center justify-center p-6 relative overflow-hidden border border-slate-100 shadow-inner mb-4">
                  <div className="w-3/4 h-3/4 relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <svg className="w-full h-full text-slate-300 group-hover:text-teal-600 transition-colors duration-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5">
                      {sku.id === 'takeaway-lid' ? (
                        <>
                          {/* Flat Lid shape */}
                          <rect x="15" y="38" width="70" height="24" rx="4" />
                          <line x1="15" y1="50" x2="85" y2="50" />
                          <line x1="30" y1="44" x2="70" y2="44" strokeDasharray="1.5 1.5" />
                        </>
                      ) : (
                        <>
                          {/* Deep Rectangular base */}
                          <path d="M20 30 L80 30 L72 80 L28 80 Z" />
                          <line x1="20" y1="38" x2="80" y2="38" />
                          {sku.id === 'takeaway-2c' && (
                            <line x1="50" y1="38" x2="50" y2="80" strokeWidth="2" />
                          )}
                          {sku.id === 'takeaway-1000' && (
                            <path d="M25 55 L75 55" strokeDasharray="2 2" />
                          )}
                        </>
                      )}
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-extrabold text-slate-500 font-mono bg-white/80 px-1.5 py-0.5 rounded shadow-sm">
                        {sku.capacity !== 'N/A' ? sku.capacity.split(' / ')[0] : 'Lid'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* SKU Name & specs list */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-black text-slate-950 uppercase tracking-tight group-hover:text-teal-800 transition-colors line-clamp-2 min-h-[2rem]">
                      {sku.name}
                    </h3>
                  </div>

                  <div className="border-t border-slate-100 pt-3 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Dimensions</span>
                      <span className="font-bold text-slate-800">{sku.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Weight</span>
                      <span className="font-bold text-slate-800">{sku.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Pcs/Ctn</span>
                      <span className="font-bold text-slate-800">{sku.pcsPerCtn}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-teal-700 flex items-center group-hover:translate-x-1 duration-200">
                      <span>View Technical specs</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Spec Drawer Modal */}
      <AnimatePresence>
        {selectedSku && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0" onClick={() => setSelectedSku(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-xl md:max-w-md max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-10 border border-slate-100"
            >
              {/* Modal Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-5 flex-shrink-0 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-black text-slate-900 leading-tight">{selectedSku.name} Technical Specs</h3>
                  <p className="text-[10px] text-teal-700 font-mono font-bold uppercase mt-0.5">B2B Standard Export Grade</p>
                </div>
                <button
                  onClick={() => setSelectedSku(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Specs Details */}
              <div className="p-6 md:p-5 space-y-6 md:space-y-4 overflow-y-auto flex-1">
                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedSku.description}
                </p>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block">Technical Details</span>
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">B2B Product SKU:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.id.toUpperCase()}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Capacity:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.capacity}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Dimensions (L x W x H):</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.dimensions}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Net Weight:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.weight}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Secondary Box Packing:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.pcsPerCtn} Pcs / Carton</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Thermal Performance:</span>
                      <span className="font-bold text-teal-800 text-right">{selectedSku.heatResistance}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={`https://wa.me/919909900000?text=${encodeURIComponent(`Hello Namya EcoPack, I am interested in placing an FCL container quote for ${selectedSku.name}. Please send B2B wholesale pricing terms.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs p-3 rounded-xl transition-all flex items-center justify-center space-x-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => { setSelectedSku(null); onOpenQuoteModal(); }}
                    className="flex-1 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs p-3 rounded-xl transition-all"
                  >
                    Request Volume Pricing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Sample Kit Request Modal */}
      <AnimatePresence>
        {showSampleForm && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0" onClick={() => setShowSampleForm(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-lg md:max-w-md max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden shadow-2xl relative z-10 border border-slate-100"
            >
              <div className="bg-slate-50 border-b border-slate-100 p-5 flex-shrink-0 flex justify-between items-center">
                <div>
                  <h3 className="text-base font-black text-slate-900">Request Takeaway Sample Kit</h3>
                  <p className="text-[10px] text-teal-700 font-mono font-bold uppercase mt-0.5">Free B2B Physical Evaluation</p>
                </div>
                <button
                  onClick={() => setShowSampleForm(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSampleSubmit} className="p-6 md:p-5 space-y-4 md:space-y-3 overflow-y-auto flex-1">
                {sampleSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">Sample Request Received!</h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Our B2B sample dispatch team has registered your request. We will contact you within 24 hours to confirm shipping details.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-xs text-slate-500">
                      Evaluate structural rigidity, hot curry leak containment, lid tightness, and microwave reheat durability. We dispatch samples completely free to verified businesses and distributors.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Contact Name</label>
                        <input 
                          type="text" 
                          required
                          value={sampleForm.name}
                          onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                          placeholder="e.g. Jane Doe"
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Company / Brand</label>
                        <input 
                          type="text" 
                          required
                          value={sampleForm.company}
                          onChange={(e) => setSampleForm({ ...sampleForm, company: e.target.value })}
                          placeholder="e.g. Sourcing Co."
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Corporate Email</label>
                        <input 
                          type="email" 
                          required
                          value={sampleForm.email}
                          onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                          placeholder="e.g. purchase@company.com"
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Phone / WhatsApp</label>
                        <input 
                          type="text" 
                          required
                          value={sampleForm.phone}
                          onChange={(e) => setSampleForm({ ...sampleForm, phone: e.target.value })}
                          placeholder="e.g. +1 555-0155"
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">Custom Notes / Selected SKUs</label>
                      <textarea 
                        rows={3}
                        value={sampleForm.notes}
                        onChange={(e) => setSampleForm({ ...sampleForm, notes: e.target.value })}
                        className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:border-teal-700 focus:outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs p-3.5 rounded-xl transition-colors shadow-md shadow-teal-900/10"
                    >
                      Dispatch My Sample Kit
                    </button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

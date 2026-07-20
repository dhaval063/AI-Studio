import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle, HelpCircle, X, ChevronRight, CupSoda, ShieldCheck, Soup, Minimize } from 'lucide-react';
import ProductVectorImage from './ProductVectorImage';

import bowlsImg from '../assets/images/bowls.jpg';

// Import high-resolution bowl images
import bowl6 from '../assets/images/products/bowls/6-oz.png';
import bowl8 from '../assets/images/products/bowls/8-oz.png';
import bowl12 from '../assets/images/products/bowls/12-oz.png';
import bowl16 from '../assets/images/products/bowls/16-oz.png';
import bowl24 from '../assets/images/products/bowls/24-oz.png';
import bowl32 from '../assets/images/products/bowls/32-oz.png';

interface BowlsSKUViewProps {
  onOpenQuoteModal: (category?: string, productId?: string) => void;
  onBackToCatalog: () => void;
}

interface BowlSKU {
  id: string;
  name: string;
  capacityOz: string;
  capacityMl: string;
  sizeDimensions: string;
  pcsPerCtn: number;
  description: string;
  heatResistance: string;
  image: string;
}

export default function BowlsSKUView({ onOpenQuoteModal, onBackToCatalog }: BowlsSKUViewProps) {
  const [selectedSku, setSelectedSku] = useState<BowlSKU | null>(null);
  const [showSampleForm, setShowSampleForm] = useState(false);
  const [sampleSuccess, setSampleSuccess] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: 'Please send physical sample bowls of 6oz, 12oz and 24oz sizes.'
  });

  const bowlSkus: BowlSKU[] = [
    {
      id: 'bowl-6oz',
      name: '6 oz Bowl',
      capacityOz: '6 oz',
      capacityMl: '180 ml',
      sizeDimensions: '110 × 40 mm',
      pcsPerCtn: 1000,
      description: 'Amenity portion cup size. Outstanding for ice creams, condiments, dipping sauces, butter spreads, and soup tastings.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl6
    },
    {
      id: 'bowl-8oz',
      name: '8 oz Bowl',
      capacityOz: '8 oz',
      capacityMl: '240 ml',
      sizeDimensions: '128 × 33 mm',
      pcsPerCtn: 1000,
      description: 'Ideal shallow profile bowl for porridge, cereals, side salads, small soups, and individual yogurt portions.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl8
    },
    {
      id: 'bowl-12oz',
      name: '12 oz Bowl',
      capacityOz: '12 oz',
      capacityMl: '355 ml',
      sizeDimensions: '150 × 40 mm',
      pcsPerCtn: 1000,
      description: 'Multipurpose catering staple. Widely imported for airline dining, school lunch hot-puddings, and side soup bowls.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl12
    },
    {
      id: 'bowl-16oz',
      name: '16 oz Bowl',
      capacityOz: '16 oz',
      capacityMl: '475 ml',
      sizeDimensions: 'Ø 178 mm',
      pcsPerCtn: 600,
      description: 'Perfect deep-bowl for noodle servings, ramen, fruit salads, and takeaway single-meal grains.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl16
    },
    {
      id: 'bowl-24oz',
      name: '24 oz Bowl',
      capacityOz: '24 oz',
      capacityMl: '710 ml',
      sizeDimensions: '204 × 42 mm',
      pcsPerCtn: 600,
      description: 'Large meal bowl suitable for healthy Buddha bowls, poke bowls, heavy lunch takeout, and main course soups.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl24
    },
    {
      id: 'bowl-32oz',
      name: '32 oz Bowl',
      capacityOz: '32 oz',
      capacityMl: '950 ml',
      sizeDimensions: '204 × 60 mm',
      pcsPerCtn: 600,
      description: 'Our maximum capacity buffet and sharing bowl. Ideal for family salads, double-ramen, and wholesale party packs.',
      heatResistance: 'Water & soup proof up to 100°C, microwaveable up to 120°C',
      image: bowl32
    }
  ];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSuccess(true);
    setTimeout(() => {
      setSampleSuccess(false);
      setShowSampleForm(false);
      setSampleForm({ name: '', company: '', email: '', phone: '', notes: 'Please send physical sample bowls of 6oz, 12oz and 24oz sizes.' });
    }, 3000);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Namya EcoPack Export Team, I am interested in your Sugarcane Bowls range (6oz to 32oz). Please share B2B technical specs, price terms, and shipping lead times to our port.`;
    return `https://wa.me/917041969067?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="space-y-16 py-6 text-slate-800">
      
      {/* Custom Breadcrumbs and Back Action */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div className="flex items-center space-x-2 text-xs font-medium text-slate-500">
          <button 
            onClick={onBackToCatalog}
            className="hover:text-teal-700 transition-colors flex items-center space-x-1 font-semibold"
          >
            <span>Products</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800 font-semibold">Bowls</span>
        </div>
        
        <button
          onClick={onBackToCatalog}
          className="flex items-center space-x-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </button>
      </div>

      {/* Intro section: Designed based on user's custom screenshot */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
              6 SKUS • 6 OZ TO 32 OZ • SHIPS TO 30+ COUNTRIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Compostable bagasse bowls, direct from the strategic supply network.
            </h1>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Open bowls from 6 oz to 32 oz for soup, salad, grain and poke service, molded from 100% sugarcane bagasse. These disposable, biodegradable bowls are hot-liquid and microwave safe, oil- and sauce-resistant, PFAS-free. Shipped BRCGS Grade A certified to importers, catering logistics providers, food service distributors, and hospitality channels across the USA, UK, EU and the Gulf.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={() => onOpenQuoteModal('bowls')}
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-950/10 transition-all"
            >
              Get Bulk Quote
            </button>
            
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-emerald-700 border border-emerald-200 hover:border-emerald-300 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512" 
                className="w-4 h-4 fill-emerald-600"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* High-quality generated image frame */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-square bg-slate-100 shadow-xl border border-slate-200">
            <img 
              src={bowlsImg} 
              alt="Sugarcane Bagasse Bowls with nutritious ramen and soup" 
              className="object-cover w-full h-full transform hover:scale-103 duration-700 transition-all"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
              <p className="text-[11px] font-mono font-bold text-teal-800 uppercase tracking-wider">Premium Eco Presentation</p>
              <p className="text-xs text-slate-600 mt-1 leading-tight">Sugarcane bagasse deep salad bowls arranged on organic wooden layouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKU Range Grid */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            SKU RANGE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Six sizes from amenity to buffet.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {bowlSkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="w-full sm:w-[280px] h-[400px] flex flex-col justify-between bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* Real High-Resolution Bowl Image */}
                <div className="h-[180px] w-full rounded-xl bg-white/40 flex items-center justify-center p-3 relative overflow-hidden border border-slate-100 shadow-inner mb-4 flex-shrink-0">
                  {sku.image ? (
                    <img
                      src={sku.image}
                      alt={sku.name}
                      className="max-h-full max-w-full object-contain select-none transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <ProductVectorImage
                      id={sku.id}
                      name={sku.name}
                      category="bowls"
                      className="max-h-full max-w-full select-none transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* SKU Name */}
                <div className="h-10 flex items-start mb-2 flex-shrink-0">
                  <h3 className="text-xs font-black text-slate-950 uppercase tracking-tight group-hover:text-teal-800 transition-colors line-clamp-2 leading-snug">
                    {sku.name}
                  </h3>
                </div>

                {/* Specs list */}
                <div className="border-t border-slate-100 pt-3 space-y-1.5 text-xs flex-1 flex flex-col justify-center">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Cap.</span>
                    <span className="font-bold text-slate-800 text-right">{sku.capacityOz} • {sku.capacityMl}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Size</span>
                    <span className="font-bold text-slate-800 text-right truncate max-w-[120px]">{sku.sizeDimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Pcs/Ctn</span>
                    <span className="font-bold text-slate-800 text-right">{sku.pcsPerCtn}</span>
                  </div>
                </div>

                {/* Link */}
                <div className="pt-3 mt-auto flex-shrink-0">
                  <span className="text-[10px] font-bold text-teal-700 flex items-center group-hover:translate-x-1 duration-200">
                    <span>View Technical specs</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
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
                  <h3 className="text-base font-black text-slate-900 leading-tight">{selectedSku.name} Technical Specifications</h3>
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
                      <span className="text-slate-500 font-medium">Volume Capacity:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.capacityOz} ({selectedSku.capacityMl})</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Top Diameter & Height:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.sizeDimensions}</span>
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
                    href={`https://wa.me/917041969067?text=${encodeURIComponent(`Hello Namya EcoPack, I am interested in placing an FCL container quote for ${selectedSku.name}. Please send B2B wholesale pricing terms.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs p-3 rounded-xl transition-all flex items-center justify-center space-x-1.5"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512" 
                      className="w-4 h-4 fill-white"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Embedded Sample Request Modal Dialog */}
      <AnimatePresence>
        {showSampleForm && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="absolute inset-0" onClick={() => setShowSampleForm(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 border border-slate-100"
            >
              <div className="bg-slate-50 border-b border-slate-100 p-5 flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase">Request Sample Kit</h3>
                  <p className="text-[10px] text-teal-700 font-mono font-bold mt-0.5">Complimentary B2B physical sample packs</p>
                </div>
                <button
                  onClick={() => setShowSampleForm(false)}
                  className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                {sampleSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                    <h4 className="text-sm font-bold text-slate-950">Sample Kit Requested Successfully!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our trade coordinator will contact you via email shortly to arrange FedEx/DHL carriage collection codes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSampleSubmit} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      We send 10-piece standard testing packs. Please confirm your commercial address and business registration.
                    </p>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Contact Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs outline-none focus:border-teal-500"
                        placeholder="e.g. John Doe"
                        value={sampleForm.name}
                        onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Company Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs outline-none focus:border-teal-500"
                        placeholder="e.g. Eco Food Distributors Ltd"
                        value={sampleForm.company}
                        onChange={(e) => setSampleForm({ ...sampleForm, company: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Corporate Email</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs outline-none focus:border-teal-500"
                        placeholder="e.g. procurement@company.com"
                        value={sampleForm.email}
                        onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Sample Selection / Special Notes</label>
                      <textarea
                        rows={2}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs outline-none focus:border-teal-500 resize-none"
                        value={sampleForm.notes}
                        onChange={(e) => setSampleForm({ ...sampleForm, notes: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs p-3.5 rounded-xl transition-all"
                    >
                      Process Complimentary Sample Request
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

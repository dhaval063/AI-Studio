import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle, HelpCircle, X, ChevronRight, Package, ShieldCheck, Container, Minimize } from 'lucide-react';
import ProductVectorImage from './ProductVectorImage';

import takeawayImg from '../assets/images/takeaway.png';

// Import high-resolution takeaway images
import takeaway16 from '../assets/images/products/takeaway/16_oz.png';
import takeaway22 from '../assets/images/products/takeaway/22_oz.png';
import takeaway24 from '../assets/images/products/takeaway/24_oz.png';
import takeaway26Flat from '../assets/images/products/takeaway/26_oz_flat.png';
import takeaway26 from '../assets/images/products/takeaway/26_oz.png';
import takeaway32 from '../assets/images/products/takeaway/32_oz.png';

interface TakeawaySKUViewProps {
  onOpenQuoteModal: (category?: string, productId?: string) => void;
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
  image: string;
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
    notes: 'Please send physical sample packs of 16 oz Burrito Oval Bowls, 22 oz Square Containers, and 24 oz Bowls with Lids.'
  });

  const takeawaySkus: TakeawaySKU[] = [
    {
      id: 'takeaway-16',
      name: '16 oz Burrito Oval Bowl',
      capacity: '16 oz / 470 ml',
      dimensions: '200 × 125 × 35 mm',
      weight: '12 g',
      pcsPerCtn: 500,
      description: 'Sleek, ergonomic burrito bowl. Designed specifically for Tex-Mex cloud kitchens, single-portion salads, and healthy grains.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway16
    },
    {
      id: 'takeaway-26',
      name: '26 oz Burrito Oval Bowl',
      capacity: '26 oz / 770 ml',
      dimensions: '236 × 169 × 40.6 mm',
      weight: '19 g',
      pcsPerCtn: 500,
      description: 'Heavy-duty oval burrito bowl. Perfect for loaded entrees, corporate meal packages, and substantial delivery mains.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway26
    },
    {
      id: 'takeaway-22',
      name: '22 oz Square Container',
      capacity: '22 oz / 650 ml',
      dimensions: '170 × 170 × 48 mm',
      weight: '20 g',
      pcsPerCtn: 900,
      description: 'Robust square delivery container. Ideal for main course pasta, warm noodles, and dense grain salads.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway22
    },
    {
      id: 'takeaway-32',
      name: '32 oz Rectangle Container',
      capacity: '32 oz / 950 ml',
      dimensions: '220 × 150 × 62 mm',
      weight: '21 g',
      pcsPerCtn: 500,
      description: 'Extra-deep rectangular delivery container. Engineered for large family sizes, catering platters, and bulk deliveries.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway32
    },
    {
      id: 'takeaway-24',
      name: '24 oz Bowl with Lid',
      capacity: '24 oz / 710 ml',
      dimensions: '230 × 230 × 42 mm',
      weight: '26 g',
      pcsPerCtn: 500,
      description: 'Classic round bowl bundled with a tight-locking matching sugarcane lid. Tailored for noodle soups, curries, and warm grain bowls.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway24
    },
    {
      id: 'takeaway-26-flat',
      name: '26 oz Flat Bowl with Lid',
      capacity: '26 oz / 770 ml',
      dimensions: '205 × 205 × 42 mm',
      weight: '25 g',
      pcsPerCtn: 500,
      description: 'Low-profile, wide flat bowl with a highly secure protective lid. Outstanding showcase for Poke bowls and gourmet salads.',
      heatResistance: 'Water & oil resistant up to 120°C, microwave and freezer safe',
      image: takeaway26Flat
    }
  ];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSuccess(true);
    setTimeout(() => {
      setSampleSuccess(false);
      setShowSampleForm(false);
      setSampleForm({ name: '', company: '', email: '', phone: '', notes: 'Please send physical sample packs of 16 oz Burrito Oval Bowls, 22 oz Square Containers, and 24 oz Bowls with Lids.' });
    }, 3000);
  };

  const getWhatsAppLink = (customText?: string) => {
    const text = customText || `Hello Namya EcoPack Export Team, I am interested in your Sugarcane Takeaway Packaging range (16 oz to 32 oz containers & bowls). Please share MOQ terms and FOB pricing coordinates to our region.`;
    return `https://wa.me/917041969067?text=${encodeURIComponent(text)}`;
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
              onClick={() => onOpenQuoteModal('takeaway')}
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-teal-900/10 flex items-center space-x-2"
            >
              <span>Get Bulk Quote</span>
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

        {/* Hero image frame */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-square bg-slate-100 shadow-xl border border-slate-200">
            <img 
              src={takeawayImg} 
              alt="Sugarcane Takeaway Containers" 
              className="object-cover w-full h-full transform hover:scale-103 duration-700 transition-all"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SKU Range Grid */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            PORTFOLIO SIZES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Premium Bagasse Takeaway Containers for Food Delivery
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Designed for modern food delivery, cloud kitchens, restaurants, cafés, meal prep businesses, and takeaway services. Our sugarcane bagasse takeaway containers provide excellent heat resistance, leak resistance, and food safety while offering a sustainable alternative to plastic packaging.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {takeawaySkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="w-full sm:w-[280px] h-[400px] flex flex-col justify-between bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* High-Resolution Takeaway Image */}
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
                      category="takeaway"
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
                    <span className="text-slate-400 font-medium">Size</span>
                    <span className="font-bold text-slate-800 text-right truncate max-w-[140px]">{sku.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Weight</span>
                    <span className="font-bold text-slate-800 text-right">{sku.weight}</span>
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

      {/* Quality Assurance section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest font-mono block">QUALITY GUARANTEE</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Quality Assurance</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            'Food Contact Safe',
            'Consistent Product Quality',
            'Hygienic Manufacturing',
            'Export Packaging Standards'
          ].map((text, idx) => (
            <div key={idx} className="p-4 bg-white border border-slate-150 rounded-2xl flex items-center space-x-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-800 leading-tight">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-teal-950 text-white rounded-3xl p-8 lg:p-12 text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-[10px] font-extrabold text-teal-300 uppercase tracking-widest font-mono block">PARTNER WITH NAMYA ECOPACK</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            Looking for Sustainable Food Packaging?
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-xl mx-auto">
            Whether you're a distributor, importer, wholesaler, restaurant chain, or food service brand, Namya EcoPack offers reliable manufacturing, consistent quality, and customized packaging solutions for global markets.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-teal-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center space-x-2"
            >
              <FileText className="w-4 h-4 text-teal-900" />
              <span>Request Catalogue</span>
            </a>

            <a
              href={getWhatsAppLink("Hello Namya EcoPack Export Team, I would like to contact your sales representative regarding your Sugarcane Takeaway range.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all border border-teal-600 shadow-md flex items-center space-x-2"
            >
              <span>Contact Sales</span>
            </a>
          </div>
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

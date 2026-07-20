import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, FileText, CheckCircle, HelpCircle, X, ChevronRight, ShieldCheck, Truck, Scale, Grid3X3 } from 'lucide-react';
import ProductVectorImage from './ProductVectorImage';

import platesImg from '../assets/images/plates.jpg';

// Import high-resolution plate images
import plate6 from '../assets/images/products/plates/6-inch.png';
import plate7 from '../assets/images/products/plates/7-inch.png';
import plate9 from '../assets/images/products/plates/9-inch.png';
import plate10 from '../assets/images/products/plates/10-inch.png';
import plate11 from '../assets/images/products/plates/11-inch.png';
import plate12 from '../assets/images/products/plates/12-inch.png';

// Import high-resolution compartment plate images
import comp9_3cp from '../assets/images/products/compartment-plates/9-3cp.png';
import comp10_3cp from '../assets/images/products/compartment-plates/10-3cp.png';
import comp11_4cp from '../assets/images/products/compartment-plates/11-4cp.png';
import comp12_4cp from '../assets/images/products/compartment-plates/12-4cp.png';

interface PlatesSKUViewProps {
  onOpenQuoteModal: (category?: string, productId?: string) => void;
  onBackToCatalog: () => void;
}

interface PlateSKU {
  id: string;
  name: string;
  sizeInch: string;
  sizeMm: string;
  weight: string;
  pcsPerCtn: number;
  description: string;
  heatResistance: string;
  image: string;
}

export default function PlatesSKUView({ onOpenQuoteModal, onBackToCatalog }: PlatesSKUViewProps) {
  const [selectedSku, setSelectedSku] = useState<PlateSKU | null>(null);
  const [showSampleForm, setShowSampleForm] = useState(false);
  const [sampleSuccess, setSampleSuccess] = useState(false);
  const [sampleForm, setSampleForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    notes: 'Please send samples of 6", 9", and 10" Round Plates.'
  });

  const plateSkus: PlateSKU[] = [
    {
      id: 'plate-6',
      name: '6" Round Plate',
      sizeInch: '6"',
      sizeMm: '150 mm',
      weight: '7 g',
      pcsPerCtn: 1000,
      description: 'Ideal size for appetizers, desserts, bread servings, and small portion snacks. Compact but robust structural rigidity.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate6
    },
    {
      id: 'plate-7',
      name: '7" Round Plate',
      sizeInch: '7"',
      sizeMm: '174 mm',
      weight: '8 g',
      pcsPerCtn: 1000,
      description: 'A versatile mid-sized plate perfect for side dishes, salads, pastries, and social cocktail events.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate7
    },
    {
      id: 'plate-9',
      name: '9" Round Plate',
      sizeInch: '9"',
      sizeMm: '225 mm',
      weight: '20 g',
      pcsPerCtn: 500,
      description: 'Our most popular lunch and dinner size. Engineered with reinforced mechanical ribs on the outer edge for high load carrying capacity.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate9
    },
    {
      id: 'plate-10',
      name: '10" Round Plate',
      sizeInch: '10"',
      sizeMm: '257 mm',
      weight: '20 g',
      pcsPerCtn: 500,
      description: 'Standard full-course dinner size. Perfect for catering, weddings, and premium buffet dining lines.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate10
    },
    {
      id: 'plate-11',
      name: '11" Round Plate',
      sizeInch: '11"',
      sizeMm: '280 mm',
      weight: '24 g',
      pcsPerCtn: 500,
      description: 'Generously-sized plate designed for large portion banquets, luxury main courses, and combo platter services.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate11
    },
    {
      id: 'plate-12',
      name: '12" Round Plate',
      sizeInch: '12"',
      sizeMm: '300 mm',
      weight: '26 g',
      pcsPerCtn: 500,
      description: 'The maximum standard round plate size. Excellent as a serving platter, pizza tray, or heavy-duty hotel banquet base.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: plate12
    }
  ];

  const compartmentPlateSkus: PlateSKU[] = [
    {
      id: 'plate-9-3cp',
      name: '9" 3CP Compartment Plate',
      sizeInch: '9"',
      sizeMm: '225 mm',
      weight: '15 g',
      pcsPerCtn: 500,
      description: 'Designed for efficient meal presentation, our compostable bagasse compartment plates keep food portions neatly separated while maintaining excellent strength and durability. Suitable for schools, hospitals, corporate cafeterias, catering companies, airline meal services, food courts, institutions, and large-scale foodservice operations. Manufactured from 100% sugarcane bagasse, these plates provide an eco-friendly alternative to plastic and foam without compromising performance.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: comp9_3cp
    },
    {
      id: 'plate-10-3cp',
      name: '10" 3CP Compartment Plate',
      sizeInch: '10"',
      sizeMm: '225 mm',
      weight: '20 g',
      pcsPerCtn: 500,
      description: 'Designed for efficient meal presentation, our compostable bagasse compartment plates keep food portions neatly separated while maintaining excellent strength and durability. Suitable for schools, hospitals, corporate cafeterias, catering companies, airline meal services, food courts, institutions, and large-scale foodservice operations. Manufactured from 100% sugarcane bagasse, these plates provide an eco-friendly alternative to plastic and foam without compromising performance.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: comp10_3cp
    },
    {
      id: 'plate-11-4cp',
      name: '11" 4CP Compartment Plate',
      sizeInch: '11"',
      sizeMm: '280 mm',
      weight: '24 g',
      pcsPerCtn: 500,
      description: 'Designed for efficient meal presentation, our compostable bagasse compartment plates keep food portions neatly separated while maintaining excellent strength and durability. Suitable for schools, hospitals, corporate cafeterias, catering companies, airline meal services, food courts, institutions, and large-scale foodservice operations. Manufactured from 100% sugarcane bagasse, these plates provide an eco-friendly alternative to plastic and foam without compromising performance.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: comp11_4cp
    },
    {
      id: 'plate-12-4cp',
      name: '12" 4CP Compartment Plate',
      sizeInch: '12"',
      sizeMm: '300 mm',
      weight: '26 g',
      pcsPerCtn: 500,
      description: 'Designed for efficient meal presentation, our compostable bagasse compartment plates keep food portions neatly separated while maintaining excellent strength and durability. Suitable for schools, hospitals, corporate cafeterias, catering companies, airline meal services, food courts, institutions, and large-scale foodservice operations. Manufactured from 100% sugarcane bagasse, these plates provide an eco-friendly alternative to plastic and foam without compromising performance.',
      heatResistance: 'Water resistant up to 100°C, Oil resistant up to 120°C',
      image: comp12_4cp
    }
  ];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleSuccess(true);
    setTimeout(() => {
      setSampleSuccess(false);
      setShowSampleForm(false);
      setSampleForm({ name: '', company: '', email: '', phone: '', notes: 'Please send samples of 6", 9", and 10" Round Plates.' });
    }, 3000);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Namya EcoPack Export Team, I am interested in your Sugarcane Plates range (6" to 12" Round Plates). Please share wholesale MOQ terms, B2B price lists, and container shipping schedules to our region.`;
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
          <span className="text-slate-800 font-semibold">Plates</span>
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
              10 SKUS • 6" TO 12" • 3CP / 4CP • SHIPS TO 30+ COUNTRIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Compostable bagasse plates, direct from the strategic supply network.
            </h1>
          </div>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Round plates 6" to 12" plus 3CP / 4CP compartment plates, molded from 100% sugarcane bagasse. These disposable, biodegradable plates are PFAS-free, microwave- and oven-safe to 220°C, and oil- and sauce-resistant. Shipped BRCGS Grade A certified to importers, major wholesale distributors, catering conglomerates, and airline dining partners across the USA, UK, EU and the Gulf.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3.5 pt-2">
            <button
              onClick={() => onOpenQuoteModal('plates')}
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-teal-950/10 transition-all flex items-center space-x-2"
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

        {/* High-quality generated image frame */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-square bg-slate-100 shadow-xl border border-slate-200">
            <img 
              src={platesImg} 
              alt="Sugarcane Bagasse Plates filled with delicious meals" 
              className="object-cover w-full h-full transform hover:scale-103 duration-700 transition-all"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20">
              <p className="text-[11px] font-mono font-bold text-teal-800 uppercase tracking-wider">Premium Eco Presentation</p>
              <p className="text-xs text-slate-600 mt-1 leading-tight">Sugarcane bagasse circular meal plates filled with vibrant delicacies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKU Range Grid */}
      <section className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            ROUND PLATES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Heavy-duty bagasse plates, six sizes from snack to dinner.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {plateSkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="w-full sm:w-[280px] h-[400px] flex flex-col justify-between bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* Real High-Resolution Plate Image */}
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
                      category="plates"
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
                    <span className="font-bold text-slate-800 text-right">{sku.sizeInch} • {sku.sizeMm}</span>
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

      {/* Compartment Plates Section */}
      <section className="space-y-8 pt-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            COMPARTMENT PLATES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Compartment Plates
          </h2>
          <p className="text-sm font-bold text-teal-800">
            Sustainable bagasse compartment plates designed for organized meal service.
          </p>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Designed for efficient meal presentation, our compostable bagasse compartment plates keep food portions neatly separated while maintaining excellent strength and durability. Suitable for schools, hospitals, corporate cafeterias, catering companies, airline meal services, food courts, institutions, and large-scale foodservice operations. Manufactured from 100% sugarcane bagasse, these plates provide an eco-friendly alternative to plastic and foam without compromising performance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {compartmentPlateSkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="w-full sm:w-[280px] h-[400px] flex flex-col justify-between bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* Real High-Resolution Plate Image */}
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
                      category="plates"
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
                    <span className="font-bold text-slate-800 text-right">{sku.sizeInch} • {sku.sizeMm}</span>
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
                      <span className="text-slate-500 font-medium">Nominal Diameter:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.sizeInch} ({selectedSku.sizeMm})</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Pulp Net Weight:</span>
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

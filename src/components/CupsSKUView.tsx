import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  FileText, 
  CheckCircle, 
  HelpCircle, 
  X, 
  ChevronRight, 
  Coffee, 
  ShieldCheck, 
  CupSoda, 
  Minimize, 
  Leaf, 
  Ban, 
  ThermometerSun, 
  Droplets, 
  Flame, 
  Sparkles, 
  Utensils, 
  Hotel, 
  Building2, 
  Store, 
  ChefHat, 
  Truck, 
  Award, 
  Star, 
  ThumbsUp, 
  Scale, 
  Zap, 
  Info 
} from 'lucide-react';
import ProductVectorImage from './ProductVectorImage';

const cupsImg = "/images/cups_lids.jpg";

// Import high-resolution cup and lid images
const cup4 = "/images/products/cups/cup_4oz.png";
const cup6 = "/images/products/cups/cup_6oz.png";
const cup8 = "/images/products/cups/cup_8oz.png";
const cup10 = "/images/products/cups/cup_10oz.png";
const cup12 = "/images/products/cups/cup_12oz.png";
const cup16 = "/images/products/cups/cup_16oz.png";
const lidFlat = "/images/products/cups/lid_flat.png";
const lidSip = "/images/products/cups/lid_sip.png";

interface CupsSKUViewProps {
  onOpenQuoteModal: (category?: string, productId?: string) => void;
  onBackToCatalog: () => void;
}

interface CupSKU {
  id: string;
  name: string;
  capacity: string;
  topDiameter: string;
  bottomDiameter: string;
  height: string;
  weight: string;
  matchingLid: string;
  cartonQty: string;
  description: string;
  features: string[];
  image?: string;
}

export default function CupsSKUView({ onOpenQuoteModal, onBackToCatalog }: CupsSKUViewProps) {
  const [selectedSku, setSelectedSku] = useState<CupSKU | null>(null);

  const cupSkus: CupSKU[] = [
    {
      id: 'cup-4',
      name: '4 oz Bagasse Cup',
      capacity: '4 oz (120 ml)',
      topDiameter: '62 mm',
      bottomDiameter: '45 mm',
      height: '60 mm',
      weight: '4.5g ± 0.3g',
      matchingLid: '62mm Flat Lid',
      cartonQty: '2,000 Pcs',
      description: 'Ideal size for espresso shots, beverage tasting menus, supermarket sampling campaigns, and small child servings.',
      features: ['Perfect for espresso & sampling', 'Naturally heat-shielded exterior', 'Zero plastic or wax coating'],
      image: cup4
    },
    {
      id: 'cup-6',
      name: '6 oz Bagasse Cup',
      capacity: '6 oz (180 ml)',
      topDiameter: '73 mm',
      bottomDiameter: '50 mm',
      height: '75 mm',
      weight: '6.5g ± 0.3g',
      matchingLid: '80mm Flat / Sip Lids',
      cartonQty: '1,000 Pcs',
      description: 'Mid-sized option tailored for small cappuccinos, flat whites, and herbal teas. Standard snug lid alignment.',
      features: ['Excellent for flat whites', 'Double-pressed structural strength', 'Rigid cup rim avoids collapse'],
      image: cup6
    },
    {
      id: 'cup-8',
      name: '8 oz Bagasse Cup',
      capacity: '8 oz (240 ml)',
      topDiameter: '80 mm',
      bottomDiameter: '55 mm',
      height: '90 mm',
      weight: '8.5g ± 0.4g',
      matchingLid: '80mm Flat / Sip Lids',
      cartonQty: '1,000 Pcs',
      description: 'The standard café size for flat whites, cappuccinos, and herbal teas. Heat-shielded exterior keeps hand comfortable.',
      features: ['B2B global café standard size', 'Comfortable matte outer grip', 'Provides great heat retention'],
      image: cup8
    },
    {
      id: 'cup-10',
      name: '10 oz Bagasse Cup',
      capacity: '10 oz (300 ml)',
      topDiameter: '90 mm',
      bottomDiameter: '58 mm',
      height: '95 mm',
      weight: '10.2g ± 0.4g',
      matchingLid: '90mm Flat / Sip Lids',
      cartonQty: '1,000 Pcs',
      description: 'Optimal size for specialty filter coffees, pour-overs, and medium hot lattes. Safe for high-heat liquids.',
      features: ['Specialty filter coffee favorite', 'High thermal insulation properties', 'Engineered to avoid soggy breakdown'],
      image: cup10
    },
    {
      id: 'cup-12',
      name: '12 oz Bagasse Cup',
      capacity: '12 oz (355 ml)',
      topDiameter: '90 mm',
      bottomDiameter: '58 mm',
      height: '110 mm',
      weight: '11.5g ± 0.4g',
      matchingLid: '90mm Flat / Sip Lids',
      cartonQty: '1,000 Pcs',
      description: 'Perfect large size for latte coffees, hot cocoas, and specialty hot drinks. Engineered with an extra thick rim for standard snug lid snap.',
      features: ['Specialty large latte standard', 'Snug leak-proof lid engagement', 'Rigid under heavy grip pressure'],
      image: cup12
    },
    {
      id: 'cup-16',
      name: '16 oz Bagasse Cup',
      capacity: '16 oz (475 ml)',
      topDiameter: '90 mm',
      bottomDiameter: '60 mm',
      height: '135 mm',
      weight: '14.0g ± 0.5g',
      matchingLid: '90mm Flat / Sip Lids',
      cartonQty: '1,000 Pcs',
      description: 'Tall takeaway specialty cup. Favored by corporate offices, quick service tea chains, and premium coffee roasters.',
      features: ['Tall coffee & cold brew specialty', 'Highly stable base structure', 'Great for dual hot or cold drinks'],
      image: cup16
    },
    {
      id: 'lid-flat-90',
      name: 'Flat Lid',
      capacity: 'N/A',
      topDiameter: '93 mm',
      bottomDiameter: 'N/A',
      height: '10 mm',
      weight: '3.2g ± 0.2g',
      matchingLid: 'Fits 10oz, 12oz & 16oz Cups',
      cartonQty: '1,000 Pcs',
      description: 'Flat organic sugarcane bagasse lid with steam ventilation pores. Seals tightly over 90mm cup rims to prevent any splashes.',
      features: ['Ventilation pores release steam', 'Snaps firmly around cup rim', 'Completely bio-degradable fibers'],
      image: lidFlat
    },
    {
      id: 'lid-sip-90',
      name: 'Sip Lid',
      capacity: 'N/A',
      topDiameter: '93 mm',
      bottomDiameter: 'N/A',
      height: '18 mm',
      weight: '3.5g ± 0.2g',
      matchingLid: 'Fits 10oz, 12oz & 16oz Cups',
      cartonQty: '1,000 Pcs',
      description: 'Sip-through elevated bagasse lid. Raised sip hole allows drinking hot coffee comfortably while traveling without removing the lid.',
      features: ['Ergonomic raised drinking lip', 'Double-lock secure groove snap', 'Resistant to hot condensation steam'],
      image: lidSip
    }
  ];

  const getWhatsAppLink = (messageText: string) => {
    return `https://wa.me/917041969067?text=${encodeURIComponent(messageText)}`;
  };

  const defaultWhatsappCatalogMessage = "Hello Namya EcoPack Export Team, I am interested in requesting your Sugarcane Cups & Lids Product Catalogue and B2B pricing model.";
  const defaultWhatsappQuoteMessage = "Hello Namya EcoPack Export Team, I am interested in placing an FCL container request for your Sugarcane Cups & Lids range. Please share a B2B proforma quote.";

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
          <span className="text-slate-800 font-semibold">Cups & Lids</span>
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
            <Coffee className="w-3.5 h-3.5" />
            <span>Premium B2B Export Grade</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Compostable Bagasse Cups & Lids
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            Premium food-grade beverage packaging manufactured from renewable sugarcane bagasse. Designed for hot and cold beverages, offering durability, sustainability, and export-quality performance for cafés, restaurants, hotels, catering, and food service businesses worldwide.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={getWhatsAppLink(defaultWhatsappCatalogMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-teal-800 border border-teal-200 hover:border-teal-300 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all flex items-center space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>Request Catalogue</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal('cups')}
              className="bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md shadow-teal-900/10 flex items-center space-x-2"
            >
              <span>Get a Quote</span>
            </button>
          </div>
        </div>

        {/* Hero image frame without overlays */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-square bg-slate-100 shadow-xl border border-slate-200">
            <img 
              src={cupsImg} 
              alt="Sugarcane Cups & Lids" 
              className="object-cover w-full h-full transform hover:scale-103 duration-700 transition-all"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About Bagasse Cups */}
      <section className="bg-[#FAF9F6] rounded-3xl p-8 lg:p-12 border border-slate-200/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest font-mono block">OUR MATERIAL SCIENCE</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Sustainable Beverage Packaging for Modern Food Service
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Namya EcoPack's compostable cups and lids are manufactured from renewable sugarcane bagasse, a natural agricultural by-product remaining after sugar extraction. Through advanced moulding technology, the fibres are transformed into durable, food-safe beverage packaging without relying on conventional plastics.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            These eco-friendly cups offer excellent strength, leak resistance, and thermal insulation while naturally decomposing after disposal under composting conditions. They are an ideal alternative to plastic and foam cups for environmentally conscious businesses seeking sustainable packaging solutions.
          </p>
        </div>
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-150/80 shadow-sm space-y-4">
          <h3 className="text-xs font-bold text-slate-900 uppercase font-mono tracking-wider">Hygienic Sourcing Blueprint</h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-center space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
              <span className="text-slate-600">Pure agricultural raw sugarcane pulp residue</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
              <span className="text-slate-600">Water and high pressure thermal press molding</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
              <span className="text-slate-600">No PFAS chemical additives used in the processing</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600"></div>
              <span className="text-slate-600">Strict UV sanitation before final hermetic bulk packing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-extrabold text-teal-700 uppercase tracking-widest font-mono block">PERFORMANCE CRITERIA</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Key Product Features</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: '100% Compostable', 
              desc: 'Made entirely from renewable sugarcane fibre and naturally compostable after use.',
              icon: Leaf 
            },
            { 
              title: 'Plastic Free', 
              desc: 'Contains no conventional plastic coatings, PE linings, or harmful chemical binders.',
              icon: Ban 
            },
            { 
              title: 'Hot & Cold Beverage Safe', 
              desc: 'Suitable for serving steaming coffee, warm tea, fresh juices, smoothies, and cold brews.',
              icon: ThermometerSun 
            },
            { 
              title: 'Leak Resistant', 
              desc: 'Designed with highly interlocking fibers to withstand liquids without losing structural integrity.',
              icon: Droplets 
            },
            { 
              title: 'Microwave & Freezer Safe', 
              desc: 'Highly suitable for rapid reheating operations and short-term temperature-controlled storage.',
              icon: Flame 
            },
            { 
              title: 'Food Grade Quality', 
              desc: 'Manufactured using strictly hygienic production processes approved for direct food contact.',
              icon: Sparkles 
            }
          ].map((feat, i) => {
            const IconComponent = feat.icon;
            return (
              <div key={i} className="p-6 bg-[#FBFBFA] border border-slate-200/60 rounded-2xl hover:border-teal-400 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SKU Range Grid */}
      <section className="space-y-8 pt-4">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest font-mono block">
            PORTFOLIO SIZES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Comprehensive Cups & Lids Selection
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our sugarcane bagasse cups and lids are engineered to B2B food service standards. They offer excellent structural rigidity, comfortable matte heat grip insulation, and a secure snap alignment fit.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cupSkus.map((sku) => {
            return (
              <div
                key={sku.id}
                onClick={() => setSelectedSku(sku)}
                className="w-full sm:w-[280px] h-[410px] flex flex-col justify-between bg-[#FBFBFA] border border-slate-200/80 rounded-2xl p-5 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group relative"
              >
                {/* Product Image on soft beige backdrop */}
                <div className="h-[180px] w-full rounded-xl bg-[#FAF9F6] flex items-center justify-center p-3 relative overflow-hidden border border-slate-100 shadow-inner mb-4 flex-shrink-0">
                  {sku.image ? (
                    <img
                      src={sku.image}
                      alt={sku.name}
                      className="max-h-full max-w-full rounded-lg object-contain select-none transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <ProductVectorImage
                      id={sku.id}
                      name={sku.name}
                      category="cups"
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
                    <span className="text-slate-400 font-medium">Capacity</span>
                    <span className="font-bold text-slate-800 text-right">{sku.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Dimensions</span>
                    <span className="font-bold text-slate-800 text-right truncate max-w-[130px]">{sku.topDiameter} × {sku.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Weight</span>
                    <span className="font-bold text-slate-800 text-right">{sku.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Pcs/Ctn</span>
                    <span className="font-bold text-slate-800 text-right">{sku.cartonQty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Compatible Lid</span>
                    <span className="font-bold text-teal-800 text-right truncate max-w-[120px]">{sku.matchingLid}</span>
                  </div>
                </div>

                {/* Link */}
                <div className="pt-3 mt-auto flex-shrink-0">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSku(sku);
                    }}
                    className="text-[10px] font-bold text-teal-700 flex items-center group-hover:translate-x-1 duration-200"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
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
            Looking for Sustainable Beverage Packaging?
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-xl mx-auto">
            Whether you're a distributor, importer, wholesaler, restaurant chain, or food service brand, Namya EcoPack offers reliable manufacturing, consistent quality, and customized packaging solutions for global markets.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={getWhatsAppLink(defaultWhatsappCatalogMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-teal-50 text-teal-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center space-x-2"
            >
              <FileText className="w-4 h-4 text-teal-900" />
              <span>Request Catalogue</span>
            </a>

            <a
              href={getWhatsAppLink("Hello Namya EcoPack Export Team, I would like to contact your sales representative regarding your Sugarcane Cups & Lids range.")}
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
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block font-sans">Technical Details</span>
                  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">B2B Product SKU:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.id.toUpperCase()}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Liquid Capacity:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.capacity}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Top Diameter:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.topDiameter}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Bottom Diameter:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.bottomDiameter}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Height Dimension:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.height}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Individual Net Weight:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.weight}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-slate-100 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Secondary Box Packing:</span>
                      <span className="font-bold text-slate-800 text-right">{selectedSku.cartonQty}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3 md:py-2 md:px-3">
                      <span className="text-slate-500 font-medium">Matching Lid Code:</span>
                      <span className="font-bold text-teal-800 text-right">{selectedSku.matchingLid}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block font-sans">Product Features</span>
                  <div className="space-y-1.5">
                    {selectedSku.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs">
                        <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span className="text-slate-600">{f}</span>
                      </div>
                    ))}
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
                  <button
                    onClick={() => {
                      setSelectedSku(null);
                      onOpenQuoteModal('cups', selectedSku.id);
                    }}
                    className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs p-3 rounded-xl transition-all"
                  >
                    Request Sample / FCL Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

import React, { useState, useMemo, useEffect } from 'react';
import { Search, SlidersHorizontal, Check, FileText, ChevronRight, X, Mail, ArrowRight, HelpCircle, LayoutGrid, List, Download, ArrowUpRight, PhoneCall, ZoomIn, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, products } from '../data/products';
import { Product } from '../types';

interface ProductCatalogProps {
  initialCategory: string;
  onOpenQuoteModal: (category?: string, productId?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onCategoryChange?: (catId: string) => void;
}

function parseProductSpecs(prod: Product) {
  let sizeLabel = '';
  const name = prod.name;
  
  const sizeMatch = name.match(/^(\d+(?:oz|")|\d+\s*ml)/i);
  if (sizeMatch) {
    sizeLabel = sizeMatch[1];
  } else if (name.includes('Burger')) {
    sizeLabel = '6"';
  } else if (name.includes('5-Compartment')) {
    sizeLabel = '5-Comp';
  } else if (name.includes('3-Compartment')) {
    sizeLabel = '3-Comp';
  } else if (name.includes('750ml')) {
    sizeLabel = '750ml';
  } else if (name.includes('500ml')) {
    sizeLabel = '500ml';
  } else {
    sizeLabel = 'Specs';
  }

  let sizeRowValue = prod.specs.dimensions;
  if (sizeLabel && prod.specs.dimensions) {
    const dim = prod.specs.dimensions;
    const mmMatch = dim.match(/(\d+)\s*mm/);
    if (mmMatch) {
      sizeRowValue = `${sizeLabel} • ${mmMatch[1]} mm`;
    }
  }

  let weightRowValue = prod.specs.weight;
  const weightMatch = weightRowValue.match(/^([\d.]+)\s*g/i);
  if (weightMatch) {
    weightRowValue = `${Math.round(parseFloat(weightMatch[1]))} g`;
  }

  let pcsCtnValue = prod.specs.qtyPerCarton;
  const pcsMatch = pcsCtnValue.match(/(\d+)/);
  if (pcsMatch) {
    pcsCtnValue = pcsMatch[1];
  }

  return {
    sizeLabel,
    sizeRowValue,
    weightRowValue,
    pcsCtnValue
  };
}

function ProductSchematic({ category, sizeLabel }: { category: string; sizeLabel: string }) {
  return (
    <div className="w-full h-full bg-[#f8fafc]/60 flex items-center justify-center relative select-none">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {category === 'plates' && (
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-26 h-26 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-dashed border-slate-200/50 flex items-center justify-center bg-gradient-to-b from-white to-slate-50/50" />
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'bowls' && (
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-26 h-26 rounded-full bg-white border-2 border-slate-200/80 shadow-md flex items-center justify-center overflow-hidden">
              <div className="w-18 h-18 rounded-full border border-slate-300/40 bg-slate-50 flex items-center justify-center shadow-inner">
                <div className="w-12 h-12 rounded-full border border-dashed border-slate-300" />
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'containers' && (
          <div className="relative flex items-center justify-center">
            <div className="w-38 h-28 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-28 h-20 rounded-xl bg-white border border-slate-200 shadow-md flex flex-col justify-between overflow-hidden p-0.5">
              <div className="h-[46%] rounded-t-lg bg-slate-50/50 border border-slate-100 flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-slate-300">LID</span>
              </div>
              <div className="border-t border-dashed border-slate-300 w-full" />
              <div className="h-[46%] rounded-b-lg bg-slate-50/50 border border-slate-100 flex items-center justify-center">
                <span className="text-[7px] font-mono font-bold text-slate-300">BASE</span>
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'trays' && (
          <div className="relative flex items-center justify-center">
            <div className="w-38 h-28 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-30 h-20 rounded-xl bg-white border border-slate-200 shadow-md p-1.5 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-1 h-full">
                <div className="col-span-2 rounded-md bg-slate-50 border border-slate-100 shadow-inner flex items-center justify-center">
                  <span className="text-[8px] font-mono font-bold text-slate-300">MAIN</span>
                </div>
                <div className="flex flex-col gap-1 h-full">
                  <div className="rounded-sm bg-slate-50 border border-slate-100 shadow-inner h-full" />
                  <div className="rounded-sm bg-slate-50 border border-slate-100 shadow-inner h-full" />
                </div>
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'cups' && (
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-dashed border-slate-300 flex items-center justify-center opacity-50" />
            <div className="absolute w-20 h-26 flex flex-col items-center justify-center">
              <div className="w-16 h-4 bg-white border border-slate-200 rounded-full shadow-sm z-10" />
              <div className="w-14 h-18 bg-gradient-to-b from-white to-slate-50 border-x border-b border-slate-200 rounded-b-lg shadow-md -mt-2 flex items-center justify-center">
                <div className="w-10 h-14 border-x border-dashed border-slate-200" />
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'takeaway' && (
          <div className="relative flex items-center justify-center">
            <div className="w-38 h-28 rounded-2xl border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-28 h-18 rounded-xl bg-white border border-slate-200 shadow-md p-1 flex flex-col justify-between overflow-hidden">
              <div className="w-full h-full rounded-lg border border-slate-200/60 bg-slate-50/50 flex items-center justify-center shadow-inner">
                <div className="w-[85%] h-[80%] border border-dashed border-slate-300 rounded-md" />
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}

        {category === 'custom' && (
          <div className="relative flex items-center justify-center">
            <div className="w-36 h-36 rounded-full border border-dashed border-slate-300 flex items-center justify-center opacity-60" />
            <div className="absolute w-24 h-24 rounded-lg bg-white border border-slate-200 shadow-md flex items-center justify-center rotate-45">
              <div className="w-16 h-16 rounded-md border border-dashed border-slate-300 flex items-center justify-center bg-slate-50 shadow-inner">
                <span className="text-[8px] font-mono font-bold text-slate-300 uppercase tracking-widest">CAD</span>
              </div>
            </div>
            <div className="absolute w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
              <span className="text-[10px] font-mono font-extrabold text-slate-500 tracking-tight">{sizeLabel}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductCatalog({
  initialCategory,
  onOpenQuoteModal,
  searchQuery,
  setSearchQuery,
  onCategoryChange
}: ProductCatalogProps) {
  const [selectedCat, setSelectedCat] = useState(initialCategory || 'all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  
  // Advanced Filter states
  const [selectedShape, setSelectedShape] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedCompartment, setSelectedCompartment] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);

  // Interaction logs
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Sample Request states
  const [sampleRequested, setSampleRequested] = useState(false);
  const [sampleForm, setSampleForm] = useState({ name: '', company: '', email: '', qty: '10' });

  // Sync category state with initialCategory if changed by navbar
  useEffect(() => {
    if (initialCategory) {
      setSelectedCat(initialCategory);
    }
  }, [initialCategory]);

  // Log recently viewed items when detail drawer is opened
  const handleOpenDetail = (prod: Product) => {
    setActiveProductDetail(prod);
    setSampleRequested(false);
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((p) => p.id !== prod.id);
      return [prod, ...filtered].slice(0, 4); // Keep last 4
    });
  };

  // Filter options derived from product specs & definitions
  const shapes = useMemo(() => ['all', 'Round', 'Square', 'Oval', 'Hinged', 'Rectangular', 'Custom'], []);
  const compartments = useMemo(() => ['all', '1-Compartment', '3-Compartment', '5-Compartment', 'Custom'], []);
  const collections = useMemo(() => ['all', 'Classic White', 'Organic Unbleached'], []);
  const applications = useMemo(() => [
    'all', 'Fine Dining', 'Fast Food', 'Aviation', 'Delivery', 'Beverages', 'Catering'
  ], []);

  // Filter evaluation logic
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category Match
      const matchCat = selectedCat === 'all' || p.category === selectedCat;
      
      // Text Search Match
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Shape Filter Match (extracted from name/dimensions/desc)
      const matchesShape = selectedShape === 'all' || 
                           p.name.toLowerCase().includes(selectedShape.toLowerCase()) ||
                           p.description.toLowerCase().includes(selectedShape.toLowerCase());

      // Compartments Match
      const matchesComp = selectedCompartment === 'all' || 
                          (selectedCompartment === '1-Compartment' && !p.name.includes('Compartment')) ||
                          (selectedCompartment === '3-Compartment' && p.name.includes('3-Compartment')) ||
                          (selectedCompartment === '5-Compartment' && p.name.includes('5-Compartment')) ||
                          (selectedCompartment === 'Custom' && p.category === 'custom');

      // Collection Match (bleached vs unbleached)
      const matchesCol = selectedCollection === 'all' || 
                         (selectedCollection === 'Classic White' && !p.specs.material.toLowerCase().includes('unbleached') && !p.specs.material.toLowerCase().includes('bleach-free')) ||
                         (selectedCollection === 'Organic Unbleached' && (p.specs.material.toLowerCase().includes('unbleached') || p.specs.material.toLowerCase().includes('bleach-free') || p.description.toLowerCase().includes('brown') || p.description.toLowerCase().includes('unbleached')));

      // Application Match
      const matchesApp = selectedApplication === 'all' || 
                         p.applications.some(app => app.toLowerCase().includes(selectedApplication.toLowerCase())) ||
                         p.description.toLowerCase().includes(selectedApplication.toLowerCase());

      return matchCat && matchSearch && matchesShape && matchesComp && matchesCol && matchesApp;
    });
  }, [selectedCat, searchQuery, selectedShape, selectedCompartment, selectedCollection, selectedApplication]);

  // Related products logic (items in same category)
  const relatedProducts = useMemo(() => {
    if (!activeProductDetail) return [];
    return products
      .filter((p) => p.category === activeProductDetail.category && p.id !== activeProductDetail.id)
      .slice(0, 3);
  }, [activeProductDetail]);

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSampleRequested(true);
    setTimeout(() => {
      setSampleRequested(false);
      setSampleForm({ name: '', company: '', email: '', qty: '10' });
    }, 4000);
  };

  // Automated Technical PDF download simulation
  const handleDownloadDatasheet = (prodId: string) => {
    setDownloadingId(prodId);
    setTimeout(() => {
      setDownloadingId(null);
      // Create transient anchor link
      const element = document.createElement("a");
      const file = new Blob([`NAMYA ECOPACK B2B SPEC SHEET\nPRODUCT ID: ${prodId}\nMATERIAL: 100% Sugarcane Bagasse Fiber\nCERTIFICATIONS: FDA, OK Compost, BRCGS AA Grade\nVisit www.namyaecopack.com for full technical laboratory testing certifications.`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `Namya_EcoPack_${prodId}_Datasheet.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1800);
  };

  // Pre-formatted B2B WhatsApp link
  const getWhatsAppLink = (productName: string) => {
    const text = `Hello Namya EcoPack Export Team, I am interested in requesting an FCL container quote and sample pack for: ${productName}. Please share MOQ terms and shipping transit schedules.`;
    return `https://wa.me/917041969067?text=${encodeURIComponent(text)}`; // Direct premium support desk
  };

  const handleResetFilters = () => {
    setSelectedCat('all');
    setSearchQuery('');
    setSelectedShape('all');
    setSelectedSize('all');
    setSelectedCompartment('all');
    setSelectedApplication('all');
    setSelectedCollection('all');
  };

  return (
    <div id="product-catalog" className="space-y-8 text-slate-800">
      
      {/* Header and Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm">
        
        {/* Category Filters Carousel (Horizontal) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none flex-grow max-w-full">
          <button
            onClick={() => { setSelectedCat('all'); onCategoryChange?.('all'); }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
              selectedCat === 'all' 
                ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            All Collections
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCat(cat.id); onCategoryChange?.(cat.id); }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCat === cat.id 
                  ? 'bg-teal-700 text-white shadow-md shadow-teal-700/10' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* View Mode & Filter Toggles */}
        <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
          
          {/* List/Grid View toggler */}
          <div className="hidden sm:flex bg-white rounded-xl border border-slate-200 p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-teal-50 text-teal-700' : 'text-slate-400 hover:text-slate-600'}`}
              title="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-teal-50 text-teal-700' : 'text-slate-400 hover:text-slate-600'}`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Search */}
          <div className="flex bg-white rounded-xl border border-slate-200 px-3 py-2 items-center w-full sm:max-w-[200px]">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search specifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs text-slate-800 bg-transparent outline-none w-full font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600">
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Filters Toggle for mobile */}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="lg:hidden flex items-center space-x-1 bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Sidebar Filters Panel */}
        <aside className={`lg:block ${showMobileFilters ? 'block' : 'hidden'} lg:col-span-1 space-y-6 bg-slate-50/60 p-6 rounded-2xl border border-slate-100`}>
          <div className="flex justify-between items-center pb-4 border-b border-slate-200">
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-teal-700" />
              <span>B2B Spec Filters</span>
            </h3>
            <button 
              onClick={handleResetFilters}
              className="text-[11px] font-bold text-teal-700 hover:underline"
            >
              Reset All
            </button>
          </div>

          {/* Shape Filter */}
          <div className="space-y-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Profile Shape</label>
            <div className="grid grid-cols-2 gap-1.5">
              {shapes.map((shape) => (
                <button
                  key={shape}
                  onClick={() => setSelectedShape(shape)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all ${
                    selectedShape === shape 
                      ? 'bg-teal-50 text-teal-800 border border-teal-200' 
                      : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                  }`}
                >
                  {shape === 'all' ? 'All Shapes' : shape}
                </button>
              ))}
            </div>
          </div>

          {/* Compartments Filter */}
          <div className="space-y-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Compartment layout</label>
            <div className="flex flex-col space-y-1">
              {compartments.map((comp) => (
                <button
                  key={comp}
                  onClick={() => setSelectedCompartment(comp)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold ${
                    selectedCompartment === comp 
                      ? 'bg-teal-50 text-teal-800 font-bold' 
                      : 'text-slate-600 hover:bg-slate-50/80'
                  }`}
                >
                  <span>{comp === 'all' ? 'All Divisions' : comp}</span>
                  {selectedCompartment === comp && <Check className="w-3.5 h-3.5 text-teal-700" />}
                </button>
              ))}
            </div>
          </div>

          {/* Material Collection */}
          <div className="space-y-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Organic Collection</label>
            <div className="flex flex-col space-y-1">
              {collections.map((col) => (
                <button
                  key={col}
                  onClick={() => setSelectedCollection(col)}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold ${
                    selectedCollection === col 
                      ? 'bg-teal-50 text-teal-800 font-bold' 
                      : 'text-slate-600 hover:bg-slate-50/80'
                  }`}
                >
                  <span>{col === 'all' ? 'All Finishes' : col}</span>
                  {selectedCollection === col && <Check className="w-3.5 h-3.5 text-teal-700" />}
                </button>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="space-y-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Industry Application</label>
            <div className="flex flex-wrap gap-1.5">
              {applications.map((app) => (
                <button
                  key={app}
                  onClick={() => setSelectedApplication(app)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                    selectedApplication === app 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white hover:bg-slate-100 text-slate-500 border border-slate-200'
                  }`}
                >
                  {app === 'all' ? 'All Uses' : app}
                </button>
              ))}
            </div>
          </div>

          {/* Mini B2B Trust Badge */}
          <div className="bg-gradient-to-br from-teal-900 to-emerald-950 p-4 rounded-xl text-white space-y-2 shadow-inner">
            <h5 className="text-xs font-bold tracking-tight">Need custom dimensions?</h5>
            <p className="text-[10px] text-teal-200 leading-relaxed">
              We engineer custom molds and structural bottom-stamp branding for 100K+ FCL order runs.
            </p>
            <button 
              onClick={onOpenQuoteModal}
              className="text-[10px] font-extrabold text-white uppercase tracking-wider flex items-center space-x-1 hover:underline pt-1"
            >
              <span>Launch OEM Inquiry</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </aside>

        {/* Main Products Grid & List Content */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100 space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-slate-800">No matching SKU specifications found</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No standard items match your exact combination of profile shape, compartments, and unbleached options. Let us source and customize it for you.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Clear Filters
                </button>
                <button
                  onClick={onOpenQuoteModal}
                  className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-xl text-xs font-bold"
                >
                  Consult Custom OEM Mold
                </button>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            /* Reference-Image Aligned Spec Sheets Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {filteredProducts.map((prod) => {
                const specData = parseProductSpecs(prod);
                return (
                  <motion.div
                    layout
                    key={prod.id}
                    onClick={() => handleOpenDetail(prod)}
                    className="bg-white border border-slate-200/85 rounded-[28px] p-3 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group"
                  >
                    {/* Centered Graphic Area */}
                    <div className="aspect-[4/3.4] rounded-2xl overflow-hidden bg-slate-50 relative border border-slate-100">
                      {/* Dynamic high-precision blueprint schematic */}
                      <ProductSchematic category={prod.category} sizeLabel={specData.sizeLabel} />
                    </div>

                    {/* Specifications Details Area */}
                    <div className="mt-4 px-2 pb-2 flex-grow flex flex-col justify-between">
                      <div className="space-y-4">
                        {/* Bold Uppercase Product Name */}
                        <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-tight leading-snug group-hover:text-teal-700 transition-colors duration-200 line-clamp-1">
                          {prod.name.replace(' Premium Bagasse', '').replace(' Heavy-Duty Bagasse', '').replace(' Modernist Bagasse', '').replace(' Premium', '')}
                        </h4>

                        {/* Aligned Key-Value Specs Rows */}
                        <div className="space-y-2 text-xs sm:text-[13px] border-b border-slate-100 pb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 font-semibold">Size</span>
                            <span className="text-slate-800 font-black">{specData.sizeRowValue}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 font-semibold">Weight</span>
                            <span className="text-slate-800 font-black">{specData.weightRowValue}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-400 font-semibold">Pcs/Ctn</span>
                            <span className="text-slate-800 font-black">{specData.pcsCtnValue}</span>
                          </div>
                        </div>
                      </div>

                      {/* Footer Action Link with chevron */}
                      <div className="pt-3 flex items-center space-x-1 text-xs font-extrabold text-teal-800 group-hover:text-teal-600 transition-colors duration-200">
                        <span>View Technical specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* Premium List / Table Row View */
            <div className="space-y-3">
              <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-2.5 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono bg-slate-50 rounded-xl border border-slate-100">
                <span className="col-span-4">Product Name / Model</span>
                <span className="col-span-3">Pulp Material Compound</span>
                <span className="col-span-3">Spec Dimensions</span>
                <span className="col-span-2 text-right">Packaging Size</span>
              </div>
              
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleOpenDetail(prod)}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-teal-400 hover:shadow-md cursor-pointer transition-all duration-200 group"
                >
                  <div className="col-span-1 sm:col-span-4 flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 overflow-hidden flex-shrink-0 border border-slate-100 flex items-center justify-center p-0.5">
                      <img src={prod.image} alt="" className="object-contain w-full h-full" loading="lazy" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-tight line-clamp-1">{prod.name}</h5>
                      <span className="text-[9px] font-mono text-slate-400 uppercase">{categories.find(c => c.id === prod.category)?.name}</span>
                    </div>
                  </div>

                  <div className="col-span-1 sm:col-span-3 text-xs text-slate-600 truncate">
                    {prod.specs.material}
                  </div>

                  <div className="col-span-1 sm:col-span-3 text-xs font-mono text-slate-600 truncate">
                    {prod.specs.dimensions}
                  </div>

                  <div className="col-span-1 sm:col-span-2 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 sm:text-slate-800 font-bold text-right w-full pr-4">{prod.specs.qtyPerCarton}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-700 group-hover:translate-x-1 duration-200 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

      </div>

      {/* Product Detail Drawer Panel Overlay */}
      <AnimatePresence>
        {activeProductDetail && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-end z-50 p-0 sm:p-4">
            
            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => setActiveProductDetail(null)} />

            <motion.div
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 500, opacity: 0 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative bg-white w-full max-w-2xl h-full sm:h-[95vh] sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col justify-between z-10 border border-slate-100"
            >
              {/* Close Button Header */}
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50 sticky top-0 z-20 backdrop-blur-md">
                <div className="leading-tight">
                  <h3 className="text-base font-extrabold text-slate-900 truncate max-w-sm">{activeProductDetail.name}</h3>
                  <p className="text-[10px] text-teal-700 font-mono font-bold uppercase mt-0.5">B2B technical datasheet</p>
                </div>
                <button
                  onClick={() => setActiveProductDetail(null)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main specifications */}
              <div className="p-6 sm:p-8 space-y-8 flex-grow">
                
                {/* Images & brief description */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                  
                  {/* Thumbnail and Lightbox trigger */}
                  <div className="space-y-2">
                    <div 
                      onClick={() => setLightboxImage(activeProductDetail.image)}
                      className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 shadow-inner group/zoom cursor-zoom-in border border-slate-200"
                    >
                      <img
                        src={activeProductDetail.image}
                        alt={activeProductDetail.name}
                        className="object-contain w-full h-full p-2 transform group-hover/zoom:scale-105 duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/zoom:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                    <p className="text-center text-[10px] font-bold text-slate-400 flex items-center justify-center space-x-1 font-mono">
                      <span>Click to view full scale HD photo</span>
                    </p>
                  </div>

                  {/* Profile info & active tools */}
                  <div className="space-y-4">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">Product Profile</span>
                    <h4 className="text-lg font-bold text-slate-950 leading-tight">{activeProductDetail.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{activeProductDetail.description}</p>
                    
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 text-[11px] leading-relaxed text-teal-900">
                      <strong>Minimum Order Quantity (MOQ):</strong> 1 x 20ft Mixed Container or 100,000 Units per customized bottom-embossed mold run.
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <button
                        onClick={() => handleDownloadDatasheet(activeProductDetail.id)}
                        disabled={downloadingId !== null}
                        className="flex-1 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-200 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>{downloadingId ? "Preparing CAD File..." : "Download CAD Specs"}</span>
                      </button>
                      <button
                        onClick={() => { onOpenQuoteModal(activeProductDetail.category, activeProductDetail.id); setActiveProductDetail(null); }}
                        className="flex-1 bg-teal-700 hover:bg-teal-800 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center"
                      >
                        Request container Quote
                      </button>
                    </div>

                    {/* FCL WhatsApp CTA desk */}
                    <a
                      href={getWhatsAppLink(activeProductDetail.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        className="w-4 h-4 fill-white"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      <span>Inquire via WhatsApp Desk</span>
                    </a>
                  </div>
                </div>

                {/* Technical Specifications Table */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">B2B Material Composition Specs</h4>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden text-xs">
                    {[
                      { label: 'Chemical Integrity Compound:', value: '100% PFAS-Free, Bleach-Free crop bagasse' },
                      { label: 'Standard Dimensions:', value: activeProductDetail.specs.dimensions },
                      { label: 'Pulp Unit Net Weight:', value: activeProductDetail.specs.weight },
                      { label: 'Primary Bag Packing Size:', value: activeProductDetail.specs.qtyPerPack },
                      { label: 'Secondary Export Box Size:', value: activeProductDetail.specs.qtyPerCarton },
                      { label: 'Molded Fiber Density:', value: activeProductDetail.specs.material },
                      { label: 'Seaworthy Carton Wrap:', value: activeProductDetail.specs.packingDetails }
                    ].map((row, idx) => (
                      <div key={idx} className="grid grid-cols-5 border-b border-slate-200 p-3 items-center">
                        <span className="col-span-2 text-slate-500 font-medium">{row.label}</span>
                        <span className="col-span-3 font-bold text-slate-800 font-mono text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-2.5">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Premium Product Capabilities</h5>
                    <ul className="space-y-1.5">
                      {activeProductDetail.features.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start">
                          <span className="text-emerald-500 mr-2 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2.5">
                    <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Intended Markets</h5>
                    <ul className="space-y-1.5">
                      {activeProductDetail.applications.map((app, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start">
                          <span className="text-teal-600 mr-2 font-extrabold">■</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dynamic Related Products Panel */}
                {relatedProducts.length > 0 && (
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Related Catalog Items</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {relatedProducts.map((rel) => (
                        <div
                          key={rel.id}
                          onClick={() => { handleOpenDetail(rel); }}
                          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl p-3 cursor-pointer text-center space-y-2 transition-colors"
                        >
                          <div className="aspect-video rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center p-1">
                            <img src={rel.image} alt="" className="object-contain w-full h-full" loading="lazy" />
                          </div>
                          <p className="text-[10px] font-bold text-slate-800 truncate leading-tight">{rel.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Free sample request form */}
                <div className="bg-slate-950 text-white rounded-2xl p-6 space-y-4 relative overflow-hidden mt-6 shadow-xl">
                  <h4 className="text-sm font-bold tracking-tight">Need physical specs validation? Order Samples</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    We supply complimentary 10-piece packaging test packs to verified wholesale distributors, hotels, and airline procurement directors worldwide.
                  </p>
                  
                  {sampleRequested ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-xs text-emerald-300 bg-emerald-950/40 p-4 rounded-xl border border-emerald-900/40 text-center font-semibold"
                    >
                      ✓ Sample request logged successfully. Our shipping team will contact you to coordinate FedEx/DHL collection details.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSampleSubmit} className="space-y-3 text-slate-800">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={sampleForm.name}
                          onChange={(e) => setSampleForm({ ...sampleForm, name: e.target.value })}
                          className="bg-white border border-slate-700 rounded-lg p-2.5 text-xs outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Company Name"
                          value={sampleForm.company}
                          onChange={(e) => setSampleForm({ ...sampleForm, company: e.target.value })}
                          className="bg-white border border-slate-700 rounded-lg p-2.5 text-xs outline-none focus:ring-2 focus:ring-teal-500"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          type="email"
                          required
                          placeholder="Email Address"
                          value={sampleForm.email}
                          onChange={(e) => setSampleForm({ ...sampleForm, email: e.target.value })}
                          className="bg-white border border-slate-700 rounded-lg p-2.5 text-xs outline-none col-span-2 focus:ring-2 focus:ring-teal-500"
                        />
                        <select
                          value={sampleForm.qty}
                          onChange={(e) => setSampleForm({ ...sampleForm, qty: e.target.value })}
                          className="bg-white border border-slate-700 rounded-lg p-2.5 text-xs outline-none text-slate-600 focus:ring-2 focus:ring-teal-500"
                        >
                          <option value="5">5 Pcs</option>
                          <option value="10">10 Pcs</option>
                          <option value="20">20 Pcs</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-500 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-teal-700/10"
                      >
                        Request Complimentary Spec Sample Pack
                      </button>
                    </form>
                  )}
                </div>

                {/* Recently viewed products row */}
                {recentlyViewed.length > 1 && (
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Recently Visited Spec Sheets</h4>
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {recentlyViewed.filter(p => p.id !== activeProductDetail.id).map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setActiveProductDetail(p)}
                          className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 flex items-center space-x-2 cursor-pointer flex-shrink-0 text-xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-slate-400" />
                          <span className="font-semibold text-slate-700">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox full-screen photo zoom modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div 
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-55 cursor-zoom-out p-4"
          >
            <button 
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightboxImage}
              alt="High Definition Product Presentation"
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

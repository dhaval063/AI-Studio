/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Thermometer, Ban, Shield, Utensils, Layers, Globe, Sprout, Droplets } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ContactSection from './components/ContactSection';
import ExportMap from './components/ExportMap';
import ExtraPages from './components/ExtraPages';
import Footer from './components/Footer';
import SustainabilityInfo from './components/SustainabilityInfo';
import QuoteRequestModal from './components/QuoteRequestModal';
import Popups from './components/Popups';
import PlatesSKUView from './components/PlatesSKUView';
import BowlsSKUView from './components/BowlsSKUView';
import ContainersSKUView from './components/ContainersSKUView';
import TraysSKUView from './components/TraysSKUView';
import CupsSKUView from './components/CupsSKUView';
import TakeawaySKUView from './components/TakeawaySKUView';
import { categories, testimonials } from './data/products';

import platesImg from './assets/images/sugarcane_compartment_plate_1784290569010.jpg';
import bowlsImg from './assets/images/sugarcane_salad_bowls_1784290587244.jpg';
import containersImg from './assets/images/sugarcane_clamshell_box_1784290602529.jpg';
import traysImg from './assets/images/sugarcane_5comp_tray_1784290621851.jpg';
import cupsImg from './assets/images/sugarcane_hot_cup_1784290638862.jpg';
import cutleryImg from './assets/images/compostable_cutlery_set_1784290659429.jpg';

const homeCategories = [
  {
    id: 'plates',
    name: 'Plates',
    skus: '12 SKUs',
    description: 'Round • Oval • Square • Compartment',
    image: platesImg
  },
  {
    id: 'bowls',
    name: 'Bowls',
    skus: '9 SKUs',
    description: 'Soup, salad & serving bowls',
    image: bowlsImg
  },
  {
    id: 'containers',
    name: 'Containers',
    skus: '18 SKUs',
    description: 'Clamshells • Burger & lunch boxes',
    image: containersImg
  },
  {
    id: 'trays',
    name: 'Meal Trays',
    skus: '8 SKUs',
    description: 'Compartment trays for airlines & kitchens',
    image: traysImg
  },
  {
    id: 'cups',
    name: 'Cups & Lids',
    skus: '11 SKUs',
    description: 'Hot & cold, single & double wall',
    image: cupsImg
  },
  {
    id: 'takeaway',
    name: 'Takeaway Packaging',
    skus: '5 SKUs',
    description: 'Compostable rectangular containers & lids',
    image: containersImg
  }
];

const whyChooseUsFeatures = [
  {
    title: "100% Compostable",
    body: "Made from renewable sugarcane bagasse and naturally composts after disposal without leaving harmful residues.",
    tagline: "CERTIFIED COMPOSTABLE",
    icon: Sprout,
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100/60 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
  },
  {
    title: "Leak & Oil Resistant",
    body: "Designed to handle hot, oily and liquid foods without soaking, leaking or losing strength.",
    tagline: "RELIABLE PERFORMANCE",
    icon: ShieldCheck,
    colorClass: "bg-sky-50 text-sky-600 border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600"
  },
  {
    title: "Microwave & Freezer Safe",
    body: "Suitable for both hot and cold food applications while maintaining excellent structural integrity.",
    tagline: "HOT & COLD READY",
    icon: Thermometer,
    colorClass: "bg-amber-50 text-amber-600 border-amber-100/60 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600"
  },
  {
    title: "Plastic-Free",
    body: "Free from plastic lining, PFAS and harmful chemicals for safer food packaging.",
    tagline: "PFAS & PLA FREE",
    icon: Ban,
    colorClass: "bg-rose-50 text-rose-600 border-rose-100/60 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600"
  },
  {
    title: "Strong & Durable",
    body: "Rigid construction offers excellent strength for takeaway, catering and food service applications.",
    tagline: "HEAVY-DUTY DESIGN",
    icon: Shield,
    colorClass: "bg-slate-50 text-slate-700 border-slate-200/60 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800"
  },
  {
    title: "Food Contact Safe",
    body: "Produced using food-grade materials suitable for direct contact with hot and cold foods.",
    tagline: "FOOD GRADE CERTIFIED",
    icon: Utensils,
    colorClass: "bg-teal-50 text-teal-600 border-teal-100/60 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600"
  },
  {
    title: "Lightweight & Stackable",
    body: "Optimized for efficient storage, transportation and lower logistics costs without compromising quality.",
    tagline: "LOGISTICS OPTIMIZED",
    icon: Layers,
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100/60 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"
  },
  {
    title: "Export Ready",
    body: "Designed for international buyers with reliable quality, bulk availability and export-friendly packaging.",
    tagline: "WORLDWIDE SUPPLY",
    icon: Globe,
    colorClass: "bg-violet-50 text-violet-600 border-violet-100/60 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600"
  }
];


export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);

  // Smooth scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setCurrentPage('products');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setCurrentPage('products');
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-14 pb-14">
            {/* Cinematic Hero Segment */}
            <Hero 
              setCurrentPage={setCurrentPage} 
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)} 
            />
            
            {/* Organic Product Categories Overview Grid */}
            <section id="home-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Our Renewable Offerings</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Compostable Solutions for Every Food Type
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Engineered with robust physical integrity, oil-soak proof water-resistance, and custom mechanical support ribs to replace plastic seamlessly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {homeCategories.map((cat) => (
                  <div 
                    id={`category-card-${cat.id}`}
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="bg-white border border-slate-200/70 rounded-[28px] p-3 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                  >
                    <div className="aspect-[4/3.8] rounded-2xl overflow-hidden bg-slate-50 relative">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-4 px-2 pb-2 flex justify-between items-end">
                      <div className="space-y-1 pr-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-widest leading-none">{cat.skus}</span>
                        <h4 className="text-lg font-bold text-slate-900 leading-none group-hover:text-teal-700 transition-colors">{cat.name}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight pt-1">{cat.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-teal-700 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Namya EcoPack Section */}
            <section id="home-why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 mb-16 text-left">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">
                  WHY CHOOSE NAMYA ECOPACK
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
                  Why international buyers choose <span className="text-teal-700 italic font-serif font-medium">Namya EcoPack.</span>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-3xl leading-relaxed">
                  Premium compostable food packaging designed for performance, sustainability and reliable global supply.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUsFeatures.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-200/60 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-lg hover:border-teal-300/80 transition-all duration-300 group"
                    >
                      <div className="space-y-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border ${feat.colorClass || "bg-teal-50/70 border-teal-100/50 text-teal-600"}`}>
                          <IconComponent className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900 tracking-tight">{feat.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.body}</p>
                      </div>
                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center">
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-mono group-hover:text-teal-700 transition-colors">{feat.tagline}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Interactive ESG Impact offsets Block */}
            <section id="home-sustainability" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Environmental Metrics</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  A High-Impact Circular Alternative
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Switching to agricultural sugarcane bagasse immediately prevents deforestation and offsets high-volume plastic waste.
                </p>
              </div>
              <SustainabilityInfo />
            </section>

            {/* Client Testimonials Carousel Section */}
            <section id="home-testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Global Corporate Trust</span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Our Partners Say</h2>
                <p className="text-slate-500 text-xs sm:text-sm">Feedback from high-volume importers, airlines, and hospitality procurement divisions across North America, Europe, and Australia.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t) => (
                  <div 
                    id={`testimonial-card-${t.id}`}
                    key={t.id} 
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex space-x-1 text-amber-500 text-sm">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">"{t.text}"</p>
                    </div>
                    <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-slate-50">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-10 h-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-[11px] leading-tight">
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-slate-400 mt-0.5">{t.role}</p>
                        <p className="text-teal-700 font-medium mt-0.5">{t.company} ({t.country})</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Direct Contact trade questionnaire */}
            <section id="home-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-100">
              <ContactSection />
            </section>
          </div>
        );
      case 'products':
        if (selectedCategory === 'plates' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <PlatesSKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'bowls' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <BowlsSKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'containers' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <ContainersSKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'trays' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <TraysSKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'cups' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <CupsSKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'takeaway' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
              <TakeawaySKUView 
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">B2B Spec Sheet Catalog</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Explore Our Sustainable Tableware Range
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our 100% compostable plates, bowls, trays, and takeaway clamshell boxes are certified for high-heat food service.
              </p>
            </div>
            <ProductCatalog 
              initialCategory={selectedCategory} 
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onCategoryChange={handleSelectCategory}
            />
          </div>
        );
      case 'manufacturing':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Gujarat Automated Sourcing Facility</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Advanced Automated Sourcing & Supply
              </h2>
            </div>
            <SustainabilityInfo />
          </div>
        );
      case 'exports':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Ocean Freight Cargo Channels</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Worldwide Seaworthy Logistics
              </h2>
            </div>
            <ExportMap />
          </div>
        );
      case 'sustainability':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Verified LCA Statistics</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Sustainably Sourced, Swift Composting
              </h2>
            </div>
            <SustainabilityInfo />
          </div>
        );
      case 'about':
      case 'oem':
      case 'privatelabel':
      case 'faq':
      case 'blog':
      case 'certificates':
        return <ExtraPages pageId={currentPage} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      default:
        return (
          <div className="text-center py-32 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Page not found</h2>
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-teal-700 font-bold hover:underline"
            >
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col justify-between">
      {/* Dynamic Header */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Viewport */}
      <main id="app-main-content" className="flex-grow pt-16">
        {renderPageContent()}
      </main>

      {/* Footer Branding Columns */}
      <Footer 
        setCurrentPage={setCurrentPage}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Interactive Global Cargo Pricing Overlay */}
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Promotional Popups, WhatsApp CTA desk and ribbon offsets */}
      <Popups 
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

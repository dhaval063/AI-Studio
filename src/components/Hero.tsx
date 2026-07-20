import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, ChevronLeft, ChevronRight, Globe, ShieldCheck, Factory, Award, CheckCircle2, Star, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const hero1Img = "/images/hero/hero_1.png";
const hero2Img = "/images/hero/hero_2.png";
const hero3Img = "/images/hero/hero_3.png";
const hero4Img = "/images/hero/hero_4.png";

interface HeroProps {
  setCurrentPage: (page: string) => void;
  onOpenQuoteModal: () => void;
}

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  category: string;
  stats: string;
}

export default function Hero({ setCurrentPage, onOpenQuoteModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Mouse move state for cursor-following light trail
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      title: "Good for Business. Great for Earth.",
      subtitle: "Sustainable Packaging Solutions",
      description: "Premium compostable tableware solutions that elevate your brand and protect our planet.",
      image: hero1Img,
      badge: "Premium Quality",
      category: "plates",
      stats: "100% Compostable"
    },
    {
      title: "Perfect for Every Meal.",
      subtitle: "Strong & Reliable Tableware",
      description: "Microwave safe, freezer safe, and leak resistant multi-compartment containers.",
      image: hero2Img,
      badge: "Microwave Safe",
      category: "trays",
      stats: "Leak Resistant"
    },
    {
      title: "Small Choices. Big Impact.",
      subtitle: "Responsible by Nature",
      description: "Compostable packaging that reduces waste and builds a greener future.",
      image: hero3Img,
      badge: "Eco Friendly",
      category: "bowls",
      stats: "Home Compostable"
    },
    {
      title: "Better Packaging. Better Planet.",
      subtitle: "Sugarcane Bagasse Products",
      description: "Eco-friendly bagasse tableware made from 100% natural sugarcane fiber.",
      image: hero4Img,
      badge: "Food Safe",
      category: "cups",
      stats: "Zero PE Coatings"
    }
  ];

  // Auto slide loop
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handle mouse coordinates for desk lamp/spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleExplore = () => {
    setCurrentPage('products');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Stats counter values
  const stats = [
    { value: '1.5M+', label: 'Daily Pulp Supply Capacity', icon: Factory },
    { value: '28+', label: 'Global Sovereign Export Nations', icon: Globe },
    { value: '450+', label: 'Annual Plastic Tons Offset', icon: ShieldCheck },
    { value: '120k', label: 'Sq.Ft. Sourcing Logistics Network', icon: Award }
  ];

  const clientsList = [
    'QSR Food Chains', 'International Airlines', 'B2B Importers', 'Hotel Groups',
    'Wholesalers', 'Cloud Kitchens', 'Organic Cafés', 'Retail Supermarkets'
  ];

  return (
    <div 
      id="hero-section"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative bg-white pt-12 pb-12 overflow-hidden select-none"
    >
      {/* Preload first critical hero banner image */}
      <link rel="preload" as="image" href={hero1Img} />
      {/* Desktop Cursor Glow Highlight */}
      <div 
        id="cursor-glowing-trail"
        className="absolute inset-0 pointer-events-none hidden lg:block z-0"
        style={{
          background: `radial-gradient(circle 350px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.08) 0%, transparent 80%)`
        }}
      />

      {/* Editorial Decorative grid lines & background */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-slate-50/50 rounded-l-[100px] z-0 hidden lg:block border-l border-slate-100" />
      
      {/* Absolute floating items for parallax feel */}
      <div className="absolute top-[15%] left-[5%] w-12 h-12 bg-teal-500/5 rounded-full blur-sm animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[45%] w-16 h-16 bg-emerald-500/5 rounded-full blur-sm animate-float-medium pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">
          
          {/* Headline Column */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left flex flex-col justify-center">
            <div className="space-y-4">
              
              {/* Quality Label */}
              <div className="inline-flex items-center space-x-2 bg-teal-50 text-teal-800 px-4 py-2 rounded-full border border-teal-100/50 text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                </span>
                <span>Premium Sugarcane Bagasse Supplier</span>
              </div>

              {/* Master Typography Heading with elegant text animation */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
                Sustainable Packaging. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-emerald-600">Built for Global Business.</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Premium-grade biodegradable and compostable food service tableware sourced from organic sugarcane fibers. Crafted with Scandinavian elegance for restaurants, airlines, hotels, and bulk B2B distributors worldwide.
              </p>
            </div>

            {/* CTA Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-explore"
                onClick={handleExplore}
                className="w-full sm:w-auto bg-teal-700 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-teal-800 transition-all duration-300 shadow-lg shadow-teal-700/15 flex items-center justify-center space-x-2 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-quote"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto bg-slate-950 text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-slate-950/10"
              >
                <FileText className="w-4 h-4" />
                <span>Request FCL Quote</span>
              </button>
            </div>

            {/* Quick trust bullet features */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 pt-2 text-xs font-semibold text-slate-500">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>FDA Food Safe</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% PFAS-Free</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certified Home Compostable</span>
              </div>
            </div>
          </div>

          {/* Cinematic Hero Slider Showcase Column */}
          <div 
            className="lg:col-span-6 relative w-full flex flex-col items-center"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/2] w-full max-w-xl shadow-2xl border border-slate-100/80 bg-white flex items-center justify-center group/slider">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  {/* Premium Slide Image */}
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="object-contain w-full h-full"
                    referrerPolicy="no-referrer"
                    loading={currentSlide === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Slider Manual Controls (Visible on hover) */}
              <button
                onClick={prevSlide}
                className="absolute left-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300"
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Navigation Dots and Slider Status Indicators */}
            <div className="flex items-center space-x-2.5 mt-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'bg-teal-700 w-6' : 'bg-slate-300 w-2 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Continuous Infinite Logo Marquee Banner (GPU accelerated, 60fps) */}
      <div className="bg-slate-50 border-t border-b border-slate-100 py-6 mt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-center text-[10px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">
            Trusted Partners & Supplier Channels
          </p>
        </div>
        <div className="relative w-full overflow-hidden flex">
          <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 sm:space-x-16">
            {/* First sequence */}
            {clientsList.map((client, idx) => (
              <div key={`c1-${idx}`} className="flex items-center space-x-3 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600/30 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider font-mono">
                  {client}
                </span>
              </div>
            ))}
            {/* Second sequence for infinite wrap */}
            {clientsList.map((client, idx) => (
              <div key={`c2-${idx}`} className="flex items-center space-x-3 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600/30 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider font-mono">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial Statistics Sections with Viewport Triggered Entrance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-center md:text-left hover:border-teal-300 transition-colors group"
              >
                <div className="flex items-center justify-center md:justify-start space-x-2 text-teal-700">
                  <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-2xl font-extrabold text-slate-900 tracking-tight">{st.value}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-2 leading-relaxed">{st.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

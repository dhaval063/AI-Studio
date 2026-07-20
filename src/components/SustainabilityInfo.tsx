import React, { useState } from 'react';
import { Leaf, Recycle, Sprout, ShieldCheck, Ban, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CircularStep {
  num: string;
  title: string;
  desc: string;
  longDesc: string;
  image: string;
  x: number;
  y: number;
}

const sustainabilityMetrics = [
  { value: "100%", label: "COMPOSTABLE", icon: Sprout, color: "text-emerald-600 bg-emerald-50" },
  { value: "0%", label: "PLASTIC IN PRODUCT", icon: Ban, color: "text-rose-600 bg-rose-50" },
  { value: "Grade AA", label: "BRCGS CERTIFIED", icon: ShieldCheck, color: "text-teal-600 bg-teal-50" },
  { value: "74%", label: "LOWER CARBON", icon: Globe, color: "text-blue-600 bg-blue-50" },
  { value: "90 days", label: "RETURNS TO SOIL", icon: Recycle, color: "text-amber-600 bg-amber-50" }
];

const circularSteps: CircularStep[] = [
  {
    num: "01",
    title: "Sugarcane Field",
    desc: "Sourced from refinery crop crushers in India.",
    longDesc: "We source 100% renewable sugarcane stalks directly after juice extraction, preventing crop incineration and reducing agrarian field smoke.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=400&auto=format&fit=crop",
    x: 50,
    y: 15
  },
  {
    num: "02",
    title: "Agricultural Bagasse",
    desc: "Fibrous cane residue is processed mechanically.",
    longDesc: "Dry leftover biomass fibers are prepared mechanically without any bleach or chlorine, completely preserving global forest trees.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400&auto=format&fit=crop",
    x: 74.7,
    y: 25.3
  },
  {
    num: "03",
    title: "Precision Moulding",
    desc: "Thermoformed in high-temp automated CNC steel molds.",
    longDesc: "Raw pulp is heat-pressed in custom robotic thermoforming machine lines under 400-tons of hydraulic pressure for structural resilience.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop",
    x: 85,
    y: 50
  },
  {
    num: "04",
    title: "Premium Food Packaging",
    desc: "Heavy-duty plates & bowls are trimmed and inspected.",
    longDesc: "Finished, PFAS-free and BRCGS food-contact grade containers emerge with perfect rim trim, ready to hold hot oils, water and foods.",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=400&auto=format&fit=crop",
    x: 74.7,
    y: 74.7
  },
  {
    num: "05",
    title: "Restaurant & Consumer Use",
    desc: "Tableware serves hot meals in catering & takeaways.",
    longDesc: "Hot & cold friendly (-20°C to 120°C). Perfect for microwaves, freezer storage, bulk dining networks, corporate events, and airlines.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop",
    x: 50,
    y: 85
  },
  {
    num: "06",
    title: "Industrial Composting",
    desc: "Discarded containers enter organic compost streams.",
    longDesc: "Used bagasse tableware disintegrates rapidly under commercial or home composting conditions, avoiding high-volume plastic landfill dumps.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=400&auto=format&fit=crop",
    x: 25.3,
    y: 74.7
  },
  {
    num: "07",
    title: "Nutrient-Rich Soil",
    desc: "Packaging decomposes completely into healthy humus.",
    longDesc: "Within 90 days, the organic fibers fully decay back into clean nitrogen-rich humus soil, leaving zero microplastics or chemicals.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
    x: 15,
    y: 50
  },
  {
    num: "08",
    title: "New Sugarcane Growth",
    desc: "Fertile land nurtures the next sugarcane harvest.",
    longDesc: "The bio-fertilized agricultural soils feed new green crops of sugarcane stalks, restarting our pristine natural circular sequence.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400&auto=format&fit=crop",
    x: 25.3,
    y: 25.3
  }
];

export default function SustainabilityInfo() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const displayIndex = hoveredStep !== null ? hoveredStep : activeStep;
  const currentStepInfo = circularSteps[displayIndex];

  return (
    <div className="space-y-16" id="sustainability-section">
      {/* 1. Metrics Grid - 1 row of 5 on desktop; 1 full-width and 4 split on mobile */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
        {sustainabilityMetrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`bg-white border border-slate-200/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-center items-center shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300 group ${idx === 0 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${metric.color} transition-transform group-hover:scale-110 duration-300`}>
                <Icon className="w-4 h-4 stroke-[2]" />
              </div>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight block leading-none">
                {metric.value}
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-2 leading-tight font-mono">
                {metric.label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* 2. Interactive Circular Process Block */}
      <div className="bg-gradient-to-br from-teal-50/10 via-white to-emerald-50/10 border border-slate-200/60 rounded-[32px] p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left: Heading Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span>THE CIRCULAR JOURNEY</span>
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Sugarcane to <br />
                <span className="text-teal-700 italic font-serif font-medium">Sustainable Packaging.</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                A closed-loop lifecycle where agricultural residue becomes premium compostable packaging, then returns to the earth to grow the next harvest.
              </p>
            </div>

            {/* Dynamic Step Inspector Panel */}
            <motion.div 
              layout
              className="bg-white/90 backdrop-blur-sm border border-teal-100/60 rounded-2xl p-5 shadow-sm space-y-3 min-h-[140px]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100/40">
                  STAGE {currentStepInfo.num}
                </span>
              </div>
              <h4 className="text-base font-extrabold text-slate-950 tracking-tight">
                {currentStepInfo.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {currentStepInfo.longDesc}
              </p>
            </motion.div>
          </div>

          {/* Right: Circular Wheel (Desktop) & Collapsible Steps (Mobile) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            
            {/* Desktop Circular Diagram */}
            <div className="hidden md:block w-full max-w-[500px] lg:max-w-[530px] aspect-square relative">
              
              {/* Background Circular Dash Path */}
              <div className="absolute inset-[15%] rounded-full border-2 border-dashed border-teal-100/80 pointer-events-none z-0" />

              {/* Center Loop Statement Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center p-5 text-center z-10">
                <span className="text-[9px] font-mono font-extrabold text-teal-600 uppercase tracking-widest leading-none">CLOSED LOOP</span>
                <h4 className="text-lg font-extrabold text-slate-900 mt-2 leading-tight tracking-tight">
                  Designed by Nature.<br />
                  <span className="text-teal-700 italic font-serif font-semibold">Returned to Nature.</span>
                </h4>
                <p className="text-[9px] font-medium text-slate-400 mt-2 leading-tight">
                  Eight stages. Zero waste.<br />One continuous cycle.
                </p>
              </div>

              {/* 8 Outer Nodes */}
              {circularSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isHovered = hoveredStep === idx;
                return (
                  <div
                    key={idx}
                    style={{ left: `${step.x}%`, top: `${step.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer z-20 group"
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Circle Node with Unsplash Image */}
                    <div className={`w-16 h-16 lg:w-[76px] lg:h-[76px] rounded-full p-1 bg-white shadow-md transition-all duration-300 relative ${
                      isActive 
                        ? 'border-2 border-teal-600 scale-110 shadow-teal-100/50' 
                        : 'border border-slate-200 group-hover:border-teal-400 group-hover:scale-105'
                    }`}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      {/* Step Number Badge */}
                      <span className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center border shadow-sm ${
                        isActive 
                          ? 'bg-teal-600 border-teal-600 text-white' 
                          : 'bg-white border-slate-200 text-slate-500'
                      }`}>
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title below node */}
                    <div className="absolute top-[72px] lg:top-[82px] w-[110px] text-center pointer-events-none transition-all duration-300">
                      <p className={`text-[9px] font-extrabold leading-tight tracking-tight ${
                        isActive 
                          ? 'text-teal-700 font-black' 
                          : 'text-slate-700 group-hover:text-teal-600'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile-Friendly Vertical Step List */}
            <div className="md:hidden w-full space-y-4">
              {circularSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                      isActive 
                        ? 'bg-teal-50/50 border-teal-300 shadow-sm' 
                        : 'bg-white border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-slate-200 p-0.5 bg-white">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full rounded-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[9px] font-mono font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
                          {step.num}
                        </span>
                        <h4 className="text-xs font-extrabold text-slate-950 truncate">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1 leading-tight font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

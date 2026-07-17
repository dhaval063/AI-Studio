import React, { useState } from 'react';
import { Leaf, Disc, Settings, ShieldCheck, HelpCircle, ArrowRight, Zap, Award, ShoppingBag, Eye, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
  icon: any;
  color: string;
}

const steps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Sugarcane Agro-Residue Extraction',
    description: 'We source pure agricultural residue directly from sugar refinery crushers in Western & Northern India, preventing waste incineration.',
    details: [
      '100% renewable sugarcane stalks after juice extraction',
      'zero deforestation - no trees harmed',
      'reduces agricultural carbon burning emissions by farmer syndicates'
    ],
    icon: Leaf,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
  },
  {
    phase: '02',
    title: 'Bagasse Fiber Refining',
    description: 'Raw pulp is physically washed and mechanically beaten to separate heavy lignins, leaving long, high-density cellulose fibers.',
    details: [
      'Closed-loop water recycling system (saves 85% processing water)',
      'No chlorine or chemical bleach used',
      'Pure mechanical high-pressure fiber dispersion'
    ],
    icon: Layers,
    color: 'bg-teal-50 text-teal-700 border-teal-100'
  },
  {
    phase: '03',
    title: 'Pulping & Slurry Formulation',
    description: 'Cellulose fibers are blended in a zero-PFAS eco-slurry. Organic food-grade water and oil-resistant barriers are infused.',
    details: [
      'Certified 100% PFAS-free waterproofing agent',
      'High density formulation for hot liquid soup retention',
      'Thorough high-temperature heat sterilization'
    ],
    icon: Settings,
    color: 'bg-cyan-50 text-cyan-700 border-cyan-100'
  },
  {
    phase: '04',
    title: 'CNC Precision Hydraulic Molding',
    description: 'Slurry is injected into high-precision CNC steel molds. Massive 400-ton hydraulic presses thermoform the products.',
    details: [
      'Uniform wall thickness (tolerances within ±0.1mm)',
      'Reinforced structural ribs embossed directly',
      'High-pressure binding increases physical resistance to bending'
    ],
    icon: Zap,
    color: 'bg-amber-50 text-amber-700 border-amber-100'
  },
  {
    phase: '05',
    title: 'Robotic Edge Trimming',
    description: 'Molded items are transferred to automatic cutting stations where edges are trimmed for a perfectly smooth, premium B2B rim finish.',
    details: [
      'Smooth outer rim prevents mouth irritation on cutlery and cups',
      'Waste trimmings are re-pushed back into the pulp slurry mixer',
      'Absolute zero-waste manufacturing cycle'
    ],
    icon: Disc,
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100'
  },
  {
    phase: '06',
    title: 'Metal Detection & QC Testing',
    description: 'Every product batch passes through dynamic optical weight scales, 30-minute hot-water soak testing, and inline metal detectors.',
    details: [
      'Automatic rejection of physical anomalies',
      'Meticulous oil soak test at 120°C',
      'Strict conformity with FDA and ISO 9001 standards'
    ],
    icon: ShieldCheck,
    color: 'bg-lime-50 text-lime-700 border-lime-100'
  },
  {
    phase: '07',
    title: 'UV Disinfection & Vacuum Packing',
    description: 'tableware is baked under high-intensity ultraviolet sterilization tunnels and immediate heat-shrink sealed in food-grade sleeves.',
    details: [
      'Dust-free automated packaging line',
      'Double-corrugated heavy export grade cartons',
      'Desiccant gel packs added to ensure ocean moisture protection'
    ],
    icon: Eye,
    color: 'bg-blue-50 text-blue-700 border-blue-100'
  },
  {
    phase: '08',
    title: 'Seaworthy Container Export',
    description: 'Cartons are palletized, stretch-wrapped, and loaded directly into vacuum-sealed 20ft/40ft containers for worldwide ocean shipping.',
    details: [
      'Mundra Port customs clearance pre-vetted',
      'Palletized loading prevents shifting during rough oceans',
      'Full shipping logistics tracking on WhatsApp/Email'
    ],
    icon: ShoppingBag,
    color: 'bg-slate-50 text-slate-700 border-slate-100'
  }
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="space-y-12">
      {/* Visual Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
        <div className="space-y-4">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Modern Industrial Facility</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-none">
            From Sugarcane Field to Global Dining Tables.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our state-of-the-art pulp molding plant in Sanand, Gujarat combines advanced automated robotics with carbon-optimized thermodynamics. We recycle 85% of our processing water and recycle 100% of mold trimmings back into raw pulp, maintaining a pristine circular economy.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700">
              <Award className="w-4 h-4 text-teal-700" />
              <span>AA Grade BRCGS Plant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>PFAS-Free Water Resistance</span>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg bg-slate-200">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
            alt="State of the art automated machinery" 
            className="object-cover w-full h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent flex items-end p-4">
            <span className="text-xs font-mono text-white font-bold bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700/50">
              Automated thermoforming machinery lines
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Controls */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-950">Meticulous 8-Stage Closed Loop Process</h3>
          <p className="text-xs text-slate-500 mt-1">Click any stage to inspect mechanical parameters and quality specifications.</p>
        </div>

        {/* Horizontal pipeline progress */}
        <div className="hidden lg:flex items-center justify-between relative px-4 max-w-5xl mx-auto py-4">
          <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {steps.map((st, idx) => {
            const IconComponent = st.icon;
            const isActive = idx === activeStep;
            return (
              <button
                key={st.phase}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-teal-700 text-white border-teal-800 scale-110 shadow-lg shadow-teal-700/20' 
                    : 'bg-white text-slate-400 border-slate-200 group-hover:border-slate-400 group-hover:text-slate-700'
                }`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold font-mono mt-2 transition-colors ${
                  isActive ? 'text-teal-700 font-extrabold' : 'text-slate-400 group-hover:text-slate-600'
                }`}>
                  Phase {st.phase}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected step panel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side info */}
            <div className="md:col-span-7 p-6 sm:p-10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-extrabold text-teal-700 font-mono">Stage {steps[activeStep].phase}</span>
                  <div className="h-6 w-px bg-slate-200" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Process Specification</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight">{steps[activeStep].title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{steps[activeStep].description}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-800 uppercase tracking-widest font-mono">Industrial Guidelines Checked:</p>
                <ul className="space-y-2">
                  {steps[activeStep].details.map((detail, i) => (
                    <li key={i} className="flex items-start text-xs text-slate-600">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side visual placeholder */}
            <div className="md:col-span-5 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 p-8 flex flex-col justify-center items-center text-center space-y-6">
              <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center ${steps[activeStep].color} shadow-inner`}>
                {React.createElement(steps[activeStep].icon, { className: 'w-10 h-10' })}
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 font-mono">Quality Standard Code</p>
                <p className="text-sm font-bold text-slate-800 mt-1">ISO 14001 Compliant</p>
                <p className="text-xs text-slate-500 mt-0.5">Sanand Unit 1 facility</p>
              </div>
              <div className="flex gap-2 w-full max-w-xs justify-center">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => prev - 1)}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-colors"
                >
                  Previous Phase
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => prev + 1)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 disabled:opacity-50 transition-colors flex items-center space-x-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

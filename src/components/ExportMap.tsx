import React, { useState } from 'react';
import { Globe, Anchor, Ship, FileText, CheckCircle2, ChevronRight, Award, Compass, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ExportRegion {
  name: string;
  ports: string[];
  transitTime: string;
  moq: string;
  share: string;
}

const regions: ExportRegion[] = [
  { name: 'North America', ports: ['New York (NY)', 'Los Angeles (LA)', 'Houston (TX)', 'Vancouver (BC)'], transitTime: '26 - 32 Days', moq: '1 x 20ft FCL', share: '38%' },
  { name: 'Europe & UK', ports: ['Rotterdam (NL)', 'Hamburg (DE)', 'Felixstowe (UK)', 'Genoa (IT)'], transitTime: '18 - 24 Days', moq: '1 x 20ft FCL', share: '32%' },
  { name: 'Australia & NZ', ports: ['Melbourne (VIC)', 'Sydney (NSW)', 'Brisbane (QLD)', 'Auckland (NZ)'], transitTime: '20 - 25 Days', moq: '1 x 20ft FCL', share: '15%' },
  { name: 'Middle East', ports: ['Jebel Ali (Dubai)', 'Dammam (KSA)', 'Doha (Qatar)', 'Muscat (Oman)'], transitTime: '5 - 8 Days', moq: 'Mixed LCL Pallets', share: '10%' },
  { name: 'Asia Pacific', ports: ['Singapore', 'Tokyo (Japan)', 'Manila (Philippines)'], transitTime: '10 - 14 Days', moq: 'Mixed LCL Pallets', share: '5%' }
];

export default function ExportMap() {
  const [selectedRegion, setSelectedRegion] = useState(0);

  return (
    <div className="space-y-12 text-slate-800">
      
      {/* Editorial Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
        
        {/* Core Stats / Text */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">Seamless B2B Logistics</span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">World-Class Export Engine.</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our strategic supply network is headquartered in Ahmedabad, Gujarat—with direct logistics to Mundra Port (India’s largest automated deep-water ocean terminal). This guarantees rapid container movement, zero domestic highway delays, and instant customs clearance.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: 'FCL & LCL Shipping', text: 'Daily departures of 20ft GP and 40ft HQ dry containers, as well as LCL wooden pallet consolidation for growing distributors.' },
              { title: 'Vacuum Moisture Protection', text: 'All products are packed in heavy-duty moisture-barrier shrink sleeves with industrial silica desiccant gel packs to prevent ocean moisture damage.' },
              { title: 'Comprehensive Export Filing', text: 'We issue Phytosanitary certificates, Certificates of Origin, AA Grade BRCGS logs, and custom-embossed lab testing results for custom entry clearance.' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs">
                <CheckCircle2 className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{item.title}</p>
                  <p className="text-slate-500 mt-0.5 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS Simulated Map Graphics */}
        <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white relative shadow-xl overflow-hidden min-h-[350px] flex flex-col justify-between border border-slate-800">
          
          {/* Subtle world map grid background lines */}
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center space-x-2 text-teal-400">
              <Compass className="w-5 h-5 animate-spin-slow text-teal-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Port Dispatch Terminal (Mundra SEZ)</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/50">FOB Status: ACTIVE</span>
          </div>

          {/* Interactive Route Nodes Visualization */}
          <div className="relative h-44 my-4 flex items-center justify-center">
            
            {/* Center Hub - Gujarat India */}
            <div className="absolute left-[45%] top-[55%] z-20 flex flex-col items-center">
              <span className="h-4 w-4 rounded-full bg-teal-500 flex items-center justify-center animate-ping absolute" />
              <span className="h-4 w-4 rounded-full bg-teal-600 border border-white z-10 shadow-lg" />
              <span className="text-[9px] font-mono font-bold text-teal-400 mt-1 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">Namya Sourcing (IN)</span>
            </div>

            {/* US Node */}
            <div className="absolute left-[12%] top-[30%] flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70 border border-teal-500" />
              <span className="text-[8px] font-mono text-slate-400 mt-1">North America</span>
              {selectedRegion === 0 && <span className="absolute -top-4 text-[9px] text-teal-400 bg-teal-950 px-1 py-0.5 rounded border border-teal-800 font-bold">38% Share</span>}
            </div>

            {/* Europe Node */}
            <div className="absolute left-[38%] top-[20%] flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70 border border-teal-500" />
              <span className="text-[8px] font-mono text-slate-400 mt-1">Europe & UK</span>
              {selectedRegion === 1 && <span className="absolute -top-4 text-[9px] text-teal-400 bg-teal-950 px-1 py-0.5 rounded border border-teal-800 font-bold">32% Share</span>}
            </div>

            {/* Australia Node */}
            <div className="absolute right-[15%] top-[75%] flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70 border border-teal-500" />
              <span className="text-[8px] font-mono text-slate-400 mt-1">Oceania</span>
              {selectedRegion === 2 && <span className="absolute -top-4 text-[9px] text-teal-400 bg-teal-950 px-1 py-0.5 rounded border border-teal-800 font-bold">15% Share</span>}
            </div>

            {/* Middle East Node */}
            <div className="absolute left-[54%] top-[45%] flex flex-col items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-white/70 border border-teal-500" />
              <span className="text-[8px] font-mono text-slate-400 mt-1">Middle East</span>
              {selectedRegion === 3 && <span className="absolute -top-4 text-[9px] text-teal-400 bg-teal-950 px-1 py-0.5 rounded border border-teal-800 font-bold">10% Share</span>}
            </div>

            {/* Simulated ocean route arcs using SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
              {/* IN to US */}
              <path d="M 180,100 Q 110,60 50,70" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
              {/* IN to Rotterdam */}
              <path d="M 180,100 Q 150,50 145,45" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="4 4" />
              {/* IN to Australia */}
              <path d="M 180,100 Q 230,130 300,140" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeDasharray="4 4" />
              {/* IN to Dubai */}
              <path d="M 180,100 L 205,88" fill="none" stroke="#0F766E" strokeWidth="2" />
            </svg>
          </div>

          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-between text-xs font-mono relative z-10">
            <div className="flex items-center space-x-2.5">
              <Anchor className="w-4 h-4 text-teal-400" />
              <div className="leading-none">
                <p className="font-bold text-slate-200">Port Logistics Term</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Sovereign Customs Bonded</p>
              </div>
            </div>
            <span className="text-teal-400 font-extrabold text-[11px]">100% On-Time Clearance</span>
          </div>

        </div>

      </div>

      {/* Region Selector and Details Grid */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {regions.map((reg, idx) => (
            <button
              key={reg.name}
              onClick={() => setSelectedRegion(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                idx === selectedRegion 
                  ? 'bg-teal-700 text-white border-teal-800 shadow-md shadow-teal-700/10' 
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              {reg.name} ({reg.share})
            </button>
          ))}
        </div>

        {/* Selected region details panel */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left items-center">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Discharged Ports</span>
            <div className="flex flex-col mt-2 space-y-1">
              {regions[selectedRegion].ports.map((port, i) => (
                <span key={i} className="text-sm font-bold text-slate-800 flex items-center sm:justify-start justify-center">
                  <Ship className="w-3.5 h-3.5 text-teal-700 mr-2 flex-shrink-0" />
                  <span>{port}</span>
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Ocean Freight Time</span>
            <p className="text-2xl font-extrabold text-teal-700 mt-2">{regions[selectedRegion].transitTime}</p>
            <p className="text-xs text-slate-500 mt-1">Cradle-to-destination port average</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Minimum Order Limit</span>
            <p className="text-lg font-bold text-slate-800 mt-2">{regions[selectedRegion].moq}</p>
            <p className="text-xs text-slate-500 mt-1">Trial mix consolidation supported</p>
          </div>
        </div>
      </div>
    </div>
  );
}

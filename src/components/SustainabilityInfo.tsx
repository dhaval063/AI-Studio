import React, { useState } from 'react';
import { Leaf, Award, Globe, Scale, Droplet, Trees, Sparkles, AlertCircle, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function SustainabilityInfo() {
  const [weeklyBoxes, setWeeklyBoxes] = useState(10000);

  // Conversion calculations (derived from standard life cycle assessment statistics)
  // Replacing 1 polypropylene container with 1 bagasse container saves:
  // - 25g of plastic waste
  // - 44g of greenhouse gas CO2 equivalents
  // - 1.2 Liters of pure water compared to virgin forest wood-paper pulp
  // - 0.0003 trees (1 tree produces approx 3,000 paper boxes)
  const plasticSavedKg = Math.round((weeklyBoxes * 25) / 1000);
  const co2PreventedKg = Math.round((weeklyBoxes * 44) / 1000);
  const waterSavedLiters = Math.round(weeklyBoxes * 1.2);
  const treesSavedCount = parseFloat((weeklyBoxes * 0.0003).toFixed(2));

  // Annual projection
  const annualPlasticSavedTn = parseFloat(((plasticSavedKg * 52) / 1000).toFixed(1));
  const annualCo2PreventedTn = parseFloat(((co2PreventedKg * 52) / 1000).toFixed(1));

  return (
    <div className="space-y-16">
      {/* Header Infographics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-slate-800">
        
        {/* Metric 1 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4 relative overflow-hidden group hover:border-teal-300 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
            <Globe className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Agricultural Origin</p>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">0% Land Diverted</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Unlike starch-corn PLA or virgin paper, sugarcane bagasse is a 100% agricultural residue byproduct of sugar processing. It requires **zero additional farming acreage**, preserving global soil biodiversity.
          </p>
        </div>

        {/* Metric 2 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4 relative overflow-hidden group hover:border-teal-300 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
            <Leaf className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Biodegradation Rate</p>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">Under 90 Days</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Under commercial or backyard composting conditions, our bagasse tableware decomposes completely into nitrogen-rich bio-compost, feeding organic nutrients back to agricultural soils.
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4 relative overflow-hidden group hover:border-teal-300 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-lime-50 text-lime-700 flex items-center justify-center">
            <TrendingDown className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono">Zero Carbon Sourcing</p>
          <p className="text-3xl font-extrabold text-slate-900 tracking-tight">85% Lower CO₂</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            By diverting agricultural bagasse fibers from refinery incinerators, we prevent massive field-burning CO2 emissions. Sourcing has an exceptionally low cradle-to-gate global warming potential.
          </p>
        </div>

      </div>

      {/* ESG Calculator Section */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Background ambient radial circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-lime-500/10 blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Slider input */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Interactive ESG Impact Calculator</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Measure Your Impact</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enter your food chain or distribution network’s estimated weekly takeaway volume. Watch how switching from single-use plastics to Namya compostable bagasse immediately offsets corporate environmental footprint.
              </p>
            </div>

            <div className="space-y-4 p-5 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold uppercase text-slate-400 font-mono">Weekly Container Consumption</span>
                <span className="text-teal-400 font-mono font-bold text-base bg-teal-950/80 px-3 py-1 rounded-lg border border-teal-800/40">{weeklyBoxes.toLocaleString()} Units</span>
              </div>
              <input
                type="range"
                min="1000"
                max="500000"
                step="5000"
                value={weeklyBoxes}
                onChange={(e) => setWeeklyBoxes(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1,000 (Small Bistro)</span>
                <span>50,000 (Local Food Chain)</span>
                <span>500,000 (Multinational Franchises)</span>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-[11px] text-slate-400 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
              <p>Conversion metrics based on standard Life Cycle Assessment (LCA) guidelines comparing PET / Polypropylene containers with natural sugarcane bagasse pulp products.</p>
            </div>
          </div>

          {/* Calculations Dashboard */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Box 1: Plastic Saved */}
            <div className="bg-slate-850 border border-slate-750 p-5 rounded-2xl flex items-start space-x-3.5 hover:bg-slate-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Plastic Prevented</p>
                <p className="text-xl font-bold text-white mt-0.5">{plasticSavedKg.toLocaleString()} Kg / week</p>
                <p className="text-xs text-teal-400/80 font-medium mt-1">Saves {annualPlasticSavedTn} Metric Tons of plastic waste annually</p>
              </div>
            </div>

            {/* Box 2: CO2 Avoided */}
            <div className="bg-slate-850 border border-slate-750 p-5 rounded-2xl flex items-start space-x-3.5 hover:bg-slate-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Carbon Emission Offset</p>
                <p className="text-xl font-bold text-white mt-0.5">{co2PreventedKg.toLocaleString()} Kg CO₂e</p>
                <p className="text-xs text-emerald-400/80 font-medium mt-1">Equivalent to offsetting {annualCo2PreventedTn} tons of greenhouse gas per year</p>
              </div>
            </div>

            {/* Box 3: Water Saved */}
            <div className="bg-slate-850 border border-slate-750 p-5 rounded-2xl flex items-start space-x-3.5 hover:bg-slate-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                <Droplet className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Water Conserved</p>
                <p className="text-xl font-bold text-white mt-0.5">{waterSavedLiters.toLocaleString()} Liters / week</p>
                <p className="text-xs text-blue-400/80 font-medium mt-1">Versus fresh-wood pulping lines which consume heavy aquifers</p>
              </div>
            </div>

            {/* Box 4: Trees Preserved */}
            <div className="bg-slate-850 border border-slate-750 p-5 rounded-2xl flex items-start space-x-3.5 hover:bg-slate-800 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-lime-500/10 text-lime-400 flex items-center justify-center flex-shrink-0">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">Forest Trees Preserved</p>
                <p className="text-xl font-bold text-white mt-0.5">{treesSavedCount} Trees / week</p>
                <p className="text-xs text-lime-400/80 font-medium mt-1">Zero trees chopped, utilising 100% leftover bagasse crops</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Calendar, CheckSquare, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
    requirementType: 'fcl_container',
    productInterest: 'plates'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        message: '',
        requirementType: 'fcl_container',
        productInterest: 'plates'
      });
      setTimeout(() => setSubmitted(false), 8000);
    }, 15000); // 1.5s simulated network request
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Namya EcoPack. I am requesting a callback regarding ocean-freight container orders.");
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-slate-800">
      
      {/* Contact Info and Address Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">Corporate Communication Desk</span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Initiate Global Trade Contract.</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Interested in bulk distribution, custom OEM molding, or private label manufacturing? Fill out our corporate trade questionnaire. Our export executives typically respond with complete FOB/CIF price brackets within 12 business hours.
          </p>
        </div>

        {/* Info Cards */}
        <div className="space-y-4">
          
          {/* Card 1: HQ */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Corporate HQ & Trade Office</p>
              <p className="text-slate-500 mt-1">Level 8, Executive Block, Signature Towers, Gurgaon, Haryana, 122001, India</p>
              <p className="text-teal-700 font-mono font-semibold mt-1.5 flex items-center space-x-1">
                <span>Tel: +91 98765 43210</span>
              </p>
            </div>
          </div>

          {/* Card 2: Plant */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-lime-50 text-lime-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <p className="font-bold text-slate-900">Pulp Molding Production Plant</p>
              <p className="text-slate-500 mt-1">Plot 45-48, GIDC Industrial Estate, Agro-Processing Zone, Sanand, Gujarat, 382110, India</p>
              <p className="text-slate-400 mt-1.5 font-mono">Location Advantage: 280km from Mundra Deepwater Port</p>
            </div>
          </div>

          {/* Card 3: Working hours */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2.5 text-xs">
              <Clock className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">Trade Support</p>
                <p className="text-slate-500 mt-0.5">09:00 - 18:00 (GMT+5:30)</p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5 text-xs">
              <Calendar className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">Business Days</p>
                <p className="text-slate-500 mt-0.5">Monday - Saturday</p>
              </div>
            </div>
          </div>

        </div>

        {/* Vector Simulated Maps Panel */}
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4 shadow-lg overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-500/10 blur-xl pointer-events-none" />
          
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold uppercase tracking-wider font-mono text-teal-400">Gujarat Hub Logistics</span>
            <span className="text-[10px] font-mono text-slate-400">Coords: 22.9834° N, 72.3812° E</span>
          </div>

          {/* Custom Simulated Map Grid */}
          <div className="h-40 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between p-4 font-mono text-[10px] relative">
            <div className="flex justify-between text-slate-500">
              <span>[SANAND APZ UNIT 1]</span>
              <span className="text-emerald-400">● CALIBRATED</span>
            </div>
            
            {/* Map visual */}
            <div className="border-t border-b border-slate-800 py-3 flex justify-between text-slate-300">
              <div className="space-y-1">
                <p className="font-bold text-white flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-2" />Sanand Factory</p>
                <p className="text-slate-500">To Mundra Port: 280km</p>
                <p className="text-slate-500">To Ahmedabad Airport: 35km</p>
              </div>
              <div className="text-right flex flex-col justify-end">
                <p className="text-slate-500">Transit Terminal</p>
                <p className="text-lime-400 font-bold">MUNDRA DEPOT</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span>Pallet Capacity: 24,000 / day</span>
              <button 
                onClick={() => window.open('https://maps.google.com', '_blank')}
                className="text-teal-400 hover:underline flex items-center space-x-1"
              >
                <span>Navigate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          <button
            onClick={handleWhatsAppChat}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl transition-all flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Direct Live WhatsApp Callback</span>
          </button>
        </div>

      </div>

      {/* Corporate Enquiry Form Column */}
      <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative">
        {submitted && (
          <div className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center text-center p-6 space-y-4 z-10">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Enquiry Form Dispatched</h4>
            <p className="text-xs text-slate-500 max-w-sm">
              Your comprehensive commercial trade request has been securely logged on our Gujarat server. An export manager is preparing your specific FOB/CIF quotation now.
            </p>
            <p className="text-[10px] text-teal-700 font-mono font-bold bg-teal-50 px-3 py-1 rounded-full">REQUEST ID: #EC-948293</p>
          </div>
        )}

        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono mb-6">B2B Trade Questionnaire</h4>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g., Alistair Ross"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Company Name</label>
              <input
                type="text"
                required
                placeholder="e.g., Pacific Distributors"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Corporate Email</label>
              <input
                type="email"
                required
                placeholder="procurement@brand.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">WhatsApp / Contact Phone</label>
              <input
                type="tel"
                required
                placeholder="e.g., +61 412 345 678"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Destination Country</label>
            <input
              type="text"
              required
              placeholder="e.g., Germany / United States"
              value={formState.country}
              onChange={(e) => setFormState({ ...formState, country: e.target.value })}
              className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Volume Requirement</label>
              <select
                value={formState.requirementType}
                onChange={(e) => setFormState({ ...formState, requirementType: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 bg-white focus:border-teal-500 outline-none font-medium"
              >
                <option value="fcl_container">Full Container Load (FCL 20ft/40ft)</option>
                <option value="lcl_pallets">Mixed Pallet Consolidation (LCL)</option>
                <option value="custom_oem">OEM Moulding Prototyping</option>
                <option value="private_label">Private Label Bottom Embossing</option>
                <option value="trial_samples">Requesting B2B Sample Kit First</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Primary Product Interest</label>
              <select
                value={formState.productInterest}
                onChange={(e) => setFormState({ ...formState, productInterest: e.target.value })}
                className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 bg-white focus:border-teal-500 outline-none font-medium"
              >
                <option value="plates">Sugarcane Plates</option>
                <option value="bowls">Compostable Bowls</option>
                <option value="containers">Clamshell Containers</option>
                <option value="trays">Compartment Meal Trays</option>
                <option value="takeaway">Takeaway & Cups</option>
                <option value="cutlery">Compostable Cutlery</option>
                <option value="bespoke">Bespoke CAD Shapes</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1">Detailed Message & Specifications</label>
            <textarea
              required
              rows={4}
              placeholder="Please provide your precise dimensional drawings, customized logo engraving requests, target FOB price and desired port of discharge."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs text-center py-3.5 rounded-xl font-bold transition-colors flex items-center justify-center space-x-2 shadow-md shadow-slate-900/10"
          >
            {loading ? (
              <span>Processing secure transfer...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Trade Enquiry Questionnaire</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

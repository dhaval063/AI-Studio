import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, FileText, Shield, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Footer({ setCurrentPage, onOpenQuoteModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const navTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand & Mission Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
              <span>N</span>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Namya <span className="text-teal-400">EcoPack</span>
            </span>
          </div>
          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            Premium Indian manufacturer and exporter of sustainable sugarcane bagasse tableware. Replacing single-use plastics with luxury, food-safe biodegradable alternatives for global food brands, hotels, and airlines.
          </p>
          
          {/* Newsletter signup */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">B2B Trade Circular</h4>
            <p className="text-xs text-slate-500">Subscribe for quarterly global export container pricing and material updates.</p>
            {subscribed ? (
              <div className="text-xs text-emerald-400 font-semibold bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/50">
                ✓ Successfully subscribed to our Trade Circular.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-sm bg-slate-800 rounded-lg overflow-hidden border border-slate-700 focus-within:border-teal-500 transition-all">
                <input
                  type="email"
                  required
                  placeholder="Insert business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent text-sm text-white px-4 py-2.5 outline-none flex-grow"
                />
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white px-4 flex items-center justify-center transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Column 2: Products */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Our Product Range</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { id: 'plates', label: 'Sugarcane Plates' },
              { id: 'bowls', label: 'Compostable Bowls' },
              { id: 'containers', label: 'Clamshell Containers' },
              { id: 'trays', label: 'Compartment Meal Trays' },
              { id: 'takeaway', label: 'Takeaway Packaging' },
              { id: 'cups', label: 'Cups & Lids' },
              { id: 'cutlery', label: 'Biodegradable Cutlery' }
            ].map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => navTo('products')}
                  className="hover:text-teal-400 transition-colors flex items-center group text-slate-400 hover:translate-x-1 duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-teal-400 rounded-full mr-2 transition-colors"></span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Capabilities */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Global Operations</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { id: 'oem', label: 'OEM Customized Shapes' },
              { id: 'privatelabel', label: 'Private Label Molding' },
              { id: 'manufacturing', label: 'Modern Pulp Molding plant' },
              { id: 'exports', label: 'Export & FCL Logistics' },
              { id: 'sustainability', label: 'Circular Economy Metric' },
              { id: 'faq', label: 'Import FAQ' },
              { id: 'about', label: 'Our Credentials & Story' }
            ].map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => navTo(link.id)}
                  className="hover:text-teal-400 transition-colors flex items-center group text-slate-400 hover:translate-x-1 duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-teal-400 rounded-full mr-2 transition-colors"></span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Facilities */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">Registered Office</h4>
          <ul className="space-y-3.5 text-sm text-slate-400">
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
              <div className="leading-tight">
                <p className="font-semibold text-slate-200">Corporate HQ Office:</p>
                <p className="text-xs mt-1">Level 8, Executive Block, Signature Towers, Gurgaon, Haryana, 122001, India</p>
              </div>
            </li>
            <li className="flex items-start space-x-2.5">
              <MapPin className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0" />
              <div className="leading-tight">
                <p className="font-semibold text-slate-200">Manufacturing Plant:</p>
                <p className="text-xs mt-1">Plot 45-48, GIDC Industrial Estate, Agro-Processing Zone, Sanand, Gujarat, 382110, India</p>
              </div>
            </li>
            <li className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
              <span className="text-xs font-mono">+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
              <span className="text-xs font-mono">export@namyaecopack.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust badging & copyrights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p>© 2026 Namya EcoPack Private Limited. All rights reserved worldwide.</p>
          <p className="text-[10px] text-slate-600 mt-1">IEC Code: 05160893XX | CIN: U21012GJ2026PTC150244</p>
        </div>
        <div className="flex space-x-6">
          <button onClick={() => navTo('faq')} className="hover:text-slate-300">Privacy Policy</button>
          <button onClick={() => navTo('faq')} className="hover:text-slate-300">Terms of Export</button>
          <button onClick={() => navTo('faq')} className="hover:text-slate-300">Sitemap</button>
          <button onClick={onOpenQuoteModal} className="text-teal-400 font-semibold hover:underline flex items-center space-x-1">
            <span>Corporate Quote Calculator</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}

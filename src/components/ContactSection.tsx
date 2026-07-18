import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    productRequirement: '',
    message: ''
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
        productRequirement: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 8000);
    }, 1500); // 1.5s simulated network request
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent("Hello Namya EcoPack. I am requesting a callback regarding ocean-freight container orders.");
    window.open(`https://wa.me/917041969067?text=${text}`, '_blank');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-slate-800" id="contact-container">
      
      {/* Contact Info and Address Column */}
      <div className="lg:col-span-5 space-y-8" id="contact-info-column">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-[2px] bg-teal-600" />
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Request a quote. <span className="text-teal-700 italic font-serif font-medium">We reply fast.</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            Share your requirement and our export team will send pricing, lead time and samples within one business day.
          </p>
        </div>

        {/* Info Items List */}
        <div className="space-y-3" id="contact-info-list">
          
          {/* Item 1: Address */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-mono">ADDRESS</p>
              <p className="text-sm font-bold text-slate-900 mt-1 truncate">Ahmedabad, Gujarat, India</p>
            </div>
          </div>

          {/* Item 2: Email */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-mono">EMAIL</p>
              <p className="text-sm font-bold text-slate-900 mt-1 truncate">sales@namyaecopack.com</p>
            </div>
          </div>

          {/* Item 3: Phone */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-mono">PHONE</p>
              <p className="text-sm font-bold text-slate-900 mt-1 truncate">+91 7041969067</p>
            </div>
          </div>

          {/* Item 4: Business Hours */}
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none font-mono">BUSINESS HOURS</p>
              <p className="text-sm font-bold text-slate-900 mt-1 truncate">Mon–Sat · 09:00–18:00 IST</p>
            </div>
          </div>

        </div>

        {/* Chat on WhatsApp Button */}
        <button
          onClick={handleWhatsAppChat}
          className="w-full bg-[#1e2330] hover:bg-[#2d3345] text-white text-xs font-bold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md"
          id="whatsapp-chat-button"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
        </button>

      </div>

      {/* Corporate Enquiry Form Column */}
      <div className="lg:col-span-7 bg-[#f8f9fa]/80 border border-slate-100/60 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm relative" id="contact-form-column">
        {submitted && (
          <div className="absolute inset-0 bg-white/95 rounded-[32px] flex flex-col items-center justify-center text-center p-6 space-y-4 z-10">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Enquiry Form Dispatched</h4>
            <p className="text-xs text-slate-500 max-w-sm">
              Your comprehensive commercial trade request has been securely logged. An export manager is preparing your specific FOB/CIF quotation now.
            </p>
            <p className="text-[10px] text-teal-700 font-mono font-bold bg-teal-50 px-3 py-1 rounded-full">REQUEST ID: #EC-948293</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" id="enquiry-form">
          
          {/* Row 1: Full Name & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">FULL NAME</label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">COMPANY</label>
              <input
                type="text"
                required
                placeholder="Northbridge Foods"
                value={formState.company}
                onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
          </div>

          {/* Row 2: Country & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">COUNTRY</label>
              <input
                type="text"
                required
                placeholder="United Kingdom"
                value={formState.country}
                onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">EMAIL</label>
              <input
                type="email"
                required
                placeholder="jane@company.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
          </div>

          {/* Row 3: Phone & Product Requirement */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">PHONE</label>
              <input
                type="tel"
                required
                placeholder="+44 ..."
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">PRODUCT REQUIREMENT</label>
              <input
                type="text"
                required
                placeholder="e.g. 100k Clamshell containers"
                value={formState.productRequirement}
                onChange={(e) => setFormState({ ...formState, productRequirement: e.target.value })}
                className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all font-medium"
              />
            </div>
          </div>

          {/* Full Row: Message */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-mono">MESSAGE</label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your requirement, target market and timeline..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full text-xs sm:text-sm border border-slate-200/80 rounded-xl px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 outline-none bg-white text-slate-800 transition-all resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0a6c5f] hover:bg-[#085a4f] text-white text-xs sm:text-sm text-center py-3.5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
            id="submit-enquiry-button"
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <span className="flex items-center justify-center gap-1.5">
                Submit Enquiry <span className="font-sans">↗</span>
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

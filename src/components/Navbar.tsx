import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, ArrowRight, FileText, Settings, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../data/products';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenQuoteModal: () => void;
  onSearch: (query: string) => void;
  onSelectCategory: (catId: string) => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  onOpenQuoteModal,
  onSearch,
  onSelectCategory
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<'products' | 'services' | 'languages' | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setCurrentPage('products');
    setSearchOpen(false);
    setSearchQuery('');
  };

  const navToPage = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    navToPage('products');
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' 
            : 'bg-white/80 backdrop-blur-sm py-5'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div 
          id="scroll-indicator"
          className="absolute top-0 left-0 h-[3px] bg-teal-600 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <div 
              id="brand-logo"
              onClick={() => navToPage('home')}
              className="flex items-center space-x-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white font-semibold shadow-md shadow-teal-700/15 transition-transform duration-300 group-hover:scale-105">
                <span className="text-xl tracking-tighter">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                  Namya <span className="text-teal-700">EcoPack</span>
                </span>
                <span className="text-[9px] font-medium text-slate-500 uppercase tracking-widest mt-0.5">
                  Sustainable Excellence
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <button
                onClick={() => navToPage('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home
              </button>

              {/* Products Dropdown (Mega Menu) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors py-2 ${
                    currentPage === 'products' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-2 gap-4"
                    >
                      <div className="col-span-2 pb-2 mb-2 border-b border-slate-50 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product Categories</span>
                        <button 
                          onClick={() => { navToPage('products'); onSelectCategory('all'); }}
                          className="text-xs text-teal-700 font-semibold hover:underline flex items-center space-x-1"
                        >
                          <span>View All Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      {categories.map((cat) => (
                        <div
                          key={cat.id}
                          onClick={() => handleCategoryClick(cat.id)}
                          className="flex space-x-3 p-3 rounded-xl hover:bg-slate-50 cursor-pointer transition-all duration-200 group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0 group-hover/item:bg-teal-700 group-hover/item:text-white transition-colors duration-200">
                            {cat.id === 'plates' && <Settings className="w-5 h-5" />}
                            {cat.id === 'bowls' && <ShieldCheck className="w-5 h-5" />}
                            {cat.id === 'containers' && <FileText className="w-5 h-5" />}
                            {cat.id === 'trays' && <Globe className="w-5 h-5" />}
                            {cat.id !== 'plates' && cat.id !== 'bowls' && cat.id !== 'containers' && cat.id !== 'trays' && <HelpCircle className="w-5 h-5" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-slate-800 leading-tight group-hover/item:text-teal-700">{cat.name}</h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{cat.description}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Manufacturing & Custom (Services Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors py-2 ${
                    ['oem', 'privatelabel', 'manufacturing'].includes(currentPage) ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>OEM & Manufacturing</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 space-y-1"
                    >
                      <button
                        onClick={() => navToPage('oem')}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                      >
                        <Settings className="w-5 h-5 text-teal-600 mt-0.5 group-hover:rotate-45 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-slate-800">OEM Customized Shapes</div>
                          <p className="text-xs text-slate-500 mt-0.5">3D prototyping & molding design.</p>
                        </div>
                      </button>
                      <button
                        onClick={() => navToPage('privatelabel')}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                      >
                        <FileText className="w-5 h-5 text-teal-600 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-slate-800">Private Label Manufacturing</div>
                          <p className="text-xs text-slate-500 mt-0.5">Custom bottom embossing and branding.</p>
                        </div>
                      </button>
                      <button
                        onClick={() => navToPage('manufacturing')}
                        className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start space-x-3 group"
                      >
                        <ShieldCheck className="w-5 h-5 text-teal-600 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-slate-800">Production Facility</div>
                          <p className="text-xs text-slate-500 mt-0.5">Our world-class zero-waste plants.</p>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Exports */}
              <button
                onClick={() => navToPage('exports')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'exports' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Exports
              </button>

              {/* Sustainability */}
              <button
                onClick={() => navToPage('sustainability')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'sustainability' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sustainability
              </button>

              {/* More Pages (FAQ, Blog, Certs, About) */}
              <button
                onClick={() => navToPage('about')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => navToPage('faq')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'faq' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FAQ
              </button>
            </div>

            {/* Actions (Search, Language, Quote Button) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Toggle */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.form
                      onSubmit={handleSearchSubmit}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 240 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white rounded-full border border-slate-200 overflow-hidden px-3 py-1 shadow-md"
                    >
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-xs text-slate-800 bg-transparent outline-none w-full py-1"
                        autoFocus
                      />
                      <button type="submit" className="text-teal-700">
                        <Search className="w-4 h-4" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Language Selector */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('languages')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors text-sm font-semibold">
                  <Globe className="w-4 h-4" />
                  <span>{currentLang}</span>
                </button>
                <AnimatePresence>
                  {activeDropdown === 'languages' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 top-full w-32 bg-white rounded-xl shadow-lg border border-slate-100 p-2 space-y-0.5 z-50"
                    >
                      {[
                        { code: 'EN', name: 'English' },
                        { code: 'ES', name: 'Español' },
                        { code: 'DE', name: 'Deutsch' },
                        { code: 'FR', name: 'Français' }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { setCurrentLang(lang.code); setActiveDropdown(null); }}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            currentLang === lang.code ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Request Quote Button */}
              <button
                onClick={onOpenQuoteModal}
                className="bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-700/10 transition-all duration-200"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Actions and Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-600"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-slate-50 border-b border-slate-100 px-4 py-3"
            >
              <form onSubmit={handleSearchSubmit} className="flex bg-white rounded-xl border border-slate-200 px-4 py-2">
                <input
                  type="text"
                  placeholder="Search 100% compostable products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="text-sm text-slate-800 bg-transparent outline-none w-full"
                />
                <button type="submit" className="text-teal-700">
                  <Search className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[64px] bottom-0 z-40 bg-white border-t border-slate-100 px-6 py-8 overflow-y-auto lg:hidden flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Company</span>
                {[
                  { id: 'home', label: 'Home Page' },
                  { id: 'about', label: 'About Our Manufacturing' },
                  { id: 'exports', label: 'Export & Shipping Logistics' },
                  { id: 'sustainability', label: 'Sustainability & Infographics' },
                  { id: 'faq', label: 'Frequently Asked Questions' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navToPage(item.id)}
                    className={`w-full text-left py-2.5 text-base font-semibold ${
                      currentPage === item.id ? 'text-teal-700' : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Capabilities</span>
                {[
                  { id: 'oem', label: 'OEM Custom Shaping' },
                  { id: 'privatelabel', label: 'Private Label branding' },
                  { id: 'manufacturing', label: 'Zero-Waste Facility' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => navToPage(item.id)}
                    className={`w-full text-left py-2.5 text-base font-semibold ${
                      currentPage === item.id ? 'text-teal-700' : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2 font-mono">Product Categories</span>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="text-left text-sm text-slate-600 hover:text-teal-700 py-1.5 font-medium"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Select Language</span>
                <div className="flex space-x-3 font-semibold text-slate-800">
                  {['EN', 'ES', 'DE', 'FR'].map((l) => (
                    <button 
                      key={l} 
                      onClick={() => setCurrentLang(l)}
                      className={currentLang === l ? 'text-teal-700 underline' : ''}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}
                className="w-full bg-teal-700 text-white text-center py-3.5 rounded-xl text-base font-bold hover:bg-teal-800 shadow-md transition-colors"
              >
                Get Container Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

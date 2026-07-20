import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, ArrowRight, FileText, Settings, ShieldCheck, HelpCircle, Disc, CupSoda, Package, Grid3X3, Coffee, PackageOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { categories } from '../data/products';
import logo2 from '../assets/images/2.png';

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

  const handleRequestQuoteClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById('home-contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 180);
    } else {
      const element = document.getElementById('home-contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
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
              className="flex items-center cursor-pointer group"
            >
              <img src={logo2} alt="Namya Logo" className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]" referrerPolicy="no-referrer" />
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
                  onClick={() => { navToPage('products'); onSelectCategory('all'); }}
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
                            {cat.id === 'plates' && <Disc className="w-5 h-5" />}
                            {cat.id === 'bowls' && <CupSoda className="w-5 h-5" />}
                            {cat.id === 'containers' && <Package className="w-5 h-5" />}
                            {cat.id === 'trays' && <Grid3X3 className="w-5 h-5" />}
                            {cat.id === 'cups' && <Coffee className="w-5 h-5" />}
                            {cat.id === 'takeaway' && <PackageOpen className="w-5 h-5" />}
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

              {/* Sourcing Link */}
              <button
                onClick={() => navToPage('manufacturing')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'manufacturing' ? 'text-teal-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sourcing
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

              {/* Request Quote Button */}
              <button
                onClick={handleRequestQuoteClick}
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
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Navigation</span>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'products', label: 'Products' },
                  { id: 'manufacturing', label: 'Sourcing' },
                  { id: 'sustainability', label: 'Sustainability' },
                  { id: 'about', label: 'About Us' },
                  { id: 'faq', label: 'FAQ' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'products') {
                        onSelectCategory('all');
                      }
                      navToPage(item.id);
                    }}
                    className={`w-full text-left py-2.5 text-base font-semibold ${
                      currentPage === item.id ? 'text-teal-700 font-bold' : 'text-slate-800'
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

            <div className="pt-8 border-t border-slate-100">
              <button
                onClick={() => { setMobileMenuOpen(false); handleRequestQuoteClick(); }}
                className="w-full bg-teal-700 text-white text-center py-3.5 rounded-xl text-base font-bold hover:bg-teal-800 shadow-md transition-colors"
              >
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

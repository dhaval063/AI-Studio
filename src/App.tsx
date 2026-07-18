/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Thermometer, Ban, Shield, Utensils, Layers, Globe, Sprout, Droplets } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import ContactSection from './components/ContactSection';
import ExtraPages from './components/ExtraPages';
import Footer from './components/Footer';
import SustainabilityInfo from './components/SustainabilityInfo';
import QuoteRequestModal from './components/QuoteRequestModal';
import Popups from './components/Popups';
import PlatesSKUView from './components/PlatesSKUView';
import BowlsSKUView from './components/BowlsSKUView';
import ContainersSKUView from './components/ContainersSKUView';
import TraysSKUView from './components/TraysSKUView';
import CupsSKUView from './components/CupsSKUView';
import TakeawaySKUView from './components/TakeawaySKUView';
import { categories, testimonials, faqs } from './data/products';

import platesImg from './assets/images/sugarcane_compartment_plate_1784290569010.jpg';
import bowlsImg from './assets/images/sugarcane_salad_bowls_1784290587244.jpg';
import containersImg from './assets/images/sugarcane_clamshell_box_1784290602529.jpg';
import traysImg from './assets/images/sugarcane_5comp_tray_1784290621851.jpg';
import cupsImg from './assets/images/sugarcane_hot_cup_1784290638862.jpg';
import cutleryImg from './assets/images/compostable_cutlery_set_1784290659429.jpg';

const homeCategories = [
  {
    id: 'plates',
    name: 'Plates',
    skus: '12 SKUs',
    description: 'Round • Oval • Square • Compartment',
    image: platesImg
  },
  {
    id: 'bowls',
    name: 'Bowls',
    skus: '9 SKUs',
    description: 'Soup, salad & serving bowls',
    image: bowlsImg
  },
  {
    id: 'containers',
    name: 'Containers',
    skus: '18 SKUs',
    description: 'Clamshells • Burger & lunch boxes',
    image: containersImg
  },
  {
    id: 'trays',
    name: 'Meal Trays',
    skus: '8 SKUs',
    description: 'Compartment trays for airlines & kitchens',
    image: traysImg
  },
  {
    id: 'cups',
    name: 'Cups & Lids',
    skus: '11 SKUs',
    description: 'Hot & cold, single & double wall',
    image: cupsImg
  },
  {
    id: 'takeaway',
    name: 'Takeaway Packaging',
    skus: '5 SKUs',
    description: 'Compostable rectangular containers & lids',
    image: containersImg
  }
];

const whyChooseUsFeatures = [
  {
    title: "100% Compostable",
    body: "Made from renewable sugarcane bagasse and naturally composts after disposal without leaving harmful residues.",
    tagline: "CERTIFIED COMPOSTABLE",
    icon: Sprout,
    colorClass: "bg-emerald-50 text-emerald-600 border-emerald-100/60 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
  },
  {
    title: "Leak & Oil Resistant",
    body: "Designed to handle hot, oily and liquid foods without soaking, leaking or losing strength.",
    tagline: "RELIABLE PERFORMANCE",
    icon: ShieldCheck,
    colorClass: "bg-sky-50 text-sky-600 border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600"
  },
  {
    title: "Microwave & Freezer Safe",
    body: "Suitable for both hot and cold food applications while maintaining excellent structural integrity.",
    tagline: "HOT & COLD READY",
    icon: Thermometer,
    colorClass: "bg-amber-50 text-amber-600 border-amber-100/60 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600"
  },
  {
    title: "Plastic-Free",
    body: "Free from plastic lining, PFAS and harmful chemicals for safer food packaging.",
    tagline: "PFAS & PLA FREE",
    icon: Ban,
    colorClass: "bg-rose-50 text-rose-600 border-rose-100/60 group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600"
  },
  {
    title: "Strong & Durable",
    body: "Rigid construction offers excellent strength for takeaway, catering and food service applications.",
    tagline: "HEAVY-DUTY DESIGN",
    icon: Shield,
    colorClass: "bg-slate-50 text-slate-700 border-slate-200/60 group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800"
  },
  {
    title: "Food Contact Safe",
    body: "Produced using food-grade materials suitable for direct contact with hot and cold foods.",
    tagline: "FOOD GRADE CERTIFIED",
    icon: Utensils,
    colorClass: "bg-teal-50 text-teal-600 border-teal-100/60 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600"
  },
  {
    title: "Lightweight & Stackable",
    body: "Optimized for efficient storage, transportation and lower logistics costs without compromising quality.",
    tagline: "LOGISTICS OPTIMIZED",
    icon: Layers,
    colorClass: "bg-indigo-50 text-indigo-600 border-indigo-100/60 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600"
  },
  {
    title: "Export Ready",
    body: "Designed for international buyers with reliable quality, bulk availability and export-friendly packaging.",
    tagline: "WORLDWIDE SUPPLY",
    icon: Globe,
    colorClass: "bg-violet-50 text-violet-600 border-violet-100/60 group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600"
  }
];


export default function App() {
  // Parse initial location on load safely
  const getInitialLocation = () => {
    try {
      const path = window.location.pathname;
      if (path === '/' || path === '/home' || path === '') {
        return { page: 'home', category: 'all' };
      } else if (path.startsWith('/products')) {
        const parts = path.split('/');
        if (parts.length > 2 && parts[2]) {
          return { page: 'products', category: parts[2] };
        }
        return { page: 'products', category: 'all' };
      } else {
        const page = path.replace('/', '');
        return { page: page || 'home', category: 'all' };
      }
    } catch (e) {
      return { page: 'home', category: 'all' };
    }
  };

  const initialLocation = getInitialLocation();
  const [currentPage, setCurrentPage] = useState<string>(initialLocation.page);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialLocation.category);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteModalCategory, setQuoteModalCategory] = useState<string | undefined>(undefined);
  const [quoteModalProductId, setQuoteModalProductId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (category?: string, productId?: string) => {
    setQuoteModalCategory(category);
    setQuoteModalProductId(productId);
    setIsQuoteModalOpen(true);
  };

  // Synchronize browser forward/back buttons safely if not inside an iframe
  useEffect(() => {
    let isInIframe = false;
    try {
      isInIframe = window.self !== window.top;
    } catch (e) {
      isInIframe = true;
    }

    if (isInIframe) return;

    const handleLocationChange = () => {
      try {
        const path = window.location.pathname;
        if (path === '/' || path === '/home' || path === '') {
          setCurrentPage('home');
        } else if (path.startsWith('/products')) {
          setCurrentPage('products');
          const parts = path.split('/');
          if (parts.length > 2 && parts[2]) {
            setSelectedCategory(parts[2]);
          } else {
            setSelectedCategory('all');
          }
        } else {
          const page = path.replace('/', '');
          if (page) setCurrentPage(page);
        }
      } catch (e) {
        // Ignore popstate failures
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Update URL path when React page state changes (safely guarded for iframes)
  useEffect(() => {
    let isInIframe = false;
    try {
      isInIframe = window.self !== window.top;
    } catch (e) {
      isInIframe = true;
    }

    if (isInIframe) return;

    try {
      let targetPath = '/';
      if (currentPage === 'home') {
        targetPath = '/';
      } else if (currentPage === 'products') {
        if (selectedCategory && selectedCategory !== 'all') {
          targetPath = `/products/${selectedCategory}`;
        } else {
          targetPath = '/products';
        }
      } else {
        targetPath = `/${currentPage}`;
      }

      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
    } catch (e) {
      // Ignore pushState failures
    }
  }, [currentPage, selectedCategory]);

  // Dynamic enterprise-level SEO tag &amp; Schema injection manager
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 1. Determine SEO parameters based on current page state
    let title = "Sugarcane Bagasse Tableware Manufacturer India | Namya Eco Pack";
    let desc = "Namya Eco Pack is an elite B2B manufacturer &amp; exporter of 100% compostable, PFAS-free sugarcane bagasse tableware, plates, bowls, and takeaway food packaging from India to USA, UK, Europe, UAE.";
    let canonical = "https://www.namyaecopack.com/";

    if (currentPage === 'home') {
      title = "Sugarcane Bagasse Tableware Manufacturer India | Namya Eco Pack";
      desc = "Namya Eco Pack is an elite B2B manufacturer &amp; exporter of 100% compostable, PFAS-free sugarcane bagasse tableware, plates, bowls, and takeaway food packaging from India to USA, UK, Europe, UAE.";
      canonical = "https://www.namyaecopack.com/";
    } else if (currentPage === 'products') {
      canonical = "https://www.namyaecopack.com/products";
      if (selectedCategory === 'plates') {
        title = "Biodegradable Sugarcane Plates Manufacturer &amp; Wholesaler | Namya Eco Pack";
        desc = "Wholesale disposable bagasse plates in round, square, oval, and compartment shapes. Premium unbleached &amp; white compostable plates from India.";
        canonical = "https://www.namyaecopack.com/products/plates";
      } else if (selectedCategory === 'bowls') {
        title = "Compostable Bagasse Bowls Manufacturer | Wholesale Eco Salad &amp; Soup Bowls";
        desc = "Exporting heavy-duty sugarcane bagasse salad bowls, soup bowls, and dessert cups in bulk. Certified food contact safe, leak-proof, microwave and freezer safe.";
        canonical = "https://www.namyaecopack.com/products/bowls";
      } else if (selectedCategory === 'containers') {
        title = "Sugarcane Bagasse Clamshell &amp; Hinged Meal Boxes Exporter | Namya Eco Pack";
        desc = "Bulk biodegradable burger clamshells, take-out lunchboxes, and multi-compartment containers. Sustainable, leak-resistant, PFAS-free, and plastic-free.";
        canonical = "https://www.namyaecopack.com/products/containers";
      } else if (selectedCategory === 'trays') {
        title = "Disposable Bagasse Meal Trays Manufacturer India | School &amp; Airline Trays";
        desc = "Wholesale 5-compartment, 4-compartment, and executive sugarcane compartment trays for airlines, hospitals, and institutional school catering.";
        canonical = "https://www.namyaecopack.com/products/trays";
      } else if (selectedCategory === 'cups') {
        title = "Sugarcane Cups &amp; Lids Manufacturer | Biodegradable Coffee Cups Wholesale";
        desc = "Eco-friendly bagasse hot and cold beverage cups and matching sugarcane pulp lids. Premium plastic-free, leak-resistant insulated drinkware.";
        canonical = "https://www.namyaecopack.com/products/cups";
      } else if (selectedCategory === 'takeaway') {
        title = "Compostable Takeaway Food Packaging &amp; Containers | Namya Eco Pack";
        desc = "Custom bulk rectangular sugarcane take-out boxes, food prep containers, and portion cups. Rigid, heavy-duty, leak-proof, and compostable.";
        canonical = "https://www.namyaecopack.com/products/takeaway";
      } else {
        title = "Bulk Compostable Food Packaging &amp; Tableware Catalog | Namya Eco Pack";
        desc = "Browse our export-ready sugarcane bagasse tableware catalog. Custom private label &amp; OEM manufacturing for wholesale plates, bowls, food containers, trays, cups, and takeaway boxes.";
      }
    } else if (currentPage === 'manufacturing') {
      title = "Advanced Sourcing &amp; Sourcing Plant Gujarat | Namya Eco Pack";
      desc = "Tour our state-of-the-art automated manufacturing facility in Ahmedabad, Gujarat. High-volume hydraulic molding, robotic trimming, and strict QC for B2B export.";
      canonical = "https://www.namyaecopack.com/manufacturing";
    } else if (currentPage === 'sustainability') {
      title = "100% Home Compostable &amp; Certified Eco-Friendly Materials | Namya Eco Pack";
      desc = "Discover the life cycle assessment (LCA) of sugarcane bagasse. 100% biodegradable, zero forest cutting, zero synthetic chemical coatings, and PFAS-free.";
      canonical = "https://www.namyaecopack.com/sustainability";
    } else if (currentPage === 'about') {
      title = "Certified Bagasse Tableware Manufacturer India | Namya Eco Pack About Us";
      desc = "Learn about Namya Eco Pack, India's leading producer and exporter of biodegradable sugarcane bagasse food packaging, serving 28+ countries with certified quality.";
      canonical = "https://www.namyaecopack.com/about";
    } else if (currentPage === 'oem') {
      title = "OEM Bagasse Tableware &amp; Sourcing Custom Mold Engineering | Namya Eco Pack";
      desc = "Bespoke shape engineering and high-volume custom production under strict NDAs. Rapid 3D CAD modeling and CNC mold tooling within 30 days.";
      canonical = "https://www.namyaecopack.com/oem";
    } else if (currentPage === 'privatelabel') {
      title = "Private Label Bagasse Products &amp; Custom Logo Embossing | Namya Eco Pack";
      desc = "Build your eco-friendly brand with our high-volume private label services. Custom logo embossing on sugarcane tableware and branded retail packaging.";
      canonical = "https://www.namyaecopack.com/privatelabel";
    } else if (currentPage === 'certificates') {
      title = "BPI Certified &amp; FDA Food Safe Sugarcane Tableware | Namya Eco Pack Certifications";
      desc = "View our international quality standards and lab test reports: BPI ASTM D6400, TÜV OK Compost HOME, BRCGS AA Grade, ISO 9001, ISO 14001, LFGB, and FDA.";
      canonical = "https://www.namyaecopack.com/certificates";
    } else if (currentPage === 'faq') {
      title = "Sugarcane Bagasse B2B Wholesale FAQs &amp; Shipping Information | Namya Eco Pack";
      desc = "Answers to 25+ detailed questions about sugarcane bagasse, certifications, MOQ, lead times, custom embossing, PFAS compliance, and international shipping.";
      canonical = "https://www.namyaecopack.com/faq";
    } else if (currentPage === 'blog') {
      title = "Sustainable Sourcing Insights &amp; Eco Packaging Blog | Namya Eco Pack";
      desc = "Stay updated with the latest in sustainable hospitality trends, biodegradable material science, global single-use plastic bans, and bulk shipping logistics.";
      canonical = "https://www.namyaecopack.com/blog";
    }

    // 2. Update Document Title
    document.title = title;

    // 3. Helper function to create or update meta tags
    const updateMetaTag = (nameAttr: string, valueAttr: string, contentVal: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Update Meta Description &amp; Robots
    updateMetaTag('name', 'description', desc);
    updateMetaTag('name', 'robots', 'index, follow');

    // Update Open Graph Tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', desc);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'og:type', currentPage === 'blog' ? 'article' : 'website');
    updateMetaTag('property', 'og:image', 'https://www.namyaecopack.com/og-image-pfas-free-bagasse.jpg');

    // Update Twitter Cards
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', desc);
    updateMetaTag('name', 'twitter:image', 'https://www.namyaecopack.com/og-image-pfas-free-bagasse.jpg');

    // 4. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 5. Inject Structured Data JSON-LD Schemas
    // Clear any previous JSON-LD elements
    const existingScripts = document.querySelectorAll('script[id^="seo-jsonld-"]');
    existingScripts.forEach(script => script.remove());

    const addJsonLdScript = (scriptId: string, dataObj: object) => {
      const script = document.createElement('script');
      script.id = `seo-jsonld-${scriptId}`;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(dataObj);
      document.head.appendChild(script);
    };

    // Global Org Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.namyaecopack.com/#organization",
      "name": "Namya Eco Pack",
      "url": "https://www.namyaecopack.com",
      "logo": "https://www.namyaecopack.com/logo-teal.png",
      "sameAs": [
        "https://www.linkedin.com/company/namyaecopack",
        "https://www.facebook.com/namyaecopack"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7041969067",
        "contactType": "sales",
        "email": "sales@namyaecopack.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    };
    addJsonLdScript('org', orgSchema);

    // Global Local Business Schema (Ahmedabad Plant)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.namyaecopack.com/#localbusiness",
      "name": "Namya Eco Pack",
      "image": "https://www.namyaecopack.com/og-image-pfas-free-bagasse.jpg",
      "telephone": "+917041969067",
      "email": "sales@namyaecopack.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sourcing and Manufacturing Zone, Ahmedabad",
        "addressLocality": "Ahmedabad",
        "addressRegion": "Gujarat",
        "postalCode": "380001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.0225",
        "longitude": "72.5714"
      },
      "url": "https://www.namyaecopack.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    };
    addJsonLdScript('local', localBusinessSchema);

    // Page-specific Schemas
    if (currentPage === 'home') {
      // Website Schema with SearchAction
      addJsonLdScript('website', {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.namyaecopack.com/#website",
        "url": "https://www.namyaecopack.com",
        "name": "Namya Eco Pack",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.namyaecopack.com/products?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      });
    }

    // Breadcrumb Schema
    const breadcrumbList: any[] = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.namyaecopack.com/"
      }
    ];

    if (currentPage !== 'home') {
      if (currentPage === 'products') {
        breadcrumbList.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://www.namyaecopack.com/products"
        });
        if (selectedCategory && selectedCategory !== 'all') {
          breadcrumbList.push({
            "@type": "ListItem",
            "position": 3,
            "name": selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1),
            "item": `https://www.namyaecopack.com/products/${selectedCategory}`
          });
        }
      } else {
        breadcrumbList.push({
          "@type": "ListItem",
          "position": 2,
          "name": currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
          "item": `https://www.namyaecopack.com/${currentPage}`
        });
      }
    }

    addJsonLdScript('breadcrumb', {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    });

    // FAQ Page Schema
    if (currentPage === 'faq') {
      const faqSchemaItems = faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }));
      addJsonLdScript('faq', {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchemaItems
      });
    }

    // Product Schema (for products subcategories)
    if (currentPage === 'products') {
      const categoryTitles: Record<string, string> = {
        plates: "Sugarcane Bagasse Plates",
        bowls: "Compostable Bagasse Bowls",
        containers: "Bagasse Clamshell & Hinged Containers",
        trays: "Disposable Bagasse Meal Trays",
        cups: "Sugarcane Cups & Pulp Lids",
        takeaway: "Sugarcane Takeaway Packaging Boxes"
      };
      
      const currentCatName = selectedCategory && selectedCategory !== 'all' ? categoryTitles[selectedCategory] || "Sugarcane Bagasse Tableware" : "Sugarcane Bagasse Tableware & Food Packaging";
      const currentCatDesc = selectedCategory && selectedCategory !== 'all' ? `Premium, heavy-duty B2B wholesale ${currentCatName} manufactured by Namya Eco Pack. 100% compostable, water and oil resistant, microwave safe, and completely PFAS-free.` : desc;
      
      addJsonLdScript('product', {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `https://www.namyaecopack.com/products/${selectedCategory || 'all'}#product`,
        "name": currentCatName,
        "image": "https://www.namyaecopack.com/og-image-pfas-free-bagasse.jpg",
        "description": currentCatDesc,
        "brand": {
          "@type": "Brand",
          "name": "Namya Eco Pack"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "0.01",
          "highPrice": "0.15",
          "offerCount": "1000",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "0.02",
            "priceCurrency": "USD",
            "referenceQuantity": {
              "@type": "QuantitativeValue",
              "value": "1",
              "unitCode": "C62"
            }
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        }
      });
    }

  }, [currentPage, selectedCategory]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setCurrentPage('products');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory('all');
    setCurrentPage('products');
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-14 pb-14">
            {/* Cinematic Hero Segment */}
            <Hero 
              setCurrentPage={setCurrentPage} 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
            
            {/* Organic Product Categories Overview Grid */}
            <section id="home-categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Our Renewable Offerings</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Compostable Solutions for Every Food Type
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Engineered with robust physical integrity, oil-soak proof water-resistance, and custom mechanical support ribs to replace plastic seamlessly.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {homeCategories.map((cat) => (
                  <div 
                    id={`category-card-${cat.id}`}
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="bg-white border border-slate-200/70 rounded-[28px] p-3 hover:border-teal-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                  >
                    <div className="aspect-[4/3.8] rounded-2xl overflow-hidden bg-slate-50 relative">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-4 px-2 pb-2 flex justify-between items-end">
                      <div className="space-y-1 pr-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-widest leading-none">{cat.skus}</span>
                        <h4 className="text-lg font-bold text-slate-900 leading-none group-hover:text-teal-700 transition-colors">{cat.name}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight pt-1">{cat.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-teal-700 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Namya EcoPack Section */}
            <section id="home-why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 mb-16 text-left">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">
                  WHY CHOOSE NAMYA ECOPACK
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
                  Why international buyers choose <span className="text-teal-700 italic font-serif font-medium">Namya EcoPack.</span>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-3xl leading-relaxed">
                  Premium compostable food packaging designed for performance, sustainability and reliable global supply.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUsFeatures.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-200/60 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between h-full hover:shadow-lg hover:border-teal-300/80 transition-all duration-300 group"
                    >
                      <div className="space-y-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border ${feat.colorClass || "bg-teal-50/70 border-teal-100/50 text-teal-600"}`}>
                          <IconComponent className="w-5 h-5 stroke-[1.75]" />
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900 tracking-tight">{feat.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">{feat.body}</p>
                      </div>
                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center">
                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest font-mono group-hover:text-teal-700 transition-colors">{feat.tagline}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Interactive ESG Impact offsets Block */}
            <section id="home-sustainability" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Environmental Metrics</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  A High-Impact Circular Alternative
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Switching to agricultural sugarcane bagasse immediately prevents deforestation and offsets high-volume plastic waste.
                </p>
              </div>
              <SustainabilityInfo />
            </section>

            {/* Client Testimonials Carousel Section */}
            <section id="home-testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Global Corporate Trust</span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Our Partners Say</h2>
                <p className="text-slate-500 text-xs sm:text-sm">Feedback from high-volume importers, airlines, and hospitality procurement divisions across North America, Europe, and Australia.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t) => (
                  <div 
                    id={`testimonial-card-${t.id}`}
                    key={t.id} 
                    className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-teal-300 hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex space-x-1 text-amber-500 text-sm">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed italic">"{t.text}"</p>
                    </div>
                    <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-slate-50">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-10 h-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-[11px] leading-tight">
                        <p className="font-bold text-slate-900">{t.name}</p>
                        <p className="text-slate-400 mt-0.5">{t.role}</p>
                        <p className="text-teal-700 font-medium mt-0.5">{t.company} ({t.country})</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Direct Contact trade questionnaire */}
            <section id="home-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-100">
              <ContactSection />
            </section>
          </div>
        );
      case 'products':
        if (selectedCategory === 'plates' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <PlatesSKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'bowls' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <BowlsSKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'containers' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <ContainersSKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'trays' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <TraysSKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'cups' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <CupsSKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (selectedCategory === 'takeaway' && searchQuery === '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <TakeawaySKUView 
                onOpenQuoteModal={handleOpenQuoteModal}
                onBackToCatalog={() => setSelectedCategory('all')}
              />
            </div>
          );
        }
        if (searchQuery !== '') {
          return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">B2B Spec Sheet Catalog</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                  Search Our Sustainable Tableware Range
                </h2>
              </div>
              <ProductCatalog 
                initialCategory={selectedCategory} 
                onOpenQuoteModal={handleOpenQuoteModal}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onCategoryChange={handleSelectCategory}
              />
            </div>
          );
        }
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
            {/* 1. Custom Brand-Focused Intro Section */}
            <div className="border-b border-slate-100 pb-12 max-w-4xl">
              <div className="space-y-5">
                <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono bg-teal-50 px-3 py-1.5 rounded-full inline-block">
                  Premium Eco-Packaging Solutions
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  High-Precision Sustainable Tableware for Global Markets
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Namya Eco-Pack is a premier global manufacturer and exporter of 100% compostable sugarcane bagasse food packaging and tableware. We offer an extensive, export-ready portfolio of high-precision SKUs across six major categories, including Plates, Bowls, Meal Trays, Takeaway Containers, Clamshells, and Cups with matching Lids. Available in clean white and organic natural kraft finishes, our products are engineered to meet the rigorous quality standards of international food service, retail networks, HoReCa, global airlines, catering providers, QSR chains, and private label brands.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span>100% Sugarcane Bagasse</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span>FDA & BRCGS Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <span>Zero Plastic & PFAS-Free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Responsive Product Category Grid */}
            <div className="space-y-8">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Select a Product Category</h3>
                <p className="text-slate-500 text-sm">
                  Click on any category card below to browse our standard size specs, FCL pack ratios, and technical certifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {homeCategories.map((cat) => (
                  <div 
                    id={`products-category-card-${cat.id}`}
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    className="bg-white border border-slate-200/80 rounded-[28px] p-3 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full"
                  >
                    <div className="aspect-[4/3.4] rounded-2xl overflow-hidden bg-slate-50 relative">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="mt-4 px-2 pb-2 flex justify-between items-end">
                      <div className="space-y-1 pr-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase tracking-widest leading-none">{cat.skus}</span>
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-none group-hover:text-teal-700 transition-colors">{cat.name}</h4>
                        <p className="text-[11px] text-slate-400 leading-tight pt-1">{cat.description}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 group-hover:bg-teal-700 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'manufacturing':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Gujarat Automated Sourcing Facility</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Advanced Automated Sourcing & Supply
              </h2>
            </div>
            <SustainabilityInfo />
          </div>
        );

      case 'sustainability':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest font-mono">Verified LCA Statistics</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
                Sustainably Sourced, Swift Composting
              </h2>
            </div>
            <SustainabilityInfo />
          </div>
        );
      case 'about':
      case 'oem':
      case 'privatelabel':
      case 'faq':
      case 'blog':
      case 'certificates':
        return <ExtraPages pageId={currentPage} onOpenQuoteModal={handleOpenQuoteModal} />;
      default:
        return (
          <div className="text-center py-32 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Page not found</h2>
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-teal-700 font-bold hover:underline"
            >
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col justify-between">
      {/* Dynamic Header */}
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenQuoteModal={handleOpenQuoteModal}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />

      {/* Main Content Viewport */}
      <main id="app-main-content" className="flex-grow pt-16">
        {renderPageContent()}
      </main>

      {/* Footer Branding Columns */}
      <Footer 
        setCurrentPage={setCurrentPage}
        onOpenQuoteModal={handleOpenQuoteModal}
        onSelectCategory={handleSelectCategory}
      />

      {/* Interactive Global Cargo Pricing Overlay */}
      <QuoteRequestModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialCategory={quoteModalCategory}
        initialProductId={quoteModalProductId}
      />

      {/* Promotional Popups, WhatsApp CTA desk and ribbon offsets */}
      <Popups 
        onOpenQuoteModal={handleOpenQuoteModal}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

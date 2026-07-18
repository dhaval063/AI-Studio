import { Product, ProductCategory, Certification, Testimonial, FAQItem, BlogItem } from '../types';

export const categories: ProductCategory[] = [
  {
    id: 'plates',
    name: 'Sugarcane Plates',
    description: 'Ultra-rigid, water and oil resistant round, oval, and square plates for luxury catering and events.',
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=600&auto=format&fit=crop',
    icon: 'Disc'
  },
  {
    id: 'bowls',
    name: 'Compostable Bowls',
    description: 'Heavy-duty soup and meal bowls with secure matching bagasse or leak-proof PET lids.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=600&auto=format&fit=crop',
    icon: 'CupSoda'
  },
  {
    id: 'containers',
    name: 'Clamshell Containers',
    description: 'Single and multi-compartment hinged lid boxes ideal for burger chains, food trucks, and deliveries.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
    icon: 'Package'
  },
  {
    id: 'trays',
    name: 'Compartment Meal Trays',
    description: 'Ergonomic multi-cavity trays designed for airlines, institutional catering, and cloud kitchens.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    icon: 'Grid3X3'
  },
  {
    id: 'cups',
    name: 'Sugarcane Cups & Lids',
    description: 'Double-walled insulated hot and cold beverage cups made from organic bagasse with tight-sealing lids.',
    image: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0c6b?q=80&w=600&auto=format&fit=crop',
    icon: 'Coffee'
  },
  {
    id: 'takeaway',
    name: 'Takeaway Packaging',
    description: 'High-performance leak-resistant rectangular containers, portion cups, and tight-fitting compostable lids.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop',
    icon: 'PackageOpen'
  }
];

export const products: Product[] = [
  // Plates
  {
    id: 'round-plate-9',
    name: '9" Premium Bagasse Round Plate',
    category: 'plates',
    image: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?q=80&w=600&auto=format&fit=crop',
    description: 'Elegant heavyweight round plate, ideal for full course meals. Crafted from 100% renewable sugarcane fibers with reinforced rim to prevent bending or leaking.',
    features: ['100% Biodegradable & Compostable', 'Microwave (up to 120°C) and Freezer safe', 'Oil-resistant and Water-resistant', 'No chemical coating or PFAS added'],
    specs: {
      material: '100% Unbleached Sugarcane Bagasse',
      dimensions: 'Ø 225 mm x H 20 mm',
      weight: '15.0g ± 0.5g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Fine Dining Catering', 'Outdoor Corporate Events', 'Cafés and Restaurants', 'Quick Service Food Chains'],
    isFeatured: true
  },
  {
    id: 'oval-plate-12',
    name: '12" Heavy-Duty Bagasse Oval Plate',
    category: 'plates',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=600&auto=format&fit=crop',
    description: 'Extra-large elegant oval platter designed for banquets, grill platters, buffet style servings, and high-end events.',
    features: ['Extreme structural strength', 'Elegant textured matte premium finish', '100% plastic-free sugarcane pulp', 'Soak proof material'],
    specs: {
      material: '100% Sugarcane Bagasse (Bleached / Unbleached)',
      dimensions: '318 mm x 255 mm x H 22 mm',
      weight: '26.0g ± 1.0g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Banqueting and Buffet Services', 'Seafood and Grill Platters', 'Luxury Resorts', 'Aviation Meals']
  },
  {
    id: 'square-plate-8',
    name: '8" Modernist Bagasse Square Plate',
    category: 'plates',
    image: 'https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=600&auto=format&fit=crop',
    description: 'A contemporary square profile plate featuring clean minimalist lines and a premium tactile texture, popular among European distributors.',
    features: ['Modern Scandinavian structural aesthetic', 'Waterproof up to 100°C hot water', 'Perfect for architectural canapés and sushi', 'Meets OK Compost EN13432 standard'],
    specs: {
      material: 'Organic Sugarcane Fiber Bagasse',
      dimensions: '200 mm x 200 mm x H 15 mm',
      weight: '13.5g ± 0.5g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Artisan Bistros', 'Premium Cocktail Receptions', 'Corporate Gatherings', 'Food Festivals']
  },
  {
    id: 'compartment-plate-3',
    name: '10" 3-Compartment Premium Bagasse Plate',
    category: 'plates',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
    description: 'Sectioned layout plate designed to prevent flavor crossover. Widely imported for university cafeterias, schools, hospitals, and fast-food chains.',
    features: ['High partitions to separate hot/cold items', 'Staggering load capacity', 'Completely bleach-free organic brown fiber option', 'Chemical-free heat sealing'],
    specs: {
      material: '100% Natural Compostable Bagasse',
      dimensions: 'Ø 260 mm x H 21 mm',
      weight: '21.0g ± 0.8g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['School and University Dinings', 'Hospital Catering', 'Fast Food Outlets', 'B2B Wholesale Importers'],
    isFeatured: true
  },

  // Bowls
  {
    id: 'bowl-12oz',
    name: '12oz / 350ml Salad & Soup Bowl',
    category: 'bowls',
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop',
    description: 'Perfect multipurpose bowl for hot soups, oatmeal, side dishes, and ice creams. Double heat-pressed to offer maximum insulation.',
    features: ['Insulating thermal material', 'Rigid design prevents collapse under high heat', 'Available with matching Bagasse or clear PET lids', 'Certified FDA Food Contact Safe'],
    specs: {
      material: 'Premium Sugarcane Bagasse Fiber',
      dimensions: 'Ø 135 mm x H 46 mm',
      weight: '10.0g ± 0.3g',
      packingDetails: '125 Pcs / Pack, 8 Packs / Carton',
      qtyPerPack: '125 Pcs',
      qtyPerCarton: '1000 Pcs'
    },
    applications: ['Aviation and Train Catering', 'Cafeterias', 'Soup Kitchens', 'Gourmet Delis']
  },
  {
    id: 'bowl-24oz',
    name: '24oz / 700ml Organic Meal Bowl',
    category: 'bowls',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=600&auto=format&fit=crop',
    description: 'Generously-sized bowl ideal for salads, Buddha bowls, ramen, and full takeout meals. Seamless tight lock mechanism prevents spillages.',
    features: ['Extra deep side walls', 'Textured grip on outer shell', 'Excellent stability on flat surfaces', 'Bio-degrades in under 90 days in home compost'],
    specs: {
      material: '100% Eco Sugarcane Fiber',
      dimensions: 'Ø 175 mm x H 67 mm',
      weight: '18.0g ± 0.5g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Poke Bowl Chains', 'Ramen Takeaways', 'Vegan cloud kitchens', 'Premium food chains'],
    isFeatured: true
  },

  // Containers
  {
    id: 'clamshell-burger',
    name: '6" Premium Burger Clamshell Box',
    category: 'containers',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
    description: 'Our world-famous burger box. Ergonomic closure locks firmly, and specialized natural bagasse material absorbs condensation to keep burgers crispy.',
    features: ['Smart-lock closure tabs', 'Anti-sogginess design through fiber breathability', 'Stackable structure', 'Heavy-duty hinge line'],
    specs: {
      material: '100% Compostable Sugarcane Bagasse',
      dimensions: '152 mm x 152 mm x H 78 mm (Hinged)',
      weight: '18.5g ± 0.5g',
      packingDetails: '125 Pcs / Pack, 4 Packs / Carton',
      qtyPerPack: '125 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Artisan Burger Chains', 'Food Trucks', 'Premium QSR Brands', 'Global Fast Food Networks'],
    isFeatured: true
  },
  {
    id: 'clamshell-3comp',
    name: '9" 3-Compartment Hinged Meal Box',
    category: 'containers',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop',
    description: 'Perfect B2B export item. 3 independent spaces with a fully attached hinged lid, replacing traditional styrofoam/plastic lunchboxes completely.',
    features: ['Replaces toxic EPS Styrofoam packaging', 'Firm tabs prevent accidental opens', 'Extreme cut and oil resistance', 'FDA compliance certificate'],
    specs: {
      material: 'High-density Sugarcane Bagasse',
      dimensions: '228 mm x 228 mm x H 80 mm',
      weight: '40.0g ± 1.5g',
      packingDetails: '50 Pcs / Pack, 5 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '250 Pcs'
    },
    applications: ['Takeaway Deliveries', 'Corporate Office Lunches', 'Aviation Meals', 'Global Retail Importers']
  },

  // Trays
  {
    id: 'meal-tray-5c',
    name: '5-Compartment Executive Meal Tray',
    category: 'trays',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop',
    description: 'Executive tray with 5 distinct chambers for curries, desserts, salads, and rice. Highly favored for corporate catering and airline service.',
    features: ['High barrier ridges', 'Perfect for institutional heavy loading', 'No odor, completely organic taste preservation', 'Saves space - nestable packaging design'],
    specs: {
      material: 'Sugarcane Bagasse Pulp',
      dimensions: '280 mm x 220 mm x H 30 mm',
      weight: '28.0g ± 1.0g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Aviation Catering', 'Corporate Lunch Catering', 'Hospitals and Hostels', 'Indian Curry Takeouts'],
    isFeatured: true
  },

  // Takeaway
  {
    id: 'rectangular-container-750',
    name: '750ml Premium Takeaway Rectangular Container',
    category: 'takeaway',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop',
    description: 'Sophisticated food container, optimized for packing hot pasta, stir-fries, or sushi. Highly stackable with crystal-clear rPET lid options.',
    features: ['High-resistance rim prevents lid slip', 'Elegant rectangular form factor', 'Microwaveable base', 'Leak-resistant lock edge'],
    specs: {
      material: '100% Biodegradable Sugarcane Bagasse',
      dimensions: '230 mm x 135 mm x H 45 mm',
      weight: '19.0g ± 0.5g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Premium Cloud Kitchens', 'Delis and Supermarket Salad Bars', 'Meal Prep Companies', 'Hotel Takeout Services']
  },

  // Cups
  {
    id: 'bagasse-cup-12oz',
    name: '12oz Premium Sugarcane Beverage Cup',
    category: 'cups',
    image: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0c6b?q=80&w=600&auto=format&fit=crop',
    description: 'Double-pressed organic bagasse cup with heat protective grip layers. Far more eco-friendly than standard PE-lined paper cups.',
    features: ['Completely plastic-free internal barrier', 'Retains hot beverages (coffee/tea) without soggy breakdown', 'Comfortable matte outer texture', 'Matching compostable pulp sugarcane lids'],
    specs: {
      material: '100% Bleach-free Sugarcane Pulps',
      dimensions: 'Ø 90 mm x H 110 mm',
      weight: '12.0g ± 0.4g',
      packingDetails: '50 Pcs / Pack, 20 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '1000 Pcs'
    },
    applications: ['Specialty Coffee Shops', 'Eco Cafés', 'Aviation Hot Beverage Service', 'Exhibitions and Large Arenas']
  },

  // Takeaway
  {
    id: 'rectangular-container-500',
    name: '500ml Sugarcane Takeaway Container',
    category: 'takeaway',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=600&auto=format&fit=crop',
    description: 'Premium base for single-portion meals, side dishes, stir-fries, and premium desserts. Crafted from 100% renewable sugarcane fibers.',
    features: ['100% Biodegradable & Compostable', 'Microwave (up to 120°C) and Freezer safe', 'Oil-resistant and Water-resistant', 'Extremely high structural rigidity'],
    specs: {
      material: '100% Sugarcane Bagasse Pulp',
      dimensions: '180 mm x 125 mm x H 45 mm',
      weight: '14.0g ± 0.5g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Single Portion Food Delivery', 'Gourmet Cafes', 'Salad Bars', 'Catering Buffets']
  },
  {
    id: 'takeaway-lid-9x5',
    name: 'Universal Rectangular Sugarcane Lid',
    category: 'takeaway',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop',
    description: 'Fits our 750ml, 1000ml, and 2-Compartment container range perfectly. Patented leak-resistant double lock lip seals tightly.',
    features: ['Double-tight snap lock mechanism', 'Steam resistant, prevents condensation build-up', '100% compostable agricultural fiber', 'Zero plastic coatings'],
    specs: {
      material: '100% Sugarcane Bagasse (Home Compostable)',
      dimensions: '235 mm x 140 mm x H 10 mm',
      weight: '8.0g ± 0.3g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Meal Deliveries', 'Premium Takeout Outlets', 'Cloud Kitchen Operations', 'Safe Food Logistics']
  },

  // Custom Pack
  {
    id: 'oem-custom-mould',
    name: 'Custom OEM Shape Molded Solution',
    category: 'custom',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    description: 'Tailor-made packaging solution built according to your precise dimensional drawings. Includes 3D CAD modeling, custom engraving, and secure corporate supply tooling.',
    features: ['Custom structural embossing (brand logos)', 'Engineered specifically for your food delivery boxes', '3D design and rapid prototyping under NDA', 'Mass supply scale (over 5M units monthly)'],
    specs: {
      material: 'Sugarcane Bagasse & Wheatstraw Fiber blend',
      dimensions: 'Tailormade to Client Specifications',
      weight: 'Custom Weight Class',
      packingDetails: 'Custom protective palletized seaworthy packing',
      qtyPerPack: 'Custom',
      qtyPerCarton: 'Custom bulk container load'
    },
    applications: ['Multinational Franchise Brands', 'Premium Cosmetic Protective Packaging', 'Industrial Eco Cushions', 'Electronics Compostable Inserts'],
    isFeatured: true
  }
];

export const certifications: Certification[] = [
  { id: 'bpi', name: 'BPI Certified Compostable', code: 'ASTM D6400 / D6868', authority: 'Biodegradable Products Institute (USA)', description: 'Confirms that products biodegrade entirely in commercial composting facilities leaving no synthetic residues.', badgeColor: 'bg-emerald-800' },
  { id: 'okcompost', name: 'OK Compost HOME / INDUSTRIAL', code: 'EN 13432', authority: 'TÜV AUSTRIA (Europe)', description: 'Guarantees standard European biodegradation performance under both home compost heap and commercial composting conditions.', badgeColor: 'bg-teal-700' },
  { id: 'fda', name: 'FDA Food Contact Safe', code: '21 CFR 176.170', authority: 'U.S. Food and Drug Administration', description: 'Certifies that our organic bagasse sugarcane packaging contains zero harmful chemical coatings and is entirely non-toxic for high-heat food contact.', badgeColor: 'bg-slate-800' },
  { id: 'brc', name: 'BRCGS Global Standard AA Grade', code: 'Issue 6 Global Standard', authority: 'British Retail Consortium Global Standards', description: 'Awarded AA Grade for hygiene and product safety management within our partner sugarcane processing facilities.', badgeColor: 'bg-lime-700' },
  { id: 'iso', name: 'ISO 9001 & ISO 14001', code: 'QMS & EMS Standards', authority: 'SGS International Certifications', description: 'Specifies international requirements for high-quality B2B quality supply management alongside meticulous eco-environmental protection.', badgeColor: 'bg-blue-900' },
  { id: 'fsc', name: 'FSC Chain of Custody', code: 'FSC-C124356', authority: 'Forest Stewardship Council', description: 'Assures that agricultural byproducts and additional pulp fibers used are harvested from responsibly-managed source forestry.', badgeColor: 'bg-emerald-700' },
  { id: 'sgs', name: 'SGS Heavy Metal Free', code: 'EU Directive 94/62/EC', authority: 'SGS Testing Labs', description: 'Independent scientific testing verifying our material contains 0% heavy metals, Fluorine, or chlorine chemical agents.', badgeColor: 'bg-orange-700' },
  { id: 'lfgb', name: 'LFGB German Food Safe', code: 'LFGB Section 30 & 31', authority: 'TÜV Rheinland (Germany)', description: 'Passes rigid sensory odor and taste testing, ensuring absolutely no transfer of organic material properties from tray to food.', badgeColor: 'bg-amber-800' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Director of Global Procurement',
    company: 'Evergreen Food Services Inc.',
    country: 'United States',
    text: 'Namya EcoPack has completely transformed our supply chain. Their 6" burger boxes and plates have zero leak issues, even with hot greasy burgers. When importing multiple FCLs (Full Container Loads), their consistency in quality and flawless export documentation has saved us weeks in customs clearance.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Charlotte Dubois',
    role: 'Head of Brand Sustainability',
    company: 'Noveau Bistro Group',
    country: 'France',
    text: 'European compostability laws are incredibly strict. Namya’s OK Compost EN13432 certification from TÜV Austria allowed us to seamless deploy their square plates and meal trays across 140 bistro outlets in France and Germany. Our consumers love the luxurious unbleached organic feel.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Alistair Ross',
    role: 'Managing Director & Founder',
    company: 'Pacific EcoDistributors',
    country: 'Australia',
    text: 'We do high volume wholesaling. Working with Namya on Private Label OEM sourcing was smooth. They created our custom embossed plates within 30 days of CAD signoff. Meticulous laboratory testing reports and premium container loading make them a world-class strategic partner.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Tariq Al-Mansoori',
    role: 'Procurement Specialist',
    company: 'Emirates Catering Hub',
    country: 'United Arab Emirates',
    text: 'In airline catering, weight, stacking precision, and temperature retention are non-negotiable. Namya’s 5-compartment executive meal trays fit our service carts perfectly. Their team communicates on WhatsApp instantly and handles shipping logistics like a true multinational corporate partner.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-moq',
    question: 'What is your Minimum Order Quantity (MOQ) for international export?',
    answer: 'Our standard Minimum Order Quantity (MOQ) for export is 1 x 20ft Full Container Load (FCL), which can consist of mixed items (e.g., plates, bowls, clamshell containers). For custom OEM shapes or custom logo embossing, the MOQ is typically 100,000 units per product mold. However, we do support trial orders and LCL shipments for qualified global distributors starting their first import cycle.',
    category: 'moq'
  },
  {
    id: 'faq-lead',
    question: 'What is the supply and transit lead time for ocean freight?',
    answer: 'Standard supply lead time is 15 to 25 days from the receipt of deposit and design approval. Ocean transit from India to North America/Europe ranges between 20 to 35 days depending on the destination port. We provide complete tracking, automated shipping manifestos, and real-time container loading reports directly to our clients on WhatsApp/Email.',
    category: 'production'
  },
  {
    id: 'faq-custom',
    question: 'Can you supply custom shapes and do private label branding?',
    answer: 'Yes, absolutely. OEM and Private Label Sourcing is a core pillar of our company. We can emboss your brand logo directly onto the bottom of any plate, bowl, or box. We also design entirely custom-molded sustainable shapes. Our partner engineering teams design 3D CAD files, coordinate the high-precision CNC tooling, and run sample batches under NDA within 30 days.',
    category: 'customization'
  },
  {
    id: 'faq-export',
    question: 'What export terms and documentations do you provide?',
    answer: 'We export under standard Incoterms including FOB, CIF, CFR, and DDP depending on client requirements. We handle and provide complete export documentation: Certificate of Origin, Phytosanitary Certificate, FDA Compliance Declaration, SGS Lab Test Reports, Bill of Lading, Packing List, and Commercial Invoice. All containers are vacuum-sealed and moisture-proofed with high-grade desiccant gel bags.',
    category: 'export'
  },
  {
    id: 'faq-pfas',
    question: 'Are your products PFAS-free and water/oil-proof?',
    answer: 'Yes, all our sugarcane bagasse food packaging is 100% PFAS-free (per- and polyfluoroalkyl substances). We utilize a premium organic vegetable-based extraction formulation that provides excellent water proofing (up to 100°C) and hot-oil resistance (up to 120°C) without relying on synthetic plastic coatings, fluorine, or toxic chemical binders.',
    category: 'general'
  },
  {
    id: 'faq-samples',
    question: 'How can I request product samples before placing a container order?',
    answer: 'We provide complimentary sample kits containing our standard plates, bowls, and clamshells to registered corporate buyers, distributors, and hotel procurement managers worldwide. While the samples are free of charge, we request clients to provide their DHL, FedEx, or UPS account number to cover courier freight costs. Sample kits are prepared and dispatched within 48 hours.',
    category: 'general'
  }
];

export const blogs: BlogItem[] = [
  {
    id: 'b-1',
    title: 'The Circular Economy: Why Sugarcane Bagasse Beats Recycled Paper and PLA',
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'Sustainability',
    excerpt: 'Explore the carbon footprint, land use, and degradation speeds of sugarcane bagasse packaging versus paper pulp and corn-starch PLA alternatives.',
    content: 'As global single-use plastic bans intensify, food chains are scrambling to find authentic sustainable alternatives. Recycled paper often contains toxic ink residues and requires heavy chemical bleaching, while PLA (polylactic acid) only degrades under strict, high-heat industrial compost parameters, rendering them virtually non-compostable in ocean waters or domestic backyard settings. Sugarcane bagasse is the fibrous waste leftover from sugar extraction—a pure agricultural byproduct. It requires zero extra agricultural land, uses low processing water, and disintegrates entirely in home compost soil in under 90 days, feeding nutrients back to the earth. Namya EcoPack utilizes a zero-waste closed loop sourcing system where steam is re-captured and solar grids power 40% of our molding lines, establishing our bagasse as the absolute greenest tableware on earth.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b-2',
    title: 'A B2B Guide to Global Customs & Certifications for Biodegradable Imports',
    date: 'May 15, 2026',
    readTime: '8 min read',
    category: 'Export Logistics',
    excerpt: 'Navigating European Union Single-Use Plastic (SUP) directives, American ASTM D6400 regulations, and FDA clearance rules without delays.',
    content: 'Importing eco-friendly tableware in high volumes is highly lucrative but requires strict regulatory compliance. The EU Single Use Plastic Directive bans certain PLA coatings entirely, requiring certified 100% home compostable natural fiber marks. In the United States, BPI (Biodegradable Products Institute) certification is essential to sell into municipal catering contracts and premium food chains. At Namya EcoPack, we ensure every FCL is accompanied by accredited lab sheets detailing ASTM D6400, EN 13432, and FDA compliance. This guide details how to correctly classify your custom bagasse products on custom manifest sheets, minimizing duty tariffs and avoiding holding delays at Rotterdam, Hamburg, Los Angeles, or Melbourne ports.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop'
  }
];

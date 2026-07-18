import { Product, ProductCategory, Certification, Testimonial, FAQItem, BlogItem } from '../types';

// Import high-resolution bowl and container assets
import bowl12 from '../assets/images/products/bowls/12-oz.png';
import bowl24 from '../assets/images/products/bowls/24-oz.png';
import clamshell6 from '../assets/images/products/containers/6-6.png';
import clamshell9_3cp from '../assets/images/products/containers/9-9-3cp.png';
import clamshell7New from '../assets/images/products/containers/7-inch.png';
import clamshell10_3cpNew from '../assets/images/products/containers/10-3cp.png';
import tray2 from '../assets/images/products/trays/2cp.png';
import tray4 from '../assets/images/products/trays/4cp.png';

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
    image: bowl12,
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
    image: bowl24,
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
    image: clamshell6,
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
    image: clamshell9_3cp,
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
  {
    id: 'clamshell-7-new',
    name: '7" Clamshell',
    category: 'containers',
    image: clamshell7New,
    description: 'Mid-size square takeout classic. Perfect for heavy sandwiches, small salads, fries, pastries, and general snack packaging.',
    features: ['Smart-lock closure tabs', 'Stackable design', 'Extreme cut and oil resistance', 'FDA compliance certificate'],
    specs: {
      material: '100% Compostable Sugarcane Bagasse',
      dimensions: '365 × 165 × 43 mm',
      weight: '28g',
      packingDetails: '50 Pcs / Pack, 6 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '300 Pcs'
    },
    applications: ['Bakeries', 'Cafes & Bistros', 'Snack Bar Outlets']
  },
  {
    id: 'clamshell-10-3-new',
    name: '10" 3CP Clamshell',
    category: 'containers',
    image: clamshell10_3cpNew,
    description: 'Extra-large 3-compartment dining box. Seamless high dividers prevent food crossing over, making it the perfect choice for healthy food combinations.',
    features: ['Replaces toxic EPS Styrofoam packaging', 'Firm tabs prevent accidental opens', 'Extreme cut and oil resistance', 'FDA compliance certificate'],
    specs: {
      material: 'High-density Sugarcane Bagasse',
      dimensions: '510 × 255 × 48 mm',
      weight: '52g',
      packingDetails: '50 Pcs / Pack, 4 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '200 Pcs'
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
  {
    id: 'meal-tray-2c',
    name: '2-Compartment Bento Tray',
    category: 'trays',
    image: tray2,
    description: 'Compact 2-compartment tray designed for combo breakfast deliveries and snack combinations with main elements separated.',
    features: ['Keeps primary dish and side item separate', 'Water & oil resistant up to 120°C', 'Eco-friendly alternative to plastic bento boxes', 'Microwaveable and freezer safe'],
    specs: {
      material: '100% Compostable Sugarcane Bagasse',
      dimensions: '220 × 150 × 40 mm',
      weight: '20 g',
      packingDetails: '50 Pcs / Pack, 10 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '500 Pcs'
    },
    applications: ['Bento Combo Meals', 'Quick Breakfast Deliveries', 'Corporate Catering', 'Snack Bars']
  },
  {
    id: 'meal-tray-4c',
    name: '4-Compartment Dining Tray',
    category: 'trays',
    image: tray4,
    description: 'Executive canteen bestseller featuring a wide central compartment and three secondary cavities for a complete meal presentation.',
    features: ['High division walls to prevent sauce crossover', 'Rigid design prevents spilling under heavy load', 'Perfect for HoReCa and university dining halls', 'Certified 100% compostable and biodegradable'],
    specs: {
      material: '100% Compostable Sugarcane Bagasse',
      dimensions: '265 × 210 × 30 mm',
      weight: '28 g',
      packingDetails: '50 Pcs / Pack, 5 Packs / Carton',
      qtyPerPack: '50 Pcs',
      qtyPerCarton: '250 Pcs'
    },
    applications: ['School & University Dining', 'Corporate Canteens', 'Hospitals', 'Platter Deliveries']
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
    id: 'faq-what-is-bagasse',
    question: 'What is bagasse and how is it defined?',
    answer: 'Bagasse is the fibrous waste matter that remains after sugarcane stalks are crushed to extract their juice. Historically treated as a waste crop, bagasse is now upcycled into high-strength organic fibers used as the primary raw material for manufacturing biodegradable, compostable food packaging and natural tableware.',
    category: 'general'
  },
  {
    id: 'faq-what-is-sugarcane-bagasse',
    question: 'What is sugarcane bagasse and how is it sourced?',
    answer: 'Sugarcane bagasse is the specific agricultural byproduct pulp sourced from sugar refinery mills. At Namya Eco Pack, we source our sugarcane fibers directly from the fertile agricultural sugar belts of Gujarat, India. This ensures a clean, renewable, closed-loop supply chain that upcycles what would otherwise be open-burned, reducing carbon emissions and avoiding virgin deforestation.',
    category: 'general'
  },
  {
    id: 'faq-biodegradable',
    question: 'Are bagasse products biodegradable?',
    answer: 'Yes, sugarcane bagasse products are 100% biodegradable. Unlike single-use plastics that fragment into harmful microplastics, bagasse products naturally degrade into safe organic matter under normal environmental exposure without leaving toxic residues in land or water.',
    category: 'general'
  },
  {
    id: 'faq-compostable',
    question: 'Are bagasse products compostable?',
    answer: 'Yes, all our sugarcane bagasse tableware is certified compostable under international standards. They carry certified OK Compost HOME and OK Compost INDUSTRIAL marks (TÜV Austria, compliance EN 13432) as well as BPI Certification (ASTM D6400 / D6868). This ensures they biodegrade safely back into nutrient-rich compost soil.',
    category: 'general'
  },
  {
    id: 'faq-decomposition-time',
    question: 'How long do bagasse products take to decompose?',
    answer: 'In a professional commercial composting facility, sugarcane bagasse products will decompose entirely in under 60 to 90 days. In a domestic back-garden home compost heap, they typically break down in 90 to 120 days depending on local humidity, warmth, and biological activity levels.',
    category: 'production'
  },
  {
    id: 'faq-microwave-safe',
    question: 'Are bagasse plates and containers microwave safe?',
    answer: 'Yes, our sugarcane bagasse tableware is completely microwave safe and freezer safe. They can safely handle extreme high-heat food service applications up to 120°C (248°F) in microwaves without buckling, melting, or releasing harmful vapors, and can hold food securely in freezer storage down to -20°C.',
    category: 'general'
  },
  {
    id: 'faq-freezer-safe',
    question: 'Are bagasse products freezer safe?',
    answer: 'Yes, our organic sugarcane food containers and bowls are safe for long-term freezer storage. They maintain their physical rigidity and structural integrity down to -20°C without cracking, structural warping, or developing freeze sogginess when defrosted.',
    category: 'general'
  },
  {
    id: 'faq-food-safe',
    question: 'Are bagasse products certified food safe?',
    answer: 'Absolutely. All Namya Eco Pack sugarcane tableware is certified 100% food-grade and safe for direct food contact. Our products are fully tested and compliant with US FDA 21 CFR 176.170, European LFGB standards (TÜV Rheinland), and hold an AA-Grade certification under BRCGS Global Standards for absolute food safety hygiene.',
    category: 'general'
  },
  {
    id: 'faq-pfas-free',
    question: 'Are your products PFAS-free and PLA-free?',
    answer: 'Yes, all products manufactured by Namya Eco Pack are 100% PFAS-free (per- and polyfluoroalkyl substances) and PLA-free. We rely on high-precision heat molding and specialized organic moisture barriers rather than fluorinated chemicals or plastic linings to achieve premium grease and oil resistance.',
    category: 'general'
  },
  {
    id: 'faq-hot-food',
    question: 'Can hot food and boiling liquids be served in bagasse containers?',
    answer: 'Yes, our heavy-duty compostable bowls and deep plates are designed to hold boiling hot soups, curries, and gravies up to 100°C (212°F) without leaking or deforming. The thermal insulation properties of sugarcane fiber keep food hot while remaining comfortable to hold on the outside.',
    category: 'general'
  },
  {
    id: 'faq-oily-food',
    question: 'Can oily or greasy food be served on sugarcane bagasse plates?',
    answer: 'Yes, all our disposable bagasse plates, trays, and boxes undergo a proprietary double heat-press process that ensures superior grease and oil resistance up to 120°C. They do not leak, soak through, or soften even when serving deep-fried items, high-fat sauces, or butter-rich cuisines.',
    category: 'general'
  },
  {
    id: 'faq-export-process',
    question: 'What is your international B2B export process and trade terms?',
    answer: 'We operate as an experienced global export partner, supplying full containers to over 28+ countries. Our standard trade terms include FOB (Mundra or Pipavav Port, India), CIF, CFR, and DDP. We handle the complete export process: container stuffing, custom clearance, phytosanitary checks, certificate of origin, and prompt sea-freight dispatch.',
    category: 'export'
  },
  {
    id: 'faq-oem-custom',
    question: 'Do you offer OEM customized shape engineering?',
    answer: 'Yes, we are a leading OEM bagasse manufacturer. Our engineering team can develop custom molds according to your specific 3D CAD blueprints. We handle the entire cycle from CAD modeling, high-precision CNC tooling of chrome steel molds, sample prototype dispatch in 15 days, to high-volume commercial production.',
    category: 'customization'
  },
  {
    id: 'faq-private-label',
    question: 'What are your private label branding and embossing capabilities?',
    answer: 'We provide extensive private label services for global retail brands and wholesale distributors. We can emboss your brand logo directly onto the bottom of our sugarcane tableware using high-precision mold inserts, and custom-print the outer retail boxes and sleeves according to your packaging artwork.',
    category: 'customization'
  },
  {
    id: 'faq-moq',
    question: 'What is your Minimum Order Quantity (MOQ) for global shipments?',
    answer: 'Our standard Minimum Order Quantity (MOQ) for B2B export is 1 x 20ft Full Container Load (FCL). A single container can be loaded with a mix of different SKUs (e.g., plates, bowls, trays, takeaway boxes). For custom OEM molds or custom-branded embossing, the minimum runs start at 100,000 units per product mold.',
    category: 'moq'
  },
  {
    id: 'faq-lead-time',
    question: 'What is your standard production lead time?',
    answer: 'Standard production lead time is 15 to 25 days from deposit confirmation and design sign-off. Ocean freight transit varies by destination port (typically 15-20 days to Europe/UAE, and 25-35 days to USA/Canada). We maintain a highly optimized facility in Gujarat to guarantee prompt dispatch and stable year-round supply.',
    category: 'production'
  },
  {
    id: 'faq-certifications',
    question: 'What international quality certifications do you hold?',
    answer: 'Our state-of-the-art partner manufacturing facility holds international certifications including BPI (ASTM D6400 / D6868), TÜV Austria OK Compost HOME & INDUSTRIAL (EN 13432), BRCGS AA-Grade, ISO 9001, ISO 14001, SGS Heavy Metal Free, and FDA food-grade compliance.',
    category: 'general'
  },
  {
    id: 'faq-shipping-ports',
    question: 'Which ports do you ship from in India?',
    answer: 'We ship primarily from Mundra Port and Pipavav Port in Gujarat, India. Both are ultra-modern, deep-water ports offering direct, high-frequency weekly ocean shipping routes to major international hubs like Rotterdam, Hamburg, New York, Los Angeles, Melbourne, Jebel Ali, and Singapore.',
    category: 'export'
  },
  {
    id: 'faq-custom-cartons',
    question: 'Can you supply custom branded outer shipping cartons?',
    answer: 'Yes, we can print custom-branded, high-strength double-wall corrugated outer cartons with your logo, barcodes, SKU labels, and language text. This facilitates immediate delivery to your wholesale warehouses, QSR chains, or retail distribution centers.',
    category: 'customization'
  },
  {
    id: 'faq-bagasse-vs-plastic',
    question: 'What is the key difference between sugarcane bagasse and plastic?',
    answer: 'While single-use petroleum plastics take up to 500 years to break down and contaminate soils with toxic chemicals, sugarcane bagasse is a 100% bio-based agricultural byproduct that returns to the soil as nutrient-rich compost in 90 days. Bagasse also has a 60% lower carbon footprint during production.',
    category: 'general'
  },
  {
    id: 'faq-bagasse-vs-paper',
    question: 'What is the key difference between bagasse and wood paper?',
    answer: 'Wood paper tableware requires cutting down virgin trees (contributing to deforestation) and consumes heavy amounts of bleach and water. Sugarcane bagasse utilizes agricultural waste sugarcane pulp, saving forests, requiring zero extra crop land, and offering superior water and heat insulation.',
    category: 'general'
  },
  {
    id: 'faq-bagasse-vs-pla',
    question: 'What is the key difference between bagasse and corn-starch PLA?',
    answer: 'Corn-starch PLA (polylactic acid) requires commercial industrial composting facilities with temperatures exceeding 58°C to degrade and remains highly stable in landfills. Sugarcane bagasse is home-compostable, meaning it will break down in domestic backyard garden compost piles at normal ambient temperatures.',
    category: 'general'
  },
  {
    id: 'faq-sustainability-value',
    question: 'How does using bagasse support global corporate ESG targets?',
    answer: 'By replacing plastic and polystyrene with bagasse tableware, companies immediately achieve their ESG (Environmental, Social, and Governance) targets. It eliminates carbon footprints, stops landfill trash, and fulfills strict national single-use plastic ban policies across USA, Europe, UK, and Australia.',
    category: 'general'
  },
  {
    id: 'faq-recycling',
    question: 'Can sugarcane bagasse products be recycled?',
    answer: 'While bagasse fibers can technically be pulped in paper recycling streams, their highest environmental benefit is achieved through organic composting. Since food packaging is often contaminated with grease and food waste, it is rejected by paper recyclers; composting accepts food waste seamlessly, converting both into farm soil.',
    category: 'general'
  },
  {
    id: 'faq-composting-process',
    question: 'How does the composting process work for your tableware?',
    answer: 'Our tableware is digested by soil microorganisms (bacteria and fungi) under standard composting conditions. It breaks down into carbon dioxide, water, and organic humus in under 90 days, returning carbon and nitrogen safely to agricultural soil cycles.',
    category: 'general'
  },
  {
    id: 'faq-manufacturing-steps',
    question: 'What is the step-by-step manufacturing process of sugarcane plates?',
    answer: 'The raw bagasse is pulped, screened, and refined to create an organic slurry. This slurry is hot-pressed in high-tonnage hydraulic molding systems at 200°C to form plates, bowls, or trays. The items are then trimmed of excess edge material, inspected under automated UV cameras, sterilized, and vacuum packed.',
    category: 'production'
  },
  {
    id: 'faq-quality-control',
    question: 'How do you ensure consistent premium product quality for export?',
    answer: 'Namya Eco Pack operates with rigorous quality control audits. We inspect every batch for weight tolerance, dimensional accuracy, oil resistance (up to 120°C for 30 mins), and leak resistance. Products are UV-sterilized and packed in heavy-duty polybags and export-grade 5-ply cartons to survive long sea transits.',
    category: 'production'
  },
  {
    id: 'faq-why-namya',
    question: 'Why choose Namya Eco Pack as your long-term B2B supply partner?',
    answer: 'Namya Eco Pack stands out as India’s elite bagasse tableware exporter. We offer competitive factory-direct pricing, 24/7 client support on WhatsApp, state-of-the-art automated manufacturing, certified international standards compliance (BPI, BRCGS, OK Compost), and reliable shipping to over 28 countries.',
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
  },
  {
    id: 'b-3',
    title: 'Understanding PFAS-Free Tableware: Compliance & Material Science',
    date: 'April 02, 2026',
    readTime: '7 min read',
    category: 'Material Science',
    excerpt: 'A deep look into how chemical-free moisture barriers prevent soaking without using synthetic fluorine or toxic forever chemicals.',
    content: 'Environmental and health departments worldwide are cracking down on PFAS (per- and polyfluoroalkyl substances) in food-contact packaging. Historically, these chemicals were applied to wood paper and cheap bagasse molds to block moisture. Today, California Assembly Bill 1200 and European REACH guidelines ban fluorinated materials outright. At Namya Eco Pack, our manufacturing facility utilizes a proprietary heat-pressing mechanical alignment combined with biological organic water barriers. This ensures our sugarcane plates, soup bowls, and meal trays pass SGS tests with absolute 0% fluorine content, protecting your consumers and satisfying all upcoming green import rules.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
  }
];

export const futureBlogIdeas: string[] = [
  "Comprehensive Cost Analysis of Bagasse Tableware vs PLA vs Polystyrene",
  "How FDA 21 CFR 176.170 Regulates Sugarcane Packaging Imports",
  "Understanding ASTM D6400 Composting Compliance in United States Sourcing",
  "A B2B Guide to Marine Biodegradation of Agricultural Fiber Tableware",
  "The Rise of Green Catering: Fulfilling Airlines ESG Sourcing Guidelines",
  "How QSR Chains Benefit from Private Label Sugarcane Containers",
  "Top 10 Indian Ports for Fast Sea-Freight Shipping to European Centers",
  "The Environmental Life Cycle (LCA) of Sugarcane Bagasse Tableware",
  "Why Bagasse Plates Fulfill BRCGS AA Grade Food Hygiene Protocols",
  "How to Custom Design and Protype Blueprints for OEM Sugarcane Molds",
  "Navigating European Single-Use Plastic (SUP) Tableware Bans in 2026",
  "Why Hotels are Replacing Paperboard Plates with Unbleached Bagasse Platters",
  "The Chemistry of PFAS-Free Moisture and Grease Barriers in Pulp Tableware",
  "Home Composting vs Industrial Composting: What B2B Buyers Must Know",
  "FCL vs LCL: Optimizing Ocean Freight Logistics for Bulk Eco Sourcing",
  "How Agricultural Waste Upcycling Prevents Massive Carbon Emissions",
  "Why Custom Embossed Logos on Bagasse Platters Boost Franchise Loyalty",
  "The Ultimate School & Hospital Catering Guide to Compostable Meal Trays",
  "Selecting the Right Sugarcane Bagasse Bowl for Hot Soup Deliveries",
  "A Guide to Natural Kraft Brown vs Bleached White Bagasse Finishes",
  "How Corporate Offices Lower Waste Disposal Costs via Green Tableware",
  "Meeting LFGB Odor & Sensory Transfer Guidelines in Germany Sourcing",
  "Why Heavy-Duty Sugarcane Clamshells Outperform Corrugated Burger Boxes",
  "The Economics of Private Label Sugarcane Tableware for Retail Supermarkets",
  "How Agricultural Biomass Can Save Millions of Trees from Clear-cutting",
  "A Step-by-Step Guide to Importing Agricultural Fiber Packaging from India",
  "What is BPI Certification and Why is it Essential for US Wholesale Bids?",
  "How UV Sterilization Ensures Absolute Hygiene in Bagasse Production",
  "Why Composting Tableware Closes the Global Agricultural Nutrient Loop",
  "Comparing Sugarcane Pulp, Wheat Straw, and Bamboo Fibers for Plates",
  "How to Avoid Sggy Warp in Takeaway Containers: Partitions and Ribs",
  "Navigating Custom Duties and HSN Tariff Codes for Compostable Imports",
  "Why Airlines Worldwide are Adopting Compact 5-Compartment Meal Trays",
  "The Science Behind Sugarcane Fiber Tensile Rigidity & Stacking Strengths",
  "Reducing Cargo Shipping Damage: Vacuum-Wrapped Pallet Sourcing Hacks",
  "How to Market Your Restaurant's Plastic-Free Transition to Customers",
  "The Role of Sugarcane Bagasse in Fulfilling UK Green Premium Directives",
  "Why OK Compost HOME is the Most Rigorous Biodegradation Standard",
  "Custom Molding CAD Prototyping: Blueprints to Physical Samples in 15 Days",
  "How Natural Sugarcane Tableware Enhances Gourmet Food Presentation",
  "A Complete B2B Sourcing Guide to Bulk Sustainable Takeaway Packaging",
  "Understanding the Global Market Expansion of Biodegradable Food Containers",
  "Why Hospital Patient Meal Service Prefers Rigid Biodegradable Bowls",
  "The True Cost of Polystyrene Food Trays vs Premium Bagasse Slabs",
  "How Sugarcane Fiber Prevents Condensation Dampness in Burger Boxes",
  "A Checklist for Auditing Sugarcane Tableware Factory Hygiene and Safety",
  "How Sustainable Tableware Minimizes Municipal Surcharge Landfill Taxes",
  "Private Label sleeve Design: Elevating B2B Retail Sourcing Shelves",
  "Exploring the Carbon Offsetting Potentials of Sugar Refinery Byproducts",
  "Why Food Festival Caterers Require Bulk Biodegradable Sugarcane Plates"
];

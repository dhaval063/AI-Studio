import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Download, FileText, ChevronRight, Calculator, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form States
  const [selectedCategory, setSelectedCategory] = useState('plates');
  const [selectedProductId, setSelectedProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(100000); // units
  const [shippingMode, setShippingMode] = useState<'20fcl' | '40fcl' | 'lcl' | 'air'>('20fcl');
  const [incoterm, setIncoterm] = useState('fob');
  const [destinationPort, setDestinationPort] = useState('');
  
  const [customEmboss, setCustomEmboss] = useState(false);
  const [customCarton, setCustomCarton] = useState(false);
  const [pulpType, setPulpType] = useState<'natural' | 'bleached'>('natural');

  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    requirements: ''
  });

  const activeProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Calculated Mock Factors
  const cartonQty = parseInt(activeProduct.specs.qtyPerCarton) || 500;
  const unitWeightGrams = parseFloat(activeProduct.specs.weight) || 15.0;
  const totalCartons = Math.ceil(quantity / cartonQty);
  const totalWeightKg = Math.round((quantity * unitWeightGrams) / 1000);
  const totalCbm = parseFloat(((totalCartons * 0.054)).toFixed(2)); // mock 0.054 CBM per carton
  
  // Lead times based on quantity and customization
  const baseLeadTime = 15;
  const customLeadTime = (customEmboss ? 5 : 0) + (customCarton ? 3 : 0) + Math.ceil(quantity / 200000);
  const estimatedLeadTimeDays = baseLeadTime + customLeadTime;

  // Pricing Model (mock high-volume tier)
  const baseUnitPrice = 0.064; // $0.064 per unit
  const customizationCharge = (customEmboss ? 0.005 : 0) + (customCarton ? 0.003 : 0);
  const volumeDiscount = quantity > 500000 ? 0.008 : quantity > 200000 ? 0.004 : 0;
  const calculatedUnitPrice = parseFloat((baseUnitPrice + customizationCharge - volumeDiscount).toFixed(4));
  const totalEstimatedCost = parseFloat((calculatedUnitPrice * quantity).toFixed(2));

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setQuantity(100000);
    setCompanyDetails({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      requirements: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-2xl border border-slate-100"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">B2B Cargo & Pricing Calculator</h3>
                <p className="text-xs text-slate-500">Calculate shipping weight, packaging capacity and request a formal quote.</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Indicators */}
          {!submitted && (
            <div className="bg-slate-50 px-8 py-3 border-b border-slate-100 flex justify-between items-center text-xs text-slate-500 font-semibold font-mono">
              <div className="flex items-center space-x-6">
                <span className={step === 1 ? 'text-teal-700 font-bold underline' : ''}>1. Product & Volume</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={step === 2 ? 'text-teal-700 font-bold underline' : ''}>2. OEM Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={step === 3 ? 'text-teal-700 font-bold underline' : ''}>3. Corporate Bio</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                <span className={step === 4 ? 'text-teal-700 font-bold underline' : ''}>4. Estimate Invoice</span>
              </div>
              <span className="text-slate-400">Step {step}/4</span>
            </div>
          )}

          {/* Scrollable Form Content */}
          <div className="flex-grow p-6 sm:p-8 overflow-y-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4 max-w-md mx-auto space-y-6"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto border border-emerald-100">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight">Quotation Requested!</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Thank you. Your request ID **NY-2026-9482** has been registered. An export executive from our Gujarat sourcing office will contact you within **12 business hours** with a final proforma invoice.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-left space-y-2.5 text-xs">
                  <p className="font-semibold text-slate-800 uppercase tracking-wider font-mono">Quotation Summary</p>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Product:</span>
                    <span className="font-medium text-slate-900">{activeProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Order Quantity:</span>
                    <span className="font-medium text-slate-900">{quantity.toLocaleString()} Pcs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">FOB Estimated Unit Price:</span>
                    <span className="font-medium text-teal-700">${calculatedUnitPrice} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Supply Lead:</span>
                    <span className="font-medium text-slate-900">{estimatedLeadTimeDays} days</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={onClose}
                    className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Close Portal
                  </button>
                  <button
                    onClick={resetForm}
                    className="border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center space-x-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Calculate Another</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: PRODUCT & QUANTITY */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 font-mono">1. Select Product Category</label>
                        <select
                          value={selectedCategory}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            const filtered = products.filter(p => p.category === e.target.value);
                            if (filtered.length > 0) setSelectedProductId(filtered[0].id);
                          }}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 outline-none bg-white font-medium"
                        >
                          <option value="plates">Sugarcane Plates</option>
                          <option value="bowls">Compostable Bowls</option>
                          <option value="containers">Clamshell Containers</option>
                          <option value="trays">Compartment Meal Trays</option>
                          <option value="takeaway">Takeaway Packaging</option>
                          <option value="cups">Sugarcane Cups & Lids</option>
                          <option value="cutlery">Heavy-Duty Cutlery</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 font-mono">2. Select Product Type</label>
                        <select
                          value={selectedProductId}
                          onChange={(e) => setSelectedProductId(e.target.value)}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-teal-500 outline-none bg-white font-medium"
                        >
                          {products
                            .filter((p) => p.category === selectedCategory)
                            .map((p) => (
                              <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4">
                      <img 
                        src={activeProduct.image} 
                        alt={activeProduct.name} 
                        className="w-16 h-16 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-xs">
                        <p className="font-bold text-slate-800">{activeProduct.name}</p>
                        <p className="text-slate-500 mt-1 line-clamp-1">{activeProduct.description}</p>
                        <p className="text-teal-700 font-mono font-bold mt-1">Weight: {activeProduct.specs.weight} | Packing: {activeProduct.specs.packingDetails}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <label className="font-bold text-slate-600 uppercase tracking-widest font-mono">3. Select Units (Minimum B2B Trial: 50k)</label>
                        <span className="text-teal-700 font-mono font-bold text-sm bg-teal-50 px-2.5 py-1 rounded-md">{quantity.toLocaleString()} Pcs</span>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="2000000"
                        step="50000"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-700"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>50k (LCL Load)</span>
                        <span>250k (20ft FCL)</span>
                        <span>500k</span>
                        <span>1M (40HQ Container)</span>
                        <span>2M+ (Multi-HQ)</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: OEM CUSTOMIZATION & PORT */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest font-mono">1. Custom Branding Options</label>
                        
                        <label className="flex items-start space-x-3 p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={customEmboss}
                            onChange={(e) => setCustomEmboss(e.target.checked)}
                            className="mt-1 accent-teal-700 w-4 h-4 rounded"
                          />
                          <div className="text-xs">
                            <p className="font-bold text-slate-800">Emboss Custom Logo</p>
                            <p className="text-slate-500 mt-0.5">Engrave your brand icon directly onto the bottom mold of each plate (+ $0.005/unit).</p>
                          </div>
                        </label>

                        <label className="flex items-start space-x-3 p-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={customCarton}
                            onChange={(e) => setCustomCarton(e.target.checked)}
                            className="mt-1 accent-teal-700 w-4 h-4 rounded"
                          />
                          <div className="text-xs">
                            <p className="font-bold text-slate-800">Custom Inner/Carton Print</p>
                            <p className="text-slate-500 mt-0.5">Full color printed retail shrink wrap sleeves and outer export cartons (+ $0.003/unit).</p>
                          </div>
                        </label>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 font-mono">2. Sugarcane Pulp Color</label>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setPulpType('natural')}
                              className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all ${
                                pulpType === 'natural' 
                                  ? 'border-teal-700 bg-teal-50 text-teal-800' 
                                  : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                              }`}
                            >
                              Natural Unbleached Brown
                            </button>
                            <button
                              type="button"
                              onClick={() => setPulpType('bleached')}
                              className={`py-3 px-4 rounded-xl border text-xs font-semibold text-center transition-all ${
                                pulpType === 'bleached' 
                                  ? 'border-teal-700 bg-teal-50 text-teal-800' 
                                  : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                              }`}
                            >
                              Bleached Super White
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 font-mono">3. Incoterm</label>
                            <select
                              value={incoterm}
                              onChange={(e) => setIncoterm(e.target.value)}
                              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:border-teal-500 outline-none bg-white font-medium"
                            >
                              <option value="fob">FOB Mundra Port, India</option>
                              <option value="cif">CIF Port of Destination</option>
                              <option value="cfr">CFR Port of Destination</option>
                              <option value="ddp">DDP Store Door Delivery</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1.5 font-mono">4. Destination Port</label>
                            <input
                              type="text"
                              placeholder="e.g., Rotterdam, LA, Sydney"
                              value={destinationPort}
                              onChange={(e) => setDestinationPort(e.target.value)}
                              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:border-teal-500 outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: COMPANY DETAILS */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4 animate-fadeIn"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">Contact Person</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Alistair Ross"
                          value={companyDetails.name}
                          onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })}
                          className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">Corporate Email</label>
                        <input
                          type="email"
                          required
                          placeholder="procurement@foodbrand.com"
                          value={companyDetails.email}
                          onChange={(e) => setCompanyDetails({ ...companyDetails, email: e.target.value })}
                          className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">Company Legal Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Pacific EcoDistributors Ltd"
                          value={companyDetails.company}
                          onChange={(e) => setCompanyDetails({ ...companyDetails, company: e.target.value })}
                          className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">Destination Country</label>
                        <input
                          type="text"
                          required
                          placeholder="Australia"
                          value={companyDetails.country}
                          onChange={(e) => setCompanyDetails({ ...companyDetails, country: e.target.value })}
                          className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">WhatsApp Number (for instant load tracking updates)</label>
                      <input
                        type="tel"
                        placeholder="e.g., +61 412 345 678"
                        value={companyDetails.phone}
                        onChange={(e) => setCompanyDetails({ ...companyDetails, phone: e.target.value })}
                        className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 uppercase tracking-widest mb-1 font-mono">Special Directives & Port Instructions</label>
                      <textarea
                        rows={3}
                        placeholder="Any additional specific instructions (e.g. customized logo CAD drawings, pallet wrap instructions, moisture barrier bags requested)."
                        value={companyDetails.requirements}
                        onChange={(e) => setCompanyDetails({ ...companyDetails, requirements: e.target.value })}
                        className="w-full text-xs border border-slate-200 rounded-xl px-4 py-2.5 focus:border-teal-500 outline-none resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: REAL-TIME CARGO RESULT & PDF MOCK */}
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {/* Invoice visual */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4 font-mono text-xs relative overflow-hidden">
                      {/* Diagonal watermark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] rotate-45 pointer-events-none select-none text-slate-900 font-bold text-4xl">
                        ESTIMATE PROFORMA
                      </div>

                      <div className="flex justify-between items-start border-b border-slate-200 pb-3">
                        <div>
                          <p className="font-bold text-slate-900">NAMYA ECOPACK PVT LTD</p>
                          <p className="text-[10px] text-slate-500">Mundra SEZ Export Zone, Guj, IN</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-teal-800">PROFORMA INVOICE</p>
                          <p className="text-[10px] text-slate-500">REF: #NY-2026-9482</p>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-[11px]">
                        <p><span className="text-slate-500">CLIENT  :</span> <span className="font-bold text-slate-800">{companyDetails.company || 'Pacific EcoDistributors'}</span></p>
                        <p><span className="text-slate-500">PORT    :</span> <span className="font-bold text-slate-800">{destinationPort || 'MUNDRA PORT, INDIA'}</span></p>
                        <p><span className="text-slate-500">CARGO   :</span> <span className="font-bold text-slate-800">{quantity.toLocaleString()} Pcs of {activeProduct.name}</span></p>
                        <p><span className="text-slate-500">PULP    :</span> <span className="font-bold text-slate-800 uppercase">{pulpType} organic fiber</span></p>
                      </div>

                      <div className="border-t border-b border-dashed border-slate-300 py-3 space-y-1 text-slate-800">
                        <div className="flex justify-between">
                          <span>Base Value:</span>
                          <span>${(baseUnitPrice * quantity).toFixed(2)} USD</span>
                        </div>
                        {(customEmboss || customCarton) && (
                          <div className="flex justify-between text-teal-800">
                            <span>OEM Custom Addons:</span>
                            <span>+ ${(customizationCharge * quantity).toFixed(2)} USD</span>
                          </div>
                        )}
                        {quantity > 200000 && (
                          <div className="flex justify-between text-emerald-800">
                            <span>Volume Discount:</span>
                            <span>- ${(volumeDiscount * quantity).toFixed(2)} USD</span>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center text-sm font-bold pt-1">
                        <span className="text-slate-900">ESTIMATED FOB TOTAL:</span>
                        <span className="text-teal-700 font-bold">${totalEstimatedCost.toLocaleString()} USD</span>
                      </div>
                      
                      <div className="text-[10px] text-slate-400 text-center pt-2">
                        *Subject to active raw bagasse fiber rates. Formal corporate invoice will be sent over email/whatsapp.
                      </div>
                    </div>

                    {/* Logistics specs */}
                    <div className="space-y-5">
                      <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono">Seaworthy Shipping Specifications</h4>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100/50 text-xs">
                          <p className="text-slate-500">Total Weight</p>
                          <p className="text-base font-bold text-slate-800 mt-1">{totalWeightKg.toLocaleString()} Kg</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">({(totalWeightKg/1000).toFixed(2)} Metric Tons)</p>
                        </div>
                        <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100/50 text-xs">
                          <p className="text-slate-500">Total Volume</p>
                          <p className="text-base font-bold text-slate-800 mt-1">{totalCbm} CBM</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">Approx {totalCartons} Cartons</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 text-xs col-span-2">
                          <p className="text-slate-500">FCL Container Fit Analysis</p>
                          <p className="text-sm font-bold text-teal-800 mt-1">
                            {totalCbm > 58 ? 'Requires 40ft HQ FCL Container' : totalCbm > 28 ? 'Perfect 20ft GP FCL Load' : `LCL / Consolidation (Fills ${Math.round((totalCbm/28)*100)}% of 20ft FCL)`}
                          </p>
                          <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                            <div className="bg-teal-700 h-full rounded-full" style={{ width: `${Math.min((totalCbm/68)*100, 100)}%` }} />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-slate-900 text-white rounded-2xl flex items-start space-x-3">
                        <ShieldCheck className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-bold">Sourcing & Supply Lead Time: ~{estimatedLeadTimeDays} Days</p>
                          <p className="text-slate-300 mt-1">Includes precision tooling CAD mockup, sample physical proof, hydraulic heat sourcing, post-dry, metal detection safety and vacuum bulk wrapping.</p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-teal-700 hover:bg-teal-800 text-white text-center py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-teal-700/10 flex items-center justify-center space-x-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Submit Final Request for Quotation</span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Footer Controls */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center space-x-1"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Previous Step</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1 transition-colors"
                    >
                      <span>Continue to Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>

              </form>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

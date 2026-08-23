'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield,
  X, Plus, Package, SprayCan, Truck
} from 'lucide-react';
import { jsPDF } from 'jspdf';

export default function AsphaltPage() {
  const [mounted, setMounted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => { setMounted(true); }, []);

  const addToCart = (item: any) => setCart([...cart, item]);
  const removeFromCart = (id: string) => setCart(cart.filter(item => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const [sqft, setSqft] = useState('');
  const [finishType, setFinishType] = useState<'residential' | 'commercial'>('residential');
  const pricePerSqft = finishType === 'residential' ? 4.50 : 3.50;
  const estimatedTotal = sqft ? parseFloat(sqft) * pricePerSqft : 0;
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage({ src: '', alt: '' });
  };

  const [shopStep, setShopStep] = useState(1);
  const [projectSqft, setProjectSqft] = useState('');
  const [projectType, setProjectType] = useState<'residential' | 'commercial' | null>(null);
  const [projectOption, setProjectOption] = useState('');
  const [installDate, setInstallDate] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const resetShop = () => {
    setShopStep(1);
    setProjectSqft('');
    setProjectType(null);
    setProjectOption('');
    setInstallDate('');
    setPaymentProcessing(false);
  };

  const getPricePerSqft = () => {
    if (projectType === 'residential') return 4.50;
    if (projectOption === 'Resurfacage complet') return 5.50;
    return 3.50;
  };

  const getProjectTotal = () => {
    const sqftNum = parseFloat(projectSqft) || 0;
    return sqftNum * getPricePerSqft();
  };

  const getDepositAmount = () => {
    return getProjectTotal() * 0.30;
  };

  const commercialOptions = [
    { name: 'Stationnement / Parking', image: '/images/asphalt-parking.jpg', price: 3.50 },
    { name: 'Voie d\'acces / Allée', image: '/images/asphalt-road.jpg', price: 3.50 },
    { name: 'Resurfacage complet', image: '/images/asphalt-construction.jpg', price: 5.50 },
    { name: 'Reparation de fissures', image: '/images/asphalt-worker.jpg', price: 3.50 },
  ];

  const residentialOptions = [
    { name: 'Entrée / Driveway', image: '/images/asphalt-driveway.jpg', price: 4.50 },
    { name: 'Chemin / Allée', image: '/images/asphalt-road.jpg', price: 4.50 },
    { name: 'Stationnement résidentiel', image: '/images/asphalt-parking.jpg', price: 4.50 },
    { name: 'Réparation / Bouche-trous', image: '/images/asphalt-construction.jpg', price: 4.50 },
  ];

  const submitLeadToDashboard = async () => {
    const surface = Number.parseFloat(sqft || '0');
    const total = surface * pricePerSqft;
    const finishLabel = finishType === 'residential' ? 'Asphalte résidentiel' : 'Asphalte commercial';

    const leadData = {
      name: clientName,
      phone: clientPhone,
      email: clientEmail,
      service: 'asphalte',
      surface: surface,
      finishType: finishLabel,
      estimatedTotal: total,
      source: 'website-calculator',
      date: new Date().toISOString()
    };

    try {
      await fetch('https://zeniva-dev-dashboard.vercel.app/api/leads/asphalte', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (e) {
      console.error('Lead submission error:', e);
    }
  };

  const downloadQuotePdf = async () => {
    const surface = Number.parseFloat(sqft || '0');
    const total = surface * pricePerSqft;
    const finishLabel = finishType === 'residential' ? 'Asphalte résidentiel' : 'Asphalte commercial';
    const now = new Date();
    const dateStr = now.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });

    await submitLeadToDashboard();

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    doc.setFillColor(20, 15, 10);
    doc.rect(0, 0, pageWidth, 50, 'F');

    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(2);
    doc.line(0, 50, pageWidth, 50);

    doc.setTextColor(245, 158, 11);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(28);
    doc.text('ZENICORP', centerX, 25, { align: 'center' });

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text('ASPHALT PRO', centerX, 38, { align: 'center' });

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(24);
    doc.text('DEVIS ESTIMATIF - ASPHALTE', centerX, 70, { align: 'center' });

    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${dateStr}`, 20, 82);
    doc.text('Tel: 581-748-7017', pageWidth - 20, 82, { align: 'right' });

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, 95, pageWidth - 30, 35, 3, 3, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('CLIENT', 20, 105);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Nom: ${clientName || '_______________________________'}`, 20, 115);
    doc.text(`Telephone: ${clientPhone || '_______________________________'}`, 20, 123);
    doc.text(`Courriel: ${clientEmail || '_______________________________'}`, pageWidth - 20, 123, { align: 'right' });

    doc.setFillColor(248, 250, 252);
    doc.roundedRect(15, 140, pageWidth - 30, 45, 3, 3, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('DETAILS DU PROJET', 20, 150);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(`Type de pave: ${finishLabel}`, 20, 162);
    doc.text(`Surface totale: ${surface.toFixed(2)} pieds carres`, 20, 170);
    doc.text(`Taux unitaire: $${pricePerSqft.toFixed(2)} / pied carre`, 20, 178);

    doc.setFillColor(245, 158, 11);
    doc.roundedRect(15, 200, pageWidth - 30, 30, 5, 5, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('TOTAL ESTIME:', 25, 215);
    doc.setFontSize(22);
    doc.text(`$${total.toFixed(2)}`, pageWidth - 25, 218, { align: 'right' });
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(' taxes incluses', pageWidth - 25, 225, { align: 'right' });

    doc.setTextColor(60, 60, 60);
    doc.setFontSize(10);
    doc.text('✓ Garantie 1 an contre le drainage', 20, 250);
    doc.text('✓ Compactage professionnel', 20, 258);
    doc.text('✓ Bitume haute qualite', 20, 266);

    doc.setTextColor(120, 120, 120);
    doc.setFontSize(9);
    doc.text('Ce devis est une estimation preliminaire basee sur les informations fournies.', centerX, 285, { align: 'center' });
    doc.text('Une visite sur place sera necessaire pour confirmer le prix final.', centerX, 292, { align: 'center' });

    doc.setDrawColor(245, 158, 11);
    doc.setLineWidth(1);
    doc.line(20, 300, pageWidth - 20, 300);
    doc.text('zenicorp-asphalte.vercel.app  |  581-748-7017', centerX, 310, { align: 'center' });

    doc.save(`devis-zenicorp-asphalte-${now.getTime()}.pdf`);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#14100a] text-white overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ZeniCorp" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
            <div className="leading-none">
              <div className="font-bold text-sm sm:text-base tracking-tight">ZENI<span className="text-amber-500">CORP</span></div>
              <div className="text-[8px] sm:text-[9px] text-white/40 tracking-widest uppercase">Asphalt Pro</div>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <button
              onClick={() => setShowShop(true)}
              className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Configurer</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <a
              href="tel:5817487017"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gradient-to-r from-amber-500 to-amber-700 rounded-xl text-xs sm:text-sm font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">581-748-7017</span>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/asphalt-hero.jpg"
            alt="Pavage d'asphalte premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14100a] via-[#14100a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium">Experts en pavage d'asphalte</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              <span className="block text-white">ZENICORP</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400">
                ASPHALT
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Pavage residentiel et commercial. Entrees, parkings, reparations.
              <span className="text-amber-400 font-semibold"> Garantie 1 an.</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
              <button
                onClick={() => setShowQuote(true)}
                className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-amber-500 hover:bg-amber-400 text-black font-black text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-amber-500/50"
              >
                DEVIS GRATUIT
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setShowShop(true)}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all"
              >
                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                Configurateur
              </button>

              <a
                href="tel:5817487017"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sm:hidden">Appeler</span>
                <span className="hidden sm:inline">581-748-7017</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>Garantie 1 an</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Quebec & Environs</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>Service rapide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/3 right-10 md:right-20 hidden md:block">
          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-right">
            <p className="text-5xl font-black text-amber-400">350+</p>
            <p className="text-white/60">Surfaces pavees</p>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 md:right-20 hidden md:block transform translate-y-20">
          <div className="p-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl border border-amber-500/30">
            <p className="text-4xl font-black text-white">$3.50</p>
            <p className="text-white/60">A partir de /pied carre</p>
          </div>
        </div>
      </section>

      {/* CALCULATEUR DE DEVIS */}
      <section className="py-20 px-4 sm:px-6 bg-[#1a1410]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Calculateur de <span className="text-amber-400">Pavage</span></h2>
          <p className="text-white/60 text-center mb-12">Estimez le cout de votre projet en quelques secondes</p>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Type de projet</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setFinishType('residential')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'residential' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Residentiel</div>
                  <div className="text-3xl font-black text-amber-400">$4.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Entrepie, allée, patio</p>
                </button>

                <button
                  onClick={() => setFinishType('commercial')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'commercial' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Commercial</div>
                  <div className="text-3xl font-black text-amber-400">$3.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Parking, voies, grandes surfaces</p>
                </button>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">
                Superficie (pieds carres)
              </label>
              <input
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="Ex: 2000"
                className="w-full px-6 py-5 bg-white/5 border border-white/20 rounded-2xl text-white text-2xl font-bold focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none" />
              <input type="tel" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Telephone" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none" />
              <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-amber-500 focus:outline-none" />
            </div>

            <div className="p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Estimation totale</p>
                  <p className="text-5xl font-black text-white">${estimatedTotal.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">Prix au pied carre</p>
                  <p className="text-2xl font-bold text-amber-400">${pricePerSqft.toFixed(2)}</p>
                </div>
              </div>
              <p className="text-white/40 text-sm mt-4">*Ce prix est une estimation. Contactez-nous pour un devis precis.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={downloadQuotePdf}
                className="flex-1 py-5 bg-amber-500 hover:bg-amber-400 text-black font-black text-xl rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                TELECHARGER DEVIS PDF
              </button>
              <a
                href="tel:5817487017"
                className="flex-1 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                581-748-7017
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES DE REVETEMENT */}
      <section className="py-20 px-4 sm:px-6 bg-[#14100a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Nos <span className="text-amber-400">Services</span></h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Pavage, scellement et reparation pour tous vos besoins en asphalte.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-driveway.jpg', 'Entrepie residentielle')}>
              <img src="/images/asphalt-driveway.jpg" alt="Entrepie residentielle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Entrepie</p>
                <p className="text-amber-400">Pavage residentiel</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-parking.jpg', 'Parking commercial')}>
              <img src="/images/asphalt-parking.jpg" alt="Parking commercial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Parking</p>
                <p className="text-amber-400">Grandes surfaces</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-road.jpg', 'Voie de circulation')}>
              <img src="/images/asphalt-road.jpg" alt="Voie de circulation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Voie d'accès</p>
                <p className="text-amber-400">Acces & allees</p>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-worker.jpg', 'Pose professionnelle')}>
              <img src="/images/asphalt-worker.jpg" alt="Pose professionnelle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Pose professionnelle</p>
                <p className="text-amber-400">Travail de precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORFAITS & REALISATIONS */}
      <section className="py-20 px-4 sm:px-6 bg-[#1a1410]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Nos <span className="text-amber-400">Realisations</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-driveway.jpg', 'Allée résidentielle neuve')}>
              <img src="/images/asphalt-driveway.jpg" alt="Allée résidentielle neuve" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Allée neuve</p>
                <p className="text-amber-400">Résidentiel</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/asphalt-construction.jpg', 'Resurfaçage commercial')}>
              <img src="/images/asphalt-construction.jpg" alt="Resurfaçage commercial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Resurfaçage</p>
                <p className="text-amber-400">Stationnement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP MODAL - CONFIGURATEUR */}
      {showShop && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => { setShowShop(false); resetShop(); }}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-white/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl sm:text-3xl font-black">Configurer votre pave</h2>
                <button onClick={() => { setShowShop(false); resetShop(); }} className="p-2 hover:bg-white/10 rounded-full"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${shopStep >= step ? 'bg-amber-400' : 'bg-transparent'}`} />
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-2">Etape {shopStep} sur 5</p>
            </div>

            {shopStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Quelle est la surface a couvrir?</h3>
                <div className="space-y-4">
                  <input
                    type="number"
                    value={projectSqft}
                    onChange={(e) => setProjectSqft(e.target.value)}
                    placeholder="Nombre de pieds carres (ex: 2000)"
                    className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-2xl text-white text-2xl font-bold text-center focus:border-amber-500 focus:outline-none"
                  />
                  <p className="text-white/40 text-center text-sm">
                    Prix : $3.50 - $5.50 / pied carre selon le type et le service
                  </p>
                </div>
                <button
                  onClick={() => projectSqft && parseFloat(projectSqft) > 0 && setShopStep(2)}
                  disabled={!projectSqft || parseFloat(projectSqft) <= 0}
                  className="w-full py-5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-black text-xl rounded-2xl transition-all"
                >
                  CONTINUER
                </button>
              </div>
            )}

            {shopStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Choisissez votre type de pave</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => { setProjectType('residential'); setShopStep(3); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${projectType === 'residential' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                  >
                    <div className="font-bold text-xl mb-2">Residentiel</div>
                    <div className="text-3xl font-black text-amber-400">$4.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                    <p className="text-sm text-white/40 mt-2">Entrepie, allee, stationnement</p>
                  </button>

                  <button
                    onClick={() => { setProjectType('commercial'); setShopStep(3); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${projectType === 'commercial' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                  >
                    <div className="font-bold text-xl mb-2">Commercial</div>
                    <div className="text-3xl font-black text-amber-400">$3.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                    <p className="text-sm text-white/40 mt-2">Parking, grande surface, industriel</p>
                  </button>
                </div>
              </div>
            )}

            {shopStep === 3 && projectType && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">
                  {projectType === 'commercial' ? 'Choisissez le service' : 'Choisissez votre projet'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
                  {(projectType === 'commercial' ? commercialOptions : residentialOptions).map((option) => (
                    <button
                      key={option.name}
                      onClick={() => { setProjectOption(option.name); setShopStep(4); }}
                      className={`p-3 rounded-xl border-2 transition-all ${projectOption === option.name ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img src={option.image} alt={option.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="font-bold text-sm">{option.name}</p>
                      <p className="text-amber-400 text-xs">{option.price.toFixed(2)} $/pied²</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {shopStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Quand souhaitez-vous le pavage?</h3>
                <div className="space-y-4">
                  <input
                    type="date"
                    value={installDate}
                    onChange={(e) => setInstallDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-2xl text-white text-xl font-bold text-center focus:border-amber-500 focus:outline-none"
                  />
                  <p className="text-white/40 text-center text-sm">
                    Pavage effectue dans les plus brefs delais selon la meteo
                  </p>
                </div>
                <button
                  onClick={() => installDate && setShopStep(5)}
                  disabled={!installDate}
                  className="w-full py-5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-black text-xl rounded-2xl transition-all"
                >
                  VOIR LE RECAPITULATIF
                </button>
              </div>
            )}

            {shopStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Recapitulatif de votre projet</h3>
                <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/60">Surface</span>
                    <span className="font-bold">{projectSqft} pieds carres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Type</span>
                    <span className="font-bold">{projectType === 'residential' ? 'Residentiel' : 'Commercial'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Service</span>
                    <span className="font-bold">{projectOption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date souhaitee</span>
                    <span className="font-bold">{installDate ? new Date(installDate).toLocaleDateString('fr-CA') : '-'}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Total projet</span>
                      <span className="text-2xl font-black text-amber-400">${getProjectTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-bold">Acompte a payer (30%)</span>
                        <p className="text-xs text-white/60">Solde payable apres le pavage</p>
                      </div>
                      <span className="text-3xl font-black text-amber-400">${getDepositAmount().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-center">Payer avec Zenipay</h4>
                  {paymentProcessing ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-white/60">Connexion a Zenipay...</p>
                    </div>
                  ) : (
                    <>
                      <button
                        onClick={async () => {
                          setPaymentProcessing(true);
                          const paymentData = {
                            amount: getDepositAmount(),
                            currency: 'CAD',
                            description: `Acompte Projet Asphalte - ${projectOption} (${projectSqft} p²)`,
                            metadata: {
                              project_surface: projectSqft,
                              project_type: projectType,
                              project_option: projectOption,
                              install_date: installDate,
                              total_amount: getProjectTotal(),
                              deposit_amount: getDepositAmount()
                            },
                            success_url: 'https://zenicorp-asphalte.vercel.app/paiement/success',
                            cancel_url: 'https://zenicorp-asphalte.vercel.app/paiement/annule'
                          };
                          try {
                            const response = await fetch('https://api.zenipay.ca/v1/checkout/sessions', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ZENIPAY_PUBLIC_KEY}`
                              },
                              body: JSON.stringify(paymentData)
                            });
                            const result = await response.json();
                            if (result.url) {
                              window.location.href = result.url;
                            } else {
                              alert('Erreur de connexion a Zenipay. Veuillez reessayer.');
                              setPaymentProcessing(false);
                            }
                          } catch (error) {
                            console.error('Zenipay error:', error);
                            alert('Erreur de paiement. Contactez-nous au 581-748-7017');
                            setPaymentProcessing(false);
                          }
                        }}
                        className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-black text-xl rounded-2xl transition-all flex items-center justify-center gap-3"
                      >
                        <span>PAYER L'ACOMPTE {getDepositAmount().toFixed(2)}$ CAD</span>
                      </button>

                      <p className="text-center text-white/40 text-xs">
                        Paiement securise par Zenipay
                      </p>

                      <button
                        onClick={() => setShopStep(1)}
                        className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all"
                      >
                        MODIFIER LE PROJET
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {shopStep > 1 && shopStep < 5 && (
              <button
                onClick={() => setShopStep(shopStep - 1)}
                className="mt-6 w-full py-3 text-white/60 hover:text-white font-medium text-sm"
              >
                ← Retour a l'etape precedente
              </button>
            )}
          </div>
        </div>
      )}

      {/* DEVIS MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowQuote(false)}>
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-6 text-center">Devis Asphalte</h2>
            <form className="space-y-4">
              <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Nom complet" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <input type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} placeholder="Superficie (pieds carres)" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <input type="tel" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Telephone" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <input type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="Email" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg" />
              <button type="button" onClick={() => { downloadQuotePdf(); setShowQuote(false); }} className="w-full py-5 bg-amber-500 text-black font-black text-xl rounded-xl flex items-center justify-center gap-2"><Calculator className="w-5 h-5" />TELECHARGER LE DEVIS PDF</button>
            </form>
            <p className="text-center text-white/40 text-sm mt-4">Ou appelle: <a href="tel:5817487017" className="text-amber-400 font-bold">581-748-7017</a></p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/10 bg-[#14100a]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl">ZENICORP ASPHALTE</span>
          </div>
          <p className="text-2xl font-black text-amber-400 mb-2">581-748-7017</p>
          <p className="text-white/40">Garantie 1 an - Prix : $3.50 - $4.50/pied carre</p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 z-10"><X className="w-8 h-8 text-white" /></button>
          <img src={lightboxImage.src} alt={lightboxImage.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

    </div>
  );
}
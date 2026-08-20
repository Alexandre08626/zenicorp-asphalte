'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Shield, Clock, Award, Phone, CheckCircle2, Truck, Home, Building2,
  Droplets, Wrench, Star, ArrowRight, Calculator
} from 'lucide-react';

const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start: number;
    const animate = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

import { useRef } from 'react';

const services = [
  { icon: Droplets, title: 'Scellant Premium', desc: 'Protection UV, eau, sel', price: '800$', features: ['Nettoyage HP', '2 couches', 'Fini uniforme', 'Garantie 2 ans'], color: 'from-slate-300 to-gray-300' },
  { icon: Wrench, title: 'Réparation Fissures', desc: 'Traitement préventif', price: '350$', features: ['Détection complète', 'Produits flexibles', 'Prévention', 'Invisible'], color: 'from-blue-300 to-indigo-300' },
  { icon: Truck, title: 'Pavage Neuf', desc: 'Résidentiel & commercial', price: 'Sur devis', features: ['Asphalte certifié', 'Compactage pro', 'Drainage optimisé', 'Finitions'], color: 'from-cyan-300 to-teal-300' },
  { icon: Building2, title: 'Commercial', desc: 'Stationnements, entrées', price: 'Sur devis', features: ['Marquage au sol', 'Bordures', 'Travail de nuit', 'Sans interruption'], color: 'from-violet-300 to-purple-300' },
];

const realisations = [
  { title: 'Entrée double Québec', desc: 'Scellant + réparation', value: '1,800 $', color: 'bg-slate-100' },
  { title: 'Stationnement 40 places', desc: 'Pavage + marquage', value: '48,000 $', color: 'bg-blue-100' },
  { title: 'Entrée commerciale MTL', desc: 'Resurfaçage', value: '15,500 $', color: 'bg-cyan-100' },
  { title: 'Allée privée', desc: 'Pavage neuf', value: '12,000 $', color: 'bg-violet-100' },
];

export default function AsphaltePale() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 text-slate-800 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(100,116,139,0.3) 2px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-20 left-10 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              {/* GROS LOGO */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-400 to-gray-500 flex items-center justify-center shadow-xl shadow-slate-400/30 ring-4 ring-slate-100">
                <Truck className="w-9 h-9 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">ZENICORP</span>
                <span className="block text-xs text-slate-500 tracking-widest uppercase">Asphalte Pro</span>
              </div>
            </Link>
            <a href="/soumission" className="px-8 py-3 bg-gradient-to-r from-slate-400 to-gray-500 text-white font-bold rounded-full shadow-xl shadow-slate-400/30 hover:shadow-2xl transition-all">
              Devis gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200">
                <Shield className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-600 font-medium">Garantie 2-5 ans</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-800">
                Asphalte{' '}
                <span className="bg-gradient-to-r from-slate-400 via-gray-400 to-zinc-400 bg-clip-text text-transparent">Pro</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl">Scellant, réparation de fissures et pavage professionnel. Résidentiel et commercial.</p>

              <div className="flex flex-wrap gap-4">
                <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-400 to-gray-500 text-white font-bold rounded-full shadow-xl shadow-slate-400/40 hover:shadow-2xl hover:scale-105 transition-all">
                  <Calculator className="w-5 h-5" />
                  Devis gratuit
                </a>
                <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:bg-slate-50 transition-all">
                  <Phone className="w-5 h-5" />
                  1-800-ZENICORP
                </a>
              </div>
            </div>

            <div className="relative">
              {/* PHOTO PLUS GROSSE */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 ring-4 ring-white">
                <img src="https://images.pexels.com/photos/12274274/pexels-photo-12274274.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Asphalte" className="w-full h-[700px] object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 p-6 rounded-2xl bg-white shadow-xl border border-slate-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><p className="text-2xl font-bold text-slate-600">2-5</p><p className="text-xs text-slate-500">Ans garantie</p></div>
                  <div><p className="text-2xl font-bold text-slate-600">24h</p><p className="text-xs text-slate-500">Soumission</p></div>
                  <div><p className="text-2xl font-bold text-slate-600">-40°C</p><p className="text-xs text-slate-500">Résistant</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 850, suffix: '+', label: 'Projets', icon: Home },
              { value: 50, suffix: 'km+', label: 'Pavé', icon: Truck },
              { value: 5, suffix: ' ans', label: 'Garantie max', icon: Award },
              { value: 24, suffix: 'h', label: 'Soumission', icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 text-center shadow-lg hover:shadow-xl">
                <div className="inline-flex p-4 rounded-2xl bg-slate-100 mb-4">
                  <stat.icon className="w-8 h-8 text-slate-500" />
                </div>
                <p className="text-4xl font-bold text-slate-800"><Counter end={stat.value} suffix={stat.suffix} /></p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Nos <span className="text-slate-500">services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-slate-300 transition-all shadow-lg hover:shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                    <p className="text-slate-500">{service.desc}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-bold">{service.price}</span>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-gray-100 to-zinc-100" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Une entrée <span className="text-slate-500">impressionnante</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-400 to-gray-500 text-white font-bold rounded-full shadow-xl shadow-slate-400/40 hover:shadow-2xl transition-all">Devis gratuit</a>
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg border-2 border-slate-200">1-800-ZENICORP</a>
          </div>
        </div>
      </section>
    </div>
  );
}

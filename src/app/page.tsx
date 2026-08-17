import Link from 'next/link';
import {
  Shield,
  Clock,
  Award,
  Phone,
  CheckCircle2,
  Truck,
  Home,
  Building2,
  Zap,
  Droplets,
  Wrench,
  Paintbrush,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Scellant d\'asphalte',
    desc: 'Protection professionnelle de votre entrÃƒÂ©e d\'asphalte contre l\'eau, le sel et les UV. Fini uniforme qui dure.',
    features: ['Nettoyage haute pression', 'RÃƒÂ©paration des fissures', '2 couches de scellant', 'Garantie 2 ans'],
  },
  {
    icon: Wrench,
    title: 'RÃƒÂ©paration de fissures',
    desc: 'Traitement des fissures avant qu\'elles ne deviennent des problÃƒÂ¨mes majeurs. Intervention rapide.',
    features: ['DÃƒÂ©tection complÃƒÂ¨te', 'Produits flexible pour climats', 'PrÃƒÂ©vention des nids-de-poule', 'RÃƒÂ©sultat invisible'],
  },
  {
    icon: Truck,
    title: 'Pavage & resurfaÃƒÂ§age',
    desc: 'Pavage neuf ou resurfaÃƒÂ§age complet de vos entrÃƒÂ©es rÃƒÂ©sidentielles et stationnements commerciaux.',
    features: ['Asphalte certifiÃƒÂ©', 'Compactage professionnel', 'Pente et drainage optimisÃƒÂ©s', 'Finitions soignÃƒÂ©es'],
  },
  {
    icon: Building2,
    title: 'Commercial',
    desc: 'Stationnements, entrÃƒÂ©es de commerce et espaces industriels. Planification hors heures d\'ouverture.',
    features: ['Marquage au sol', 'Borne et bordures', 'Travail de nuit possible', 'Minimisation des perturbations'],
  },
];

const realisations = [
  { title: 'EntrÃƒÂ©e double - QuÃƒÂ©bec', desc: 'Scellant + rÃƒÂ©paration fissures', value: '1 800 $' },
  { title: 'Stationnement 40 places - LÃƒÂ©vis', desc: 'Pavage complet + marquage', value: '48 000 $' },
  { title: 'EntrÃƒÂ©e commerciale - MontrÃƒÂ©al', desc: 'ResurfaÃƒÂ§age 3 pouces', value: '15 500 $' },
  { title: 'AllÃƒÂ©e privÃƒÂ©e - Trois-RiviÃƒÂ¨res', desc: 'Pavage neuf + bordures', value: '12 000 $' },
];

const faqs = [
  {
    q: 'Quand faut-il sceller son entrÃƒÂ©e d\'asphalte ?',
    a: 'IdÃƒÂ©alement tous les 2-3 ans, ou dÃƒÂ¨s que la surface montre des signes de vieillissement : fissures, dÃƒÂ©coloration, craquelures.',
  },
  {
    q: 'Peut-on sceller en hiver ?',
    a: 'Le scellant nÃƒÂ©cessite une tempÃƒÂ©rature minimale de 10Ã‚Â°C. Nos travaux se font d\'avril ÃƒÂ  octobre au QuÃƒÂ©bec.',
  },
  {
    q: 'Combien de temps avant de marcher/driver dessus ?',
    a: 'Le scellant sÃƒÂ¨che en 24h, mais il est recommandÃƒÂ© d\'attendre 48h avant de circuler sur la surface.',
  },
  {
    q: 'Offrez-vous des contrats commerciaux ?',
    a: 'Oui. Nous offrons des contrats d\'entretien annuels pour stationnements et commerces avec prioritÃƒÂ© de service.',
  },
];

export default function AsphaltPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-zenicorp-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-black via-zenicorp-darkGray to-zenicorp-black"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #9CA3AF 0px, #9CA3AF 1px, transparent 1px, transparent 60px)' }}></div>
        <div className="container-zenicorp relative py-20 lg:py-28">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-zenicorp-gold/10 border border-zenicorp-gold/40 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-zenicorp-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zenicorp-gold">Division Asphalte de ZeniCorp</span>
            </div>
            <h1 className="heading-1 text-white !text-4xl sm:!text-5xl lg:!text-6xl mb-6">
              Votre entrÃƒÂ©e. Notre expertise.
              <span className="block text-zenicorp-gold">Pour des annÃƒÂ©es.</span>
            </h1>
            <p className="text-lg text-zenicorp-silver mb-8 max-w-2xl">
              Scellant d&apos;asphalte, rÃƒÂ©paration de fissures et pavage professionnel pour rÃƒÂ©sidences et commerces.
              Des surfaces durables, propres et qui rehaussent votre propriÃƒÂ©tÃƒÂ©.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/soumission" className="btn-gold">Obtenir une soumission gratuite</a>
              <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
                <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Garantie 2-5 ans
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Soumission sous 24h
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Ãƒâ€°quipes certifiÃƒÂ©es
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU AVANTAGES */}
      <section className="bg-white border-b border-zenicorp-border">
        <div className="container-zenicorp py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Garantie ÃƒÂ©crite</p>
              <p className="text-xs text-zenicorp-mediumGray">2-5 ans selon service</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Service rapide</p>
              <p className="text-xs text-zenicorp-mediumGray">Soumission 24h</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Ãƒâ€°quipement pro</p>
              <p className="text-xs text-zenicorp-mediumGray">Machinerie moderne</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Climat quÃƒÂ©bÃƒÂ©cois</p>
              <p className="text-xs text-zenicorp-mediumGray">Produits adaptÃƒÂ©s -40Ã‚Â°C</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Nos services</p>
            <h2 className="heading-2">Tout pour votre asphalte</h2>
            <p className="body-base mt-4">De l&apos;entretien prÃƒÂ©ventif au pavage complet, une seule ÃƒÂ©quipe pour tout faire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="w-12 h-12 bg-zenicorp-black flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-zenicorp-gold" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-base text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zenicorp-mediumGray">
                      <CheckCircle2 className="w-4 h-4 text-zenicorp-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÃƒâ€°ALISATIONS */}
      <section id="realisations" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">RÃƒÂ©alisations</p>
            <h2 className="heading-2">Des projets rÃƒÂ©cents</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="h-32 bg-gradient-to-br from-zenicorp-darkGray to-zenicorp-black flex items-center justify-center mb-4">
                  <Paintbrush className="w-10 h-10 text-zenicorp-gold" />
                </div>
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <p className="text-xs text-zenicorp-mediumGray mt-1">{r.desc}</p>
                <p className="text-zenicorp-gold font-bold text-sm mt-2">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-padding bg-zenicorp-black text-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Comment ÃƒÂ§a marche</p>
            <h2 className="heading-2 text-white">3 ÃƒÂ©tapes simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Soumission', d: 'Formulaire en 2 minutes. RÃƒÂ©ponse sous 24h avec prix dÃƒÂ©taillÃƒÂ©.' },
              { n: '02', t: 'Ãƒâ€°valuation sur place', d: 'Inspection gratuite de votre entrÃƒÂ©e ou stationnement. Recommandations claires.' },
              { n: '03', t: 'Travaux', d: 'ExÃƒÂ©cution par nos ÃƒÂ©quipes certifiÃƒÂ©es avec ÃƒÂ©quipement professionnel.' },
            ].map((s) => (
              <div key={s.n} className="border border-zenicorp-mediumGray p-6">
                <span className="font-heading text-5xl text-zenicorp-gold font-bold">{s.n}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{s.t}</h3>
                <p className="text-sm text-zenicorp-silver">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">FAQ</p>
            <h2 className="heading-2">Questions frÃƒÂ©quentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold">
                  {f.q}
                  <span className="text-zenicorp-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="body-base text-sm mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zenicorp-black text-white">
        <div className="container-zenicorp py-16 text-center">
          <h2 className="heading-2 text-white mb-4">Une entrÃƒÂ©e qui fait bonne impression ?</h2>
          <p className="text-zenicorp-silver mb-8">Soumission gratuite sous 24h. Aucun engagement.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="btn-gold">Obtenir ma soumission gratuite</a>
            <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
              <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

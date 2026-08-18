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

const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const HERO_IMG = px(12274274, 1920);

const services = [
  {
    icon: Droplets,
    title: 'Scellant d\'asphalte',
    desc: 'Protection professionnelle de votre entrée d\'asphalte contre l\'eau, le sel et les UV. Fini uniforme qui dure.',
    features: ['Nettoyage haute pression', 'Réparation des fissures', '2 couches de scellant', 'Garantie 2 ans'],
    img: px(14658667),
  },
  {
    icon: Wrench,
    title: 'Réparation de fissures',
    desc: 'Traitement des fissures avant qu\'elles ne deviennent des problèmes majeurs. Intervention rapide.',
    features: ['Détection complète', 'Produits flexible pour climats', 'Prévention des nids-de-poule', 'Résultat invisible'],
    img: px(29422321),
  },
  {
    icon: Truck,
    title: 'Pavage & resurfaçage',
    desc: 'Pavage neuf ou resurfaçage complet de vos entrées résidentielles et stationnements commerciaux.',
    features: ['Asphalte certifié', 'Compactage professionnel', 'Pente et drainage optimisés', 'Finitions soignées'],
    img: px(10000255),
  },
  {
    icon: Building2,
    title: 'Commercial',
    desc: 'Stationnements, entrées de commerce et espaces industriels. Planification hors heures d\'ouverture.',
    features: ['Marquage au sol', 'Borne et bordures', 'Travail de nuit possible', 'Minimisation des perturbations'],
    img: px(19550925),
  },
];

const realisations = [
  { title: 'Entrée double - Québec', desc: 'Scellant + réparation fissures', value: '1 800 $', img: px(5768733, 600) },
  { title: 'Stationnement 40 places - Lévis', desc: 'Pavage complet + marquage', value: '48 000 $', img: px(29181420, 600) },
  { title: 'Entrée commerciale - Montréal', desc: 'Resurfaçage 3 pouces', value: '15 500 $', img: px(11685816, 600) },
  { title: 'Allée privée - Trois-Rivières', desc: 'Pavage neuf + bordures', value: '12 000 $', img: px(1176481, 600) },
];

const faqs = [
  {
    q: 'Quand faut-il sceller son entrée d\'asphalte ?',
    a: 'Idéalement tous les 2-3 ans, ou dès que la surface montre des signes de vieillissement : fissures, décoloration, craquelures.',
  },
  {
    q: 'Peut-on sceller en hiver ?',
    a: 'Le scellant nécessite une température minimale de 10°C. Nos travaux se font d\'avril à octobre au Québec.',
  },
  {
    q: 'Combien de temps avant de marcher/driver dessus ?',
    a: 'Le scellant sèche en 24h, mais il est recommandé d\'attendre 48h avant de circuler sur la surface.',
  },
  {
    q: 'Offrez-vous des contrats commerciaux ?',
    a: 'Oui. Nous offrons des contrats d\'entretien annuels pour stationnements et commerces avec priorité de service.',
  },
];

export default function AsphaltPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-zenicorp-black text-white">
        <img src={HERO_IMG} alt="Machine de pavage appliquant de l'asphalte sur une route" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-zenicorp-black via-zenicorp-black/80 to-zenicorp-black/30"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #475569 0px, #475569 1px, transparent 1px, transparent 60px)' }}></div>
        <div className="container-zenicorp relative py-20 lg:py-28">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-zenicorp-gold/10 border border-zenicorp-gold/40 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-zenicorp-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zenicorp-gold">Division Asphalte de ZeniCorp</span>
            </div>
            <h1 className="heading-1 text-white !text-4xl sm:!text-5xl lg:!text-6xl mb-6">
              Votre entrée. Notre expertise.
              <span className="block text-zenicorp-gold">Pour des années.</span>
            </h1>
            <p className="text-lg text-zenicorp-silver mb-8 max-w-2xl">
              Scellant d&apos;asphalte, réparation de fissures et pavage professionnel pour résidences et commerces.
              Des surfaces durables, propres et qui rehaussent votre propriété.
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
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Équipes certifiées
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
              <p className="font-semibold text-sm">Garantie écrite</p>
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
              <p className="font-semibold text-sm">Équipement pro</p>
              <p className="text-xs text-zenicorp-mediumGray">Machinerie moderne</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Climat québécois</p>
              <p className="text-xs text-zenicorp-mediumGray">Produits adaptés -40°C</p>
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
            <p className="body-base mt-4">De l&apos;entretien préventif au pavage complet, une seule équipe pour tout faire.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card overflow-hidden p-0 group">
                <div className="relative h-44 overflow-hidden">
                  <img src={service.img} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-zenicorp-gold flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-zenicorp-black" />
                    </div>
                    <h3 className="text-white font-semibold drop-shadow">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="body-base text-sm mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-zenicorp-mediumGray">
                        <CheckCircle2 className="w-4 h-4 text-zenicorp-gold" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="realisations" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Réalisations</p>
            <h2 className="heading-2">Des projets récents</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((r) => (
              <div key={r.title} className="card overflow-hidden p-0 group">
                <div className="relative h-40 overflow-hidden">
                  <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-3 right-3 bg-zenicorp-gold text-zenicorp-black text-xs font-bold px-2 py-1">{r.value}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-sm">{r.title}</h3>
                  <p className="text-xs text-zenicorp-mediumGray mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-padding bg-zenicorp-black text-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Comment ça marche</p>
            <h2 className="heading-2 text-white">3 étapes simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Soumission', d: 'Formulaire en 2 minutes. Réponse sous 24h avec prix détaillé.' },
              { n: '02', t: 'Évaluation sur place', d: 'Inspection gratuite de votre entrée ou stationnement. Recommandations claires.' },
              { n: '03', t: 'Travaux', d: 'Exécution par nos équipes certifiées avec équipement professionnel.' },
            ].map((s) => (
              <div key={s.n} className="border border-zenicorp-mediumGray p-6 hover:border-zenicorp-gold/60 transition-colors">
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
            <h2 className="heading-2">Questions fréquentes</h2>
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
          <h2 className="heading-2 text-white mb-4">Une entrée qui fait bonne impression ?</h2>
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
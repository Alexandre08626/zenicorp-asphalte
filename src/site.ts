import type { SiteConfig } from '@/types';

export const SITE: SiteConfig = {
  slug: 'asphalte',
  name: 'Zeniva Asphalte',
  short: 'Asphalte',
  tagline: 'Asphalte Pro',
  url: 'https://asphalte.zeniva.ca',
  title: 'Zeniva Asphalte | Pavage résidentiel & commercial — Québec',
  description:
    'Pavage, resurfaçage, scellant et réparation d’asphalte pour entrées et stationnements partout au Québec. Estimation en ligne en 30 secondes, entrepreneur certifié RBQ.',
  accent: '#FFB020',
  accent2: '#FF6B1A',
  accentRgb: '255,176,32',
  hero: {
    image: '/images/asphalt-roller.jpg',
    alt: "Pavage d'asphalte",
    eyebrow: 'Zeniva Asphalte · Partout au Québec',
    h1a: 'Votre asphalte,',
    h1b: 'estimé en 30 secondes.',
    sub: 'Pavage résidentiel et commercial : entrées, stationnements, réparations et resurfaçage.',
    trust: [
      { icon: 'shield', t: 'Garantie 1 an' },
      { icon: 'map', t: 'Partout au Québec' },
      { icon: 'clock', t: 'Service rapide' },
    ],
  },
  calc: {
    finishLabel: 'Type de projet',
    surfaceLabel: 'Superficie à paver',
    finishes: [
      { id: 'residential', name: 'Résidentiel', price: 4.5, desc: 'Entrée, allée, patio', image: '/images/asphalt-driveway2.jpg' },
      { id: 'commercial', name: 'Commercial', price: 3.5, desc: 'Stationnement, voies, grandes surfaces', image: '/images/asphalt-parking2.jpg' },
    ],
  },
  shop: {
    title: 'Configurer votre pavage',
    priceRange: 'De 3,50 $ à 5,50 $ / pi² selon le type et le service',
    dateHint: 'Pavage effectué dans les plus brefs délais, selon la météo.',
    types: [
      {
        id: 'residential',
        name: 'Résidentiel',
        desc: 'Entrée, allée, patio',
        optionsTitle: 'Choisissez votre projet',
        options: [
          { name: 'Entrée / driveway', image: '/images/asphalt-driveway2.jpg', price: 4.5 },
          { name: 'Chemin / allée', image: '/images/asphalt-road.jpg', price: 4.5 },
          { name: 'Stationnement résidentiel', image: '/images/asphalt-parking2.jpg', price: 4.5 },
          { name: 'Réparation / bouche-trous', image: '/images/asphalt-site.jpg', price: 4.5 },
        ],
      },
      {
        id: 'commercial',
        name: 'Commercial',
        desc: 'Stationnement, voies, grandes surfaces',
        optionsTitle: 'Choisissez le service',
        options: [
          { name: 'Stationnement / parking', image: '/images/asphalt-parking2.jpg', price: 3.5 },
          { name: "Voie d'accès / allée", image: '/images/asphalt-road.jpg', price: 3.5 },
          { name: 'Resurfaçage complet', image: '/images/asphalt-site.jpg', price: 5.5 },
          { name: 'Réparation de fissures', image: '/images/asphalt-worker2.jpg', price: 3.5 },
        ],
      },
    ],
  },
  ticker: [
    'Entrées résidentielles',
    'Stationnements commerciaux',
    'Resurfaçage',
    'Scellant protecteur',
    'Réparation de fissures',
    'Nids-de-poule',
    'Marquage de lignes',
    'Voies d’accès',
  ],
  showcase: {
    eyebrow: 'Services',
    title: 'Nos',
    titleAccent: 'services.',
    sub: 'Pavage, scellement et réparation pour tous vos besoins en asphalte.',
    items: [
      { src: '/images/asphalt-driveway2.jpg', t: 'Entrée', s: 'Pavage résidentiel' },
      { src: '/images/asphalt-parking2.jpg', t: 'Stationnement', s: 'Grandes surfaces' },
      { src: '/images/asphalt-road.jpg', t: "Voie d'accès", s: 'Accès et allées' },
      { src: '/images/asphalt-worker2.jpg', t: 'Pose professionnelle', s: 'Travail de précision' },
    ],
  },
  gallery: [
    { src: '/images/reseau-asphalte-3.jpg', t: 'Allée neuve', s: 'Résidentiel' },
    { src: '/images/reseau-asphalte-4.jpg', t: 'Stationnement', s: 'Commercial' },
    { src: '/images/asphalt-site.jpg', t: 'Resurfaçage', s: 'Stationnement' },
    { src: '/images/reseau-asphalte-1.jpg', t: 'Entrée asphaltée', s: 'Pose professionnelle' },
  ],
  benefits: [
    { k: '1 an', t: 'Garantie', d: 'Une garantie écrite sur les travaux.' },
    { k: '2-3 ans', t: 'Scellant', d: 'L’intervalle recommandé au Québec pour protéger une entrée.' },
    { k: 'RBQ', t: 'Certifié', d: 'Entrepreneur licencié et assuré.' },
    { k: '3,50 $', t: 'À partir de', d: 'Par pied carré, projets commerciaux.' },
  ],
  faq: [
    {
      q: 'À quelle fréquence faut-il sceller une entrée ?',
      a: "Au Québec, un scellant tous les 2 à 3 ans est la norme : les cycles de gel-dégel et les sels de déglaçage sont les principaux facteurs d'usure. Une entrée très exposée au soleil peut demander un intervalle plus court.",
    },
    {
      q: 'Quelle est la saison pour ces travaux ?',
      a: "Le pavage, le scellant et l'injection de fissures demandent une surface sèche et des températures au-dessus d'environ 10 °C, donc généralement de mai à octobre. Une demande déposée hors saison est planifiée pour la fenêtre suivante.",
    },
    {
      q: 'Réparer les fissures ou refaire l’asphalte ?',
      a: "Tant que la fondation est saine, la réparation ciblée et le scellant prolongent la vie de la surface à une fraction du coût. Le resurfaçage devient pertinent quand l'affaissement ou le faïençage devient généralisé.",
    },
  ],
  soumission: {
    projectTypes: ['Entrée résidentielle', 'Stationnement commercial', 'Réparation / scellant'],
    propertyTypes: ['Maison unifamiliale', 'Copropriété / condo', 'Immeuble commercial', 'Immeuble industriel'],
    dimsTitle: 'Dimensions de la surface',
    descPlaceholder: 'Asphalte existant ou neuf, fissures, nids-de-poule, accès pour la machinerie…',
  },
  pdf: {
    title: 'DEVIS ESTIMATIF',
    features: ['Garantie 1 an', 'Entrepreneur certifié RBQ', 'Service rapide partout au Québec'],
  },
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  HeartPulse,
  Building2,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';

const industriesData = [
  {
    id: 'transport',
    name: 'Transport & Logistics',
    shortName: 'Transport',
    subtitle: 'Freight forwarding · Transport · 3PL',
    headline: 'One operating system for freight, fleet and warehouse.',
    summary:
      'Freight forwarders, transporters and 3PL operators use Silgate Logistics OS to unify shipment, fleet, warehouse and finance workflows on a single connected platform.',
    heroImage: '/images/industries/transport/silgate-industry-transport-hero.webp',
    heroImageAlt:
      'Modern logistics operation with trucks, container yard and warehouse — powered by Silgate Logistics OS',
    outcomes: [
      'End-to-end shipment visibility',
      'Faster job-to-invoice cycles',
      'One dashboard across sites'
    ],
    products: [
      { name: 'Logistics OS', path: '/products/logistics-os/', icon: Truck },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/transport/',
    exploreLabel: 'Explore Transport',
    Icon: Truck
  },
  {
    id: 'restaurant',
    name: 'Restaurants & Cafés',
    shortName: 'Restaurants',
    subtitle: 'Fine dine · Quick service · Cafés',
    headline: 'Run every outlet from one connected system.',
    summary:
      'From a single café to a multi-city cloud kitchen, Silgate Restaurant OS unifies POS, kitchen, delivery, inventory and analytics into one operating layer.',
    heroImage: '/images/industries/restaurant/silgate-industry-restaurant-hero.webp',
    heroImageAlt:
      'Modern restaurant environment with POS terminal and kitchen display running Silgate Restaurant OS',
    outcomes: [
      'Faster table turnover',
      'Zero missed KOTs',
      'Recipe-level inventory'
    ],
    products: [
      { name: 'Restaurant OS', path: '/products/restaurant-os/', icon: UtensilsCrossed },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/restaurant/',
    exploreLabel: 'Explore Restaurants',
    Icon: UtensilsCrossed
  },
  {
    id: 'retail',
    name: 'Retail',
    shortName: 'Retail',
    subtitle: 'Kirana · Supermarket · Pharmacy',
    headline: 'Modern retail — from a single counter to a chain of stores.',
    summary:
      'Kirana, supermarkets, pharmacies, garments and FMCG distributors run on Silgate Retail OS for fast billing, batch tracking and multi-store visibility.',
    heroImage: '/images/industries/retail/silgate-industry-retail-hero.webp',
    heroImageAlt:
      'Silgate Retail OS at a modern Indian retail counter with barcode scanning and inventory dashboard',
    outcomes: [
      'Faster checkout',
      'Accurate stock across stores',
      'GST-ready billing'
    ],
    products: [
      { name: 'Retail OS', path: '/products/retail-os/', icon: ShoppingBag },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/retail/',
    exploreLabel: 'Explore Retail',
    Icon: ShoppingBag
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    shortName: 'Manufacturing',
    subtitle: 'Textile · Engineering · FMCG',
    headline: 'From production planning to finished goods.',
    summary:
      'Textile, engineering and FMCG manufacturers use Silgate Manufacturing OS to plan production, run the shop floor and control quality and inventory.',
    heroImage: '/images/industries/manufacturing/silgate-industry-manufacturing-hero.webp',
    heroImageAlt:
      'Silgate Manufacturing OS on a factory floor with production planning and batch tracking',
    outcomes: [
      'Predictable production',
      'Batch traceability',
      'Fewer quality escapes'
    ],
    products: [
      { name: 'Manufacturing OS', path: '/products/manufacturing-os/', icon: Factory },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/manufacturing/',
    exploreLabel: 'Explore Manufacturing',
    Icon: Factory
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    shortName: 'Healthcare',
    subtitle: 'Hospitals · Clinics · Diagnostics',
    headline: 'A calm, connected system for modern care.',
    summary:
      'Hospitals, clinics and diagnostic centres run on Silgate Healthcare OS for patient-centred workflows across front desk, clinical, IPD, pharmacy and billing.',
    heroImage: '/images/industries/healthcare/silgate-industry-healthcare-hero.webp',
    heroImageAlt:
      'Silgate Healthcare OS at a hospital reception with patient management and doctor workflow',
    outcomes: [
      'Shorter patient wait times',
      'Cleaner patient records',
      'One consolidated bill'
    ],
    products: [
      { name: 'Healthcare OS', path: '/products/healthcare-os/', icon: HeartPulse },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/healthcare/',
    exploreLabel: 'Explore Healthcare',
    Icon: HeartPulse
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    shortName: 'Hospitality',
    subtitle: 'Hotels · Resorts · F&B outlets',
    headline: 'Operating systems for modern hospitality.',
    summary:
      'Hotels, resorts and hospitality groups use Silgate Restaurant OS and Business Operations to unify F&B, guest and back-office workflows.',
    heroImage: '/images/industries/hospitality/silgate-industry-hospitality-hero.webp',
    heroImageAlt:
      'Silgate operating systems at a modern hospitality property with restaurant and back-office operations',
    outcomes: [
      'Unified F&B operations',
      'Better guest experience',
      'Cleaner back-office'
    ],
    products: [
      { name: 'Restaurant OS', path: '/products/restaurant-os/', icon: UtensilsCrossed },
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/hospitality/',
    exploreLabel: 'Explore Hospitality',
    Icon: Building2
  },
  {
    id: 'utilities',
    name: 'Utilities',
    shortName: 'Utilities',
    subtitle: 'Water · Gas · Local utilities',
    headline: 'Customer connections, service and billing — done right.',
    summary:
      'Utility providers use Silgate Business Operations to run customer connections, service requests, complaints and consumption billing on one stack.',
    heroImage: '/images/industries/utilities/silgate-industry-utilities-hero.webp',
    heroImageAlt:
      'Silgate Business Operations for utility providers showing customer connections, service and billing',
    outcomes: [
      'One customer master',
      'Faster complaint resolution',
      'Accurate consumption billing'
    ],
    products: [
      { name: 'Business Operations', path: '/products/business-operations/', icon: Layers }
    ],
    exploreLink: '/industries/utilities/',
    exploreLabel: 'Explore Utilities',
    Icon: Zap
  }
];

export default function HomeIndustriesSection() {
  const [activeId, setActiveId] = useState('transport');
  const active = industriesData.find((i) => i.id === activeId) || industriesData[0];

  return (
    <section className="relative isolate py-16 sm:py-24 lg:py-28 bg-muted/40" id="industries">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 85% 100%, rgb(17 17 17 / 0.05), transparent 70%)'
        }}
      ></div>
      <div className="container-default">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="chip-brand inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground"></span>
              Industry, not a template
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[42px] lg:leading-[1.08]">
            Built around your industry.
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Freight, food service, retail, production, care — Silgate Solutions starts from the job on
            the floor, not from a generic module list you have to rename.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            {/* Left Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {industriesData.map((item) => {
                const isActive = item.id === activeId;
                const ItemIcon = item.Icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    aria-pressed={isActive}
                    className={`group flex shrink-0 items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition cursor-pointer lg:shrink ${
                      isActive
                        ? 'border-brand-500/60 bg-brand-50/70 shadow-sm dark:bg-brand-900/25'
                        : 'border-border bg-card hover:border-brand-300/60'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                        isActive
                          ? 'bg-brand-600 text-foreground'
                          : 'bg-muted text-muted-foreground group-hover:text-foreground'
                      }`}
                    >
                      <ItemIcon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{item.name}</span>
                      <span className="hidden text-xs text-muted-foreground lg:block">
                        {item.subtitle}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Card / Content Area */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-200">
              <div className="relative">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900/10">
                  <img
                    alt={active.heroImageAlt}
                    loading="lazy"
                    decoding="async"
                    key={active.heroImage}
                    className="object-cover transition-opacity duration-300 animate-in fade-in"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent'
                    }}
                    src={active.heroImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-flex items-center gap-1.5 rounded-full text-xs font-medium tracking-tight bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-100 h-6 px-2.5">
                    {active.shortName}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {active.headline}
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted-foreground">
                    {active.summary}
                  </p>

                  <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                    {active.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="rounded-lg border border-border bg-background/60 px-3 py-2 text-sm"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="text-sm text-muted-foreground">Best fit products:</span>
                    {active.products.map((prod, idx) => {
                      const ProdIcon = prod.icon;
                      return (
                        <Link
                          key={idx}
                          to={prod.path}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium transition hover:border-brand-500/60 hover:text-brand-700 dark:hover:text-brand-200"
                        >
                          <ProdIcon className="h-3.5 w-3.5" />
                          {prod.name}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <Link
                      to={active.exploreLink}
                      className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.05em] [&_svg]:shrink-0 bg-transparent text-foreground border border-border hover:border-foreground/40 hover:bg-brand-50 dark:hover:bg-brand-900/20 h-9 px-3.5 text-sm"
                    >
                      {active.exploreLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

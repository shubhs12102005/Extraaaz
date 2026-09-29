import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers3,
  Database,
  ShieldCheck,
  Cpu,
  Truck,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  HeartPulse,
  Users,
  BadgeCheck,
  Warehouse,
  Zap,
  ShoppingCart,
  Landmark,
  ArrowRight
} from 'lucide-react';

export default function Ecosystem() {
  const flagshipSystems = [
    {
      name: "Logistics OS",
      description: "Freight forwarding, transport, fleet, warehousing, customs, and billing.",
      href: "/products/logistics-os/",
      icon: Truck,
      color: "from-sky-500 to-sky-600"
    },
    {
      name: "Restaurant OS",
      description: "Cloud POS, multi-kitchen KOTs, aggregator integrations, and recipe inventory.",
      href: "/products/restaurant-os/",
      icon: UtensilsCrossed,
      color: "from-rose-500 to-rose-600"
    },
    {
      name: "Retail OS",
      description: "Fast barcode POS, batch tracking, multi-store stock transfers, and GST billing.",
      href: "/products/retail-os/",
      icon: ShoppingBag,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Manufacturing OS",
      description: "Multi-level BOM, material requirements, production orders, and shop floor QC.",
      href: "/products/manufacturing-os/",
      icon: Factory,
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Healthcare OS",
      description: "OPD queues, doctor consultation, bed allocation, pharmacy, and TPA billing.",
      href: "/products/healthcare-os/",
      icon: HeartPulse,
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Business Operations",
      description: "Unified horizontal suite covering CRM, VMS, WMS, Utilities, and Commerce.",
      href: "/products/business-operations/",
      icon: Layers3,
      color: "from-neutral-800 to-neutral-900"
    }
  ];

  const horizontalModules = [
    { name: "CRM", role: "Leads, deals, and unified accounts", icon: Users },
    { name: "VMS", role: "Visitor gate pass and vendor check-ins", icon: BadgeCheck },
    { name: "WMS", role: "Bin-level inventory and fulfillment", icon: Warehouse },
    { name: "Utility", role: "Consumer metering and automated billing", icon: Zap },
    { name: "E-Commerce", role: "B2B / B2C storefront with live inventory sync", icon: ShoppingCart },
    { name: "Finance", role: "Automated GST invoicing and ledger reconciliations", icon: Landmark }
  ];

  return (
    <div className="min-h-full py-16 sm:py-20 lg:py-24">
      <div className="container-default max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="chip-brand shimmer inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide">
              <Layers3 className="h-3.5 w-3.5" />
              Connected Architecture
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
            The Silgate Solutions <span className="text-gradient-brand">Ecosystem</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            One shared data layer behind every department. When a transaction is booked on the operational frontline, every downstream module — warehouse, inventory, finance, and analytics — updates in real time with zero duplicate data entry.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-foreground font-bold">
              <Database className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">One Single Job Record</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Sales, warehouse, drivers, doctors, and accountants reference the exact same underlying record. No sync delays, no reconciliation gaps.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-foreground font-bold">
              <ShieldCheck className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Industry-Native Logic</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Not generic form builders. Our data models are natively coded for the operational nuances of logistics, healthcare, retail, and manufacturing.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-foreground font-bold">
              <Cpu className="h-5 w-5 text-brand-700" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Embedded Intelligence</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              AI works directly on live operating data to forecast stock shortages, detect route delays, optimize billing, and automate routine workflows.
            </p>
          </div>
        </div>

        {/* Flagship Systems Grid */}
        <div className="mt-20">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Flagship Operating Systems
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore how each industry-tailored OS connects directly into the Silgate Solutions core platform.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipSystems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/70 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-700 group-hover:translate-x-1 transition-transform">
                    Explore OS <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Unified Horizontal Applications */}
        <div className="mt-20 rounded-3xl border border-border bg-muted/30 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Horizontal Business Applications
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Every Silgate Solutions workspace comes equipped with enterprise business apps that eliminate the need for third-party point solutions.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {horizontalModules.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.name} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-amber-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{m.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.role}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact/#demo"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition bg-brand-600 text-foreground font-semibold shadow-[0_10px_30px_-8px_rgb(248_208_0_/_0.7)] hover:bg-brand-400 hover:shadow-[0_18px_45px_-10px_rgb(248_208_0_/_0.85)] h-11 px-6 text-sm"
            >
              Book an architecture demo
            </Link>
            <Link
              to="/products/business-operations/"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              View Business Operations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

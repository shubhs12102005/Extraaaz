import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  HeartPulse,
  Layers3,
  Users,
  BadgeCheck,
  Warehouse,
  Zap,
  ShoppingCart
} from 'lucide-react';

const flagshipOS = [
  {
    label: "Logistics OS",
    href: "/products/logistics-os/",
    description: "Freight, transport, warehouse, customs, finance.",
    icon: Truck
  },
  {
    label: "Restaurant OS",
    href: "/products/restaurant-os/",
    description: "POS, kitchen, delivery, analytics.",
    icon: UtensilsCrossed
  },
  {
    label: "Retail OS",
    href: "/products/retail-os/",
    description: "POS, inventory, multi-store, GST billing.",
    icon: ShoppingBag
  },
  {
    label: "Manufacturing OS",
    href: "/products/manufacturing-os/",
    description: "BOM, planning, shop floor, QC.",
    icon: Factory
  },
  {
    label: "Healthcare OS",
    href: "/products/healthcare-os/",
    description: "Patients, doctors, IPD, pharmacy, billing.",
    icon: HeartPulse
  },
  {
    label: "Business Operations",
    href: "/products/business-operations/",
    description: "CRM, VMS, WMS, Utility, E-Commerce.",
    icon: Layers3
  }
];

const businessOps = [
  {
    label: "CRM",
    href: "/products/business-operations/#crm",
    description: "Sales pipeline & customer database.",
    icon: Users
  },
  {
    label: "VMS",
    href: "/products/business-operations/#vms",
    description: "Visitor check-in & approvals.",
    icon: BadgeCheck
  },
  {
    label: "WMS",
    href: "/products/business-operations/#wms",
    description: "Warehouse, picking, dispatch.",
    icon: Warehouse
  },
  {
    label: "Utility Management",
    href: "/products/business-operations/#utility",
    description: "Connections, service, billing.",
    icon: Zap
  },
  {
    label: "E-Commerce",
    href: "/products/business-operations/#ecommerce",
    description: "Storefront, cart, delivery.",
    icon: ShoppingCart
  }
];

export default function ProductMegaMenu({ onClose }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg w-[min(90vw,880px)]">
      <div className="grid gap-6 p-6 sm:grid-cols-[minmax(220px,260px)_1fr] lg:grid-cols-[minmax(220px,260px)_repeat(2,minmax(0,1fr))]">
        {/* Featured Card */}
        <Link
          to="/products/"
          onClick={onClose}
          className="group flex h-full flex-col justify-between rounded-xl border border-border bg-gradient-to-br from-brand-50 via-background to-background p-5 transition hover:border-brand-500/40"
        >
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Featured
            </div>
            <div className="mt-2 text-lg font-semibold text-foreground">
              Silgate Business OS
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              One technology ecosystem for every business operation. Explore how the flagship OSes and Business Operations fit together.
            </p>
          </div>
          <div className="mt-6 text-sm font-medium text-brand-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            Explore the ecosystem →
          </div>
        </Link>

        {/* Flagship Operating Systems */}
        <div>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Flagship Operating Systems
          </div>
          <ul className="grid gap-1">
            {flagshipOS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 rounded-lg p-2.5 transition hover:bg-muted"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/70 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-tight text-foreground">
                        {item.label}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Business Operations */}
        <div>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            Business Operations
          </div>
          <ul className="grid gap-1">
            {businessOps.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group flex items-start gap-3 rounded-lg p-2.5 transition hover:bg-muted"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/70 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold leading-tight text-foreground">
                        {item.label}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

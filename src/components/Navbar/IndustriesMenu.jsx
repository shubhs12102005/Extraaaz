import React from 'react';
import { Link } from 'react-router-dom';
import {
  Truck,
  UtensilsCrossed,
  ShoppingBag,
  Factory,
  HeartPulse,
  Building2,
  Zap
} from 'lucide-react';

const industriesList = [
  { label: "Transport & Logistics", href: "/industries/transport/", icon: Truck },
  { label: "Restaurants & Cafés", href: "/industries/restaurant/", icon: UtensilsCrossed },
  { label: "Retail", href: "/industries/retail/", icon: ShoppingBag },
  { label: "Manufacturing", href: "/industries/manufacturing/", icon: Factory },
  { label: "Healthcare", href: "/industries/healthcare/", icon: HeartPulse },
  { label: "Hospitality", href: "/industries/hospitality/", icon: Building2 },
  { label: "Utilities", href: "/industries/utilities/", icon: Zap }
];

export default function IndustriesMenu({ onClose }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg w-[320px]">
      <div className="p-4">
        <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Industries we serve
        </div>
        <ul className="grid gap-1">
          {industriesList.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-lg p-2.5 transition hover:bg-muted"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted/70 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

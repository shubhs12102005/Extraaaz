import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Layers3,
  BookOpen,
  ShieldCheck,
  Handshake
} from 'lucide-react';

const companyList = [
  { label: "About", href: "/about/", icon: Building2 },
  { label: "Our Ecosystem", href: "/#ecosystem", icon: Layers3 },
  { label: "Clients & Case Studies", href: "/clients/", icon: BookOpen },
  { label: "Security & Trust", href: "/security/", icon: ShieldCheck },
  { label: "Partners", href: "/partners/", icon: Handshake }
];

export default function CompanyMenu({ onClose }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg w-[300px]">
      <div className="p-4">
        <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          About Silgate
        </div>
        <ul className="grid gap-1">
          {companyList.map((item) => {
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

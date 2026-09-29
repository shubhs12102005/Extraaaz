import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Cpu,
  Boxes
} from 'lucide-react';

const solutionsList = [
  { label: "Unify operations", href: "/solutions/#unify", icon: Compass },
  { label: "Replace spreadsheets", href: "/solutions/#spreadsheets", icon: BookOpen },
  { label: "Scale multi-location", href: "/solutions/#scale", icon: Sparkles },
  { label: "Compliance ready", href: "/solutions/#compliance", icon: ShieldCheck },
  { label: "Automate the busy work", href: "/solutions/#automate", icon: Cpu },
  { label: "Integrate the rest of your stack", href: "/solutions/#integrate", icon: Boxes }
];

export default function SolutionsMenu({ onClose }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg w-[320px]">
      <div className="p-4">
        <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          By outcome
        </div>
        <ul className="grid gap-1">
          {solutionsList.map((item) => {
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

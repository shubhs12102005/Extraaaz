const fs = require('fs');

const screensJsx = JSON.parse(fs.readFileSync('scratch/bizops_screens_jsx.json', 'utf8'));

const moduleMeta = [
  {
    id: 'crm',
    title: 'CRM',
    description: 'Sales pipeline, customer database and lifecycle analytics.',
    bullets: ['Pipeline & stages', 'Contacts & accounts', 'Activity timeline', 'Sales analytics'],
    url: 'app.silgate.com/business-operations/crm',
    key: 'CRM'
  },
  {
    id: 'vms',
    title: 'VMS',
    description: 'Visitor check-in, host approvals and audit-ready visitor records.',
    bullets: ['Self check-in', 'Host approvals', 'Badge printing', 'Visitor audit'],
    url: 'app.silgate.com/business-operations/vms',
    key: 'VMS'
  },
  {
    id: 'wms',
    title: 'WMS',
    description: 'Warehouse, inventory, picking and dispatch operations.',
    bullets: ['Inward & put-away', 'Bin management', 'Pick / pack / dispatch', 'Cycle count'],
    url: 'app.silgate.com/business-operations/wms',
    key: 'WMS'
  },
  {
    id: 'utility',
    title: 'Utility Management',
    description: 'Customer connections, service requests, complaints and billing.',
    bullets: ['Connection master', 'Service requests', 'Complaint routing', 'Consumption billing'],
    url: 'app.silgate.com/business-operations/utility',
    key: 'Utility Management'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Storefront, cart, order management and delivery tracking.',
    bullets: ['Catalog & storefront', 'Cart & checkout', 'Order management', 'Delivery tracking'],
    url: 'app.silgate.com/business-operations/ecommerce',
    key: 'E-Commerce'
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Accounts, invoicing, reconciliation and reporting for every OS.',
    bullets: ['General ledger', 'AR / AP', 'Bank reconciliation', 'GST-ready reports'],
    url: 'app.silgate.com/business-operations/finance',
    key: 'Finance'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Real-time dashboards, cross-OS reports and BI-grade insights.',
    bullets: ['Real-time dashboards', 'Cross-OS reports', 'Custom KPIs', 'Executive summaries'],
    url: 'app.silgate.com/business-operations/analytics',
    key: 'Analytics'
  }
];

let code = `import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function BusinessOperationsExplore() {
  const [activeId, setActiveId] = useState('crm');

  const modules = [
`;

moduleMeta.forEach(m => {
  const screenContent = screensJsx[m.key];
  code += `    {
      id: ${JSON.stringify(m.id)},
      title: ${JSON.stringify(m.title)},
      description: ${JSON.stringify(m.description)},
      bullets: ${JSON.stringify(m.bullets)},
      url: ${JSON.stringify(m.url)},
      renderScreen: () => (
        ${screenContent}
      )
    },
`;
});

code += `  ];

  const activeModule = modules.find(m => m.id === activeId) || modules[0];

  return (
    <section className="relative isolate py-16 sm:py-24 lg:py-28" id="explore">
      <div className="container-default">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="chip-brand inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground"></span>
              Modules in daily use
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl lg:text-[42px] lg:leading-[1.08]">
            Open Business Operations the way your team will.
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Each module is a real working area — not a marketing tile. Select one to see the screen, the job it does, and what ships with it.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <span id="crm" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="vms" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="wms" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="utility" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="ecommerce" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="finance" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>
            <span id="analytics" aria-hidden="true" className="absolute top-0 scroll-mt-28"></span>

            {/* Left-side Module Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {modules.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveId(m.id)}
                    aria-pressed={isActive}
                    className={\`group flex shrink-0 items-start gap-3 rounded-xl border p-3.5 text-left transition cursor-pointer lg:shrink \${
                      isActive
                        ? 'border-brand-500/60 bg-brand-50/70 dark:bg-brand-900/25 shadow-sm'
                        : 'border-border bg-card hover:border-brand-300/60'
                    }\`}
                  >
                    <span
                      className={\`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold transition \${
                        isActive
                          ? 'bg-brand-600 text-foreground'
                          : 'bg-muted text-muted-foreground group-hover:text-foreground'
                      }\`}
                    >
                      {isActive ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : null}
                    </span>
                    <span className="min-w-0">
                      <span className={\`block text-sm font-semibold \${isActive ? 'text-foreground' : 'text-foreground/90'}\`}>
                        {m.title}
                      </span>
                      <span className="text-muted-foreground mt-0.5 line-clamp-2 hidden text-xs lg:block">
                        {m.description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right-side Product Preview */}
            <div>
              <div style={{ opacity: 1, transform: 'none' }} className="transition-all duration-200">
                <figure className="relative">
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
                    {/* Browser Chrome Header */}
                    <div className="flex items-center gap-2 border-b border-border/70 bg-muted/60 px-3.5 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"></span>
                      <div className="ml-3 hidden flex-1 items-center justify-center sm:flex">
                        <div className="rounded-full bg-background/80 px-3 py-1 text-xs text-muted-foreground shadow-sm">
                          {activeModule.url}
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full text-xs font-medium tracking-tight bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-200 h-5 px-2 ml-auto">
                        Product Preview
                      </span>
                    </div>

                    {/* Active Screen Rendering */}
                    <div role="img" aria-label={\`Silgate Business Operations — \${activeModule.title} screen\`}>
                      {activeModule.renderScreen()}
                    </div>
                  </div>
                </figure>

                {/* Module Details Below Preview */}
                <div className="mt-6 grid gap-6 sm:grid-cols-[1.4fr_1fr]">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{activeModule.title}</h3>
                    <p className="text-muted-foreground mt-2">{activeModule.description}</p>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                    {activeModule.bullets.map((b, idx) => (
                      <li key={idx} className="text-foreground/90 flex items-start gap-2 text-sm">
                        <Check className="text-brand-700 mt-0.5 h-4 w-4 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperationsExplore.jsx', code);
console.log('Generated src/pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperationsExplore.jsx');

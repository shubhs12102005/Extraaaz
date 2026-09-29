import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Silgate Solutions Branding & Contact Section */}
      <section className="border-t border-[#1d3b56] bg-[#0b2034] px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
        <div className="container-default max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
            {/* Silgate Logo & Description */}
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div className="inline-block rounded-lg bg-white p-2.5 shadow-sm">
                <img
                  src="/silgate-logo-latest.png"
                  alt="Silgate Solutions"
                  className="h-12 w-auto object-contain sm:h-14"
                />
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-300">
                Strategic technology and staffing partner delivering industry-grade digital operations, enterprise workflows, and specialized talent solutions across global domains.
              </p>
            </div>

            {/* Silgate Contact Details */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#29445d] bg-[#142d45] text-[#ff9b70]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Headquarters
                  </div>
                  <address className="text-xs not-italic leading-snug text-slate-200">
                    Road Number 8, SG Barve Rd, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#29445d] bg-[#142d45] text-[#ff9b70]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email
                  </div>
                  <a
                    href="mailto:manoj@silgatehiring.com"
                    className="break-all text-xs font-medium text-slate-200 transition-colors hover:text-[#ff9b70]"
                  >
                    manoj@silgatehiring.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#29445d] bg-[#142d45] text-[#ff9b70]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phone
                  </div>
                  <a
                    href="tel:+918108810916"
                    className="text-xs font-medium text-slate-200 transition-colors hover:text-[#ff9b70]"
                  >
                    +91 81088 10916
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Silgate Solutions Footer (Exact Source Structure) */}
      <footer className="border-t border-border bg-muted/40">
        <div className="container-default py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
            {/* Left Brand Column */}
            <div className="max-w-sm">
              <Link to="/">
                <img
                  alt="Silgate Solutions"
                  width="784"
                  height="289"
                  className="h-10 w-auto shrink-0 select-none sm:h-12"
                  src="/silgate-logo-latest.png"
                />
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                Strategic technology and staffing solutions for modern businesses.
              </p>
            </div>

            {/* Products Column */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Products
              </div>
              <ul className="grid gap-2 text-sm">
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/logistics-os/">Logistics OS</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/restaurant-os/">Restaurant OS</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/retail-os/">Retail OS</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/manufacturing-os/">Manufacturing OS</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/healthcare-os/">Healthcare OS</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/products/business-operations/">Business Operations</Link></li>
              </ul>
            </div>

            {/* Industries Column */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Industries
              </div>
              <ul className="grid gap-2 text-sm">
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/transport/">Transport &amp; Logistics</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/restaurant/">Restaurants</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/retail/">Retail</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/manufacturing/">Manufacturing</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/healthcare/">Healthcare</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/hospitality/">Hospitality</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/industries/utilities/">Utilities</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Company
              </div>
              <ul className="grid gap-2 text-sm">
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/about/">About</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/#ecosystem">Our Ecosystem</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/clients/">Clients</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/security/">Security</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/partners/">Partners</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/contact/">Contact</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Resources
              </div>
              <ul className="grid gap-2 text-sm">
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/solutions/">Solutions</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/contact/#demo">Book a demo</Link></li>
                <li><Link className="text-foreground/85 transition hover:text-foreground" to="/contact/?type=general#demo">Partner with us</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <div>
              © 2026 Silgate Solutions. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="mailto:manoj@silgatehiring.com" className="transition-colors hover:text-foreground">
                manoj@silgatehiring.com
              </a>
              <span aria-hidden="true">·</span>
              <a href="tel:+918108810916" className="transition-colors hover:text-foreground">
                +91 81088 10916
              </a>
              <span aria-hidden="true">·</span>
              <Link to="/privacy/" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms/" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

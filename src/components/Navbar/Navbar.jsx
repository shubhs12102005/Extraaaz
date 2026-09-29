import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import ProductMegaMenu from './ProductMegaMenu';
import IndustriesMenu from './IndustriesMenu';
import SolutionsMenu from './SolutionsMenu';
import CompanyMenu from './CompanyMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'products' | 'industries' | 'solutions' | 'company' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Handle scroll state for sticky header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setActiveMenu(null);
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMenu = (menuName) => {
    setActiveMenu(prev => prev === menuName ? null : menuName);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition backdrop-blur ${
        scrolled
          ? 'border-border/80 bg-background/80 shadow-[0_1px_0_rgb(0_0_0_/_0.04)]'
          : 'border-transparent bg-background/60'
      }`}
      ref={navRef}
    >
      <div className="container-default flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Silgate Solutions home"
          onClick={() => setActiveMenu(null)}
        >
          <img
            alt="Silgate Solutions"
            width="784"
            height="289"
            className="h-12 w-auto shrink-0 select-none sm:h-9"
            src="/silgate-logo-latest.png"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="relative z-50 hidden lg:block">
          <ul className="flex items-center gap-1">
            {/* Products */}
            <li className="relative">
              <button
                type="button"
                onClick={() => toggleMenu('products')}
                aria-expanded={activeMenu === 'products'}
                className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeMenu === 'products'
                    ? 'bg-muted text-foreground'
                    : 'text-foreground/85 hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                Products
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                    activeMenu === 'products' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMenu === 'products' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <ProductMegaMenu onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </li>

            {/* Industries */}
            <li className="relative">
              <button
                type="button"
                onClick={() => toggleMenu('industries')}
                aria-expanded={activeMenu === 'industries'}
                className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeMenu === 'industries'
                    ? 'bg-muted text-foreground'
                    : 'text-foreground/85 hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                Industries
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                    activeMenu === 'industries' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMenu === 'industries' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <IndustriesMenu onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </li>

            {/* Solutions */}
            <li className="relative">
              <button
                type="button"
                onClick={() => toggleMenu('solutions')}
                aria-expanded={activeMenu === 'solutions'}
                className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeMenu === 'solutions'
                    ? 'bg-muted text-foreground'
                    : 'text-foreground/85 hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                Solutions
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                    activeMenu === 'solutions' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMenu === 'solutions' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <SolutionsMenu onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </li>

            {/* Company */}
            <li className="relative">
              <button
                type="button"
                onClick={() => toggleMenu('company')}
                aria-expanded={activeMenu === 'company'}
                className={`group inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeMenu === 'company'
                    ? 'bg-muted text-foreground'
                    : 'text-foreground/85 hover:bg-muted/70 hover:text-foreground'
                }`}
              >
                Company
                <ChevronDown
                  className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${
                    activeMenu === 'company' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {activeMenu === 'company' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <CompanyMenu onClose={() => setActiveMenu(null)} />
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact/"
            className="group hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-transparent text-foreground hover:bg-muted h-9 px-3.5 text-sm"
          >
            Contact sales
          </Link>
          <Link
            to="/contact/#demo"
            className="group hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-brand-600 text-foreground font-semibold shadow-[0_10px_30px_-8px_rgb(248_208_0_/_0.7)] hover:bg-brand-400 hover:shadow-[0_18px_45px_-10px_rgb(248_208_0_/_0.85)] hover:-translate-y-0.5 active:translate-y-0 h-9 px-3.5 text-sm"
          >
            Book a demo
          </Link>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="group inline-flex items-center justify-center gap-2 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-transparent text-foreground hover:bg-muted h-10 w-10 p-0"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] z-40 h-[calc(100vh-64px)] overflow-y-auto border-t border-border bg-background/98 backdrop-blur lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container-default flex flex-col gap-1 py-4">
            {/* Products Accordion */}
            <div className="border-b border-border/60 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpanded(prev => prev === 'products' ? null : 'products')}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              >
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'products' && (
                <div className="pl-4 pt-1 pb-2 space-y-1">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-3 pt-2">Flagship OS</div>
                  <Link to="/products/logistics-os/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Logistics OS</Link>
                  <Link to="/products/restaurant-os/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Restaurant OS</Link>
                  <Link to="/products/retail-os/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Retail OS</Link>
                  <Link to="/products/manufacturing-os/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Manufacturing OS</Link>
                  <Link to="/products/healthcare-os/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Healthcare OS</Link>
                  <Link to="/products/business-operations/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Business Operations</Link>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-3 pt-3">Apps</div>
                  <Link to="/products/business-operations/#crm" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">CRM</Link>
                  <Link to="/products/business-operations/#vms" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">VMS</Link>
                  <Link to="/products/business-operations/#wms" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">WMS</Link>
                  <Link to="/products/business-operations/#utility" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Utility Management</Link>
                  <Link to="/products/business-operations/#ecommerce" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">E-Commerce</Link>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border-b border-border/60 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpanded(prev => prev === 'industries' ? null : 'industries')}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              >
                Industries
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'industries' && (
                <div className="pl-4 pt-1 pb-2 space-y-1">
                  <Link to="/industries/transport/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Transport &amp; Logistics</Link>
                  <Link to="/industries/restaurant/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Restaurants &amp; Cafés</Link>
                  <Link to="/industries/retail/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Retail</Link>
                  <Link to="/industries/manufacturing/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Manufacturing</Link>
                  <Link to="/industries/healthcare/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Healthcare</Link>
                  <Link to="/industries/hospitality/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Hospitality</Link>
                  <Link to="/industries/utilities/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Utilities</Link>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-border/60 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpanded(prev => prev === 'solutions' ? null : 'solutions')}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'solutions' && (
                <div className="pl-4 pt-1 pb-2 space-y-1">
                  <Link to="/solutions/#unify" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Unify operations</Link>
                  <Link to="/solutions/#spreadsheets" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Replace spreadsheets</Link>
                  <Link to="/solutions/#scale" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Scale multi-location</Link>
                  <Link to="/solutions/#compliance" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Compliance ready</Link>
                  {/* <Link to="/solutions/#automate" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Automate the busy work</Link>
                  <Link to="/solutions/#integrate" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Integrate the rest of your stack</Link> */}
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div className="border-b border-border/60 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpanded(prev => prev === 'company' ? null : 'company')}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-muted"
              >
                Company
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded === 'company' && (
                <div className="pl-4 pt-1 pb-2 space-y-1">
                  <Link to="/about/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">About</Link>
                  <Link to="/#ecosystem" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Our Ecosystem</Link>
                  <Link to="/clients/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Clients &amp; Case Studies</Link>
                  <Link to="/security/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Security &amp; Trust</Link>
                  <Link to="/partners/" className="block rounded-lg px-3 py-1.5 text-sm text-foreground/80 hover:bg-muted hover:text-foreground">Partners</Link>
                </div>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 flex flex-col gap-2 pt-2">
              <Link
                to="/contact/"
                className="flex items-center justify-center rounded-full border border-border bg-background py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Contact sales
              </Link>
              <Link
                to="/contact/#demo"
                className="flex items-center justify-center rounded-full bg-brand-600 py-2.5 text-sm font-semibold text-foreground shadow-md hover:bg-brand-400"
              >
                Book a demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/HOME/Home';
import Products from './pages/PRODUCTS/Products';
import LogisticsOS from './pages/PRODUCTS/LOGISTICS-OS/LogisticsOS';
import RestaurantOS from './pages/PRODUCTS/RESTAURANT-OS/RestaurantOS';
import RetailOS from './pages/PRODUCTS/RETAIL-OS/RetailOS';
import ManufacturingOS from './pages/PRODUCTS/MANUFACTURING-OS/ManufacturingOS';
import HealthcareOS from './pages/PRODUCTS/HEALTHCARE-OS/HealthcareOS';
import BusinessOperations from './pages/PRODUCTS/BUSINESS-OPERATIONS/BusinessOperations';

// Industries
import Transport from './pages/INDUSTRIES/Transport';
import Restaurant from './pages/INDUSTRIES/Restaurant';
import Retail from './pages/INDUSTRIES/Retail';
import Manufacturing from './pages/INDUSTRIES/Manufacturing';
import Healthcare from './pages/INDUSTRIES/Healthcare';
import Hospitality from './pages/INDUSTRIES/Hospitality';
import Utilities from './pages/INDUSTRIES/Utilities';

// Solutions
import Solutions from './pages/SOLUTIONS/Solutions';

// Company
import About from './pages/COMPANY/About';
import Ecosystem from './pages/COMPANY/Ecosystem';
import Clients from './pages/COMPANY/Clients';
import Security from './pages/COMPANY/Security';
import Partners from './pages/COMPANY/Partners';
import Contact from './pages/COMPANY/Contact';

// Legal
import Privacy from './pages/LEGAL/Privacy';
import Terms from './pages/LEGAL/Terms';

// Auto scroll to top / handle hash anchors
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Products */}
          <Route path="/products/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/logistics-os/" element={<LogisticsOS />} />
          <Route path="/products/logistics-os" element={<LogisticsOS />} />
          <Route path="/products/restaurant-os/" element={<RestaurantOS />} />
          <Route path="/products/restaurant-os" element={<RestaurantOS />} />
          <Route path="/products/retail-os/" element={<RetailOS />} />
          <Route path="/products/retail-os" element={<RetailOS />} />
          <Route path="/products/manufacturing-os/" element={<ManufacturingOS />} />
          <Route path="/products/manufacturing-os" element={<ManufacturingOS />} />
          <Route path="/products/healthcare-os/" element={<HealthcareOS />} />
          <Route path="/products/healthcare-os" element={<HealthcareOS />} />
          <Route path="/products/business-operations/" element={<BusinessOperations />} />
          <Route path="/products/business-operations" element={<BusinessOperations />} />

          {/* Industries */}
          <Route path="/industries/" element={<Transport />} />
          <Route path="/industries" element={<Transport />} />
          <Route path="/industries/transport/" element={<Transport />} />
          <Route path="/industries/transport" element={<Transport />} />
          <Route path="/industries/restaurant/" element={<Restaurant />} />
          <Route path="/industries/restaurant" element={<Restaurant />} />
          <Route path="/industries/retail/" element={<Retail />} />
          <Route path="/industries/retail" element={<Retail />} />
          <Route path="/industries/manufacturing/" element={<Manufacturing />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/healthcare/" element={<Healthcare />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/hospitality/" element={<Hospitality />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/industries/utilities/" element={<Utilities />} />
          <Route path="/industries/utilities" element={<Utilities />} />

          {/* Solutions */}
          <Route path="/solutions/" element={<Solutions />} />
          <Route path="/solutions" element={<Solutions />} />

          {/* Company */}
          <Route path="/about/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem/" element={<Ecosystem />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/clients/" element={<Clients />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/case-studies/" element={<Clients />} />
          <Route path="/case-studies" element={<Clients />} />
          <Route path="/security/" element={<Security />} />
          <Route path="/security" element={<Security />} />
          <Route path="/partners/" element={<Partners />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legal */}
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms/" element={<Terms />} />
          <Route path="/terms" element={<Terms />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

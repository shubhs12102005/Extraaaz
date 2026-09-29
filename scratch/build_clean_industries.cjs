const fs = require('fs');

// 1. LOGISTICS
const logisticsCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const Logistics = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Logistics Operating Ecosystem | Extraaaz"
      seoDesc="Manage quotations, shipments, warehouse operations, freight tracking and billing from one connected logistics platform. Book a free demo."
      accent="#06b6d4"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #071a25 0%, #04070f 65%)"
      badge="Logistics Operating Ecosystem"
      defaultIndustry="Logistics"
      headlineLines={[
        { text: "Complete Logistics Operations.", color: null },
        { text: "Connected", color: "gold" },
        { text: " End To End.", color: "accent" }
      ]}
      subheadline="Manage quotations, shipments, warehouse operations, freight tracking and billing from one platform — built for how logistics businesses actually operate."
      flow={[
        { step: "Lead", color: "#818cf8" },
        { step: "Quotation", color: "#a78bfa" },
        { step: "Shipment", color: "#38bdf8" },
        { step: "Warehouse", color: "#22d3ee" },
        { step: "Tracking", color: "#34d399" },
        { step: "Delivery", color: "#a3e635" },
        { step: "Billing", color: "#f59e0b" },
        { step: "Payment", color: "#f87171" },
        { step: "Analytics", color: "#c084fc" }
      ]}
      modules={[
        { name: "CRM", desc: "Leads, quotes & customer pipeline", color: "#818cf8" },
        { name: "Freight Management", desc: "Consignment & freight operations", color: "#38bdf8" },
        { name: "LR Management", desc: "Lorry receipt & document control", color: "#22d3ee" },
        { name: "Shipment Tracking", desc: "Live consignment visibility", color: "#34d399" },
        { name: "Warehouse Management", desc: "Stock & zone management", color: "#60a5fa" },
        { name: "Billing", desc: "Freight billing & collections", color: "#f59e0b" },
        { name: "Finance", desc: "Revenue, costs & P&L", color: "#c084fc" },
        { name: "Analytics", desc: "Real-time dashboards & reports", color: "#a3e635" }
      ]}
      challenges={[
        { label: "Shipment Delays", desc: "No live tracking leads to late deliveries and customer complaints" },
        { label: "Manual Tracking", desc: "Phone-based updates create confusion and data gaps" },
        { label: "Warehouse Coordination", desc: "Stock mismatches between physical and system records" },
        { label: "Freight Visibility", desc: "No real-time view of consignment status across routes" },
        { label: "Revenue Leakage", desc: "Unbilled shipments and uncollected payments drain profitability" }
      ]}
      afterPoints={[
        "Live consignment tracking from pickup to delivery",
        "Automated LR generation and freight billing",
        "Real-time warehouse stock visibility",
        "End-to-end freight workflow automation",
        "Zero revenue leakage with auto-billing",
        "Single dashboard for operations and finance"
      ]}
      outcomes={[
        { metric: "100%", label: "Shipment Visibility", desc: "Every consignment tracked live from pickup to delivery." },
        { metric: "40%", label: "Fewer Delays", desc: "Automated routing and alerts prevent delivery bottlenecks." },
        { metric: "Zero", label: "Freight Billing Gaps", desc: "Auto-billing ensures no consignment leaves without an invoice." },
        { metric: "Live", label: "Financial Visibility", desc: "Real-time P&L, collections and freight cost insight." }
      ]}
      ctaHeadline={["Ready to Transform Your", "Logistics Operations?"]}
      ctaAccentWord="Connected."
    />
  );
};

export default Logistics;
`;

// 2. TRANSPORT
const transportCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const Transport = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Transport Operating Ecosystem | Extraaaz"
      seoDesc="Manage fleet, drivers, routes, fuel, maintenance, trip operations and billing in one connected transport ecosystem. Book a free demo."
      accent="#f97316"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #1f0e05 0%, #04070f 65%)"
      badge="Transport Operating Ecosystem"
      defaultIndustry="Transport"
      headlineLines={[
        { text: "Control Every Vehicle,", color: null },
        { text: "Trip and Route", color: null },
        { text: "From One Platform.", color: "accent" }
      ]}
      subheadline="Manage fleet, drivers, routes, fuel, maintenance, trip operations and billing in one ecosystem — complete transport visibility from office to road."
      flow={[
        { step: "Lead", color: "#818cf8" },
        { step: "Contract", color: "#a78bfa" },
        { step: "Vehicle Assign", color: "#f97316" },
        { step: "Driver Alloc.", color: "#fb923c" },
        { step: "Trip Sheet", color: "#f59e0b" },
        { step: "Fuel Tracking", color: "#22d3ee" },
        { step: "Route Track", color: "#34d399" },
        { step: "Delivery", color: "#60a5fa" },
        { step: "Billing", color: "#f87171" },
        { step: "Settlement", color: "#c084fc" }
      ]}
      modules={[
        { name: "Fleet Management", desc: "Vehicle profiles, documents & fitness tracking", color: "#f97316" },
        { name: "Driver Management", desc: "Licensing, attendance & performance logs", color: "#fb923c" },
        { name: "Trip Sheets", desc: "Digital dispatch, toll & expense tracking", color: "#f59e0b" },
        { name: "Fuel Tracking", desc: "Mileage monitoring & theft prevention", color: "#22d3ee" },
        { name: "Route Tracking", desc: "Live GPS & halt alerts", color: "#34d399" },
        { name: "Maintenance", desc: "Preventive service & breakdown alerts", color: "#60a5fa" },
        { name: "Trip Billing", desc: "Client invoices, detention & extras", color: "#f87171" },
        { name: "Driver Settlement", desc: "Batta, advance & trip balance clearing", color: "#c084fc" }
      ]}
      challenges={[
        { label: "Fuel Pilferage", desc: "Undetected fuel siphon and mileage discrepancies eat profit" },
        { label: "Delayed Trip Billing", desc: "Missing paper trip sheets delay invoicing corporate clients" },
        { label: "Driver Mismanagement", desc: "Unsettled advances and lack of driver accountability" },
        { label: "Breakdowns on Road", desc: "Unplanned vehicle repairs cause delayed deliveries and customer penalties" },
        { label: "Blind-spot Operations", desc: "No central visibility into vehicle location, status or idle time" }
      ]}
      afterPoints={[
        "Real-time GPS vehicle tracking with stoppage and route alerts",
        "Digital trip sheets auto-calculating driver settlement and client bills",
        "Automated fuel and mileage reconciliation per trip",
        "Vehicle document renewal and preventive maintenance notifications",
        "End-to-end trip profitability and operational transparency"
      ]}
      outcomes={[
        { metric: "100%", label: "Fleet Visibility", desc: "Know the exact status and location of every vehicle." },
        { metric: "25%", label: "Fuel Cost Savings", desc: "Eliminate fuel pilferage with live mileage tracking." },
        { metric: "Zero", label: "Billing Delays", desc: "Instant digital trip closure and automated invoice dispatch." },
        { metric: "99%", label: "On-Time Dispatch", desc: "Optimized route planning and fast turn-around times." }
      ]}
      ctaHeadline={["Take Total Control of Your", "Transport Fleet Today."]}
      ctaAccentWord="Connected."
    />
  );
};

export default Transport;
`;

// 3. RETAIL & DISTRIBUTION
const retailCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const RetailDistribution = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Retail & Distribution Operating Ecosystem | Extraaaz"
      seoDesc="Manage retail stores, distributors, sales teams and inventory across multiple locations from one connected ecosystem. Book a free demo."
      accent="#a78bfa"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #130d28 0%, #04070f 65%)"
      badge="Retail & Distribution Operating Ecosystem"
      defaultIndustry="Retail & Distribution"
      headlineLines={[
        { text: "Connect Inventory, Sales", color: null },
        { text: "and Distribution Into", color: null },
        { text: "One Ecosystem.", color: "accent" }
      ]}
      subheadline="Manage retail stores, distributors, sales teams and inventory across multiple locations — all connected in one operational backbone."
      flow={[
        { step: "Order", color: "#818cf8" },
        { step: "Inventory", color: "#a78bfa" },
        { step: "Warehouse", color: "#38bdf8" },
        { step: "Salesman", color: "#34d399" },
        { step: "Distributor", color: "#fb923c" },
        { step: "Retailer", color: "#f59e0b" },
        { step: "Collection", color: "#f87171" },
        { step: "Analytics", color: "#c084fc" }
      ]}
      modules={[
        { name: "Omnichannel POS", desc: "High-speed retail counter billing & barcode scans", color: "#818cf8" },
        { name: "Distribution Management", desc: "Secondary sales & dealer orders", color: "#a78bfa" },
        { name: "Field Sales App", desc: "Sales rep beat planning & order booking", color: "#34d399" },
        { name: "Central Inventory", desc: "Multi-branch stock transfer & replenishment", color: "#38bdf8" },
        { name: "Scheme & Promo Engine", desc: "BOGO, slab discounts & loyalty points", color: "#fb923c" },
        { name: "Distributor Portal", desc: "Self-service stock ordering & ledger balance", color: "#f59e0b" },
        { name: "Collections & Khata", desc: "Outstanding tracking & auto-payment alerts", color: "#f87171" },
        { name: "Retail Analytics", desc: "Fast vs slow-moving SKUs & margin reports", color: "#c084fc" }
      ]}
      challenges={[
        { label: "Channel Stock Blindness", desc: "No visibility into distributor or retailer unsold inventory" },
        { label: "Slow Sales Order Sync", desc: "Field salesmen collect orders on paper or phone, delaying dispatch" },
        { label: "Price & Scheme Chaos", desc: "Inconsistent discounts across dealers eroding overall gross margin" },
        { label: "Delayed Payment Collections", desc: "Unmonitored credit terms and overdue customer khata balances" },
        { label: "Frequent Stockouts", desc: "High-demand SKUs run out while dead inventory sits in warehouses" }
      ]}
      afterPoints={[
        "Live visibility into warehouse, distributor, and store-level stock",
        "Field sales app for instant mobile order booking with live stock check",
        "Automated pricing, schemes, and tiered trade discounts",
        "Real-time distributor ledger and automated payment reminders",
        "Demand-driven stock replenishment alerts preventing stockouts"
      ]}
      outcomes={[
        { metric: "100%", label: "Stock Transparency", desc: "Consolidated multi-location inventory at your fingertips." },
        { metric: "35%", label: "Faster Order Cycle", desc: "Orders punched in field instantly route to warehouse dispatch." },
        { metric: "Zero", label: "Scheme Discrepancies", desc: "Rules-based automated discounting and trade margins." },
        { metric: "2X", label: "Collection Speed", desc: "Automated payment follow-ups and transparent dealer balances." }
      ]}
      ctaHeadline={["Unify Your Entire Distribution", "Network with Extraaaz."]}
      ctaAccentWord="Connected."
    />
  );
};

export default RetailDistribution;
`;

// 4. COURIER & SHIPPING
const courierCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const CourierShipping = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Courier & Shipping Operating Ecosystem | Extraaaz"
      seoDesc="Manage bookings, pickups, shipment tracking, POD and customer communication from one connected courier platform. Book a free demo."
      accent="#818cf8"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #0d0f28 0%, #04070f 65%)"
      badge="Courier & Shipping Operating Ecosystem"
      defaultIndustry="Courier & Shipping"
      headlineLines={[
        { text: "Every Shipment.", color: null },
        { text: "Every Location.", color: null },
        { text: "Fully Connected.", color: "accent" }
      ]}
      subheadline="Manage bookings, pickups, shipment tracking, POD and customer communication from one platform — end-to-end courier operations under full control."
      flow={[
        { step: "Booking", color: "#818cf8" },
        { step: "Pickup", color: "#a78bfa" },
        { step: "Shipment", color: "#60a5fa" },
        { step: "Tracking", color: "#38bdf8" },
        { step: "Delivery", color: "#34d399" },
        { step: "POD", color: "#a3e635" },
        { step: "Billing", color: "#f59e0b" },
        { step: "Payment", color: "#f87171" }
      ]}
      modules={[
        { name: "Online Booking Engine", desc: "Self-service web and counter parcel booking", color: "#818cf8" },
        { name: "Pickup Dispatch", desc: "Rider allocation and barcode scan pickup", color: "#a78bfa" },
        { name: "Hub Inward & Outward", desc: "Manifest scanning, bag creation & routing", color: "#60a5fa" },
        { name: "Real-Time Tracking", desc: "Airway bill (AWB) live status tracking", color: "#38bdf8" },
        { name: "Last-Mile Delivery", desc: "Rider app with navigation & delivery run sheets", color: "#34d399" },
        { name: "Digital POD Capture", desc: "Customer OTP verification & signature capture", color: "#a3e635" },
        { name: "Corporate Client Billing", desc: "Contract pricing, weight audit & auto-invoicing", color: "#f59e0b" },
        { name: "COD Reconciliation", desc: "Cash on delivery collections & remittance", color: "#f87171" }
      ]}
      challenges={[
        { label: "Lost & Misrouted Parcels", desc: "Manual sorting errors cause packages to travel to incorrect hubs" },
        { label: "Weight Discrepancies", desc: "Misdeclared package weight leads to corporate billing revenue loss" },
        { label: "Customer Where-is-My-Order Calls", desc: "Customer care overwhelmed with repetitive parcel tracking queries" },
        { label: "COD Remittance Delays", desc: "Delayed reconciliation of cash collected by delivery riders" },
        { label: "Paper POD Lost in Transit", desc: "Unable to prove delivery without physical paper slips" }
      ]}
      afterPoints={[
        "Barcode scanning at every transit hub eliminating lost parcels",
        "Integrated volumetric weight calculation and automated rate check",
        "Customer WhatsApp tracking notifications with live delivery ETA",
        "Instant digital POD with photo and customer OTP verification",
        "Automated same-day COD reconciliation and client settlement"
      ]}
      outcomes={[
        { metric: "100%", label: "Parcel Traceability", desc: "Every AWB scanned and logged at every transit milestone." },
        { metric: "99.8%", label: "Delivery Accuracy", desc: "Eliminate misrouted packages through automated bag sorting." },
        { metric: "Instant", label: "Proof of Delivery", desc: "Real-time photo and signature uploaded to portal immediately." },
        { metric: "Zero", label: "COD Discrepancies", desc: "Rider cash automatically reconciled with bank deposits." }
      ]}
      ctaHeadline={["Deliver Superior Courier", "Service with Complete Visibility."]}
      ctaAccentWord="Connected."
    />
  );
};

export default CourierShipping;
`;

// 5. HEALTHCARE & PHARMACY
const healthcareCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const HealthcarePharmacy = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Healthcare & Pharmacy Operating Ecosystem | Extraaaz"
      seoDesc="Connect inventory, billing, CRM, prescriptions, customers and analytics in one healthcare ecosystem. Book a free demo."
      accent="#34d399"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #061a12 0%, #04070f 65%)"
      badge="Healthcare & Pharmacy Operating Ecosystem"
      defaultIndustry="Healthcare & Pharmacy"
      headlineLines={[
        { text: "Manage Healthcare", color: null },
        { text: "Operations With", color: null },
        { text: "Complete Control.", color: "accent" }
      ]}
      subheadline="Connect inventory, billing, CRM, prescriptions, customers and analytics in one ecosystem — built for compliant, profitable pharmacy and healthcare operations."
      flow={[
        { step: "Customer", color: "#34d399" },
        { step: "Prescription", color: "#60a5fa" },
        { step: "Billing", color: "#f59e0b" },
        { step: "Inventory", color: "#818cf8" },
        { step: "Purchase", color: "#22d3ee" },
        { step: "Expiry Track", color: "#f87171" },
        { step: "CRM", color: "#a78bfa" },
        { step: "Analytics", color: "#c084fc" }
      ]}
      modules={[
        { name: "Pharmacy POS Billing", desc: "Fast GST medicine billing with strip & unit pricing", color: "#34d399" },
        { name: "Batch & Expiry Control", desc: "First-Expiry-First-Out (FEFO) automated selection", color: "#f87171" },
        { name: "Substitute Drug Finder", desc: "Instant salt and generic composition search", color: "#60a5fa" },
        { name: "Prescription Management", desc: "Digital prescription storage and refill reminders", color: "#818cf8" },
        { name: "Supplier Purchase & Inward", desc: "Auto PO creation and margin reconciliation", color: "#22d3ee" },
        { name: "Schedule H & H1 Registers", desc: "Government compliance audit logs and narcotic control", color: "#f59e0b" },
        { name: "Patient CRM", desc: "Chronic patient refill alerts and WhatsApp messages", color: "#a78bfa" },
        { name: "Healthcare Analytics", desc: "Expiry write-off reduction & profit margin analysis", color: "#c084fc" }
      ]}
      challenges={[
        { label: "Expired Stock Losses", desc: "Medicines expiring unnoticed on shelves eating into pharmacy margins" },
        { label: "Complex Drug Compliance", desc: "Manual records for Schedule H, H1 and banned drug tracking" },
        { label: "Slow Counter Checkout", desc: "Struggling to find salts, generic alternatives, or batch numbers during peak hours" },
        { label: "Lost Chronic Patient Refills", desc: "Patients moving to online portals due to lack of timely refill reminders" },
        { label: "Supplier Billing Discrepancies", desc: "Mismatches between received drug batches, free goods, and invoice rates" }
      ]}
      afterPoints={[
        "Automated FEFO batch picking preventing expired medicine sales",
        "Instant substitute drug suggestions based on salt composition",
        "Automated WhatsApp refill alerts for diabetic, BP, and cardiac patients",
        "1-click Schedule H and H1 audit compliance reporting",
        "Real-time supplier purchase order generation based on min/max stock levels"
      ]}
      outcomes={[
        { metric: "80%", label: "Less Expiry Wastage", desc: "Proactive return-to-supplier alerts before expiry deadlines." },
        { metric: "3X", label: "Faster Medicine Billing", desc: "Barcode-enabled batch and strip checkout in seconds." },
        { metric: "100%", label: "Regulatory Compliance", desc: "Accurate Schedule H registers ready for drug inspectors." },
        { metric: "45%", label: "Higher Chronic Patient Retention", desc: "Automated WhatsApp refill follow-ups drive repeat visits." }
      ]}
      ctaHeadline={["Upgrade to Compliant, Profitable", "Pharmacy Management."]}
      ctaAccentWord="Connected."
    />
  );
};

export default HealthcarePharmacy;
`;

// 6. MANUFACTURING
const mfgCode = `import React from 'react';
import { IndustryEcosystemTemplate } from '../../components/common/IndustryEcosystemTemplate';

export const Manufacturing = () => {
  return (
    <IndustryEcosystemTemplate
      seoTitle="Manufacturing Operating Ecosystem | Extraaaz"
      seoDesc="Extraaaz connects CRM, BOM, Production Planning, Quality Control, Inventory, Dispatch and Finance into one Manufacturing Operating Ecosystem. Book a free demo."
      accent="#10b981"
      heroBg="radial-gradient(ellipse 80% 55% at 50% -5%, #0f1f1a 0%, #04070f 65%)"
      badge="Manufacturing Operating Ecosystem"
      defaultIndustry="Manufacturing"
      headlineLines={[
        { text: "From Raw Material", color: null },
        { text: "to Dispatch.", color: null },
        { text: "One Connected", color: "gold" },
        { text: "Manufacturing Ecosystem.", color: "accent" }
      ]}
      subheadline="Connect CRM, Production Planning, BOM, Inventory, Quality Control, Dispatch and Finance in a single platform — built for how manufacturing businesses actually operate."
      flow={[
        { step: "Lead", color: "#818cf8" },
        { step: "Quotation", color: "#a78bfa" },
        { step: "Sales Order", color: "#f472b6" },
        { step: "BOM", color: "#fb923c" },
        { step: "Production Plan", color: "#22d3ee" },
        { step: "Raw Material", color: "#34d399" },
        { step: "Production", color: "#60a5fa" },
        { step: "Quality Control", color: "#f59e0b" },
        { step: "Finished Goods", color: "#a3e635" },
        { step: "Dispatch", color: "#38bdf8" },
        { step: "Invoice", color: "#f87171" },
        { step: "Finance", color: "#c084fc" }
      ]}
      modules={[
        { name: "CRM", desc: "Leads, quotes & customer pipeline", color: "#818cf8" },
        { name: "Procurement", desc: "Vendor orders & raw material buying", color: "#a3e635" },
        { name: "Inventory", desc: "Real-time stock & batch control", color: "#34d399" },
        { name: "BOM", desc: "Bill of materials & component costs", color: "#fb923c" },
        { name: "Production Planning", desc: "Capacity planning & work orders", color: "#22d3ee" },
        { name: "Batch Tracking", desc: "End-to-end lot & batch traceability", color: "#60a5fa" },
        { name: "Quality Control", desc: "Inspection gates & reject tracking", color: "#f59e0b" },
        { name: "Warehouse", desc: "Multi-location & zone management", color: "#38bdf8" },
        { name: "Dispatch", desc: "Packing, outward & delivery", color: "#f87171" },
        { name: "Finance", desc: "Cost accounting & P&L visibility", color: "#c084fc" }
      ]}
      challenges={[
        { label: "Production Delays", desc: "Unplanned downtime and scheduling chaos" },
        { label: "Material Shortages", desc: "Stock-outs that halt the production line" },
        { label: "Quality Issues", desc: "Defects caught late, high rejection rates" },
        { label: "Manual Planning", desc: "Excel-based plans with zero real-time sync" },
        { label: "Inventory Mismatch", desc: "Physical stock vs system count never match" },
        { label: "Poor Visibility", desc: "No live view of floor, stock or finance" }
      ]}
      afterPoints={[
        "Live production tracking from work order to finished goods",
        "Automated BOM-linked raw material requisition",
        "Multi-stage quality inspection gates with scrap reporting",
        "Real-time machine utilization and worker productivity logs",
        "Accurate per-unit cost accounting factoring material, labor and overheads"
      ]}
      outcomes={[
        { metric: "40%", label: "Production Efficiency", desc: "Reduce idle time with automated work orders and capacity planning." },
        { metric: "60%", label: "Less Material Wastage", desc: "BOM-linked procurement prevents over-buying and raw material loss." },
        { metric: "Real-Time", label: "Quality Visibility", desc: "Inline QC gates block defects from moving to the next stage." },
        { metric: "100%", label: "Factory Visibility", desc: "Live dashboard of production, inventory, dispatch and finance." }
      ]}
      ctaHeadline={["Ready to Connect Your Entire", "Manufacturing Process?"]}
      ctaAccentWord="Connected."
    />
  );
};

export default Manufacturing;
`;

fs.writeFileSync('src/pages/INDUSTRIES/Logistics.jsx', logisticsCode);
fs.writeFileSync('src/pages/INDUSTRIES/Transport.jsx', transportCode);
fs.writeFileSync('src/pages/INDUSTRIES/RetailDistribution.jsx', retailCode);
fs.writeFileSync('src/pages/INDUSTRIES/CourierShipping.jsx', courierCode);
fs.writeFileSync('src/pages/INDUSTRIES/HealthcarePharmacy.jsx', healthcareCode);
fs.writeFileSync('src/pages/INDUSTRIES/Manufacturing.jsx', mfgCode);

console.log('All 6 industry pages successfully generated with authentic source texts!');

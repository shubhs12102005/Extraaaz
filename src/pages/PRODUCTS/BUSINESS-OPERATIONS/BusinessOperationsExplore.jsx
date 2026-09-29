import React, { useState, useRef, useEffect, useCallback } from "react";
import { Check } from "lucide-react";

export default function BusinessOperationsExplore() {
  const [activeId, setActiveId] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const h = window.location.hash.replace("#", "").toLowerCase();
      if (
        [
          "crm",
          "vms",
          "wms",
          "utility",
          "ecommerce",
          "finance",
          "analytics",
        ].includes(h)
      ) {
        return h;
      }
    }
    return "crm";
  });

  const containerRef = useRef(null);
  const [scale, setScale] = useState(null);

  const updateScale = useCallback(() => {
    if (containerRef.current) {
      const w = containerRef.current.clientWidth;
      if (w > 0) {
        setScale(w / 960);
      }
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    window.addEventListener("resize", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, [updateScale]);

  useEffect(() => {
    const handleHashChange = () => {
      const h = window.location.hash.replace("#", "").toLowerCase();
      if (
        [
          "crm",
          "vms",
          "wms",
          "utility",
          "ecommerce",
          "finance",
          "analytics",
        ].includes(h)
      ) {
        setActiveId(h);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const modules = [
    {
      id: "crm",
      title: "CRM",
      description: "Sales pipeline, customer database and lifecycle analytics.",
      bullets: [
        "Pipeline & stages",
        "Contacts & accounts",
        "Activity timeline",
        "Sales analytics",
      ],
      url: "app.silgate.com/business-operations/crm",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Sales Pipeline
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    All reps · This quarter
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + New deal
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Pipeline value
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹2.4Cr
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    +18% vs last quarter
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Open deals
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      64
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,9.5 8,12.2 16,6.8 24,9.5 32,4.1 40,6.8 48,2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    12 new this week
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Win rate
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      31%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,7.7 8,10.4 16,5 24,7.7 32,10.4 40,5 48,7.7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    +4 pts
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Stale deals
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      8
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-amber-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-amber-600">
                    No activity 14 days
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Deals by stage
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-2.5 px-3.5 pb-3.5">
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Qualified
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            3
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Kiran Textiles
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹12L · Rohit · Demo Tue
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Metro Mart
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹8.5L · Sneha · Inbound
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Apex Engineering
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹22L · Rohit · RFQ
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Proposal
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            2
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Sharma Traders
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹6.2L · Priya · Sent Fri
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Nova Auto Parts
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹18L · Arjun · Follow-up
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Negotiation
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            2
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Orbit Pharma
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹34L · Priya · Final terms
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                Patel Agro Exports
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              ₹9.8L · Arjun · Pricing
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Today&#x27;s activities
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Calls scheduled
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        14
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Demos
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        3
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-rose-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Follow-ups overdue
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        5
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Deals won
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        2 · ₹11L
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "vms",
      title: "VMS",
      description:
        "Visitor check-in, host approvals and audit-ready visitor records.",
      bullets: [
        "Self check-in",
        "Host approvals",
        "Badge printing",
        "Visitor audit",
      ],
      url: "app.silgate.com/business-operations/vms",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Visitors
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    Navi Mumbai office · Today
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + Check in
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Visitors today
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      58
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    +6 vs yesterday
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    On premises
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      17
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,11.3 8,5.9 16,8.6 24,11.3 32,5.9 40,8.6 48,3.1999999999999993"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    Floors 2-5
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Awaiting approval
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      3
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-amber-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,7.7 8,10.4 16,5 24,7.7 32,10.4 40,5 48,7.7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-amber-600">
                    Avg wait 4 min
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Pre-registered
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      22
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,12.2 8,6.8 16,9.5 24,4.1 32,6.8 40,9.5 48,4.1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    Via host invite
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Visitor log
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <table className="w-full table-fixed text-left">
                      <thead>
                        <tr className="border-y border-slate-100 bg-slate-50/80">
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Visitor
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Host
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Purpose
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            In
                          </th>
                          <th className="w-[92px] px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            Rakesh Menon
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Anita (Finance)
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Vendor meeting
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            09:42
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Checked in
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            Sunita Rao
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Vivek (HR)
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Interview
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            10:05
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-amber-50 text-amber-700 ring-amber-200">
                              Awaiting
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            Courier · 2 pax
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Reception
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Delivery
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            10:12
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-slate-100 text-slate-600 ring-slate-200">
                              Checked out
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            Farhan Ali
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Kunal (IT)
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            AMC service
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            10:20
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-200">
                              Badge issued
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            Deepa Nair
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Anita (Finance)
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Walk-in sales
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            10:31
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-rose-50 text-rose-700 ring-rose-200">
                              Denied
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Security
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Watchlist checks
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        58 clear
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Badges not returned
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        2
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Evacuation roll call
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        Ready
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Contractors on site
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        9
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "wms",
      title: "WMS",
      description: "Warehouse, inventory, picking and dispatch operations.",
      bullets: [
        "Inward & put-away",
        "Bin management",
        "Pick / pack / dispatch",
        "Cycle count",
      ],
      url: "app.silgate.com/business-operations/wms",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Inbound &amp; Dispatch
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    Bhiwandi DC · Today
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + GRN
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Orders to pick
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      326
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    84 priority
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Pick accuracy
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      99.4%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    +0.2 pts
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Dock utilization
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      72%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,14 8,8.6 16,11.3 24,5.9 32,8.6 40,3.1999999999999993 48,5.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    6 of 8 docks
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Pending put-away
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      42
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-amber-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,7.7 8,10.4 16,5 24,7.7 32,10.4 40,5 48,7.7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-amber-600">
                    Pallets waiting &gt; 4 h
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Dispatch queue
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <table className="w-full table-fixed text-left">
                      <thead>
                        <tr className="border-y border-slate-100 bg-slate-50/80">
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Order
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Customer
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Lines
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Dock
                          </th>
                          <th className="w-[92px] px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            SO-6621
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Metro Mart
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            42
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            D-3
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-200">
                              Picking
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            SO-6622
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Sharma Traders
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            18
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            D-1
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Packed
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            SO-6618
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Kiran Textiles
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            65
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            D-5
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-rose-50 text-rose-700 ring-rose-200">
                              Short pick
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            SO-6624
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Apex Engineering
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            9
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            D-2
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-amber-50 text-amber-700 ring-amber-200">
                              EWB pending
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            SO-6625
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Nova Auto Parts
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            27
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            -
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-slate-100 text-slate-600 ring-slate-200">
                              Queued
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Cycle count
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Zone A · 120 bins
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        Done
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Zone B · 96 bins
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        In progress
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Zone C · 140 bins
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        Scheduled
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-rose-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Variance found
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        3 bins
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "utility",
      title: "Utility Management",
      description:
        "Customer connections, service requests, complaints and billing.",
      bullets: [
        "Connection master",
        "Service requests",
        "Complaint routing",
        "Consumption billing",
      ],
      url: "app.silgate.com/business-operations/utility",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Service Requests
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    Pune circle · This week
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + New request
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Open requests
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      72
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,13.1 8,7.7 16,10.4 24,5 32,7.7 40,2.299999999999999 48,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    18 new today
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Resolved in SLA
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      91%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,10.4 8,13.1 16,7.7 24,10.4 32,5 40,7.7 48,2.299999999999999"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    +3 pts vs last week
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Escalations
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      4
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-rose-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,13.1 8,7.7 16,10.4 24,5 32,7.7 40,2.299999999999999 48,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-rose-600">
                    2 billing disputes
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    New connections
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      26
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,14 8,8.6 16,11.3 24,5.9 32,8.6 40,3.1999999999999993 48,5.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    8 pending survey
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Complaint board
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-2.5 px-3.5 pb-3.5">
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Open
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            2
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4410 · No supply
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Kothrud · Meter 22817
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4412 · High bill
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Baner · Billing team
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Assigned
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            3
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4405 · Meter fault
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Tech: Vinod · Visit 14:00
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4407 · New connection
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Site survey · Hadapsar
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4408 · Low pressure
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Tech: Imran · En route
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg bg-slate-50 p-2">
                        <div className="flex items-center justify-between px-1 pb-2">
                          <span className="text-[11px] font-semibold text-slate-700">
                            Resolved
                          </span>
                          <span className="rounded-full bg-white px-1.5 text-[10px] font-semibold text-slate-500 ring-1 ring-slate-200">
                            2
                          </span>
                        </div>
                        <div className="grid gap-2">
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4398 · Leakage
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Closed in 3.5 h
                            </div>
                          </div>
                          <div className="rounded-md border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"></span>
                              <span className="truncate text-[11.5px] font-medium text-slate-900">
                                SR-4401 · Name change
                              </span>
                            </div>
                            <div className="mt-1 truncate text-[10.5px] text-slate-500">
                              Closed · docs verified
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Billing cycle
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Meters read
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        8,420
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Bills generated
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        7,960
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Collections
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        ₹42.6L
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Overdue accounts
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        312
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description: "Storefront, cart, order management and delivery tracking.",
      bullets: [
        "Catalog & storefront",
        "Cart & checkout",
        "Order management",
        "Delivery tracking",
      ],
      url: "app.silgate.com/business-operations/ecommerce",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Online Orders
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    Storefront · Today
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + Add product
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Orders today
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      184
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,11.3 8,5.9 16,8.6 24,11.3 32,5.9 40,8.6 48,3.1999999999999993"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    +22% vs last Sunday
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    GMV
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹3.9L
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,13.1 8,7.7 16,10.4 24,5 32,7.7 40,2.299999999999999 48,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    Avg order ₹2,120
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Cart abandonment
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      64%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,14 8,8.6 16,11.3 24,5.9 32,8.6 40,3.1999999999999993 48,5.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    -3 pts this week
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Returns
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      5
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-amber-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,7.7 8,10.4 16,5 24,7.7 32,10.4 40,5 48,7.7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-amber-600">
                    2 awaiting pickup
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Recent orders
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <table className="w-full table-fixed text-left">
                      <thead>
                        <tr className="border-y border-slate-100 bg-slate-50/80">
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Order
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Customer
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            City
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Amount
                          </th>
                          <th className="w-[92px] px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            ORD-10421
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Neha K
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Pune
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹2,480
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Paid
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            ORD-10420
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Amit S
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Bengaluru
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹1,150
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-200">
                              Shipped
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            ORD-10419
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Priya R
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Chennai
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹3,890
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-amber-50 text-amber-700 ring-amber-200">
                              COD
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            ORD-10418
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Rahul M
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Delhi
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹760
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Delivered
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            ORD-10417
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Sana A
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Ahmedabad
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹1,640
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-rose-50 text-rose-700 ring-rose-200">
                              Return req.
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Storefront
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Live products
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        1,284
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Low stock SKUs
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        18
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Conversion rate
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        2.8%
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Avg delivery
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        2.4 days
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "finance",
      title: "Finance",
      description:
        "Accounts, invoicing, reconciliation and reporting for every OS.",
      bullets: [
        "General ledger",
        "AR / AP",
        "Bank reconciliation",
        "GST-ready reports",
      ],
      url: "app.silgate.com/business-operations/finance",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Accounts
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    All entities · FY 2026-27
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  + Journal entry
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Cash &amp; bank
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹1.46Cr
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,9.5 8,12.2 16,6.8 24,9.5 32,4.1 40,6.8 48,2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    3 bank accounts
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Receivables
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹84.2L
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-rose-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,11.3 8,5.9 16,8.6 24,11.3 32,5.9 40,8.6 48,3.1999999999999993"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-rose-600">
                    ₹12L overdue
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Payables
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹51.7L
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,7.7 8,10.4 16,5 24,7.7 32,10.4 40,5 48,7.7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    ₹9.3L due this week
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    GST payable
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹7.8L
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-amber-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,6.8 8,9.5 16,12.2 24,6.8 32,9.5 40,4.1 48,6.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-amber-600">
                    GSTR-3B due 20 Oct
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Bank reconciliation
                      </span>
                      <span className="text-[10.5px] text-slate-400">
                        View all
                      </span>
                    </div>
                    <table className="w-full table-fixed text-left">
                      <thead>
                        <tr className="border-y border-slate-100 bg-slate-50/80">
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Date
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Narration
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Ref
                          </th>
                          <th className="truncate px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Amount
                          </th>
                          <th className="w-[92px] px-3.5 py-2 text-[10.5px] font-semibold tracking-wide text-slate-500 uppercase">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            26 Sep
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            NEFT · Kiran Textiles
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            INV-7721
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹4,82,000
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Matched
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            26 Sep
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            UPI collections
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Batch 0926
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹38,640
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-200">
                              Auto-matched
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            25 Sep
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            RTGS · Shree Packaging
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            PO-3305
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            -₹48,700
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-200">
                              Matched
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            25 Sep
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Bank charges
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            -
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            -₹590
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-amber-50 text-amber-700 ring-amber-200">
                              Unmatched
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 last:border-0">
                          <td className="truncate px-3.5 py-[9px] text-[12px] font-medium text-slate-900">
                            24 Sep
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            Cheque · Metro Mart
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            CHQ 004512
                          </td>
                          <td className="truncate px-3.5 py-[9px] text-[12px] text-slate-600">
                            ₹1,20,000
                          </td>
                          <td className="px-3.5 py-[9px]">
                            <span className="inline-block truncate rounded-full px-2 py-0.5 text-[10.5px] font-semibold ring-1 ring-inset bg-rose-50 text-rose-700 ring-rose-200">
                              Bounced
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Compliance calendar
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-amber-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        TDS payment
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        7 Oct
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        GSTR-1 filing
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        11 Oct
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        GSTR-3B filing
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        20 Oct
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Advance tax Q3
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        15 Dec
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "analytics",
      title: "Analytics",
      description:
        "Real-time dashboards, cross-OS reports and BI-grade insights.",
      bullets: [
        "Real-time dashboards",
        "Cross-OS reports",
        "Custom KPIs",
        "Executive summaries",
      ],
      url: "app.silgate.com/business-operations/analytics",
      renderContent: () => (
        <>
          <div className="flex w-[188px] shrink-0 flex-col bg-slate-950 px-3 py-4 text-slate-300">
            <div className="flex items-center gap-2 px-2">
              <span className="bg-brand-500 flex h-7 w-7 items-center justify-center rounded-md text-[13px] font-black text-slate-950">
                E
              </span>
              <div className="leading-tight">
                <div className="text-[12px] font-bold tracking-wide text-white">
                  SILGATE
                </div>
                <div className="text-[9.5px] tracking-[0.14em] text-slate-400 uppercase">
                  Business Operations
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12px] text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-layout-grid h-3.5 w-3.5"
                aria-hidden="true"
              >
                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
              </svg>
              Overview
            </div>
            <div className="mt-1 px-2.5 pt-3 pb-1 text-[9.5px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Modules
            </div>
            <ul className="grid gap-0.5">
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">CRM</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">VMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">WMS</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Utility Management</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">E-Commerce</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600"></span>
                <span className="truncate">Finance</span>
              </li>
              <li className="flex items-center gap-2 truncate rounded-lg px-2.5 py-2 text-[12px] bg-brand-500 font-semibold text-slate-950">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950"></span>
                <span className="truncate">Analytics</span>
              </li>
            </ul>
            <div className="mt-auto rounded-lg bg-slate-900 px-2.5 py-2.5">
              <div className="text-[10px] text-slate-400">Workspace</div>
              <div className="text-[11.5px] font-medium text-white">
                Head Office
              </div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex h-12 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-5">
              <div className="flex h-8 w-72 items-center gap-2 rounded-lg bg-slate-100 px-3 text-[12px] text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
                Search records, people, documents…
              </div>
              <div className="ml-auto flex items-center gap-4 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bell h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <div className="flex items-center gap-1.5">
                  <span className="text-brand-500 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold">
                    AK
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[19px] font-semibold tracking-tight text-slate-900">
                    Executive Dashboard
                  </div>
                  <div className="mt-0.5 text-[12px] text-slate-500">
                    All businesses · Last 8 months
                  </div>
                </div>
                <span className="text-brand-500 rounded-lg bg-slate-900 px-3.5 py-2 text-[12px] font-semibold">
                  Share report
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Revenue YTD
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      ₹11.2Cr
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,9.5 8,12.2 16,6.8 24,9.5 32,4.1 40,6.8 48,2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    +19% YoY
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Gross margin
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      24.6%
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-slate-500"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,13.1 8,7.7 16,10.4 24,5 32,7.7 40,2.299999999999999 48,5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-slate-500">
                    +1.1 pts
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    Active customers
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      1,842
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-sky-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,14 8,8.6 16,11.3 24,5.9 32,8.6 40,3.1999999999999993 48,5.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-sky-600">
                    +126 this quarter
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="text-[11px] font-medium text-slate-500">
                    DSO
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <div className="text-[21px] leading-none font-semibold tracking-tight text-slate-900">
                      46 days
                    </div>
                    <svg
                      viewBox="0 0 48 18"
                      className="h-[18px] w-12 text-emerald-600"
                      aria-hidden="true"
                    >
                      <polyline
                        points="0,8.6 8,11.3 16,5.9 24,8.6 32,3.1999999999999993 40,5.9 48,8.6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></polyline>
                    </svg>
                  </div>
                  <div className="mt-1.5 text-[10.5px] font-medium text-emerald-600">
                    -4 days vs Q1
                  </div>
                </div>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-[1fr_236px] gap-3">
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5">
                      <span className="text-[12.5px] font-semibold text-slate-900">
                        Monthly revenue
                      </span>
                      <span className="flex items-center gap-1.5 text-[10.5px] text-slate-500">
                        <span className="bg-brand-500 h-2 w-2 rounded-sm"></span>
                        Consolidated revenue, ₹ crore
                      </span>
                    </div>
                    <div className="relative mx-3.5 mb-3 flex flex-1 items-end gap-3 border-b border-slate-200 pt-6">
                      <span
                        className="absolute inset-x-0 border-t border-dashed border-slate-100"
                        style={{ bottom: "25%" }}
                      ></span>
                      <span
                        className="absolute inset-x-0 border-t border-dashed border-slate-100"
                        style={{ bottom: "50%" }}
                      ></span>
                      <span
                        className="absolute inset-x-0 border-t border-dashed border-slate-100"
                        style={{ bottom: "75%" }}
                      ></span>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.4Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "49.63636363636363%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.6Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "56.72727272727273%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.5Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "53.18181818181818%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.7Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "60.27272727272727%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.8Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "63.81818181818182%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹1.9Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "67.36363636363636%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹2.1Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-brand-500"
                          style={{ height: "74.45454545454545%" }}
                        ></div>
                      </div>
                      <div className="relative flex h-full flex-1 flex-col items-center justify-end">
                        <span className="mb-1 text-[10px] font-semibold text-slate-600">
                          ₹2.2Cr
                        </span>
                        <div
                          className="w-full max-w-[38px] rounded-t-md bg-slate-900"
                          style={{ height: "78%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mx-3.5 mb-3 flex gap-3">
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Feb
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Mar
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Apr
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        May
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Jun
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Jul
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Aug
                      </span>
                      <span className="flex-1 truncate text-center text-[10.5px] text-slate-500">
                        Sep
                      </span>
                    </div>
                  </div>
                </div>
                <div className="min-h-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5">
                  <div className="text-[12.5px] font-semibold text-slate-900">
                    Revenue by OS
                  </div>
                  <ul className="mt-3 grid gap-2.5">
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Logistics OS
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        ₹4.6Cr
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-sky-500"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Retail OS
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        ₹3.1Cr
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Restaurant OS
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        ₹2.2Cr
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 rounded-lg bg-slate-50 px-2.5 py-2">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-400"></span>
                      <span className="min-w-0 flex-1 truncate text-[11.5px] text-slate-700">
                        Manufacturing OS
                      </span>
                      <span className="shrink-0 text-[11.5px] font-semibold text-slate-900">
                        ₹1.3Cr
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const activeModule = modules.find((m) => m.id === activeId) || modules[0];

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
            Each module is a real working area — not a marketing tile. Select
            one to see the screen, the job it does, and what ships with it.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12">
            <span
              id="crm"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="vms"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="wms"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="utility"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="ecommerce"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="finance"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>
            <span
              id="analytics"
              aria-hidden="true"
              className="absolute top-0 scroll-mt-28"
            ></span>

            {/* Left-side Module Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {modules.map((m) => {
                const isActive = m.id === activeId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setActiveId(m.id);
                      if (typeof window !== "undefined") {
                        window.history.replaceState(null, "", "#" + m.id);
                      }
                    }}
                    aria-pressed={isActive}
                    className={`group flex shrink-0 items-start gap-3 rounded-xl border p-3.5 text-left transition cursor-pointer lg:shrink ${
                      isActive
                        ? "border-brand-500/60 bg-brand-50/70 dark:bg-brand-900/25 shadow-sm"
                        : "border-border bg-card hover:border-brand-300/60"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold transition ${
                        isActive
                          ? "bg-brand-600 text-foreground"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {isActive ? <Check className="h-3.5 w-3.5" /> : null}
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-sm font-semibold ${isActive ? "text-foreground" : "text-foreground/90"}`}
                      >
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
            <div className="min-w-0">
              <div
                style={{ opacity: 1, transform: "none" }}
                className="transition-all duration-200"
              >
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
                    <div
                      role="img"
                      aria-label={`Silgate Business Operations — ${activeModule.title} screen`}
                    >
                      <div
                        ref={containerRef}
                        className="[container-type:inline-size] relative w-full overflow-hidden bg-slate-50"
                        style={{
                          aspectRatio: "960 / 600",
                          containerType: "inline-size",
                        }}
                      >
                        <div
                          className="absolute top-0 left-0 flex text-slate-800"
                          style={{
                            width: "960px",
                            height: "600px",
                            transformOrigin: "top left",
                            transform: scale
                              ? `scale(${scale})`
                              : "scale(tan(atan2(100cqw, 960px)))",
                          }}
                        >
                          {activeModule.renderContent()}
                        </div>
                      </div>
                    </div>
                  </div>
                </figure>

                {/* Module Details Below Preview */}
                <div className="mt-6 grid gap-6 sm:grid-cols-[1.4fr_1fr]">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {activeModule.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {activeModule.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                    {activeModule.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="text-foreground/90 flex items-start gap-2 text-sm"
                      >
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

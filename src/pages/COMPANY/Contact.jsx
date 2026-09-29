import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    label: 'Headquarters',
    value: 'Road Number 8, SG Barve Rd, Wagle Estate, Padwal Nagar, Thane West, Maharashtra 400604',
    href: 'https://www.google.com/maps/search/?api=1&query=Read+Number+8+SG+Barde+Rd+Wagle+Estate+Thane+West+Maharashtra+400604',
    Icon: MapPin,
  },
  {
    label: 'Email',
    value: 'manoj@silgatehiring.com',
    href: 'mailto:manoj@silgatehiring.com',
    Icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 81088 10916',
    href: 'tel:+918108810916',
    Icon: Phone,
  },
];

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${formData.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nCompany: ${formData.get('company')}\n\n${formData.get('message')}`,
    );
    window.location.href = `mailto:manoj@silgatehiring.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-full">
      <section className="pb-10 pt-16 sm:pt-20">
        <div className="container-default">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip-brand inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              Contact
            </span>
            <h1 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl lg:text-[42px]">
              Talk to the Silgate team.
            </h1>
            <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
              Tell us what you are looking for. We would be glad to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16" id="demo">
        <div className="container-default">
          <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
            <form
              className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium" htmlFor="name">Full name</label>
                  <input className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" id="name" name="name" autoComplete="name" required />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium" htmlFor="email">Email</label>
                  <input className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" id="email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium" htmlFor="phone">Phone</label>
                  <input className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div className="grid gap-1.5">
                  <label className="text-sm font-medium" htmlFor="company">Company</label>
                  <input className="h-11 rounded-lg border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" id="company" name="company" autoComplete="organization" />
                </div>
              </div>
              <div className="grid gap-1.5">
                <label className="text-sm font-medium" htmlFor="message">How can we help?</label>
                <textarea className="min-h-32 rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" id="message" name="message" required />
              </div>
              <button className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" type="submit">
                Send enquiry
              </button>
              <p className="text-xs text-muted-foreground">Your email app will open with your enquiry addressed to Silgate.</p>
            </form>

            <aside className="rounded-xl bg-[#0b2034] p-6 text-slate-100 sm:p-8">
              <h2 className="text-lg font-semibold">Reach us directly</h2>
              <div className="mt-6 grid gap-6">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <div className="flex items-start gap-3" key={label}>
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#29445d] bg-[#142d45] text-[#ff9b70]">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</div>
                      <a className="text-sm leading-relaxed text-slate-100 transition-colors hover:text-[#ff9b70]" href={href}>
                        {value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
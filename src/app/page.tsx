"use client";

import { useEffect, useRef } from "react";

/* ─────────────────── DATA ─────────────────── */

const services = [
  {
    name: "Signature Fade",
    price: "$35",
    description: "Our flagship cut. Precision skin fade tailored to your style.",
    featured: false,
    wide: true,
  },
  {
    name: "Beard Trim & Shape",
    price: "$20",
    description: "Clean lines and sculpted edges for the modern gentleman.",
    featured: false,
    wide: false,
  },
  {
    name: "Hot Towel Shave",
    price: "$30",
    description: "Classic straight razor shave with hot towel treatment.",
    featured: false,
    wide: false,
  },
  {
    name: "Kids Cut",
    price: "$20",
    description: "Fresh cuts for the little ones. Under 12.",
    featured: false,
    wide: false,
  },
  {
    name: "Hair Design / Line-Up",
    price: "$15+",
    description: "Custom designs, sharp line-ups, and edge detailing.",
    featured: false,
    wide: false,
  },
  {
    name: "The Works",
    price: "$65",
    description: "The full experience. Haircut + beard trim + hot towel shave.",
    featured: true,
    wide: true,
  },
];

const galleryItems = [
  { label: "Skin Fade", rotate: "-2deg" },
  { label: "Beard Sculpt", rotate: "1.5deg" },
  { label: "Design Work", rotate: "-1deg" },
  { label: "Classic Taper", rotate: "2deg" },
];

const barbers = [
  {
    name: "Marco Reyes",
    title: "Lead Barber",
    specialties: ["Skin Fades", "Hair Designs", "Straight Razor Work"],
  },
  {
    name: "Darius Cole",
    title: "Senior Stylist",
    specialties: ["Classic Tapers", "Beard Sculpting", "Textured Crops"],
  },
  {
    name: "Alejandro Vega",
    title: "Barber",
    specialties: ["Kids Cuts", "Line-Ups", "Modern Fades"],
  },
];

const serviceOptions = [
  "Signature Fade",
  "Beard Trim & Shape",
  "Hot Towel Shave",
  "Kids Cut",
  "Hair Design / Line-Up",
  "The Works",
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  /* Intersection Observer for reveal animations */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef}>
      {/* ════════════ NAV ════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-jet/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="font-display font-bold text-xl tracking-tight">
            THE FADE <span className="text-gold">ROOM</span>
          </a>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted">
            <a href="#services" className="hover:text-clean transition-colors">Services</a>
            <a href="#gallery" className="hover:text-clean transition-colors">Gallery</a>
            <a href="#barbers" className="hover:text-clean transition-colors">Barbers</a>
            <a href="#contact" className="hover:text-clean transition-colors">Contact</a>
          </div>
          <a
            href="tel:+15205550199"
            className="font-display text-sm text-gold hover:text-clean transition-colors"
          >
            (520) 555-0199
          </a>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section
        id="hero"
        className="snap-section relative flex items-center overflow-hidden bg-jet"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&h=900&fit=crop"
          alt="Barbershop interior with styling chairs and mirrors"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/60 via-[#0D0D0D]/40 to-[#0D0D0D]/70" />

        {/* Stripe accent bar — left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-2 stripe-accent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0 w-full flex flex-col md:flex-row items-start md:items-center gap-12">
          {/* Left — stacked text */}
          <div className="flex-1">
            <div className="reveal">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted mb-6">
                Premium Barbershop &middot; Tucson, AZ
              </p>
            </div>
            <h1 className="stacked-text font-display text-clean">
              <span className="reveal block">THE</span>
              <span className="reveal reveal-delay-1 block">FADE</span>
              <span className="reveal reveal-delay-2 block text-gold">ROOM</span>
            </h1>
            <div className="reveal reveal-delay-3 mt-8">
              <div className="gold-line-wide mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-block bg-gold text-jet font-display font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-clean transition-colors"
                >
                  Book Now
                </a>
                <a
                  href="tel:+15205550199"
                  className="inline-block border border-border text-clean font-display text-sm uppercase tracking-widest px-8 py-4 hover:border-gold hover:text-gold transition-colors"
                >
                  (520) 555-0199
                </a>
              </div>
            </div>
          </div>

          {/* Right — decorative block */}
          <div className="hidden lg:flex flex-col items-end gap-4 flex-1">
            <div className="reveal reveal-delay-2 w-72 h-80 bg-charcoal border border-border relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted font-body text-sm">
                Hero Image
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
            </div>
            <div className="reveal reveal-delay-3 flex items-center gap-3">
              <div className="barber-stripe-bar h-12 rounded-full" />
              <p className="font-body text-xs text-muted uppercase tracking-widest">
                Est. Tucson, AZ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES BENTO ════════════ */}
      <section id="services" className="snap-section-auto bg-jet py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted mb-3">
              What We Offer
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Services
            </h2>
            <div className="gold-line mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} p-6 md:p-8 rounded-sm ${
                  service.featured
                    ? "bento-tile-featured"
                    : "bento-tile"
                } ${
                  service.wide ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg md:text-xl font-semibold">
                    {service.name}
                  </h3>
                  <span
                    className={`font-display text-xl md:text-2xl font-bold ${
                      service.featured ? "text-gold" : "text-gold"
                    }`}
                  >
                    {service.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                {service.featured && (
                  <div className="mt-4 inline-block bg-gold/10 text-gold text-xs font-display font-semibold uppercase tracking-widest px-3 py-1 rounded-sm">
                    Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ GALLERY ════════════ */}
      <section id="gallery" className="snap-section-auto bg-charcoal py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal mb-16 text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted mb-3">
              Our Work
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Gallery
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            {galleryItems.map((item, i) => (
              <div
                key={item.label}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex justify-center`}
              >
                <div
                  className="polaroid-frame w-full max-w-[280px]"
                  style={{ "--rotate": item.rotate } as React.CSSProperties}
                >
                  <div className="aspect-[4/5] bg-steel flex items-center justify-center">
                    <span className="text-muted font-body text-sm">{item.label}</span>
                  </div>
                  <p className="text-jet font-display text-sm font-semibold mt-3 text-center">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FEATURED REVIEW ════════════ */}
      <section className="snap-section-auto bg-jet py-24 md:py-32 relative overflow-hidden">
        {/* Decorative stripe — right edge */}
        <div className="absolute right-0 top-0 bottom-0 w-2 stripe-accent" />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="reveal">
            <div className="gold-line-wide mx-auto mb-10" />
            <blockquote className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8">
              &ldquo;Hands down the best barbershop in Tucson. Marco always delivers a clean
              fade and the vibe in here is unmatched. I won&rsquo;t go anywhere else.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <span className="font-display text-gold font-semibold text-lg">
                Jordan M.
              </span>
              <div className="flex gap-1 text-gold text-sm">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <span className="font-body text-xs text-muted uppercase tracking-widest mt-1">
                Google Review
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ BARBERS ════════════ */}
      <section id="barbers" className="snap-section-auto bg-charcoal py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="reveal mb-16">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted mb-3">
              Meet the Team
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Barbers
            </h2>
            <div className="gold-line mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((barber, i) => (
              <div
                key={barber.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 3)} group`}
              >
                {/* Image placeholder */}
                <div className="aspect-[3/4] bg-steel border border-border relative overflow-hidden mb-5">
                  <div className="absolute inset-0 flex items-center justify-center text-muted font-body text-sm">
                    {barber.name}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>

                <h3 className="font-display text-xl font-bold mb-1">
                  {barber.name}
                </h3>
                <p className="font-display text-sm text-gold font-semibold uppercase tracking-widest mb-3">
                  {barber.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {barber.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-body text-muted border border-border px-3 py-1 rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ INFO STRIP ════════════ */}
      <section className="snap-section-auto bg-jet border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center md:text-left">
            {/* Hours */}
            <div className="reveal">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="barber-stripe-bar h-8 rounded-full" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                  Hours
                </h3>
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">
                Mon &ndash; Sat: 9:00 AM &ndash; 7:00 PM
                <br />
                Sun: By Appointment Only
              </p>
            </div>

            {/* Walk-ins */}
            <div className="reveal reveal-delay-1">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="barber-stripe-bar h-8 rounded-full" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                  Walk-Ins Welcome
                </h3>
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">
                Walk-ins and appointments both welcome.
                <br />
                Book ahead to guarantee your spot.
              </p>
            </div>

            {/* Location */}
            <div className="reveal reveal-delay-2">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="barber-stripe-bar h-8 rounded-full" />
                <h3 className="font-display text-lg font-bold uppercase tracking-wider">
                  Location
                </h3>
              </div>
              <p className="font-body text-sm text-muted leading-relaxed">
                123 Main St
                <br />
                Tucson, AZ 85701
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT FORM ════════════ */}
      <section id="contact" className="snap-section-auto bg-charcoal py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="reveal mb-12 text-center">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-muted mb-3">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Book Your Cut
            </h2>
            <div className="gold-line mx-auto mt-4" />
          </div>

          <form
            className="reveal space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! We will get back to you shortly.");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(520) 000-0000"
                  className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Service dropdown */}
              <div>
                <label
                  htmlFor="service"
                  className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred barber */}
            <div>
              <label
                htmlFor="barber"
                className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
              >
                Preferred Barber
              </label>
              <select
                id="barber"
                name="barber"
                className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="">No preference</option>
                {barbers.map((b) => (
                  <option key={b.name} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-display text-sm font-semibold uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any details, preferred time, etc."
                className="w-full bg-jet border border-border px-4 py-3 text-clean font-body text-sm placeholder:text-muted/50 focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-block bg-gold text-jet font-display font-bold text-sm uppercase tracking-[0.2em] px-12 py-4 hover:bg-clean transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="bg-jet border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display font-bold text-lg tracking-tight mb-1">
                THE FADE <span className="text-gold">ROOM</span>
              </p>
              <p className="font-body text-xs text-muted">
                Premium Barbershop &middot; Tucson, AZ
              </p>
            </div>

            <div className="text-center font-body text-sm text-muted space-y-1">
              <p>(520) 555-0199</p>
              <p>123 Main St, Tucson, AZ 85701</p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-body text-xs text-muted">
                &copy; {new Date().getFullYear()} The Fade Room. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

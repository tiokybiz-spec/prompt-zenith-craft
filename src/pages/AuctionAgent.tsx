import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Gavel, ShieldCheck, Calculator, Ship, CheckCircle2, ArrowRight, Globe2, Star } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-auction.jpg";

// Dedicated landing page for auction agent service — built for SEO + conversion.
const benefits = [
  "Direct access to all major Japan auction houses (USS, TAA, JU, HAA, ARAI, CAA)",
  "Translated auction sheets and condition grade interpretation",
  "Strategic bidding with your maximum price",
  "Itemised, transparent quotes — no hidden fees",
  "Full export documentation handled in Japan",
  "RoRo & container shipping to any major port worldwide",
];

const faqs = [
  { q: "How much does the auction agent service cost?", a: "We charge a transparent service fee disclosed upfront in your quote. There is no fee for unsuccessful bids." },
  { q: "Which countries do you ship to?", a: "We ship worldwide, with strong experience in Africa (Kenya, Tanzania, Uganda, Mozambique), Asia, Australia, the Caribbean and Canada." },
  { q: "How long does the whole process take?", a: "Auction-to-port typically takes 3–6 weeks depending on shipping schedule and destination." },
  { q: "Can I inspect the auction sheet before bidding?", a: "Yes. We translate and explain every auction sheet so you know exactly what you're bidding on." },
];

const AuctionAgent = () => (
  <>
    <Seo
      title="Japan Car Auction Agent — Bid & Export Service | Tioky"
      description="Trusted Japan car auction agent. We bid on USS, TAA & JU auctions on your behalf and handle full export to your country. Free quote in 24 hours."
      path="/japan-car-auction-agent"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Japan Car Auction Agent & Export",
        provider: { "@type": "Organization", name: "Tioky LLC", url: "https://tioky.jp" },
        areaServed: "Worldwide",
        description: "Professional bidding at Japan vehicle auctions and full export handling to international buyers.",
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      })}</script>
    </Helmet>

    <section className="relative overflow-hidden">
      <img src={hero} alt="Japan vehicle auction yard" width={1600} height={1024} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-tight relative py-20 md:py-28 text-primary-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
          <Gavel className="h-3.5 w-3.5" /> Auction Agent Service
        </span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl">
          Your trusted <span className="text-accent">Japan car auction agent</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
          We bid on Japan's largest auctions on your behalf and handle the full export to your country —
          from inspection and paperwork to shipping at your nearest port.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><Link to="/contact">Get Free Quote <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="hero" size="lg"><Link to="/how-it-works">See process</Link></Button>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-tight grid gap-10 lg:grid-cols-2 items-start">
        <div>
          <span className="eyebrow">What you get</span>
          <h2 className="mt-3 text-3xl md:text-4xl text-primary">A full-service auction partner in Japan</h2>
          <p className="mt-3 text-muted-foreground">From the moment you tell us what to look for, we manage the entire process so you can buy with confidence from anywhere in the world.</p>
          <ul className="mt-6 space-y-3">
            {benefits.map(b => (
              <li key={b} className="flex items-start gap-3 text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: ShieldCheck, t: "Risk-managed bidding", d: "Set your max — we never go over." },
            { icon: Calculator, t: "Transparent pricing", d: "Itemised quote upfront." },
            { icon: Ship, t: "Worldwide shipping", d: "RoRo or container to any major port." },
            { icon: Globe2, t: "International focus", d: "Buyers across 100+ countries." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section bg-gradient-subtle">
      <div className="container-tight max-w-3xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-3 text-3xl md:text-4xl text-primary">Questions buyers ask</h2>
        <div className="mt-8 space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="group rounded-xl border border-border bg-card p-5 shadow-card">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-primary list-none">
                {f.q}
                <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container-tight rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
        <div className="flex justify-center gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
        <h2 className="mt-4 text-3xl md:text-4xl">Ready to bid on your next vehicle?</h2>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Send your requirements and we'll come back within 24 hours with a free, transparent quote.</p>
        <Button asChild variant="cta" size="lg" className="mt-7"><Link to="/contact">Get Free Quote</Link></Button>
      </div>
    </section>
  </>
);

export default AuctionAgent;

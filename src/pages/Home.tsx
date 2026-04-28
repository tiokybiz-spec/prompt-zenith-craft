import { Link } from "react-router-dom";
import { ArrowRight, Gavel, Globe2, Ship, ShieldCheck, Calculator, Headphones, Search, FileCheck, Truck, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-auction.jpg";

const stats = [
  { k: "100+", v: "Countries served" },
  { k: "150k+", v: "Auction vehicles weekly" },
  { k: "24/7", v: "Buyer support" },
  { k: "Japan", v: "Locally based" },
];

const trust = [
  { icon: ShieldCheck, t: "Japan-based, locally trusted", d: "We operate inside Japan with direct access to major auction houses including USS, TAA, JU, and HAA." },
  { icon: Gavel, t: "Professional bidding support", d: "Experienced bidders place bids on your behalf with clear strategy and transparent reporting." },
  { icon: Ship, t: "End-to-end export handling", d: "From inspection and documentation to RoRo or container shipping to your nearest port." },
  { icon: Calculator, t: "Honest cost estimates", d: "Itemised quotes — auction price, fees, inland transport, freight and insurance — no surprises." },
];

const services = [
  { icon: Search, t: "Vehicle Search", d: "Tell us your make, model, year and budget. We shortlist auction matches every week." },
  { icon: Gavel, t: "Auction Bidding", d: "Professional bidding with translated auction sheets and condition grading guidance." },
  { icon: FileCheck, t: "Export Documentation", d: "Export certificate, invoice, B/L, and inspection certificates handled for you." },
  { icon: Ship, t: "Worldwide Shipping", d: "RoRo or container shipping to Africa, Asia, Australia, the Caribbean and beyond." },
];

const steps = [
  { n: "01", t: "Find your vehicle", d: "Share your requirements. We send weekly auction picks." },
  { n: "02", t: "Auction bidding", d: "We bid on your behalf at your maximum price." },
  { n: "03", t: "Payment & processing", d: "Pay invoice, we handle paperwork and inland transport." },
  { n: "04", t: "Shipping worldwide", d: "Vehicle is shipped to your nearest port with tracking." },
];

const Home = () => (
  <>
    <Seo
      title="Japan Auction Export & Vehicle Buying Support | Tioky LLC"
      description="Tioky LLC helps international buyers purchase used vehicles from Japan auctions and ship worldwide. Honest quotes, expert bidding, full export handling."
      path="/"
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Tioky LLC",
        url: "https://tioky.jp",
        email: "contact@tioky.jp",
        address: { "@type": "PostalAddress", addressCountry: "JP" },
        description: "Japan auction export and vehicle buying support service for international buyers.",
      })}</script>
    </Helmet>

    {/* HERO */}
    <section className="relative overflow-hidden">
      <img src={hero} alt="Used Japanese vehicles at auction yard" width={1600} height={1024}
           className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-tight relative py-24 md:py-36">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <span className="font-jp">日本</span> · Japan auction agent
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Japan Auction Export & <span className="text-accent">Vehicle Buying Support</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            We help international buyers purchase vehicles from Japan auctions and ship them worldwide —
            transparent bidding, honest quotes, and complete export handling from one trusted partner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {stats.map(s => (
              <div key={s.v}>
                <div className="text-2xl md:text-3xl font-bold text-accent">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* TRUST */}
    <section className="section bg-gradient-subtle">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="eyebrow">Why Tioky</span>
          <h2 className="mt-3 text-3xl md:text-4xl">A Japan partner you can trust with your purchase</h2>
          <p className="mt-3 text-muted-foreground">We focus on doing one thing well: making it simple, safe and affordable for international buyers to source vehicles from Japan auctions.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trust.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CORE SERVICES */}
    <section className="section">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow"><Gavel className="h-3.5 w-3.5" /> Core Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Auction sourcing & worldwide export</h2>
          </div>
          <Button asChild variant="outline"><Link to="/services">All services <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-card transition-smooth">
              <Icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="section bg-primary text-primary-foreground">
      <div className="container-tight">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl">A simple 4-step path from auction to your port</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
              <div className="text-accent text-sm font-bold tracking-widest">{s.n}</div>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{s.d}</p>
              {i < 3 && <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent/60" />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DIGITAL — secondary, short */}
    <section className="section bg-gradient-subtle">
      <div className="container-tight grid gap-10 md:grid-cols-2 items-center">
        <div>
          <span className="eyebrow">Supporting capability</span>
          <h2 className="mt-3 text-2xl md:text-3xl">Digital & business support services</h2>
          <p className="mt-3 text-muted-foreground">
            Beyond exports, we also offer website design, SEO, graphic design and digital marketing.
            Our digital expertise helps us support global clients efficiently and serve them better online.
          </p>
          <Button asChild variant="link" className="mt-3 px-0"><Link to="/services">Explore digital services <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Website Design", "SEO", "Graphic Design", "Digital Marketing"].map(s => (
            <div key={s} className="rounded-lg border border-border bg-card p-4 text-sm font-medium text-primary shadow-card">{s}</div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIAL / SOCIAL PROOF placeholder */}
    <section className="section">
      <div className="container-tight">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-card">
          <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
          <p className="mt-4 text-xl md:text-2xl font-medium text-primary leading-relaxed max-w-3xl">
            "Tioky made buying my first car from a Japan auction straightforward. Honest quotes, clear updates,
            and the vehicle arrived exactly as described."
          </p>
          <p className="mt-4 text-sm text-muted-foreground">— International buyer</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section bg-gradient-subtle">
      <div className="container-tight">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
          <Globe2 className="h-10 w-10 mx-auto text-accent" />
          <h2 className="mt-4 text-3xl md:text-4xl">Ready to import your next vehicle from Japan?</h2>
          <p className="mt-3 text-primary-foreground/80 max-w-2xl mx-auto">Tell us what you're looking for and we'll send you a free, itemised quote within 24 hours.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="cta" size="lg"><Link to="/contact">Get Free Quote</Link></Button>
            <Button asChild variant="hero" size="lg"><Link to="/japan-car-auction-agent">Auction Agent Service</Link></Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Home;

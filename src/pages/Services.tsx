import { Link } from "react-router-dom";
import { Gavel, Ship, FileCheck, Calculator, Search, Headphones, Globe2, Code2, BarChart3, Palette, Megaphone, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const exportServices = [
  { icon: Search, t: "Vehicle search & sourcing", d: "Daily access to 150,000+ vehicles across all major Japan auctions (USS, TAA, JU, HAA, ARAI, CAA)." },
  { icon: Gavel, t: "Professional auction bidding", d: "Strategy-led bidding, translated auction sheets, condition grade interpretation, and live updates." },
  { icon: Calculator, t: "Transparent cost estimation", d: "Itemised quotes covering FOB, freight, insurance, inland transport and destination handling." },
  { icon: FileCheck, t: "Export documentation", d: "Export certificate, commercial invoice, B/L and inspection certificates prepared and sent to you." },
  { icon: Ship, t: "Worldwide shipping (RoRo & container)", d: "Shipments to Africa, Asia, Australia, Caribbean, Pacific Islands and Canada." },
  { icon: Headphones, t: "Buyer consultation", d: "1-on-1 guidance on what to buy, what to avoid, and how to budget realistically." },
];

const digitalServices = [
  { icon: Code2, t: "Website Design", d: "Conversion-focused websites for exporters, dealers and SMEs." },
  { icon: BarChart3, t: "SEO", d: "Technical and content SEO so customers find you on Google." },
  { icon: Palette, t: "Graphic Design", d: "Logos, brochures and listing graphics that build trust." },
  { icon: Megaphone, t: "Digital Marketing", d: "Performance marketing and social campaigns for global reach." },
];

const Services = () => (
  <>
    <Seo
      title="Services — Japan Auction Export & Digital Support | Tioky"
      description="Auction bidding, export handling, cost estimation and worldwide shipping from Japan. Plus supporting digital services: web, SEO, design and marketing."
      path="/services"
    />
    <section className="bg-gradient-subtle">
      <div className="container-tight py-16 md:py-24">
        <span className="eyebrow">Services</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary">Everything you need to buy and export from Japan</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Our core focus is auction sourcing and worldwide vehicle export. We also offer digital services that help our clients grow.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-tight">
        <div className="flex items-center gap-2">
          <Gavel className="h-5 w-5 text-accent" />
          <span className="eyebrow">Primary · Japan Auction & Export</span>
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl">Japan auction & export services</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">End-to-end support from finding the right vehicle to delivery at your port.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exportServices.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild variant="cta" size="lg"><Link to="/contact">Request Auction Quote <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </div>
    </section>

    <section className="section bg-gradient-subtle border-t border-border">
      <div className="container-tight">
        <span className="eyebrow"><Globe2 className="h-3.5 w-3.5" /> Secondary · Supporting capability</span>
        <h2 className="mt-3 text-2xl md:text-3xl">Digital services</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">A small but capable in-house team that helps clients with web presence and growth — and powers our own export business online.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {digitalServices.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-5">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-3 font-semibold text-primary text-sm">{t}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;

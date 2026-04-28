import { Link } from "react-router-dom";
import { Search, Gavel, CreditCard, Ship, ArrowRight, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Search, n: "01", t: "Find vehicle", d: "Share your requirements (model, year, budget, condition). We send curated weekly picks from Japan auctions and translate auction sheets so you understand grade and condition.", points: ["Daily access to 150k+ auction lots", "Translated auction sheets", "Realistic budget guidance"] },
  { icon: Gavel, n: "02", t: "Auction bidding", d: "Set your maximum bid. Our bidder places strategic bids on auction day and confirms the result the same day, win or lose.", points: ["Strategy-led bidding", "Live result reporting", "No win, no auction fee"] },
  { icon: CreditCard, n: "03", t: "Payment & processing", d: "We send a final invoice with all itemised costs. After payment we handle inland transport, inspection and export documentation.", points: ["Itemised invoice", "Export certificate", "Pre-shipment inspection"] },
  { icon: Ship, n: "04", t: "Shipping worldwide", d: "Vehicle is shipped via RoRo or container to your nearest port. You receive B/L and tracking until arrival.", points: ["RoRo & container", "B/L and tracking", "Insurance available"] },
];

const HowItWorks = () => (
  <>
    <Seo
      title="How It Works — Buy from Japan Auctions in 4 Steps | Tioky"
      description="From finding a vehicle to shipping worldwide — see the simple 4-step process Tioky uses to help international buyers purchase from Japan auctions."
      path="/how-it-works"
    />
    <section className="bg-gradient-subtle">
      <div className="container-tight py-16 md:py-24">
        <span className="eyebrow">Process</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary">How it works</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Buying a vehicle from a Japan auction is simpler than most buyers think. Here's our 4-step process.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-tight space-y-12">
        {steps.map(({ icon: Icon, n, t, d, points }, i) => (
          <div key={n} className="grid gap-8 md:grid-cols-12 items-start">
            <div className="md:col-span-4">
              <div className="text-7xl font-extrabold text-accent/30 leading-none">{n}</div>
              <div className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-2xl md:text-3xl text-primary">{t}</h2>
            </div>
            <div className="md:col-span-8 rounded-xl border border-border bg-card p-6 md:p-8 shadow-card">
              <p className="text-muted-foreground leading-relaxed">{d}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                {points.map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section bg-primary text-primary-foreground">
      <div className="container-tight text-center">
        <h2 className="text-3xl md:text-4xl">Start with a free quote</h2>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">Tell us what you want to buy. We'll get back within 24 hours with a transparent estimate.</p>
        <Button asChild variant="cta" size="lg" className="mt-6"><Link to="/contact">Get Free Quote <ArrowRight className="h-4 w-4" /></Link></Button>
      </div>
    </section>
  </>
);

export default HowItWorks;

import { Link } from "react-router-dom";
import { ShieldCheck, Globe2, Heart } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const About = () => (
  <>
    <Seo
      title="About Tioky LLC — Japan-based Auction Export Company"
      description="Tioky LLC is a Japan-based company focused on vehicle auction export, supported by an in-house digital team. Honest, simple, trustworthy."
      path="/about"
    />
    <section className="bg-gradient-subtle">
      <div className="container-tight py-16 md:py-24 max-w-4xl">
        <span className="eyebrow">About</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary">Japan-based. Built for international buyers.</h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
          Tioky LLC is a Japan-based company focused on helping international buyers source vehicles from
          Japan auctions and ship them worldwide. We work with major auction houses across Japan and handle
          the full export process — from inspection to delivery at your port.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Alongside exports, we also operate a small digital services team — web design, SEO, graphic design
          and digital marketing. Our digital expertise helps us support global clients efficiently and stay
          accessible to buyers anywhere in the world.
        </p>
      </div>
    </section>

    <section className="section">
      <div className="container-tight grid gap-6 md:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Honest", d: "Itemised quotes. No hidden fees. Realistic timelines." },
          { icon: Globe2, t: "International focus", d: "Africa, Asia, Australia, Canada and the Caribbean." },
          { icon: Heart, t: "Simple & trustworthy", d: "Clear communication and steady updates throughout." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-xl border border-border bg-card p-6 shadow-card">
            <Icon className="h-6 w-6 text-accent" />
            <h3 className="mt-3 font-semibold text-primary">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section bg-gradient-subtle">
      <div className="container-tight text-center max-w-2xl">
        <h2 className="text-3xl text-primary">Talk to us</h2>
        <p className="mt-3 text-muted-foreground">We respond to every enquiry — whether you're ready to buy or just exploring options.</p>
        <Button asChild variant="cta" size="lg" className="mt-6"><Link to="/contact">Contact Tioky</Link></Button>
      </div>
    </section>
  </>
);

export default About;

import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

// Future-ready blog skeleton. Posts can be added later via CMS or markdown.
const posts = [
  { slug: "complete-guide-japan-car-auction", title: "The complete guide to Japan car auctions for international buyers", excerpt: "USS, TAA, JU, HAA — what they are, how grading works, and how to bid smart from abroad.", date: "Coming soon", tag: "Guide" },
  { slug: "japan-export-cost-breakdown", title: "Japan vehicle export cost breakdown: what you really pay", excerpt: "Auction price, fees, inland transport, FOB, freight, insurance and destination charges explained.", date: "Coming soon", tag: "Costs" },
  { slug: "auction-sheet-grades-explained", title: "Auction sheet grades explained (R, RA, 3.5, 4, 4.5, 5)", excerpt: "How to read a Japanese auction sheet and what each grade actually means for condition.", date: "Coming soon", tag: "Tips" },
];

const Blog = () => (
  <>
    <Seo
      title="Blog — Japan Auction & Export Guides | Tioky"
      description="Practical guides on Japan car auctions, export costs, auction sheet grades, and tips for international buyers importing vehicles from Japan."
      path="/blog"
    />
    <section className="bg-gradient-subtle">
      <div className="container-tight py-16 md:py-24 max-w-3xl">
        <span className="eyebrow">Blog</span>
        <h1 className="mt-3 text-4xl md:text-5xl text-primary">Japan auction & export guides</h1>
        <p className="mt-4 text-lg text-muted-foreground">Practical, no-fluff content for international buyers importing vehicles from Japan.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-tight grid gap-6 md:grid-cols-3">
        {posts.map(p => (
          <article key={p.slug} className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
            <span className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider">{p.tag}</span>
            <h2 className="mt-4 text-lg font-semibold text-primary leading-snug group-hover:text-primary-glow">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
              <span className="inline-flex items-center gap-1 text-accent font-semibold">Read <ArrowRight className="h-3.5 w-3.5" /></span>
            </div>
          </article>
        ))}
      </div>

      <div className="container-tight mt-16 rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 text-center shadow-elegant">
        <h2 className="text-2xl md:text-3xl">Want a guide on a specific topic?</h2>
        <p className="mt-3 text-primary-foreground/80">Tell us what you'd like to learn about Japan auctions and exports.</p>
        <Button asChild variant="cta" size="lg" className="mt-6"><Link to="/contact">Suggest a topic</Link></Button>
      </div>
    </section>
  </>
);

export default Blog;

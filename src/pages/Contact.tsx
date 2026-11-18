import { useState } from "react";
import { z } from "zod";
import { Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  country: z.string().trim().min(1, "Country is required").max(80),
  message: z.string().trim().min(5, "Please describe what you need").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fe: Record<string, string> = {};
      parsed.error.issues.forEach(i => { fe[i.path[0] as string] = i.message; });
      setErrors(fe);
      return;
    }
    setErrors({});
    // Mailto fallback (no backend yet). Encode safely.
    const subject = encodeURIComponent(`Quote request — ${parsed.data.name} (${parsed.data.country})`);
    const body = encodeURIComponent(
      `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCountry: ${parsed.data.country}\n\nMessage:\n${parsed.data.message}`
    );
    window.location.href = `mailto:contact@tioky.jp?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast({ title: "Opening your email app", description: "We'll reply within 24 hours." });
  };

  return (
    <>
      <Seo
        title="Contact Tioky — Get a Free Japan Auction Quote"
        description="Contact Tioky LLC for a free quote on Japan auction vehicles, export handling and worldwide shipping. Email contact@tioky.jp or chat on WhatsApp."
        path="/contact"
      />
      <section className="bg-gradient-subtle">
        <div className="container-tight py-16 md:py-24 max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-4xl md:text-5xl text-primary">Get a free quote</h1>
          <p className="mt-4 text-lg text-muted-foreground">Tell us what vehicle you're looking for. We'll send a transparent estimate within 24 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-tight grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" maxLength={100} className="mt-1.5" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" maxLength={255} className="mt-1.5" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" name="country" maxLength={80} className="mt-1.5" placeholder="e.g. Kenya, Australia, Canada" />
                {errors.country && <p className="mt-1 text-xs text-destructive">{errors.country}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" maxLength={1000} rows={6} className="mt-1.5" placeholder="Vehicle, year, budget, destination port..." />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">Send enquiry</Button>
              {submitted && (
                <p className="flex items-center gap-2 text-sm text-primary"><CheckCircle2 className="h-4 w-4 text-accent" /> Thanks! Your email app should open. If not, write to contact@tioky.jp.</p>
              )}
            </form>
          </div>

          <aside className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-semibold text-primary">Direct contact</h3>
              <a href="mailto:contact@tioky.jp" className="mt-3 flex items-center gap-2 text-sm text-foreground/80 hover:text-primary">
                <Mail className="h-4 w-4" /> contact@tioky.jp
              </a>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" /> Japan
              </p>
            </div>
            <a
              href="https://wa.me/818083654930"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-whatsapp text-whatsapp-foreground p-6 shadow-cta hover:shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="h-6 w-6" />
              <p className="mt-3 font-semibold">Chat on WhatsApp</p>
              <p className="mt-1 text-sm opacity-90">Fastest way to get a quote.</p>
            </a>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;

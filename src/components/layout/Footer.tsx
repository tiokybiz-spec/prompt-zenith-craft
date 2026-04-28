import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/tioky-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/40">
    <div className="container-tight py-12 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Tioky LLC" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="font-jp text-lg font-bold text-primary">Tioky LLC</span>
        </Link>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
          Japan-based auction export and vehicle buying support service. Helping international
          buyers source, bid on, and ship used vehicles from Japan worldwide.
        </p>
        <div className="mt-5 space-y-2 text-sm text-muted-foreground">
          <a href="mailto:contact@tioky.jp" className="flex items-center gap-2 hover:text-primary">
            <Mail className="h-4 w-4" /> contact@tioky.jp
          </a>
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Japan</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-3">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/japan-car-auction-agent" className="hover:text-primary">Auction Agent</Link></li>
          <li><Link to="/services" className="hover:text-primary">Export Handling</Link></li>
          <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
          <li><Link to="/services" className="hover:text-primary">Digital Services</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-primary mb-3">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container-tight py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Tioky LLC. All rights reserved.</p>
        <p>tioky.jp · Japan Auction Export & Vehicle Buying Support</p>
      </div>
    </div>
  </footer>
);

export default Footer;

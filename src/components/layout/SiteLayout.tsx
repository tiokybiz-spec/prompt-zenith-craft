import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default SiteLayout;

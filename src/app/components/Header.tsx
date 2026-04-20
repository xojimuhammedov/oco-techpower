import { Link, useLocation } from "react-router";
import { Phone, Menu, X, Send } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.jpg";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 overflow-hidden rounded-lg">
              <img src={logo} alt="OCO Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-primary leading-none">OCO</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Uzbekistan</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors hover:text-accent ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://t.me/ocotechpoweradmin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Send className="w-4 h-4" />
              <span className="hidden lg:inline">Telegram</span>
            </a>
            <a
              href="tel:+998901395533"
              className="flex items-center gap-2 text-sm hover:text-accent transition-colors bg-secondary px-3 py-2 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              +998 90 139 55 33
            </a>
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-6 py-2 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-md"
            >
              Free Consultation
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive(item.path) ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg text-center hover:bg-accent/90 transition-colors mt-2"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

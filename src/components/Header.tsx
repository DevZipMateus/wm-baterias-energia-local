import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "@/assets/logo-wm.png";

const navLinks = [
  { label: "Início", href: "#inicio", route: "/" },
  { label: "Sobre", href: "#sobre", route: "/" },
  { label: "Produtos", href: "#produtos", route: "/" },
  { label: "Unidades", href: "#unidades", route: "/" },
  { label: "Contato", href: "#contato", route: "/" },
  { label: "Vitrine", href: "/vitrine", route: "/vitrine" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (link: typeof navLinks[0]) => {
    setOpen(false);
    if (link.route === "/vitrine") return;

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const el = document.querySelector(link.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2" aria-label="WM Baterias - Início">
          <img src={logoImg} alt="WM Baterias logo" className="h-10 w-10 rounded" />
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            WM Baterias
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
          {navLinks.map((link) =>
            link.route === "/vitrine" ? (
              <Link
                key={link.href}
                to="/vitrine"
                className="font-body text-sm font-medium text-white/80 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleClick(link)}
                className="font-body text-sm font-medium text-white/80 hover:text-accent transition-colors"
              >
                {link.label}
              </button>
            )
          )}
          <a
            href="https://wa.me/5546999761791"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md gradient-yellow px-4 py-2 font-heading text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            Fale conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-primary border-t border-white/10 pb-4" aria-label="Menu mobile">
          {navLinks.map((link) =>
            link.route === "/vitrine" ? (
              <Link
                key={link.href}
                to="/vitrine"
                onClick={() => setOpen(false)}
                className="block w-full text-left px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-body text-sm"
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.href}
                onClick={() => handleClick(link)}
                className="block w-full text-left px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-body text-sm"
              >
                {link.label}
              </button>
            )
          )}
          <div className="px-6 pt-2">
            <a
              href="https://wa.me/5546999761791"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md gradient-yellow px-4 py-2 font-heading text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Fale conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

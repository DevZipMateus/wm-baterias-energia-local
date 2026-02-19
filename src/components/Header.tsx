import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo-placeholder.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Unidades", href: "#unidades" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio" className="flex items-center gap-2" aria-label="WM Baterias - Início">
          <img src={logoImg} alt="WM Baterias logo" className="h-10 w-10 rounded" />
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            WM Baterias
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Menu principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-body text-sm font-medium text-white/80 hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5599999999999"
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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="block w-full text-left px-6 py-3 text-white/80 hover:text-accent hover:bg-white/5 transition-colors font-body text-sm"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <a
              href="https://wa.me/5599999999999"
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

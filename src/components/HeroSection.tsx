import { Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16"
    >
      {/* Background parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-accent font-body text-sm font-medium">
            <Zap className="h-4 w-4" />
            Energia que te leva mais longe
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white text-shadow-hero mb-4 tracking-tight">
            WM Baterias
          </h1>
          <h2 className="font-body text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl">
            Referência regional em soluções de energia automotiva. Qualidade, confiança e atendimento especializado desde 2016.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md gradient-yellow px-8 py-3.5 font-heading text-base font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Solicitar orçamento
            </a>
            <button
              onClick={() => scrollTo("#produtos")}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/10 px-8 py-3.5 font-heading text-base font-semibold text-white hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
            >
              Nossos produtos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

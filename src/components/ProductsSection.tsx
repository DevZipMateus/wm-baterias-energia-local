import { Car, Bike, Truck, Tractor, BatteryCharging, Droplets, Wrench, Gauge, ShieldCheck, Package, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const products = [
  { icon: Car, label: "Automotiva convencional" },
  { icon: BatteryCharging, label: "Baterias EFB" },
  { icon: ShieldCheck, label: "Baterias AGM" },
  { icon: Bike, label: "Motocicletas" },
  { icon: Truck, label: "Linha pesada" },
  { icon: Tractor, label: "Linha agrícola" },
  { icon: BatteryCharging, label: "Nobreaks" },
  { icon: Package, label: "Kit relação" },
  { icon: Droplets, label: "Lavagem automotiva" },
];

const services = [
  { icon: Wrench, label: "Instalação de bateria" },
  { icon: Gauge, label: "Teste de alternador" },
  { icon: BatteryCharging, label: "Teste de carga" },
  { icon: ShieldCheck, label: "Avaliação de vida útil" },
];

const ProductsSection = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();
  const servicesHeading = useScrollReveal();
  const servicesGrid = useScrollReveal();
  const vitrine = useScrollReveal();
  const extras = useScrollReveal();

  return (
    <section id="produtos" className="section-padding gradient-dark">
      <div className="container mx-auto">
        <div ref={heading.ref} className={`text-center mb-12 reveal ${heading.isVisible ? "visible" : ""}`}>
          <span className="inline-block mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-3 py-1 rounded">
            Produtos e serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Linha completa para todas as necessidades
          </h2>
          <p className="mt-3 font-body text-white/60 max-w-xl mx-auto">
            Do veículo de passeio ao maquinário agrícola, temos a solução ideal em energia.
          </p>
        </div>

        {/* Products */}
        <div ref={grid.ref} className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-14 stagger-children ${grid.isVisible ? "visible" : ""}`}>
          {products.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-6 hover:bg-accent/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <Icon className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-sm font-medium text-white/80">{label}</span>
            </div>
          ))}
        </div>

        {/* Services */}
        <div ref={servicesHeading.ref} className={`text-center mb-6 reveal ${servicesHeading.isVisible ? "visible" : ""}`}>
          <h3 className="font-heading text-xl font-semibold text-accent">Serviços especializados</h3>
        </div>
        <div ref={servicesGrid.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-4 stagger-children ${servicesGrid.isVisible ? "visible" : ""}`}>
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4 hover:bg-accent/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-body text-sm text-white/90">{label}</span>
            </div>
          ))}
        </div>

        {/* Vitrine CTA */}
        <div ref={vitrine.ref} className={`mt-14 reveal-scale ${vitrine.isVisible ? "visible" : ""}`}>
          <div className="relative rounded-xl border border-accent/30 bg-accent/5 backdrop-blur-sm p-8 md:p-10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5" />
            <div className="relative z-10">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-yellow glow-pulse">
                <ShoppingBag className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
                Confira nossa vitrine online
              </h3>
              <p className="font-body text-white/60 max-w-lg mx-auto mb-6 leading-relaxed">
                Navegue por todo o nosso catálogo de produtos com preços, disponibilidade e detalhes técnicos. Encontre a bateria ideal para o seu veículo sem sair de casa.
              </p>
              <Link
                to="/vitrine"
                className="shine-hover inline-flex items-center justify-center gap-2 rounded-md gradient-yellow px-8 py-3.5 font-heading text-base font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Acessar vitrine
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Extra info */}
        <div ref={extras.ref} className={`mt-10 flex flex-wrap justify-center gap-6 text-white/60 font-body text-sm reveal ${extras.isVisible ? "visible" : ""}`}>
          <span>🚗 Entrega gratuita na cidade</span>
          <span>🚚 Frete facilitado para regiões distantes</span>
          <span>👨‍🔧 Equipe treinada e capacitada</span>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

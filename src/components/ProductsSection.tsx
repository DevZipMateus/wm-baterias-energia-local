import { Car, Bike, Truck, Tractor, BatteryCharging, Droplets, Wrench, Gauge, ShieldCheck, Package } from "lucide-react";

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

const ProductsSection = () => (
  <section id="produtos" className="section-padding gradient-dark">
    <div className="container mx-auto">
      <div className="text-center mb-12">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-14">
        {products.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-6 hover:bg-accent/10 hover:border-accent/40 transition-all text-center"
          >
            <Icon className="h-8 w-8 text-accent" />
            <span className="font-body text-sm font-medium text-white/80">{label}</span>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl font-semibold text-accent">Serviços especializados</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4"
          >
            <Icon className="h-5 w-5 text-accent shrink-0" />
            <span className="font-body text-sm text-white/90">{label}</span>
          </div>
        ))}
      </div>

      {/* Extra info */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 font-body text-sm">
        <span>🚗 Entrega gratuita na cidade</span>
        <span>🚚 Frete facilitado para regiões distantes</span>
        <span>👨‍🔧 Equipe treinada e capacitada</span>
      </div>
    </div>
  </section>
);

export default ProductsSection;

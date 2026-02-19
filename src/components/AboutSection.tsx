import { Target, Eye, Gem } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    title: "Visão",
    text: "Tornar-se a maior rede regional de soluções em baterias e energia automotiva, sendo reconhecida pela gestão profissional e liderança de mercado.",
  },
  {
    icon: Target,
    title: "Missão",
    text: "Fornecer baterias e soluções automotivas com alto padrão de qualidade, logística eficiente e atendimento estratégico.",
  },
  {
    icon: Gem,
    title: "Valores",
    text: "Mentalidade de crescimento, transparência, ética, agilidade, excelência operacional, inovação e responsabilidade socioambiental.",
  },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-3 py-1 rounded">
          Sobre nós
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Conheça a WM Baterias
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
        <div className="font-body text-muted-foreground leading-relaxed space-y-4 text-base">
          <p>
            A WM Baterias nasceu de um sonho construído com conhecimento, trabalho duro e coragem para empreender. Seu fundador, Wladimir Maschio, dedicou mais de 8 anos à linha de montagem da fábrica Baterias Real, onde adquiriu experiência técnica e visão de mercado.
          </p>
          <p>
            No dia 10 de março de 2016, em Santa Izabel do Oeste, a WM Baterias abriu suas portas com uma missão clara: oferecer qualidade, segurança e confiança em energia automotiva.
          </p>
          <p>
            Hoje, a empresa é estruturada com <strong className="text-foreground">4 filiais e uma matriz</strong> que funciona como Centro de Distribuição, garantindo eficiência logística e competitividade estratégica.
          </p>
        </div>

        <div className="grid gap-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md gradient-yellow">
                <Icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;

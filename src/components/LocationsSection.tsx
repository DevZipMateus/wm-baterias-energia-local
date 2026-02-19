import { MapPin, Clock } from "lucide-react";
import locationsBg from "@/assets/locations-bg.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const locations = [
  { city: "Santa Izabel do Oeste", type: "Matriz / CD" },
  { city: "Realeza", type: "Filial" },
  { city: "Capanema", type: "Filial" },
  { city: "Capitão Leônidas Marques", type: "Filial" },
];

const LocationsSection = () => {
  const heading = useScrollReveal();
  const cards = useScrollReveal();
  const schedule = useScrollReveal();
  const map = useScrollReveal();

  return (
    <section id="unidades" className="relative section-padding overflow-hidden">
      {/* Background parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${locationsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/80" />

      <div className="relative z-10 container mx-auto">
        <div ref={heading.ref} className={`text-center mb-12 reveal ${heading.isVisible ? "visible" : ""}`}>
          <span className="inline-block mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-3 py-1 rounded">
            Unidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Estamos perto de você
          </h2>
        </div>

        <div ref={cards.ref} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 stagger-children ${cards.isVisible ? "visible" : ""}`}>
          {locations.map(({ city, type }) => (
            <div
              key={city}
              className="group flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm p-5 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
              <div>
                <p className="font-heading text-base font-semibold text-white">{city}</p>
                <p className="font-body text-sm text-white/60">{type}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={schedule.ref} className={`flex items-center justify-center gap-2 text-white/60 font-body text-sm reveal ${schedule.isVisible ? "visible" : ""}`}>
          <Clock className="h-4 w-4" />
          <span>Seg a sex: 07:30–11:30 / 13:30–18:00 · Sáb: 08:00–11:30</span>
        </div>

        {/* Map */}
        <div ref={map.ref} className={`mt-10 rounded-lg overflow-hidden shadow-lg reveal-scale ${map.isVisible ? "visible" : ""}`}>
          <iframe
            title="Localização WM Baterias"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.0!2d-53.4876!3d-25.8228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f01!2sAv.+dos+Pinheiros%2C+770+-+Centro%2C+Santa+Izabel+do+Oeste+-+PR!5e0!3m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;

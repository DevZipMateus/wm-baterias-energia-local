import { MapPin, Clock } from "lucide-react";

const locations = [
  { city: "Santa Izabel do Oeste", type: "Matriz / CD" },
  { city: "Realeza", type: "Filial" },
  { city: "Capanema", type: "Filial" },
  { city: "Capitão Leônidas Marques", type: "Filial" },
];

const LocationsSection = () => (
  <section id="unidades" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-3 py-1 rounded">
          Unidades
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground">
          Estamos perto de você
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {locations.map(({ city, type }) => (
          <div
            key={city}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
          >
            <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-base font-semibold text-foreground">{city}</p>
              <p className="font-body text-sm text-muted-foreground">{type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground font-body text-sm">
        <Clock className="h-4 w-4" />
        <span>Seg a sex: 07:30–11:30 / 13:30–18:00 · Sáb: 08:00–11:30</span>
      </div>

      {/* Map */}
      <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
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

export default LocationsSection;

import { Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="section-padding bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block mb-2 font-heading text-sm font-semibold uppercase tracking-widest text-accent-foreground bg-accent px-3 py-1 rounded">
          Contato
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Fale com a WM Baterias
        </h2>
      </div>

      <div className="max-w-2xl mx-auto grid gap-4">
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-green-600 text-white">
            {/* WhatsApp icon inline */}
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.547 4.094 1.504 5.82L0 24l6.335-1.463A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.82a9.8 9.8 0 01-5.26-1.527l-.378-.224-3.907.902.974-3.774-.248-.392A9.82 9.82 0 012.18 12c0-5.414 4.406-9.82 9.82-9.82 5.414 0 9.82 4.406 9.82 9.82 0 5.414-4.406 9.82-9.82 9.82z"/></svg>
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-foreground">WhatsApp</p>
            <p className="font-body text-sm text-muted-foreground">Envie uma mensagem agora</p>
          </div>
        </a>

        <a
          href="mailto:wmbateriassio@gmail.com"
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md gradient-yellow">
            <Mail className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-foreground">E-mail</p>
            <p className="font-body text-sm text-muted-foreground">wmbateriassio@gmail.com</p>
          </div>
        </a>

        <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md gradient-yellow">
            <MapPin className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-foreground">Endereço</p>
            <p className="font-body text-sm text-muted-foreground">Av. dos Pinheiros, 680 - Centro, Santa Izabel do Oeste - PR</p>
          </div>
        </div>

        <a
          href="https://www.instagram.com/wmbateriassio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <Instagram className="h-5 w-5" />
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-foreground">Instagram</p>
            <p className="font-body text-sm text-muted-foreground">@wmbateriassio</p>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;

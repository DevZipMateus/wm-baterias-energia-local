import Header from "@/components/Header";

const Vitrine = () => (
  <div className="h-screen w-full overflow-hidden flex flex-col">
    <Header />
    {/* Spacer for fixed header (80px) */}
    <div className="h-20 shrink-0" />
    <iframe
      src="https://wmbateriasfilial.egestor.com.br/vitrine/"
      title="Demonstração de Vitrine"
      className="w-full border-none flex-1"
      style={{ height: "calc(100vh - 80px - 63px)" }}
      allowFullScreen
      loading="lazy"
    />
  </div>
);

export default Vitrine;

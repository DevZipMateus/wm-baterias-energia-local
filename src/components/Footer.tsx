const Footer = () => (
  <footer className="gradient-dark py-10 px-4">
    <div className="container mx-auto text-center">
      <p className="font-heading text-lg font-bold text-accent mb-2">WM Baterias</p>
      <p className="font-body text-sm text-white/50 mb-1">
        CNPJ: 23.740.466/0002-00
      </p>
      <p className="font-body text-sm text-white/50 mb-4">
        Av. dos Pinheiros, 680 - Centro, Santa Izabel do Oeste - PR
      </p>
      <p className="font-body text-xs text-white/30">
        © {new Date().getFullYear()} WM Baterias. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;

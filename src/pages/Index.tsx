import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <LocationsSection />
      <ContactSection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;

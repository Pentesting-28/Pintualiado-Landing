import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { InstagramFeed } from "@/components/InstagramFeed";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
        <InstagramFeed />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

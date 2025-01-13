import Hero from "@/components/sections/Hero";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <div>
        <Hero />

        <PortfolioSection />
      </div>

      <ContactSection />
    </>
  );
}

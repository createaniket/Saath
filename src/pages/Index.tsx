import Nav from "@/components/saath/Nav";
import ErectWipesHero from "@/components/saath/ErectWipesHero";
import Hero from "@/components/saath/Hero";
import Marquee from "@/components/saath/Marquee";
import Services from "@/components/saath/Services";
import HowItWorks from "@/components/saath/HowItWorks";
import Comfort from "@/components/saath/Comfort";
import Together from "@/components/saath/Together";
import ProductGrid from "@/components/saath/ProductGrid";
import Faq from "@/components/saath/Faq";
import Footer from "@/components/saath/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <ErectWipesHero />
      <Hero />
      <Marquee />
      <Services />
      <HowItWorks />
      <Comfort />
      <Together />
      <ProductGrid />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;

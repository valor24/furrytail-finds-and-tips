
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedPets from "@/components/FeaturedPets";
import ProductsSection from "@/components/ProductsSection";
import CareGuides from "@/components/CareGuides";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedPets />
        <ProductsSection />
        <CareGuides />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

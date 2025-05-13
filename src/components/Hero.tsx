
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Your Pet's Perfect Home Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover the perfect companion and everything they need for a happy, healthy life at our premium pet care shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-pet-blue hover:bg-blue-600 text-white px-8 py-6 text-lg">
              Browse Pets
            </Button>
            <Button variant="outline" className="border-pet-blue text-pet-blue hover:bg-blue-50 px-8 py-6 text-lg">
              Shop Products
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-pet-orange/10 rounded-full"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-pet-blue/10 rounded-full"></div>
      <div className="absolute top-40 right-40 w-12 h-12 bg-pet-teal/20 rounded-full"></div>
    </div>
  );
};

export default Hero;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Fish, Bird } from "lucide-react";
import { motion } from "framer-motion";

const PetCard = ({ 
  name, 
  breed, 
  description, 
  icon: Icon,
  color,
  image
}: { 
  name: string; 
  breed: string; 
  description: string; 
  icon: any;
  color: string;
  image?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border-2 hover:border-primary">
        <div className={`h-48 flex items-center justify-center ${color}`}>
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <Icon className="h-24 w-24 text-white group-hover:animate-wiggle" />
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-md text-gray-600 mb-3 font-medium">{breed}</p>
          <p className="text-gray-700 mb-5">{description}</p>
          <Button className="w-full font-bold text-md">Learn More</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PetsPage = () => {
  const petCategories = [
    {
      name: "Dogs",
      breed: "Various Breeds",
      description: "Loyal companions for active families. We have Golden Retrievers, Beagles, Labradors, German Shepherds and many more cute puppies available.",
      icon: Dog,
      color: "bg-pet-blue"
    },
    {
      name: "Cats",
      breed: "Various Breeds",
      description: "Independent and loving pets. Choose from Siamese, Maine Coon, Persian, British Shorthair, and other adorable kittens for your home.",
      icon: Cat,
      color: "bg-pet-orange"
    },
    {
      name: "Fish",
      breed: "Freshwater & Saltwater",
      description: "Colorful aquatic pets. Our collection includes Bettas, Goldfish, Guppies, Tetras, and many exotic tropical varieties for your aquarium.",
      icon: Fish,
      color: "bg-pet-teal"
    },
    {
      name: "Birds",
      breed: "Various Species",
      description: "Beautiful and vocal companions. We offer Canaries, Parakeets, Cockatiels, Lovebirds, and Finches to bring joy and song to your home.",
      icon: Bird,
      color: "bg-pet-purple"
    }
  ];

  const specificPets = [
    {
      name: "Golden Retriever",
      breed: "Dog",
      description: "Friendly, loyal and great with families. Known for their golden coat and gentle temperament.",
      icon: Dog,
      color: "bg-amber-100",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=612&q=80"
    },
    {
      name: "Siamese Cat",
      breed: "Cat",
      description: "Distinguished by their color points and blue almond-shaped eyes. Very vocal and intelligent companions.",
      icon: Cat,
      color: "bg-slate-100",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
    },
    {
      name: "Betta Fish",
      breed: "Freshwater",
      description: "Known for their vibrant colors and flowing fins. These beautiful fish make striking additions to any tank.",
      icon: Fish,
      color: "bg-sky-100",
      image: "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
    },
    {
      name: "Cockatiel",
      breed: "Bird",
      description: "Popular pet birds known for their distinctive crest and ability to mimic sounds and whistle tunes.",
      icon: Bird,
      color: "bg-yellow-100",
      image: "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pet-blue/10 to-pet-orange/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                Find Your Perfect Companion
              </h1>
              <p className="text-xl font-medium text-gray-700 mb-8">
                Discover a wide variety of happy, healthy pets looking for their forever homes. 
                All our animals receive top-quality care and socialization.
              </p>
              <Button size="lg" className="text-lg font-bold px-8 py-6">
                Book a Visit Today
              </Button>
            </div>
          </div>
        </section>

        {/* Pet Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Pet Categories</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            <p className="text-xl text-center font-medium text-gray-700 mb-12 max-w-3xl mx-auto">
              We care for a variety of pets to help you find the perfect match for your lifestyle, home, and family
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {petCategories.map((pet) => (
                <PetCard key={pet.name} {...pet} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Pets */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Featured Pets</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            <p className="text-xl text-center font-medium text-gray-700 mb-12 max-w-3xl mx-auto">
              Meet some of our adorable pets currently available for adoption. Each one has been carefully looked after and is ready for a loving home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {specificPets.map((pet) => (
                <PetCard key={pet.name} {...pet} />
              ))}
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="text-lg font-semibold border-2">
                View All Available Pets
              </Button>
            </div>
          </div>
        </section>
        
        {/* Adoption Process */}
        <section className="py-16 bg-gradient-to-r from-pet-blue/10 to-pet-orange/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Our Adoption Process</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Visit Our Store</h3>
                <p>Come meet our pets in person and find the one that connects with you.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Consultation</h3>
                <p>Our experts will help you choose the right pet for your lifestyle and home.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Take Home</h3>
                <p>Complete the adoption process and welcome your new pet to their forever home.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="text-lg font-bold">Schedule Your Visit</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PetsPage;

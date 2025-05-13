
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dog, Cat, Fish, Bird } from "lucide-react";

const PetCard = ({ 
  name, 
  breed, 
  description, 
  icon: Icon,
  color 
}: { 
  name: string; 
  breed: string; 
  description: string; 
  icon: any;
  color: string; 
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className={`h-32 flex items-center justify-center ${color}`}>
        <Icon className="h-16 w-16 text-white group-hover:animate-wiggle" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{breed}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardContent>
    </Card>
  );
};

const FeaturedPets = () => {
  const pets = [
    {
      name: "Dogs",
      breed: "Various Breeds",
      description: "Loyal companions for active families. From Golden Retrievers to Beagles.",
      icon: Dog,
      color: "bg-pet-blue"
    },
    {
      name: "Cats",
      breed: "Various Breeds",
      description: "Independent and loving pets. From Siamese to Maine Coon breeds.",
      icon: Cat,
      color: "bg-pet-orange"
    },
    {
      name: "Fish",
      breed: "Freshwater & Saltwater",
      description: "Colorful aquatic pets. From Bettas to exotic tropical varieties.",
      icon: Fish,
      color: "bg-pet-teal"
    },
    {
      name: "Birds",
      breed: "Various Species",
      description: "Beautiful and vocal companions. From Canaries to Parakeets.",
      icon: Bird,
      color: "bg-pet-purple"
    }
  ];

  return (
    <section id="pets" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Pet Companions</h2>
        <p className="section-subtitle">
          Find your perfect companion from our wide selection of healthy, well-cared-for pets
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pets.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;

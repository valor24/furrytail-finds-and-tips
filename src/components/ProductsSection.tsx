
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Utensils, Dog, Cat } from "lucide-react";

const ProductCard = ({ 
  title, 
  description, 
  icon: Icon,
  bgColor,
  iconColor 
}: { 
  title: string; 
  description: string; 
  icon: any;
  bgColor: string;
  iconColor: string;
}) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 text-center">
        <div className={`mx-auto w-16 h-16 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Shop Now
        </Button>
      </CardContent>
    </Card>
  );
};

const ProductsSection = () => {
  const products = [
    {
      title: "Premium Pet Food",
      description: "Nutritious and delicious foods for all pets, from everyday meals to special treats.",
      icon: Utensils,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue"
    },
    {
      title: "Stylish Collars",
      description: "Comfortable and durable collars, leashes, and harnesses for daily walks.",
      icon: Dog,
      bgColor: "bg-orange-100",
      iconColor: "text-pet-orange"
    },
    {
      title: "Interactive Toys",
      description: "Fun and engaging toys to keep your pets active, entertained, and mentally stimulated.",
      icon: Cat,
      bgColor: "bg-teal-100",
      iconColor: "text-pet-teal"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pet Products</h2>
        <p className="section-subtitle">
          Everything your pet needs for a happy, healthy life - from premium food to fun toys
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

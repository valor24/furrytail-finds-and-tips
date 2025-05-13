
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Utensils, Dog, Cat, Bone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ProductCard = ({ 
  title, 
  price,
  originalPrice,
  description, 
  icon: Icon, 
  bgColor,
  iconColor,
  image,
  badge
}: { 
  title: string; 
  price: string;
  originalPrice?: string;
  description: string; 
  icon: any; 
  bgColor: string;
  iconColor: string;
  image?: string;
  badge?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border-2 hover:border-primary h-full">
        <div className={`h-48 flex items-center justify-center relative ${bgColor}`}>
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover" />
          ) : (
            <Icon className={`h-20 w-20 ${iconColor}`} />
          )}
          {badge && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {badge}
            </span>
          )}
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="text-right">
              <span className="text-xl font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-4">{description}</p>
          <Button className="w-full font-bold" size="lg">
            <ShoppingCart className="mr-1" /> Add to Cart
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductsPage = () => {
  const categories = [
    { id: "food", label: "Pet Food" },
    { id: "accessories", label: "Accessories" },
    { id: "toys", label: "Toys" },
    { id: "health", label: "Health & Grooming" }
  ];
  
  const foodProducts = [
    {
      title: "Premium Dog Kibble",
      price: "$24.99",
      description: "High-quality dog food with balanced nutrition, perfect for adult dogs of all breeds.",
      icon: Utensils,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      title: "Gourmet Cat Food",
      price: "$18.99",
      originalPrice: "$22.99",
      description: "Delicious wet food for cats made with real fish and chicken in savory gravy.",
      icon: Cat,
      bgColor: "bg-orange-100",
      iconColor: "text-pet-orange",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      badge: "Sale"
    },
    {
      title: "Small Animal Feed",
      price: "$12.99",
      description: "Specially formulated feed for rabbits, guinea pigs, and other small pets.",
      icon: Utensils,
      bgColor: "bg-teal-100",
      iconColor: "text-pet-teal",
      image: "https://images.unsplash.com/photo-1517686668014-1740ede3d7b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Aquarium Fish Food",
      price: "$9.99",
      description: "Premium flakes and pellets designed for vibrant colors and healthy growth in aquarium fish.",
      icon: Utensils,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
    }
  ];
  
  const accessoryProducts = [
    {
      title: "Deluxe Dog Collar",
      price: "$19.99",
      description: "Durable and comfortable collar made from premium leather with stylish metal hardware.",
      icon: Dog,
      bgColor: "bg-orange-100",
      iconColor: "text-pet-orange",
      image: "https://images.unsplash.com/photo-1605897472359-85e4b94d685d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Cozy Cat Bed",
      price: "$29.99",
      originalPrice: "$39.99",
      description: "Soft and comfortable bed that provides the perfect spot for your cat to lounge and sleep.",
      icon: Cat,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue",
      image: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      badge: "Sale"
    },
    {
      title: "Bird Cage Accessories",
      price: "$14.99",
      description: "Set of swings, ladders, and perches to keep your feathered friends active and entertained.",
      icon: Cat,
      bgColor: "bg-teal-100",
      iconColor: "text-pet-teal",
      image: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
    },
    {
      title: "Aquarium Decor Set",
      price: "$24.99",
      description: "Beautiful aquarium decorations including plants, rocks, and ornaments to create a natural habitat.",
      icon: Cat,
      bgColor: "bg-purple-100",
      iconColor: "text-pet-purple",
      image: "https://images.unsplash.com/photo-1584257173272-13d8a066d096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
    }
  ];
  
  const toyProducts = [
    {
      title: "Interactive Dog Toy",
      price: "$15.99",
      description: "Engaging toy that dispenses treats and keeps your dog mentally stimulated for hours.",
      icon: Bone,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue",
      image: "https://images.unsplash.com/photo-1546491764-67a5b8d5b3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      title: "Feather Wand Cat Toy",
      price: "$9.99",
      description: "Exciting wand toy with feathers that will bring out your cat's natural hunting instincts.",
      icon: Cat,
      bgColor: "bg-orange-100",
      iconColor: "text-pet-orange",
      image: "https://images.unsplash.com/photo-1615965763681-f37b8a5a52e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      badge: "New"
    },
    {
      title: "Small Animal Exercise Ball",
      price: "$7.99",
      description: "Safe exercise ball for hamsters, gerbils and other small pets to explore outside their cage.",
      icon: Dog,
      bgColor: "bg-teal-100",
      iconColor: "text-pet-teal",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      title: "Bird Swing Set",
      price: "$12.99",
      description: "Colorful swing set that attaches to bird cages and provides entertainment for your feathered friend.",
      icon: Sparkles,
      bgColor: "bg-purple-100",
      iconColor: "text-pet-purple",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=425&q=80"
    }
  ];

  const healthProducts = [
    {
      title: "Pet Grooming Kit",
      price: "$34.99",
      description: "Complete set of grooming tools including brushes, clippers, and nail trimmers for all pet types.",
      icon: Dog,
      bgColor: "bg-blue-100",
      iconColor: "text-pet-blue",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
    },
    {
      title: "Dental Care Chews",
      price: "$12.99",
      originalPrice: "$16.99",
      description: "Tasty chews that help clean your dog's teeth and freshen their breath while they enjoy a treat.",
      icon: Bone,
      bgColor: "bg-orange-100",
      iconColor: "text-pet-orange",
      image: "https://images.unsplash.com/photo-1622020457014-aed1c6997431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
      badge: "Sale"
    },
    {
      title: "Pet Vitamins & Supplements",
      price: "$19.99",
      description: "Essential vitamins and minerals to support your pet's overall health, coat, and immune system.",
      icon: Sparkles,
      bgColor: "bg-teal-100",
      iconColor: "text-pet-teal",
      image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      title: "Anti-Parasite Treatment",
      price: "$22.99",
      description: "Effective treatment for fleas, ticks, and other parasites to keep your pet comfortable and healthy.",
      icon: Sparkles,
      bgColor: "bg-purple-100",
      iconColor: "text-pet-purple",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
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
                Premium Pet Products
              </h1>
              <p className="text-xl font-medium text-gray-700 mb-8">
                Discover our extensive collection of high-quality food, toys, accessories, 
                and health products for all your pet care needs.
              </p>
              <Button size="lg" className="text-lg font-bold px-8 py-6">
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Our Product Range</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            
            <Tabs defaultValue="food" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-lg font-semibold py-3"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="food">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {foodProducts.map((product) => (
                    <ProductCard key={product.title} {...product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="accessories">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {accessoryProducts.map((product) => (
                    <ProductCard key={product.title} {...product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="toys">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {toyProducts.map((product) => (
                    <ProductCard key={product.title} {...product} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="health">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {healthProducts.map((product) => (
                    <ProductCard key={product.title} {...product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="text-lg font-semibold border-2">
                View All Products
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Why Shop With Us</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Free Shipping</h3>
                <p>On all orders over $50. Fast delivery to your doorstep.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Guaranteed</h3>
                <p>We carefully select only the best products for your beloved pets.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-pet-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dog className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Advice</h3>
                <p>Our knowledgeable staff can help you choose the perfect products.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

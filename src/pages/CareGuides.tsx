
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dog, Cat, Fish, Bird } from "lucide-react";
import { motion } from "framer-motion";

const GuideCard = ({
  title,
  description,
  icon: Icon,
  color,
  image,
  authorName,
  authorPosition,
  authorImage,
  date
}: {
  title: string;
  description: string;
  icon: any;
  color: string;
  image?: string;
  authorName?: string;
  authorPosition?: string;
  authorImage?: string;
  date?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border-2 hover:border-primary h-full">
        <div className={`h-48 relative overflow-hidden ${color}`}>
          {image ? (
            <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <Icon className="h-24 w-24 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700 mb-5">{description}</p>
          
          {(authorName || date) && (
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
              {authorName && (
                <div className="flex items-center">
                  {authorImage && (
                    <img src={authorImage} alt={authorName} className="w-10 h-10 rounded-full mr-3" />
                  )}
                  <div>
                    <p className="font-semibold">{authorName}</p>
                    {authorPosition && <p className="text-xs text-gray-600">{authorPosition}</p>}
                  </div>
                </div>
              )}
              {date && <p className="text-sm text-gray-500">{date}</p>}
            </div>
          )}
          
          <Button className="w-full font-bold mt-4">Read Guide</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CareGuidesPage = () => {
  const petTypes = [
    { id: "all", label: "All Guides" },
    { id: "dogs", label: "Dogs" },
    { id: "cats", label: "Cats" },
    { id: "small-pets", label: "Small Pets" },
    { id: "aquatic", label: "Aquatic" }
  ];

  const guides = [
    {
      title: "Proper Dog Nutrition Guide",
      description: "Learn about balanced nutrition for your dog at different life stages, from puppyhood to senior years.",
      icon: Dog,
      color: "bg-pet-blue",
      image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      authorName: "Dr. Sarah Johnson",
      authorPosition: "Veterinary Nutritionist",
      authorImage: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      date: "May 12, 2023",
      type: "dogs"
    },
    {
      title: "Cat Grooming Essentials",
      description: "Discover the best practices for keeping your cat's coat healthy and reducing hairballs.",
      icon: Cat,
      color: "bg-pet-orange",
      image: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      authorName: "Lisa Martinez",
      authorPosition: "Professional Pet Groomer",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "April 18, 2023",
      type: "cats"
    },
    {
      title: "Setting Up Your First Aquarium",
      description: "A comprehensive guide to creating a healthy ecosystem for your fish with proper filtration and water quality.",
      icon: Fish,
      color: "bg-pet-teal",
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80",
      authorName: "Michael Chen",
      authorPosition: "Aquatics Specialist",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      date: "June 5, 2023",
      type: "aquatic"
    },
    {
      title: "Small Pet Housing Guide",
      description: "Tips for creating comfortable and safe environments for hamsters, guinea pigs, and other small pets.",
      icon: Dog,
      color: "bg-pet-purple",
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80",
      authorName: "Emily Parker",
      authorPosition: "Small Animal Care Expert",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      date: "March 24, 2023",
      type: "small-pets"
    },
    {
      title: "Training Your Puppy",
      description: "Basic commands, house training, and socialization tips for a well-behaved and happy puppy.",
      icon: Dog,
      color: "bg-pet-blue",
      image: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      authorName: "James Wilson",
      authorPosition: "Dog Trainer",
      authorImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      date: "May 3, 2023",
      type: "dogs"
    },
    {
      title: "Understanding Cat Behavior",
      description: "Decode your cat's body language and behaviors to better understand their needs and emotions.",
      icon: Cat,
      color: "bg-pet-orange",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80",
      authorName: "Dr. Amanda Lee",
      authorPosition: "Feline Behavior Specialist",
      authorImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      date: "April 11, 2023",
      type: "cats"
    }
  ];

  const filteredGuides = (type: string) => {
    if (type === "all") return guides;
    return guides.filter(guide => guide.type === type);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pet-blue/10 to-pet-orange/10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-primary">
                Pet Care Guides
              </h1>
              <p className="text-xl font-medium text-gray-700 mb-8">
                Expert advice on how to keep your pets healthy, happy, and thriving at every stage of life.
              </p>
              <Button size="lg" className="text-lg font-bold px-8 py-6">
                Explore All Guides
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Care Resources</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="inline-flex p-1 rounded-lg bg-muted">
                  {petTypes.map((type) => (
                    <TabsTrigger 
                      key={type.id} 
                      value={type.id}
                      className="px-6 py-2 text-base font-semibold"
                    >
                      {type.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {petTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGuides(type.id).map((guide) => (
                      <GuideCard key={guide.title} {...guide} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-16">
              <Button size="lg" variant="outline" className="text-lg font-semibold border-2">
                Load More Guides
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-pet-blue to-pet-teal text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-6">Subscribe for Pet Care Tips</h2>
              <p className="text-xl mb-8">
                Join our community and receive the latest care guides, tips, and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-4 rounded-lg text-gray-900 w-full sm:w-96"
                />
                <Button size="lg" className="bg-pet-orange hover:bg-orange-600 text-white font-bold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expert Consultation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-extrabold mb-4">Need Personalized Pet Advice?</h2>
                <p className="text-lg mb-6">
                  Our team of veterinarians and pet care specialists are available for one-on-one consultations to address your specific pet care needs.
                </p>
                <Button size="lg" className="font-bold text-lg">Book a Consultation</Button>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Veterinarian with dog" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareGuidesPage;

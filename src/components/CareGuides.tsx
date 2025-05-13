
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GuideCard = ({ 
  title, 
  description, 
  imageUrl,
}: { 
  title: string; 
  description: string; 
  imageUrl: string;
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Button variant="outline" className="mt-auto">Read Guide</Button>
      </CardContent>
    </Card>
  );
};

const CareGuides = () => {
  const guides = [
    {
      title: "Feeding Your Pet Right",
      description: "Learn about proper nutrition, portion control, and feeding schedules for different pet types and ages.",
      imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format"
    },
    {
      title: "Grooming Essentials",
      description: "Discover the best practices for keeping your pet clean, healthy, and looking their best.",
      imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=500&auto=format"
    },
    {
      title: "Health & Wellness",
      description: "Important information about preventative care, common health issues, and when to see a veterinarian.",
      imageUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&auto=format"
    },
    {
      title: "Training Basics",
      description: "Simple techniques to teach your pet good behavior and fun tricks through positive reinforcement.",
      imageUrl: "https://images.unsplash.com/photo-1553322396-0c9cd410975e?w=500&auto=format"
    }
  ];

  return (
    <section id="guides" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pet Care Guides</h2>
        <p className="section-subtitle">
          Expert advice to help you provide the best care for your beloved companions
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide) => (
            <GuideCard key={guide.title} {...guide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareGuides;

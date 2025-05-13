
import { Card, CardContent } from "@/components/ui/card";

const TestimonialCard = ({ 
  quote, 
  author,
  pet
}: { 
  quote: string; 
  author: string;
  pet: string;
}) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-pet-orange">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
          </svg>
        </div>
        <p className="text-gray-600 mb-4 italic flex-grow">{quote}</p>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-500">{pet}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The staff at PetCare helped me find the perfect companion for my family. Our Golden Retriever is healthy, well-trained, and brings us so much joy!",
      author: "Sarah Johnson",
      pet: "Owner of Max, Golden Retriever"
    },
    {
      quote: "I'm impressed by the quality of pet food available here. My cat's coat has never looked better, and she's more energetic than ever.",
      author: "Michael Chen",
      pet: "Owner of Luna, Siamese Cat"
    },
    {
      quote: "The care guides have been invaluable for me as a first-time pet owner. I feel confident that I'm giving my bird the best care possible.",
      author: "Emma Rodriguez",
      pet: "Owner of Charlie, Parakeet"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Hear from happy pet owners who found their perfect companions at our shop
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

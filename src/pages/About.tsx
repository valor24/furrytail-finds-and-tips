
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Wilson",
      position: "Veterinarian & Founder",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      bio: "Dr. Wilson founded PetCare with a mission to provide exceptional care for all animals. With over 15 years of veterinary experience, she ensures all our pets receive top-quality treatment."
    },
    {
      name: "Michael Thompson",
      position: "Animal Behavior Specialist",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      bio: "Michael specializes in understanding pet behavior and helps train our animals and educate new pet parents on proper care techniques and socialization methods."
    },
    {
      name: "Sarah Martinez",
      position: "Nutritionist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      bio: "Sarah ensures all our pets receive balanced, species-appropriate diets. She also provides nutrition counseling for pet owners and selects our premium food products."
    },
    {
      name: "James Chen",
      position: "Store Manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      bio: "James oversees day-to-day operations at PetCare, ensuring excellent customer service and maintaining our high standards for pet care and product quality."
    }
  ];

  const values = [
    {
      title: "Compassionate Care",
      description: "Every animal deserves love and respect. We treat all pets in our care with compassion and kindness.",
      icon: Heart,
      color: "bg-pet-blue"
    },
    {
      title: "Quality & Excellence",
      description: "We maintain the highest standards in pet care, nutrition, and the products we offer in our store.",
      icon: Award,
      color: "bg-pet-orange"
    },
    {
      title: "Community Focus",
      description: "We're committed to serving our local community through education, adoption events, and outreach programs.",
      icon: Users,
      color: "bg-pet-teal"
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
                Our Story
              </h1>
              <p className="text-xl font-medium text-gray-700 mb-8">
                Creating a world where every pet has a loving home and receives the best care possible.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-extrabold mb-6 text-primary">Who We Are</h2>
                <div className="w-24 h-2 bg-pet-orange mb-8 rounded-full"></div>
                <p className="text-lg mb-6">
                  Founded in 2010, PetCare started with a simple mission: to provide loving homes for pets and exceptional care products for pet owners. What began as a small adoption center has grown into a comprehensive pet care facility and premium pet supply store.
                </p>
                <p className="text-lg mb-6">
                  Our team consists of dedicated professionals including veterinarians, animal behaviorists, nutritionists, and passionate pet lovers who are committed to the well-being of all animals in our care.
                </p>
                <p className="text-lg">
                  We believe that the bond between pets and their humans is sacred, and we work tirelessly to support that relationship through education, quality products, and exceptional service.
                </p>
              </motion.div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=860&q=80" 
                  alt="Pet store staff with dogs" 
                  className="rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Our Values</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  className="bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-4`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-3 text-primary text-center">Meet Our Team</h2>
            <div className="w-24 h-2 bg-pet-orange mx-auto mb-12 rounded-full"></div>
            <p className="text-xl text-center font-medium text-gray-700 mb-12 max-w-3xl mx-auto">
              Our passionate team of pet care professionals bring expertise, experience, and a genuine love for animals to everything we do
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-pet-blue font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Visit Us */}
        <section className="py-16 bg-pet-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-extrabold mb-6">Visit Our Store</h2>
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Main Location</h3>
                    <p className="mb-1">123 Pet Care Avenue</p>
                    <p className="mb-1">Petville, CA 98765</p>
                    <p className="mb-4">(555) 123-4567</p>
                    <p className="font-semibold">Hours:</p>
                    <p className="mb-1">Monday - Friday: 9am - 7pm</p>
                    <p className="mb-1">Saturday: 9am - 6pm</p>
                    <p>Sunday: 10am - 5pm</p>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-pet-blue hover:bg-gray-100 font-bold">
                  Get Directions
                </Button>
              </div>
              <div className="md:w-1/2">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941774136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1623252372223!5m2!1sen!2sca" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Store Location Map"
                  className="shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

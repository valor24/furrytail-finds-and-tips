
import { Dog } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dog className="h-6 w-6" />
              <span className="text-xl font-bold">PetCare</span>
            </div>
            <p className="text-gray-300">
              Your one-stop shop for all pet needs. Quality pets, products, and care advice.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#pets" className="text-gray-300 hover:text-white transition-colors">Our Pets</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#guides" className="text-gray-300 hover:text-white transition-colors">Care Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Pet Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Dogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cats</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Birds</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Fish</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Small Pets</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p>123 Pet Street</p>
              <p>Pet City, PC 12345</p>
              <p className="mt-3">Phone: (123) 456-7890</p>
              <p>Email: info@petcare.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PetCare Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

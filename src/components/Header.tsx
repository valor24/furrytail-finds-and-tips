
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Dog, 
  Cat, 
  Fish, 
  Bird 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Dog className="h-8 w-8 text-pet-blue" />
            <span className="text-2xl font-bold text-primary">PetCare</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#pets" className="nav-link">Our Pets</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#guides" className="nav-link">Care Guides</a>
            <a href="#" className="nav-link">About Us</a>
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-pet-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col space-y-6 text-lg">
            <a href="#" className="nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>Home</span>
            </a>
            <a href="#pets" className="nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>Our Pets</span>
            </a>
            <a href="#products" className="nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>Products</span>
            </a>
            <a href="#guides" className="nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>Care Guides</span>
            </a>
            <a href="#" className="nav-link flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
              <span>About Us</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

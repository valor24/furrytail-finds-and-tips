
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <div className="flex items-center space-x-2">
                <Dog className="h-8 w-8 text-pet-blue" />
                <span className="text-2xl font-bold text-primary">PetCare</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/pets" className="nav-link font-medium">Our Pets</Link>
            <Link to="/products" className="nav-link font-medium">Products</Link>
            <Link to="/care-guides" className="nav-link font-medium">Care Guides</Link>
            <Link to="/about" className="nav-link font-medium">About Us</Link>
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
            <Link to="/" className="nav-link flex items-center space-x-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <span>Home</span>
            </Link>
            <Link to="/pets" className="nav-link flex items-center space-x-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <span>Our Pets</span>
            </Link>
            <Link to="/products" className="nav-link flex items-center space-x-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <span>Products</span>
            </Link>
            <Link to="/care-guides" className="nav-link flex items-center space-x-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <span>Care Guides</span>
            </Link>
            <Link to="/about" className="nav-link flex items-center space-x-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <span>About Us</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

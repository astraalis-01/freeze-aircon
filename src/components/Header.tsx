import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Snowflake, ChevronDown, AirVent, Refrigerator, WashingMachine, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "AC Service", path: "/services/ac", icon: AirVent },
    { name: "Refrigerator Service", path: "/services/refrigerator", icon: Refrigerator },
    { name: "Washing Machine Service", path: "/services/washing-machine", icon: WashingMachine },
    { name: "Heater & Geyser Service", path: "/services/heater", icon: Flame },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-bounce-subtle transition-all">
              <Snowflake className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">FREEZE</span>
              <span className="font-bold text-lg text-primary"> AIRCON</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`relative font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            <Link
              to="/about"
              className={`relative font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`relative font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                location.pathname.includes("/services") ? "text-primary" : "text-foreground"
              }`}>
                Services
                <ChevronDown className="w-4 h-4" />
                {location.pathname.includes("/services") && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="flex items-center gap-2 cursor-pointer">
                    All Services
                  </Link>
                </DropdownMenuItem>
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="flex items-center gap-2 cursor-pointer">
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`relative font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919952976191">
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>
            
            {/* Mobile Services Submenu */}
            <div className="py-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center justify-between w-full py-2 font-medium transition-colors hover:text-primary ${
                  location.pathname.includes("/services") ? "text-primary" : "text-foreground"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-2">
                  <Link
                    to="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    All Services
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <service.icon className="w-4 h-4" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
            
            <a href="tel:+919952976191" className="block mt-4">
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

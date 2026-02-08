import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, Snowflake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg text-background">FREEZE</span>
                <span className="font-bold text-lg text-secondary"> AIRCON</span>
              </div>
            </div>
            <p className="text-background/70 text-sm">
              We provide good service with skilled technicians. For inspection just ₹149 only! Your trusted AC service center in Puthagaram, Kolathur, Chennai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link to="/services/ac" className="hover:text-secondary transition-colors">
                  AC Service & Repair
                </Link>
              </li>
              <li>
                <Link to="/services/ac" className="hover:text-secondary transition-colors">
                  AC Installation
                </Link>
              </li>
              <li>
                <Link to="/services/refrigerator" className="hover:text-secondary transition-colors">
                  Refrigerator Service
                </Link>
              </li>
              <li>
                <Link to="/services/washing-machine" className="hover:text-secondary transition-colors">
                  Washing Machine Service
                </Link>
              </li>
              <li>
                <Link to="/services/heater" className="hover:text-secondary transition-colors">
                  Geyser Repair
                </Link>
              </li>
            </ul>
            <p className="text-background/50 text-xs mt-3">
              *Home appliances only. No commercial works.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-background/70">
                  <a href="tel:+919952976191" className="hover:text-secondary transition-colors block">
                    +91 99529 76191
                  </a>
                  <a href="https://wa.me/919952976191" className="hover:text-secondary transition-colors block text-sm">
                    WhatsApp: +91 99529 76191
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-background/70">
                  12, Sudha Nagar 1st Street, Puthagaram, Chennai - 600099
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="text-background/70 text-sm">
                  <p>Mon, Thu, Fri: 9:30 AM - 7:00 PM</p>
                  <p>Tue, Wed, Sat, Sun: 9:00 AM - 7:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Freeze Aircon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
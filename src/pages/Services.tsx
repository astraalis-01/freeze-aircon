import {
  AirVent,
  Refrigerator,
  WashingMachine,
  Flame,
  Wrench,
  Settings,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const services = [
  {
    title: "AC Service",
    icon: AirVent,
    description: "Complete AC solutions including service, repair, installation, chemical wash, and tune-up for all brands.",
    features: ["AC General Service", "AC Chemical Wash ₹2000", "AC Installation ₹1600", "AC Uninstallation ₹650", "Gas Refilling", "AC Repair"],
    link: "/services/ac",
  },
  {
    title: "Fridge Service",
    icon: Refrigerator,
    description: "Expert refrigerator repair for all brands including single door, double door, and side-by-side models.",
    features: ["Compressor ₹2500 onwards", "Gas Charging ₹1850", "Thermostat ₹800", "OLB & Heater Coil ₹700"],
    link: "/services/refrigerator",
  },
  {
    title: "Washing Machine",
    icon: WashingMachine,
    description: "Professional washing machine repair for front load, top load, and semi-automatic machines.",
    features: ["PCB Board ₹2000", "Drum Overhaul ₹2500", "Outer Cabinet ₹1850", "Motor Repair"],
    link: "/services/washing-machine",
  },
  {
    title: "Geyser Service",
    icon: Flame,
    description: "Water heater and geyser repair services for all types and brands near you.",
    features: ["General Service ₹700", "Heating Element ₹950", "Thermostat Repair", "Installation"],
    link: "/services/heater",
  },
];

const acBrands = [
  "Daikin AC Service",
  "Godrej AC Service", 
  "Onida AC Service",
  "Bluestar AC Service",
  "Panasonic AC Service",
  "Samsung AC Service",
  "LG AC Service",
  "Voltas AC Service",
];

const serviceAreas = [
  { area: "Kolathur", services: "AC Service, Fridge, Washing Machine" },
  { area: "Puthagaram", services: "AC Service, Inspection, Repair" },
  { area: "Lakshmipuram", services: "AC Service, Repair, Installation" },
  { area: "Ambattur", services: "AC Installation, Repair, All Appliances" },
  { area: "Madhavaram", services: "AC Conditioning Service, Maintenance" },
  { area: "Vinayagapuram", services: "AC Tune Up, Residential AC" },
  { area: "Kathirvedu", services: "Cooling System Repair, Fridge Service" },
  { area: "Retteri", services: "AC Installation, AC Repair" },
  { area: "Puzhal", services: "Thermostat Repair, Installation" },
  { area: "Anna Nagar", services: "AC Service, Repair, All Appliances" },
];

const Services = () => {
  return (
    <>
      <SEOHead 
        title="AC Service & Repair in Chennai | ₹149 Inspection | Freeze Aircon"
        description="Professional AC service, repair & installation in Kolathur, Puthagaram and nearby Chennai areas. All brands - Daikin, Godrej, Bluestar, Panasonic. Inspection at just ₹149. Same-day service. Call +91 99529 76191"
        keywords="AC service Chennai, AC repair Kolathur, AC repair Puthagaram, AC installation, Daikin AC service, Godrej AC service, Bluestar AC service, AC tune up Chennai, refrigerator service, washing machine repair, Kolathur AC service"
        canonicalPath="/services"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="Services hero">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-primary-foreground mb-4 animate-fade-in text-balance">
                Home Appliance Repair Services
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
                Expert AC Service • Fridge Repair • Washing Machine • Geyser Service
              </p>
              <p className="text-primary-foreground/70 mt-2 animate-fade-in" style={{ animationDelay: "150ms" }}>
                *Home appliances only. No commercial works.
              </p>
            </div>
          </div>
        </section>

        {/* Visit Charge Banner */}
        <section className="py-6 bg-accent" aria-label="Special offer">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent-foreground font-bold text-lg">
              <Wrench className="w-5 h-5 inline mr-2" aria-hidden="true" />
              Inspection at Low Cost: <span className="text-2xl">₹149</span> only!
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background" aria-labelledby="services-grid-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="services-grid-heading" className="text-foreground mb-4">
                Appliance Services We Provide
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Professional service with <strong>skilled technicians</strong> for all home appliances
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Link to={service.link} key={service.title} className="block group">
                  <Card
                    className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all animate-fade-in-up h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                          <service.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2 mb-4" role="list">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="text-primary font-semibold text-sm group-hover:underline">
                        Learn More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AC Brands */}
        <section className="py-16 bg-muted" aria-labelledby="brands-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-8">
              <h2 id="brands-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                AC Brands We Service
              </h2>
              <p className="text-muted-foreground">Expert service for all major AC brands</p>
            </header>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {acBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-2 bg-card border border-border rounded-full text-foreground font-semibold hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Table */}
        <section className="py-20 bg-background" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Settings className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="font-bold text-primary">Service Coverage</span>
              </div>
              <h2 id="areas-heading" className="text-foreground mb-4">
                Service by Location in Chennai
              </h2>
              <p className="text-muted-foreground">Same-day doorstep service across all areas</p>
            </header>

            <div className="max-w-3xl mx-auto">
              <Card className="border-border/50 shadow-md">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[40%] font-bold">Location</TableHead>
                        <TableHead className="font-bold">Services Available</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {serviceAreas.map((item) => (
                        <TableRow key={item.area}>
                          <TableCell className="font-bold text-primary">{item.area}</TableCell>
                          <TableCell className="text-muted-foreground">{item.services}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero" aria-label="Call to action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">
              Need Service Today?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Contact us for <strong>same-day doorstep service</strong>. Inspection at just ₹149!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919952976191" aria-label="Call Freeze Aircon">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
                  Call: +91 99529 76191
                </Button>
              </a>
              <Link to="/contact" aria-label="Contact us online">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
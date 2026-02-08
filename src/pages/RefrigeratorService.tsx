import {
  Refrigerator,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Wrench,
  Zap,
  Thermometer,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fridgeServices = [
  {
    title: "Fridge General Service",
    description: "Complete cleaning, thermostat check, and performance optimization",
    price: "Starting ₹399",
  },
  {
    title: "Compressor Repair/Replacement",
    description: "Expert compressor diagnosis, repair, and replacement service",
    price: "Starting ₹2,500",
  },
  {
    title: "Gas Charging",
    description: "Refrigerant top-up and leak detection for optimal cooling",
    price: "Starting ₹1,850",
  },
  {
    title: "Thermostat Repair",
    description: "Temperature control fix and thermostat replacement",
    price: "Starting ₹800",
  },
  {
    title: "OLB & Heater Coil",
    description: "Overload protector and heater coil repair/replacement",
    price: "Starting ₹700",
  },
];

const fridgeBrands = [
  "Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Bosch",
  "Panasonic", "Hitachi", "Voltas", "Kelvinator", "Videocon", "IFB"
];

const fridgeTypes = [
  "Single Door Refrigerator",
  "Double Door Refrigerator",
  "Side-by-Side Refrigerator",
  "French Door Refrigerator",
  "Mini Fridge / Bar Fridge",
];

const serviceAreas = [
  "Puthagaram", "Kolathur", "Lakshmipuram", "Ambattur", "Madhavaram", "Vinayagapuram",
  "Kathirvedu", "Retteri", "Puzhal", "Anna Nagar", "Perambur", "Koyambedu",
  "Avadi", "Washermenpet", "Royapuram", "Tondiarpet", "Manadi", "Purasaivakam",
  "Athivakkam", "Perungavoor", "Palavoyal", "Thirumullaivoyal"
];

const faqs = [
  {
    question: "Why is my refrigerator not cooling properly?",
    answer: "Common causes include: dirty condenser coils, faulty thermostat, low refrigerant gas, blocked vents, or compressor issues. Our ₹149 inspection can identify the exact problem. Most cooling issues are resolved within 1-2 hours of diagnosis."
  },
  {
    question: "How often should I service my refrigerator?",
    answer: "We recommend servicing your refrigerator once every 6-12 months. Regular maintenance includes cleaning condenser coils, checking door seals, verifying temperature settings, and inspecting for any wear. This extends fridge life and reduces electricity consumption."
  },
  {
    question: "What are signs that my fridge needs repair?",
    answer: "Watch for: excessive noise, water leaking inside/outside, frost buildup, warm temperature despite settings, running constantly, food spoiling quickly, or unusual odors. Don't ignore these signs - early repair prevents costly breakdowns."
  },
  {
    question: "Can you repair all refrigerator brands?",
    answer: "Yes! Our technicians are trained to service all major brands including Samsung, LG, Whirlpool, Godrej, Haier, Bosch, Panasonic, Hitachi, and more. We carry common spare parts for quick repairs."
  },
  {
    question: "How long does refrigerator repair take?",
    answer: "Most common repairs (thermostat, OLB, cleaning) take 1-2 hours. Compressor repairs or gas refilling may take 2-4 hours. We provide same-day service for urgent repairs in Chennai."
  },
  {
    question: "Is it worth repairing an old refrigerator?",
    answer: "Generally, if repair cost exceeds 50% of a new fridge price, consider replacement. However, for quality brands and minor repairs, servicing is cost-effective. We provide honest advice based on your fridge's condition and age."
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Specialized in all refrigerator types and brands",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Same-day repair service across Chennai",
  },
  {
    icon: Shield,
    title: "Warranty Assured",
    description: "90-day warranty on all repairs and parts",
  },
  {
    icon: Zap,
    title: "Fair Pricing",
    description: "Transparent rates with no hidden charges",
  },
];

const RefrigeratorService = () => {
  return (
    <>
      <SEOHead 
        title="Refrigerator Repair in Chennai | Fridge Service | ₹149 Inspection | Freeze Aircon"
        description="Expert refrigerator repair service in Chennai, Kolathur. Single door, double door fridge repair for Samsung, LG, Whirlpool, Godrej. Compressor ₹2500, Gas charging ₹1850. Call +91 99529 76191"
        keywords="refrigerator repair Chennai, fridge service near me, fridge repair Puthagaram, Samsung fridge repair, LG refrigerator service, Whirlpool fridge repair, Godrej fridge service, fridge compressor repair, fridge gas refilling, fridge not cooling, refrigerator service Kolathur"
        canonicalPath="/services/refrigerator"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="Refrigerator service hero">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Refrigerator className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Expert Fridge Service</span>
                </div>
                <h1 className="text-primary-foreground mb-6 animate-fade-in text-balance">
                  Refrigerator Repair & Service in Chennai
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in text-pretty" style={{ animationDelay: "100ms" }}>
                  All brands. All types. Single door, double door, side-by-side - we fix them all!
                </p>
                <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <a href="tel:+919952976191">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg gap-2">
                      <Phone className="w-5 h-5" />
                      Call: +91 99529 76191
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-bold">
                      Book Service
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Banner */}
        <section className="py-6 bg-accent" aria-label="Special offer">
          <div className="container mx-auto px-4 text-center">
            <p className="text-accent-foreground font-bold text-lg md:text-xl">
              <Thermometer className="w-5 h-5 inline mr-2" />
              Fridge Inspection & Diagnosis: Only <span className="text-2xl">₹149</span> | All Brands Covered!
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="fridge-services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="fridge-services-heading" className="text-foreground mb-4">
                Our Refrigerator Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Complete refrigerator repair and maintenance solutions
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fridgeServices.map((service, index) => (
                <Card
                  key={service.title}
                  className="border-border/50 hover:shadow-lg hover:border-primary/30 transition-all animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      <span className="text-primary font-bold text-sm">{service.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fridge Types */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="types-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="types-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                Refrigerator Types We Service
              </h2>
              <p className="text-muted-foreground">Expert service for all residential refrigerator types</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {fridgeTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-foreground font-medium text-sm">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="why-choose-heading" className="text-foreground mb-4">
                Why Choose Us for Fridge Repair?
              </h2>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={item.title} className="text-center border-border/50 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="pt-6">
                    <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="brands-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="brands-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                Refrigerator Brands We Service
              </h2>
              <p className="text-muted-foreground">Expert repair for all popular fridge brands</p>
            </header>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {fridgeBrands.map((brand) => (
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

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">Services Available Locations</span>
              </div>
              <h2 id="areas-heading" className="text-foreground mb-4">
                Refrigerator Service Areas in Chennai
              </h2>
              <p className="text-muted-foreground">Same-day doorstep fridge service</p>
            </header>
            <div className="max-w-5xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex flex-wrap justify-center gap-3">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-foreground font-medium hover:bg-primary/10 hover:border-primary/40 transition-colors"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-foreground mb-4">
                Refrigerator Repair FAQs
              </h2>
              <p className="text-muted-foreground text-lg">Common questions about fridge service</p>
            </header>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-pretty">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-hero" aria-label="Call to action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">
              Fridge Not Cooling? We Can Help!
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Get expert refrigerator repair at your doorstep. Quick diagnosis, quality parts, affordable prices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919952976191">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg gap-2">
                  <Phone className="w-5 h-5" />
                  Call: +91 99529 76191
                </Button>
              </a>
              <a href="https://wa.me/919952976191" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 font-bold">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RefrigeratorService;
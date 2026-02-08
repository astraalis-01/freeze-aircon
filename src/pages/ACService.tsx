import {
  AirVent,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Shield,
  Thermometer,
  Wrench,
  Zap,
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

const acServices = [
  {
    title: "AC General Service",
    description: "Complete cleaning, gas check, and performance optimization for all AC types",
    price: "Starting ₹499",
  },
  {
    title: "AC Chemical Wash",
    description: "Deep chemical cleaning of indoor/outdoor units, coils, and filters",
    price: "Starting ₹2,000",
  },
  {
    title: "AC Gas Refilling",
    description: "R22, R32, R410A gas top-up and leak detection service",
    price: "Starting ₹1,499",
  },
  {
    title: "AC Installation",
    description: "Professional installation with copper piping and proper setup",
    price: "Starting ₹1,600",
  },
  {
    title: "AC Uninstallation",
    description: "Safe removal and gas recovery for shifting or replacement",
    price: "Starting ₹650",
  },
  {
    title: "AC Repair",
    description: "Compressor, PCB, fan motor, capacitor, and all component repairs",
    price: "Starting ₹299",
  },
];

const acBrands = [
  "Daikin", "LG", "Samsung", "Voltas", "Blue Star", "Godrej", 
  "Panasonic", "Hitachi", "Carrier", "Onida", "Lloyd", "Haier",
  "Whirlpool", "Mitsubishi", "O General", "Toshiba"
];

const serviceAreas = [
  "Puthagaram", "Kolathur", "Lakshmipuram", "Ambattur", "Madhavaram", "Vinayagapuram",
  "Kathirvedu", "Retteri", "Puzhal", "Anna Nagar", "Perambur", "Koyambedu",
  "Avadi", "Washermenpet", "Royapuram", "Tondiarpet", "Manadi", "Purasaivakam",
  "Athivakkam", "Perungavoor", "Palavoyal", "Thirumullaivoyal"
];

const faqs = [
  {
    question: "How often should I service my AC?",
    answer: "We recommend servicing your AC every 3-4 months for optimal performance. Regular maintenance extends AC life, reduces electricity bills by 15-20%, and ensures clean, healthy air. In dusty areas like Chennai, more frequent servicing may be beneficial."
  },
  {
    question: "What is included in AC general service?",
    answer: "Our AC general service includes: filter cleaning/replacement, indoor & outdoor unit cleaning, gas pressure check, thermostat calibration, drainage pipe cleaning, electrical connection check, and performance testing. All at just ₹499!"
  },
  {
    question: "How long does AC installation take?",
    answer: "Standard split AC installation takes 2-3 hours. This includes mounting indoor/outdoor units, copper pipe fitting, electrical connections, gas charging, and testing. Our skilled technicians ensure proper installation for maximum efficiency."
  },
  {
    question: "Why is my AC not cooling properly?",
    answer: "Common reasons include: dirty filters, low refrigerant gas, blocked condenser coils, faulty compressor, or thermostat issues. Our ₹149 inspection can diagnose the exact problem. Most issues are fixable within 1-2 hours."
  },
  {
    question: "Do you provide deep cleaning service?",
    answer: "We provide Chemical Wash service starting at ₹2,000 which is more effective than regular deep cleaning. Chemical wash thoroughly cleans all components and removes stubborn dirt, mold, and bacteria."
  },
  {
    question: "What AC brands do you service?",
    answer: "We service all major brands including Daikin, LG, Samsung, Voltas, Blue Star, Godrej, Panasonic, Hitachi, Carrier, Onida, Lloyd, Haier, Whirlpool, Mitsubishi, O General, and Toshiba. Both window and split AC types."
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Skilled Technicians",
    description: "Factory-trained experts with 5+ years experience in all AC brands",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response time with doorstep service within 2-4 hours",
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs backed by 90-day service warranty for peace of mind",
  },
  {
    icon: Zap,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges. Inspection at just ₹149",
  },
];

const ACService = () => {
  return (
    <>
      <SEOHead 
        title="AC Service in Chennai | AC Repair & Installation | ₹149 Inspection | Freeze Aircon"
        description="Best AC service in Puthagaram, Kolathur, Chennai. Expert AC repair, installation, gas refilling & maintenance for all brands - Daikin, LG, Samsung, Voltas. Installation ₹1600, Chemical wash ₹2000. Call +91 99529 76191"
        keywords="AC service Chennai, AC repair Puthagaram, AC installation Chennai, AC gas refilling, split AC service, window AC repair, Daikin AC service, LG AC repair, Samsung AC service, Voltas AC repair, AC service near me, AC service Kolathur, AC maintenance Chennai, AC tune up, AC chemical wash"
        canonicalPath="/services/ac"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="AC service hero">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <AirVent className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">#1 AC Service in Chennai</span>
                </div>
                <h1 className="text-primary-foreground mb-6 animate-fade-in text-balance">
                  Professional AC Service & Repair in Chennai
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in text-pretty" style={{ animationDelay: "100ms" }}>
                  Expert technicians for all AC brands. Split AC, Window AC - we service them all!
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
                      Book Online
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
              AC Inspection & Diagnosis: Only <span className="text-2xl">₹149</span> | Same Day Service Available!
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="ac-services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="ac-services-heading" className="text-foreground mb-4">
                Our AC Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Comprehensive air conditioning solutions for your home
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acServices.map((service, index) => (
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="why-choose-heading" className="text-foreground mb-4">
                Why Choose Freeze Aircon?
              </h2>
              <p className="text-muted-foreground text-lg">Trusted by 1000+ customers in Chennai</p>
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

        {/* Brands We Service */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="brands-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="brands-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                AC Brands We Service
              </h2>
              <p className="text-muted-foreground">Expert service for all major AC brands in India</p>
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

        {/* Service Areas */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-bold text-primary">Services Available Locations</span>
              </div>
              <h2 id="areas-heading" className="text-foreground mb-4">
                AC Service Areas in Chennai
              </h2>
              <p className="text-muted-foreground">Same-day doorstep AC service across all these locations</p>
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
        <section className="py-16 md:py-20 bg-background" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="faq-heading" className="text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">Common questions about AC service and repair</p>
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
              Need AC Service Today?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Don't suffer in the heat! Get expert AC service at your doorstep. Inspection at just ₹149!
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

export default ACService;
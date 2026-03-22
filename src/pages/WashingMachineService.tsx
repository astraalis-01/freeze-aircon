import {
  WashingMachine,
  CheckCircle,
  Clock,
  MapPin,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const washingServices = [
  {
    title: "General Service",
    description: "Complete cleaning, drum check, and performance optimization",
    price: "Starting ₹399",
  },
  {
    title: "PCB Board Repair",
    description: "Control board diagnosis, repair and replacement",
    price: "Starting ₹2,000",
  },
  {
    title: "Drum Overhaul",
    description: "Complete drum service, alignment and cleaning",
    price: "Starting ₹2,500",
  },
  {
    title: "Outer Cabinet Repair",
    description: "Cabinet repair, dent fixing and replacement",
    price: "Starting ₹1,850",
  },
  {
    title: "Water Inlet/Outlet Repair",
    description: "Valve, hose, and drainage system repairs",
    price: "Starting ₹399",
  },
  {
    title: "Motor Repair",
    description: "Motor diagnosis, repair, and replacement service",
    price: "Starting ₹1,499",
  },
];

const washingBrands = [
  "Samsung", "LG", "Whirlpool", "IFB", "Bosch", "Haier",
  "Panasonic", "Godrej", "Voltas", "Onida", "Videocon", "Siemens"
];

const machineTypes = [
  "Front Load Washing Machine",
  "Top Load Washing Machine",
  "Semi-Automatic Machine",
  "Fully Automatic Machine",
];

const serviceAreas = [
  "Puthagaram", "Kolathur", "Lakshmipuram", "Ambattur", "Madhavaram", "Vinayagapuram",
  "Kathirvedu", "Retteri", "Puzhal", "Anna Nagar", "Perambur", "Koyambedu",
  "Avadi", "Washermenpet", "Royapuram", "Tondiarpet", "Manadi", "Purasaivakam",
  "Athivakkam", "Perungavoor", "Palavoyal", "Thirumullaivoyal"
];

const faqs = [
  {
    question: "Why is my washing machine not spinning?",
    answer: "Common causes include: overloaded drum, unbalanced load, worn drive belt, faulty lid switch, or motor issues. Our technicians can diagnose the exact cause during our ₹149 inspection and fix it quickly."
  },
  {
    question: "My washing machine is leaking water. What should I do?",
    answer: "Water leaks can be from: damaged door seal, loose hose connections, blocked drain pump, or cracked tub. Turn off the machine, unplug it, and call us immediately. Most leaks are fixed within 1-2 hours."
  },
  {
    question: "How often should I service my washing machine?",
    answer: "We recommend servicing every 6-12 months for optimal performance. This includes drum cleaning, hose inspection, filter cleaning, and checking electrical connections. Regular maintenance prevents major breakdowns."
  },
  {
    question: "Can you repair both front load and top load machines?",
    answer: "Yes! Our technicians are trained to repair all types - front load, top load, semi-automatic, and fully automatic washing machines from all major brands. We carry common spare parts for quick repairs."
  },
  {
    question: "Why is my washing machine making loud noise?",
    answer: "Loud noises usually indicate: loose drum, foreign objects in drum, unbalanced load, or worn shock absorbers. Don't ignore unusual sounds - they often lead to bigger problems if not addressed."
  },
  {
    question: "Is it worth repairing an old washing machine?",
    answer: "If repair costs exceed 50% of a new machine's price, consider replacement. For machines less than 7-8 years old with minor issues, repair is usually cost-effective. We provide honest advice based on machine condition."
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Certified Technicians",
    description: "Trained experts for all machine types and brands",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response across Chennai locations",
  },
  {
    icon: Shield,
    title: "90-Day Warranty",
    description: "All repairs covered with service warranty",
  },
  {
    icon: Zap,
    title: "Genuine Parts",
    description: "Only authentic spare parts used",
  },
];

const WashingMachineService = () => {
  return (
    <>
      <SEOHead 
        title="Washing Machine Repair in Chennai | Service & Installation | ₹149 Inspection | Freeze Aircon"
        description="Expert washing machine repair in Chennai, Kolathur. Front load, top load, semi-automatic machine repair for Samsung, LG, Whirlpool, IFB. PCB ₹2000, Drum overhaul ₹2500. Call +91 99529 76191"
        keywords="washing machine repair Chennai, washing machine service near me, front load washing machine repair, top load washing machine service, Samsung washing machine repair, LG washing machine service, Whirlpool washing machine repair, IFB washing machine service, semi automatic washing machine repair, washing machine motor repair, Kolathur"
        canonicalPath="/services/washing-machine"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="Washing machine service hero">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <WashingMachine className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Expert Repair Service</span>
                </div>
                <h1 className="text-primary-foreground mb-6 animate-fade-in text-balance">
                  Washing Machine Repair & Service in Chennai
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in text-pretty" style={{ animationDelay: "100ms" }}>
                  Front load, top load, semi-automatic - we repair all types and brands!
                </p>
                <div
                  className="inline-flex items-center justify-center rounded-full bg-primary-foreground/15 border border-primary-foreground/25 px-6 py-3 text-primary-foreground font-bold text-lg md:text-xl animate-fade-in"
                  style={{ animationDelay: "200ms" }}
                >
                  Inspection starts at ₹149
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-background" aria-labelledby="washing-services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="washing-services-heading" className="text-foreground mb-4">
                Our Washing Machine Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Complete washing machine repair and maintenance solutions
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {washingServices.map((service, index) => (
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

        {/* Machine Types */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="types-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="types-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                Machine Types We Service
              </h2>
              <p className="text-muted-foreground">Expert service for all residential washing machine types</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {machineTypes.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-2 p-4 bg-card border border-border rounded-lg"
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
                Why Choose Us for Washing Machine Repair?
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
                Washing Machine Brands We Service
              </h2>
              <p className="text-muted-foreground">Expert repair for all popular brands</p>
            </header>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {washingBrands.map((brand) => (
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
                Washing Machine Service Areas in Chennai
              </h2>
              <p className="text-muted-foreground">Same-day doorstep service</p>
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
                Washing Machine Repair FAQs
              </h2>
              <p className="text-muted-foreground text-lg">Common questions answered</p>
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
              Washing Machine Not Working?
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto text-pretty font-semibold">
              Inspection starts at ₹149
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default WashingMachineService;
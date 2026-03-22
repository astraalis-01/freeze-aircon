import {
  Flame,
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

const heaterServices = [
  {
    title: "Geyser General Service",
    description: "Complete check-up, cleaning, and performance optimization",
    price: "Starting ₹700",
  },
  {
    title: "Heating Element Repair",
    description: "Element diagnosis, repair, and replacement",
    price: "Starting ₹950",
  },
  {
    title: "Thermostat Repair",
    description: "Temperature control fix and thermostat replacement",
    price: "Starting ₹499",
  },
  {
    title: "Geyser Installation",
    description: "New geyser installation with proper fitting",
    price: "Starting ₹499",
  },
];

const heaterBrands = [
  "Bajaj", "Havells", "Racold", "Venus", "AO Smith", "Crompton",
  "V-Guard", "Haier", "Usha", "Orient", "Kenstar", "Hindware"
];

const heaterTypes = [
  "Storage Water Heater",
  "Instant Water Heater",
  "Gas Geyser",
  "Electric Geyser",
];

const serviceAreas = [
  "Puthagaram", "Kolathur", "Lakshmipuram", "Ambattur", "Madhavaram", "Vinayagapuram",
  "Kathirvedu", "Retteri", "Puzhal", "Anna Nagar", "Perambur", "Koyambedu",
  "Avadi", "Washermenpet", "Royapuram", "Tondiarpet", "Manadi", "Purasaivakam",
  "Athivakkam", "Perungavoor", "Palavoyal", "Thirumullaivoyal"
];

const faqs = [
  {
    question: "Why is my geyser not heating water?",
    answer: "Common causes include: faulty heating element, thermostat malfunction, sediment buildup, tripped circuit breaker, or electrical issues. Our ₹149 inspection can identify the exact problem. Most heating issues are fixed within 1-2 hours."
  },
  {
    question: "How often should I service my water heater?",
    answer: "We recommend annual servicing for optimal performance. This includes checking the thermostat, inspecting heating element, and testing safety valves. Regular maintenance extends geyser life by 3-5 years."
  },
  {
    question: "Why is my geyser leaking water?",
    answer: "Leaks can be from: loose connections, faulty pressure valve, or worn gaskets. Turn off power and water supply immediately. Note: We do not repair tank leaks - in such cases, replacement is recommended."
  },
  {
    question: "What size geyser do I need for my home?",
    answer: "For 1-2 people: 10-15L; For 3-4 people: 15-25L; For 5+ people: 25L or more. Instant geysers (1-3L) are ideal for kitchen use. We can help you choose the right size during installation."
  },
  {
    question: "Can you repair all water heater brands?",
    answer: "Yes! Our technicians service all major brands including Bajaj, Havells, Racold, Venus, AO Smith, Crompton, V-Guard, and more. We carry common spare parts for quick repairs."
  },
  {
    question: "Is instant geyser better than storage geyser?",
    answer: "Instant geysers heat water on demand (energy efficient, compact) but have limited flow. Storage geysers hold pre-heated water (good for multiple uses, consistent pressure). Choice depends on your usage pattern."
  },
];

const whyChooseUs = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "Trained in all heater types and brands",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service across Chennai",
  },
  {
    icon: Shield,
    title: "Service Warranty",
    description: "90-day warranty on all repairs",
  },
  {
    icon: Zap,
    title: "Fair Rates",
    description: "No hidden charges, transparent pricing",
  },
];

const HeaterService = () => {
  return (
    <>
      <SEOHead 
        title="Water Heater & Geyser Repair in Chennai | ₹149 Inspection | Freeze Aircon"
        description="Expert water heater and geyser repair in Chennai, Kolathur. Storage, instant, gas geyser repair for Bajaj, Havells, Racold, Venus. G/S ₹700, Heating element ₹950. Call +91 99529 76191"
        keywords="geyser repair Chennai, water heater repair near me, geyser service Puthagaram, Bajaj geyser repair, Havells geyser service, Racold water heater repair, instant geyser repair, storage geyser service, geyser not heating, geyser installation Chennai, heater repair Kolathur"
        canonicalPath="/services/heater"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="Heater service hero">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Flame className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-semibold">Expert Geyser Service</span>
                </div>
                <h1 className="text-primary-foreground mb-6 animate-fade-in text-balance">
                  Water Heater & Geyser Repair in Chennai
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in text-pretty" style={{ animationDelay: "100ms" }}>
                  Storage, instant, gas geyser - we repair all types and brands!
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
        <section className="py-16 md:py-20 bg-background" aria-labelledby="heater-services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="heater-services-heading" className="text-foreground mb-4">
                Our Water Heater Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Complete geyser repair and maintenance solutions
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {heaterServices.map((service, index) => (
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

        {/* Heater Types */}
        <section className="py-16 md:py-20 bg-muted" aria-labelledby="types-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-10">
              <h2 id="types-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                Water Heater Types We Service
              </h2>
              <p className="text-muted-foreground">Expert service for all residential geyser types</p>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {heaterTypes.map((type) => (
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
                Why Choose Us for Geyser Repair?
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
                Water Heater Brands We Service
              </h2>
              <p className="text-muted-foreground">Expert repair for all geyser brands</p>
            </header>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {heaterBrands.map((brand) => (
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
                Geyser Service Areas in Chennai
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
                Water Heater Repair FAQs
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
              Geyser Not Working? We Can Fix It!
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

export default HeaterService;
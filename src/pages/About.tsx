import {
  Users,
  Zap,
  IndianRupee,
  ThumbsUp,
  MapPin,
  CheckCircle,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

const whyUsPoints = [
  {
    icon: Users,
    title: "Skilled Technicians",
    description:
      "Our expert professionals handle all AC brands with precision and reliable troubleshooting.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Same-day doorstep service ensures your AC is back in action without long waits.",
  },
  {
    icon: IndianRupee,
    title: "₹149 Inspection",
    description:
      "Lowest inspection cost in Puthagaram with transparent pricing and no hidden fees.",
  },
  {
    icon: ThumbsUp,
    title: "Quality Service",
    description:
      "100% customer satisfaction guaranteed with lasting performance.",
  },
];

const serviceAreas = [
  "Puthagaram",
  "Lakshmipuram",
  "RC Flat",
  "Orchid Springs",
  "Puzhal",
  "Ambattur",
  "Thirumullaivoyal",
  "Madhavaram",
  "Washermenpet",
  "Avadi",
  "Perambur",
  "Koyambedu",
  "Royapuram",
  "Tondiarpet",
  "Manadi",
  "Purasaivakam",
  "Anna Nagar",
  "Athivakkam",
  "Perungavoor",
  "Palavoyal",
  "Vinayagapuram",
  "Kathirvedu",
  "Retteri",
];

const About = () => {
  return (
    <>
      <SEOHead 
        title="About Freeze Aircon | Trusted AC Service Center in Puthagaram, Chennai"
        description="Freeze Aircon - Puthagaram's trusted AC service center with skilled technicians. Expert AC repair, installation & maintenance across 20+ Chennai areas. Inspection at ₹149. Call +91 99529 76191"
        keywords="about Freeze Aircon, AC service Puthagaram, trusted AC repair Chennai, skilled AC technicians, AC service near me, best AC service center Chennai"
        canonicalPath="/about"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="About hero">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-primary-foreground mb-4 animate-fade-in text-balance">
                About Freeze Aircon
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
                Puthagaram's Trusted AC Service Center Since Day One
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background" aria-labelledby="story-heading">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto text-center">
              <h2 id="story-heading" className="text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-pretty">
                <p>
                  <strong>Freeze Aircon</strong> was founded with a simple mission: to provide reliable, affordable, 
                  and expert AC service to the residents of <strong>Puthagaram</strong> and surrounding Chennai areas.
                </p>
                <p>
                  We take pride in our <strong>skilled technicians</strong> who handle all AC brands with expert precision. 
                  From general service to installation, from repairs to emergency services – we've got you covered 24/7.
                </p>
                <p>
                  Today, we're proud to serve customers across Chennai with our industry-low <strong>₹149 inspection cost</strong> 
                  and <strong>same-day doorstep service</strong>.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted" aria-labelledby="why-us-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="why-us-heading" className="text-foreground mb-4">
                Why Choose Freeze Aircon?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                We deliver <strong>quality AC service</strong> with skilled technicians at affordable prices.
              </p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, index) => (
                <Card
                  key={point.title}
                  className="text-center border-border/50 hover:shadow-lg hover:border-primary/30 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-md">
                      <point.icon className="w-8 h-8 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-gradient-primary" aria-label="Company statistics">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-black text-primary-foreground mb-1">₹149</div>
                <div className="text-primary-foreground/90 font-medium">Inspection Cost</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary-foreground mb-1">24hr</div>
                <div className="text-primary-foreground/90 font-medium">Emergency Service</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary-foreground mb-1">7</div>
                <div className="text-primary-foreground/90 font-medium">Days a Week</div>
              </div>
              <div>
                <div className="text-4xl font-black text-primary-foreground mb-1">20+</div>
                <div className="text-primary-foreground/90 font-medium">Service Areas</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-background" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                <span className="font-bold text-primary">Service Locations</span>
              </div>
              <h2 id="areas-heading" className="text-foreground mb-4">
                Areas We Cover in Chennai
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                <strong>Same-day doorstep AC service</strong> across Puthagaram and nearby Chennai areas!
              </p>
            </header>

            <div className="max-w-4xl mx-auto">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" role="list">
                {serviceAreas.map((area, index) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 p-3 bg-muted rounded-lg animate-fade-in hover:bg-primary/5 transition-colors"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                    <span className="text-foreground font-semibold text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-16 bg-muted" aria-labelledby="trust-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <h2 id="trust-heading" className="text-2xl md:text-3xl text-foreground mb-4">
                Trusted by Your Neighbors
              </h2>
              <p className="text-muted-foreground text-lg text-pretty">
                We deliver <strong>quality AC service</strong> with skilled technicians. 
                Check our Google reviews to see what customers say about Freeze Aircon!
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;

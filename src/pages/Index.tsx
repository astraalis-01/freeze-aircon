import { 
  AirVent, 
  Refrigerator, 
  WashingMachine, 
  Flame,
  Star,
  Shield,
  Clock,
  Award,
  ArrowRight,
  IndianRupee,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import StatCounter from "@/components/StatCounter";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { title: "AC Service", description: "AC service, repair & installation", icon: AirVent, link: "/services/ac" },
  { title: "Fridge Service", description: "All brands fridge repair service", icon: Refrigerator, link: "/services/refrigerator" },
  { title: "Washing Machine", description: "Front load, top load & semi-auto", icon: WashingMachine, link: "/services/washing-machine" },
  { title: "Geyser Service", description: "Water heater repair service", icon: Flame, link: "/services/heater" },
];

const trustPoints = [
  { icon: IndianRupee, title: "₹149 Inspection", description: "Lowest inspection cost" },
  { icon: Clock, title: "Same-Day Service", description: "Quick doorstep repair" },
  { icon: Shield, title: "Skilled Technicians", description: "Expert professionals" },
  { icon: Award, title: "Quality Service", description: "100% satisfaction" },
];

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Freeze Aircon | Best AC Service in Puthagaram, Kolathur, Chennai | ₹149 Inspection"
        description="Freeze Aircon - Puthagaram & Kolathur's #1 AC service center. Expert AC repair, installation & maintenance at just ₹149 inspection. Skilled technicians, same-day doorstep service. Call +91 99529 76191"
        keywords="AC service Puthagaram, AC repair Chennai, best AC service near me, AC installation, AC service Kolathur, AC maintenance Chennai"
        canonicalPath="/"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />
        
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-24 overflow-hidden" aria-label="Hero">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <header className="text-primary-foreground space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                  <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
                  <span className="text-sm font-semibold tracking-wide">Inspection at just ₹149</span>
                </div>
                
                <h1 className="text-balance">
                  <span className="block">Puthagaram's Trusted</span>
                  <span className="block text-accent">AC Service Center</span>
                </h1>
                
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg text-pretty">
                  Expert <strong>AC repair, service & installation</strong> with skilled technicians. 
                  Same-day doorstep service across Chennai at affordable prices!
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/services" aria-label="View all AC services and prices">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2 shadow-lg">
                      View Services
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <a href="tel:+919952976191" aria-label="Call Freeze Aircon">
                    <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold gap-2">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </header>
              
              {/* Right - Booking Form */}
              <aside className="animate-slide-in-right" style={{ animationDelay: "200ms" }}>
                <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 shadow-2xl">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-bold text-primary-foreground mb-6 text-center">
                      Book AC Service – ₹149 Inspection!
                    </h2>
                    <BookingForm variant="hero" />
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-primary py-12" aria-label="Service statistics">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCounter end={149} prefix="₹" label="Inspection Cost" />
              <StatCounter end={7} label="Days a Week" />
              <StatCounter end={1000} suffix="+" label="Happy Customers" />
              <StatCounter end={100} suffix="%" label="Satisfaction" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="services-heading" className="text-foreground mb-4 text-balance">
                Home Appliance Repair Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                <strong>AC Service</strong> • Fridge Service • Washing Machine • Geyser Repair in Chennai
              </p>
            </header>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <article key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <ServiceCard {...service} />
                </article>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/services" aria-label="View all services and pricing details">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold gap-2 shadow-md">
                  View All Services & Prices
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted" aria-labelledby="why-choose-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="why-choose-heading" className="text-foreground mb-4">
                Why Choose Freeze Aircon?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                We provide <strong>quality AC service</strong> with skilled technicians at the most affordable prices in Puthagaram.
              </p>
            </header>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustPoints.map((point, index) => (
                <Card key={point.title} className="text-center border-border/50 hover:shadow-lg hover:border-primary/20 transition-all animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-md">
                      <point.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Working Hours Section */}
        <section className="py-16 bg-background" aria-labelledby="hours-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 id="hours-heading" className="text-foreground mb-6">
                Working Hours
              </h2>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <p className="font-semibold text-foreground">Mon, Thu, Fri</p>
                      <p className="text-muted-foreground">9:30 AM - 7:00 PM</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Tue, Wed, Sat, Sun</p>
                      <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-20 bg-muted" aria-labelledby="reviews-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <h2 id="reviews-heading" className="text-foreground mb-4">
                Trusted by Chennai Customers
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                We are recognized for our <strong>expert AC service</strong>, customer support, and transparent pricing. 
                See what our happy customers say about Freeze Aircon!
              </p>
              <a
                href="https://www.google.com/search?q=freeze+aircon+chennai+reviews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read customer reviews on Google"
              >
                <Button size="lg" variant="outline" className="font-bold gap-2 border-primary/30 hover:bg-primary/5">
                  Read Our Google Reviews
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero" aria-label="Call to action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">
              Ready to Get Your AC Fixed?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Call or message us today for <strong>same-day doorstep service</strong>. Inspection at just ₹149!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919952976191" aria-label="Call Freeze Aircon at +91 99529 76191">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
                  Call: +91 99529 76191
                </Button>
              </a>
              <Link to="/contact" aria-label="Book AC service online">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold">
                  Book Online
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

export default Index;
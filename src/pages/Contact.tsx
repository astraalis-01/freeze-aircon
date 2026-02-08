import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import BookingForm from "@/components/BookingForm";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [
      { label: "Primary", value: "+91 99529 76191", href: "tel:+919952976191" },
      { label: "WhatsApp", value: "+91 99529 76191", href: "https://wa.me/919952976191" },
    ],
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      {
        label: "Location",
        value: "12, Sudha Nagar 1st Street, Puthagaram, Chennai - 600099",
      },
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: [
      { label: "Mon, Thu, Fri", value: "9:30 AM - 7:00 PM" },
      { label: "Tue, Wed, Sat, Sun", value: "9:00 AM - 7:00 PM" },
    ],
  },
];

const trustReasons = [
  "Skilled technicians with expertise in all AC brands",
  "Same-day doorstep service across Puthagaram, Kolathur and Chennai",
  "Lowest inspection cost in area – just ₹149",
  "Transparent pricing with no hidden costs",
  "Friendly, reliable, customer-first service",
  "Home appliances only – personalized care",
];

const serviceAreas = [
  "Puthagaram", "Kolathur", "Lakshmipuram", "RC Flat", "Orchid Springs", "Puzhal",
  "Ambattur", "Thirumullaivoyal", "Madhavaram", "Washermenpet", "Avadi",
  "Perambur", "Koyambedu", "Royapuram", "Tondiarpet", "Manadi",
  "Purasaivakam", "Anna Nagar", "Athivakkam", "Perungavoor", "Palavoyal",
  "Vinayagapuram", "Kathirvedu", "Retteri",
];

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Contact Freeze Aircon | AC Service in Puthagaram, Kolathur, Chennai | Call +91 99529 76191"
        description="Contact Freeze Aircon for AC service, repair & installation in Puthagaram, Kolathur, Chennai. Call +91 99529 76191 or WhatsApp. ₹149 inspection. Same-day doorstep service."
        keywords="contact Freeze Aircon, AC service Puthagaram phone number, AC repair Chennai contact, book AC service, AC service Kolathur, WhatsApp AC service"
        canonicalPath="/contact"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        {/* Hero Section */}
        <section className="pt-20 md:pt-24" aria-label="Contact hero">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-primary-foreground mb-4 animate-fade-in text-balance">
                Contact Freeze Aircon
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "100ms" }}>
                Get quick help with your AC or appliances. We're here to assist!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <header>
                  <h2 id="contact-heading" className="text-3xl text-foreground mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg text-pretty">
                    Professional AC service with <strong>skilled technicians</strong>. Inspection at just <strong>₹149</strong>!
                  </p>
                </header>

                <address className="grid sm:grid-cols-2 gap-4 not-italic">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={info.title}
                      className="border-border/50 hover:shadow-md hover:border-primary/30 transition-all animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-sm">
                            <info.icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                          </div>
                          <CardTitle className="text-lg">{info.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {info.details.map((detail, i) => (
                          <div key={i} className="text-sm mb-1">
                            <span className="text-muted-foreground text-xs">{detail.label}: </span>
                            {detail.href ? (
                              <a
                                href={detail.href}
                                target={detail.href.startsWith('https') ? '_blank' : undefined}
                                rel={detail.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                                className="text-primary hover:underline font-semibold"
                              >
                                {detail.value}
                              </a>
                            ) : (
                              <span className="text-foreground font-medium">{detail.value}</span>
                            )}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </address>

                {/* Service Areas */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      Service Areas in Chennai
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {serviceAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Google Maps Embed */}
                <Card className="overflow-hidden border-border/50">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.5!2d80.19!3d13.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA4JzAwLjAiTiA4MMKwMTEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Freeze Aircon Location - Puthagaram, Chennai"
                      className="w-full h-full"
                    />
                  </div>
                </Card>
              </div>

              {/* Booking Form */}
              <aside>
                <Card className="border-border/50 shadow-lg sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Book AC Service Online
                    </CardTitle>
                    <p className="text-muted-foreground text-center text-sm">
                      Inspection at low cost – just ₹149!
                    </p>
                  </CardHeader>
                  <CardContent>
                    <BookingForm />
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Why Trust Us Section */}
        <section className="py-20 bg-muted" aria-labelledby="trust-heading">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h2 id="trust-heading" className="text-foreground mb-4">
                Why Customers Trust Freeze Aircon
              </h2>
            </header>

            <div className="max-w-3xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="p-8">
                  <ul className="space-y-4" role="list">
                    {trustReasons.map((reason, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-foreground font-medium">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="py-20 bg-background" aria-labelledby="reviews-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-4" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <h2 id="reviews-heading" className="text-foreground mb-4">
                Read Our Google Reviews
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Don't just take our word for it. Read real experiences from customers who trust 
                <strong> Freeze Aircon</strong> for their AC service needs.
              </p>
              <a
                href="https://www.google.com/search?q=freeze+aircon+chennai+reviews"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Google Reviews for Freeze Aircon"
              >
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold gap-2 shadow-md">
                  View Google Reviews
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-hero" aria-label="Call to action">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-4">
              Call or Message Us Today
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto text-pretty">
              Get your AC fixed quickly and affordably. <strong>Inspection at just ₹149!</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919952976191" aria-label="Call Freeze Aircon">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg">
                  Call: +91 99529 76191
                </Button>
              </a>
              <a
                href="https://wa.me/919952976191?text=Hi!%20I%20need%20help%20with%20my%20AC."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message on WhatsApp"
              >
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold">
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

export default Contact;
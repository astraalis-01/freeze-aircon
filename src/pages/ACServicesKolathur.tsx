import { AirVent, Phone, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SEOHead from "@/components/SEOHead";
import ReviewsSection from "@/components/ReviewsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { REVIEW_SUMMARY } from "@/lib/site";

const kolathurServices = [
  "AC General Service from ₹499",
  "AC Repair from ₹299",
  "AC Installation from ₹1,600",
  "AC Gas Refilling from ₹1,499",
  "AC Chemical Wash from ₹2,000",
  "Fridge, Washing Machine & Geyser Repair",
];

const nearbyAreas = [
  "Puthagaram",
  "Lakshmipuram",
  "Ambattur",
  "Madhavaram",
  "Vinayagapuram",
  "Perambur",
  "Anna Nagar",
  "Villivakkam",
];

const ACServicesKolathur = () => {
  return (
    <>
      <SEOHead
        title="AC Services Kolathur Chennai | 5.0 Rated | ₹149 Inspection | Freeze Aircon"
        description="Best AC Services in Kolathur & Puthagaram, Chennai. 90+ verified ratings on JustDial & Sulekha. Same-day AC repair, installation & service. Inspection ₹149. Call +91 99529 76191."
        keywords="AC Services Kolathur, AC Services Chennai, AC service Kolathur, AC repair Kolathur, AC installation Kolathur, best AC service Kolathur, AC service Puthagaram, AC Services near me"
        canonicalPath="/ac-services-kolathur"
      />

      <div className="min-h-screen bg-background">
        <Header />
        <FloatingButtons />

        <section className="pt-20 md:pt-24" aria-label="AC Services Kolathur">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                <span className="text-primary-foreground font-semibold">
                  {REVIEW_SUMMARY.aggregateRating}.0 · {REVIEW_SUMMARY.totalReviewCount}+ Verified Ratings
                </span>
              </div>
              <h1 className="text-primary-foreground mb-6 text-balance">
                AC Services in Kolathur, Chennai
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
                Doorstep <strong>AC repair, service & installation</strong> in Kolathur, Puthagaram
                and nearby areas. Trusted locally with skilled technicians and transparent pricing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+919952976191">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call +91 99529 76191
                  </Button>
                </a>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold"
                  >
                    Book AC Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background" aria-labelledby="kolathur-services-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="kolathur-services-heading" className="text-2xl font-bold text-foreground mb-8 text-center">
              AC Services We Offer in Kolathur
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {kolathurServices.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg text-foreground font-medium"
                >
                  <AirVent className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center mt-8 text-muted-foreground">
              Inspection starts at <strong className="text-foreground">₹149</strong>.{" "}
              <Link to="/services/ac" className="text-primary font-semibold hover:underline">
                View full AC service details
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 bg-muted" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 id="areas-heading" className="text-2xl font-bold text-foreground mb-6">
              AC Services Near Kolathur
            </h2>
            <p className="text-muted-foreground mb-6">
              Same-day service across Kolathur and surrounding Chennai neighborhoods.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 bg-background rounded-full text-sm font-medium text-foreground border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background" aria-label="Location">
          <div className="container mx-auto px-4 max-w-xl">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0" aria-hidden="true" />
                <div>
                  <h2 className="font-bold text-lg text-foreground mb-1">Visit / Service Address</h2>
                  <p className="text-muted-foreground">
                    12, Sudha Nagar 1st Street, Puthagaram, Kolathur, Chennai - 600099
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <ReviewsSection variant="compact" />
        <Footer />
      </div>
    </>
  );
};

export default ACServicesKolathur;

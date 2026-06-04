import { Star, ExternalLink, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CUSTOMER_REVIEWS,
  REVIEW_LINKS,
  REVIEW_SUMMARY,
} from "@/lib/site";

interface ReviewsSectionProps {
  variant?: "full" | "compact";
}

const ReviewsSection = ({ variant = "full" }: ReviewsSectionProps) => {
  const showTestimonials = variant === "full";

  return (
    <section className="py-20 bg-muted" aria-labelledby="reviews-heading">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <div
            className="flex justify-center gap-1 mb-4"
            aria-label={`${REVIEW_SUMMARY.aggregateRating} out of 5 stars`}
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-8 h-8 fill-accent text-accent"
                aria-hidden="true"
              />
            ))}
          </div>
          <h2 id="reviews-heading" className="text-foreground mb-4 text-balance">
            {REVIEW_SUMMARY.aggregateRating}.0 Rated AC Services in Kolathur & Chennai
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            <strong>{REVIEW_SUMMARY.totalReviewCount}+ verified customer ratings</strong> across
            JustDial and Sulekha. Trusted for AC repair, installation, and doorstep service in
            Puthagaram, Kolathur, and nearby Chennai areas.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                JustDial
              </p>
              <p className="text-4xl font-bold text-foreground mb-1">
                {REVIEW_SUMMARY.justdialRating}.0
                <span className="text-lg font-medium text-muted-foreground"> / 5</span>
              </p>
              <p className="text-muted-foreground mb-4">
                {REVIEW_SUMMARY.justdialCount} ratings · Puthagaram Colony, Kolathur
              </p>
              <a
                href={REVIEW_LINKS.justdial}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Freeze Aircon reviews on JustDial"
              >
                <Button variant="outline" className="font-semibold gap-2 w-full sm:w-auto">
                  View on JustDial
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Sulekha
              </p>
              <p className="text-4xl font-bold text-foreground mb-1">
                {REVIEW_SUMMARY.sulekhaRating}.0
                <span className="text-lg font-medium text-muted-foreground"> / 5</span>
              </p>
              <p className="text-muted-foreground mb-4">
                {REVIEW_SUMMARY.sulekhaCount} reviews · Kolathur, Chennai
              </p>
              <a
                href={REVIEW_LINKS.sulekha}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read Freeze Aircon reviews on Sulekha"
              >
                <Button variant="outline" className="font-semibold gap-2 w-full sm:w-auto">
                  View on Sulekha
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {showTestimonials && (
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-foreground text-center mb-8">
              What Our Customers Say
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {CUSTOMER_REVIEWS.map((review) => (
                <Card key={`${review.author}-${review.date}`} className="border-border/60">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <MessageSquareQuote
                        className="w-5 h-5 text-primary shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="flex gap-0.5" aria-hidden="true">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground text-pretty mb-4">&ldquo;{review.text}&rdquo;</p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{review.author}</span>
                      {" · "}
                      {review.location}
                      {" · "}
                      {review.source} ({review.date})
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href={REVIEW_LINKS.google}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Search Freeze Aircon on Google"
          >
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-bold gap-2 shadow-md">
              Find Us on Google
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </Button>
          </a>
          <a href={REVIEW_LINKS.justdial} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="font-bold gap-2">
              Rate Us on JustDial
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

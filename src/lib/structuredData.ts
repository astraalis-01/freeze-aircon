import { SITE_URL } from "@/lib/site";

export type FaqItem = { question: string; answer: string };

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  path: string;
  priceFrom?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: `${SITE_URL}${options.path}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Freeze Aircon",
      url: SITE_URL,
      telephone: "+919952976191",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12, Sudha Nagar 1st Street, Puthagaram",
        addressLocality: "Kolathur, Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600099",
        addressCountry: "IN",
      },
    },
    areaServed: ["Kolathur", "Puthagaram", "Chennai"],
    ...(options.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            price: options.priceFrom,
            priceCurrency: "INR",
          },
        }
      : {}),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

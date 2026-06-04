import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

const setMeta = (selector: string, attr: string, value: string, create?: { name?: string; property?: string }) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute(attr, value);
    return;
  }
  if (!create) return;
  el = document.createElement("meta");
  if (create.name) el.setAttribute("name", create.name);
  if (create.property) el.setAttribute("property", create.property);
  el.setAttribute(attr, value);
  document.head.appendChild(el);
};

const SEOHead = ({ title, description, keywords, canonicalPath = "" }: SEOHeadProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;

    setMeta('meta[name="description"]', "content", description, { name: "description" });

    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords, { name: "keywords" });
    }

    setMeta('meta[property="og:title"]', "content", title, { property: "og:title" });
    setMeta('meta[property="og:description"]', "content", description, {
      property: "og:description",
    });
    setMeta('meta[property="og:url"]', "content", canonicalUrl, { property: "og:url" });
    setMeta('meta[name="twitter:title"]', "content", title, { name: "twitter:title" });
    setMeta('meta[name="twitter:description"]', "content", description, {
      name: "twitter:description",
    });

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute("href", canonicalUrl);
    } else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, canonicalPath]);

  return null;
};

export default SEOHead;

import { useEffect } from "react";

type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

const StructuredData = ({ data }: StructuredDataProps) => {
  const serialized = JSON.stringify(data);

  useEffect(() => {
    const payload = JSON.parse(serialized) as Record<string, unknown>[];
    const entries = Array.isArray(payload) ? payload : [payload];
    const scripts = entries.map((entry, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(entry);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      scripts.forEach((script) => script.remove());
    };
  }, [serialized]);

  return null;
};

export default StructuredData;

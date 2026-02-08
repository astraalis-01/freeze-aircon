import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon: Icon, link, delay = 0 }: ServiceCardProps) => {
  const cardContent = (
    <Card
      className="group h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );

  if (link) {
    return <Link to={link}>{cardContent}</Link>;
  }

  return <Link to="/services">{cardContent}</Link>;
};

export default ServiceCard;
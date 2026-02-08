import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const services = [
  "Air Conditioner",
  "Refrigerator",
  "Washing Machine",
  "Microwave Oven",
  "Geyser",
  "Water Purifier",
];

interface BookingFormProps {
  variant?: "default" | "hero";
}

const BookingForm = ({ variant = "default" }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service || !formData.name || !formData.mobile) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book a service.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Sent!",
        description: "We'll call you shortly to confirm your appointment.",
      });
      setFormData({ service: "", name: "", mobile: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="service" className={isHero ? "text-primary-foreground/90" : ""}>
          Select Service
        </Label>
        <Select
          value={formData.service}
          onValueChange={(value) => setFormData({ ...formData, service: value })}
        >
          <SelectTrigger
            id="service"
            className={isHero ? "bg-background/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
          >
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name" className={isHero ? "text-primary-foreground/90" : ""}>
          Your Name
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={isHero ? "bg-background/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="mobile" className={isHero ? "text-primary-foreground/90" : ""}>
          Mobile Number
        </Label>
        <Input
          id="mobile"
          type="tel"
          placeholder="Enter 10-digit mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className={isHero ? "bg-background/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60" : ""}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-semibold gap-2 ${
          isHero
            ? "bg-accent hover:bg-accent/90 text-accent-foreground"
            : "bg-gradient-primary hover:opacity-90 text-primary-foreground"
        }`}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Book Now
          </>
        )}
      </Button>

      <p className={`text-xs text-center ${isHero ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        After you book, we'll call to diagnose the issue and schedule your visit.
      </p>
    </form>
  );
};

export default BookingForm;

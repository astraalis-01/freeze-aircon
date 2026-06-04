interface StatDisplayProps {
  value: string;
  label: string;
}

const StatDisplay = ({ value, label }: StatDisplayProps) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
      {value}
    </div>
    <div className="text-primary-foreground/80 text-sm md:text-base">{label}</div>
  </div>
);

export default StatDisplay;

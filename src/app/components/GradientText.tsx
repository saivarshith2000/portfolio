import { cn } from "../lib/utils";

type GradientTextPropType = {
  text: string;
  className?: string;
};

export default function GradientText({
  text,
  className,
}: GradientTextPropType) {
  return (
    <p
      className={cn(
        "bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent",
        className
      )}
    >
      {text}
    </p>
  );
}

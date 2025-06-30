import React from "react";
import { cn } from "@/utils/cn";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "primary" | "secondary";
}

const Spinner = ({
  size = "md",
  className,
  variant = "default",
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const variantClasses = {
    default: "border-gray-300 border-t-blue-600",
    primary: "border-blue-200 border-t-blue-600",
    secondary: "border-gray-200 border-t-gray-600",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-solid",
          sizeClasses[size],
          variantClasses[variant]
        )}
        style={{
          animation: "spin 1s linear infinite",
        }}
      />
    </div>
  );
};

export default Spinner;

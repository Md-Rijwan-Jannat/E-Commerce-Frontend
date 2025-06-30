import React from "react";
import { cn } from "@/utils/cn";

interface LoadingSpinnerProps {
  type?: "dots" | "pulse" | "ring" | "bounce" | "wave";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
  showText?: boolean;
}

const LoadingSpinner = ({
  type = "ring",
  size = "md",
  className,
  text = "Loading...",
  showText = true,
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const renderSpinner = () => {
    switch (type) {
      case "dots":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  "bg-blue-600 rounded-full animate-bounce",
                  size === "sm"
                    ? "w-1 h-1"
                    : size === "md"
                    ? "w-2 h-2"
                    : size === "lg"
                    ? "w-3 h-3"
                    : "w-4 h-4"
                )}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1s",
                }}
              />
            ))}
          </div>
        );

      case "pulse":
        return (
          <div
            className={cn(
              "bg-blue-600 rounded-full animate-pulse",
              sizeClasses[size]
            )}
          />
        );

      case "bounce":
        return (
          <div
            className={cn(
              "bg-blue-600 rounded-full animate-bounce",
              sizeClasses[size]
            )}
          />
        );

      case "wave":
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "bg-blue-600 rounded-full",
                  size === "sm"
                    ? "w-1 h-1"
                    : size === "md"
                    ? "w-2 h-2"
                    : size === "lg"
                    ? "w-3 h-3"
                    : "w-4 h-4"
                )}
                style={{
                  animation: "wave 1.2s ease-in-out infinite",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        );

      case "ring":
      default:
        return (
          <div
            className={cn(
              "animate-spin rounded-full border-2 border-solid border-gray-300 border-t-blue-600",
              sizeClasses[size]
            )}
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center space-y-3",
        className
      )}
    >
      {renderSpinner()}
      {showText && (
        <p className="text-sm text-gray-600 font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;

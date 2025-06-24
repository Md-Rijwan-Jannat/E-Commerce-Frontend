"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Star, Zap, Heart, Award, TrendingUp } from "lucide-react";
import { cn } from "@/utils/cn";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  variant?:
    | "default"
    | "gradient"
    | "animated"
    | "premium"
    | "minimal"
    | "bold";
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  icon?: React.ReactNode;
  showDecoration?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  variant = "default",
  size = "lg",
  align = "center",
  icon,
  showDecoration = true,
  className,
  children,
}) => {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl lg:text-6xl",
    xl: "text-5xl md:text-6xl lg:text-7xl",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const renderIcon = () => {
    if (icon) return icon;

    const defaultIcons = [
      <Sparkles key="sparkles" className="w-8 h-8 text-yellow-400" />,
      <Star key="star" className="w-8 h-8 text-blue-400" />,
      <Zap key="zap" className="w-8 h-8 text-purple-400" />,
      <Heart key="heart" className="w-8 h-8 text-red-400" />,
      <Award key="award" className="w-8 h-8 text-green-400" />,
      <TrendingUp key="trending" className="w-8 h-8 text-orange-400" />,
    ];

    return defaultIcons[Math.floor(Math.random() * defaultIcons.length)];
  };

  const renderTitle = () => {
    const baseClasses = cn(
      "font-bold leading-tight",
      sizeClasses[size],
      alignClasses[align],
      className
    );

    switch (variant) {
      case "gradient":
        return (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              baseClasses,
              "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            )}
          >
            {title}
          </motion.h2>
        );

      case "animated":
        return (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={baseClasses}
          >
            {title.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="inline-block mr-2 text-black/80"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        );

      case "premium":
        return (
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              {renderIcon()}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={cn(
                baseClasses,
                "relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              )}
            >
              {title}
            </motion.h2>
          </div>
        );

      case "minimal":
        return (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(baseClasses, "text-gray-800")}
          >
            {title}
          </motion.h2>
        );

      case "bold":
        return (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(baseClasses, "text-gray-900 drop-shadow-lg")}
          >
            {title}
          </motion.h2>
        );

      default:
        return (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(baseClasses, "text-gray-800")}
          >
            {title}
          </motion.h2>
        );
    }
  };

  return (
    <div className={cn("relative mb-10", alignClasses[align])}>
      {/* Background Decoration */}
      {showDecoration && (
        <>
          <motion.div
            className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </>
      )}

      {/* Floating Sparkles */}
      {showDecoration && variant !== "minimal" && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + (i % 2) * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.div>
          ))}
        </>
      )}

      <div className="relative z-10">
        {/* Icon */}
        {variant !== "premium" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "inline-flex items-center justify-center mb-6",
              align === "center" && "mx-auto",
              align === "right" && "ml-auto"
            )}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              {renderIcon()}
            </motion.div>
          </motion.div>
        )}

        {/* Title */}
        {renderTitle()}

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={cn(
              "mt-4 text-lg md:text-xl text-gray-600 font-medium",
              alignClasses[align]
            )}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "text-base md:text-lg text-gray-500 max-w-2xl",
              align === "center" && "mx-auto",
              align === "right" && "ml-auto"
            )}
          >
            {description}
          </motion.p>
        )}

        {/* Decorative Line */}
        {showDecoration && variant !== "minimal" && (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className={cn(
              "h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-8",
              align === "center" && "mx-auto",
              align === "right" && "ml-auto",
              "max-w-xs"
            )}
          />
        )}

        {/* Children Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;

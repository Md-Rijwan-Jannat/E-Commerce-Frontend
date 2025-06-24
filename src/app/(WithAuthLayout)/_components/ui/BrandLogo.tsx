"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "default" | "compact" | "text-only";
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "default",
  className = "",
}) => {
  const iconVariants = {
    hover: {
      rotate: 5,
      transition: { type: "spring" as const, stiffness: 300, damping: 10 },
    },
  };

  const renderLogo = () => {
    switch (variant) {
      case "compact":
        return (
          <div className="flex items-center space-x-2">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="relative"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-5 h-5 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
              </div>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ShopHub
            </span>
          </div>
        );

      case "text-only":
        return (
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
            ShopHub
          </span>
        );

      default:
        return (
          <div className="flex items-center space-x-3">
            <motion.div
              variants={iconVariants}
              whileHover="hover"
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-xl">
                <ShoppingBag className="w-7 h-7 text-white" />
                <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
                ShopHub
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide">
                Premium Shopping Experience
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <Link href="/">
      <div className={`cursor-pointer select-none ${className}`}>
        {renderLogo()}
      </div>
    </Link>
  );
};

export default BrandLogo;

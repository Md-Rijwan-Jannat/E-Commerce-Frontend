"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Truck, Zap } from "lucide-react";

const PromotionalHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      icon: <Gift className="w-4 h-4" />,
      text: "🎉 Flash Sale: Up to 70% OFF on Electronics!",
      cta: "Shop Now",
      bgGradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <Truck className="w-4 h-4" />,
      text: "🚚 FREE SHIPPING on orders over $50 worldwide!",
      cta: "Learn More",
      bgGradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      text: "⚡ New Arrivals: Latest Tech Gadgets Available Now!",
      cta: "Explore",
      bgGradient: "from-orange-600 to-red-600",
    },
  ];

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible, promotions.length]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative overflow-hidden bg-gradient-to-r ${promotions[currentPromo].bgGradient} text-white`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-3 text-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPromo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-2 flex-wrap"
              >
                <span className="hidden sm:inline-flex">
                  {promotions[currentPromo].icon}
                </span>
                <span className="text-sm font-medium text-center">
                  {promotions[currentPromo].text}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200"
                >
                  {promotions[currentPromo].cta}
                </motion.button>
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="absolute right-2 p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            className="h-full bg-white/50"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentPromo}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromotionalHeader;

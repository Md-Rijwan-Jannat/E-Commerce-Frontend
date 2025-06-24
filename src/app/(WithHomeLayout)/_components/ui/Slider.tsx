"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";

export interface SliderProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
  itemClassName?: string;
  height?: string;
  loop?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className,
  itemClassName,
  height = "h-96",
  loop = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === items.length - 1) {
        return loop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  }, [items.length, loop]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return loop ? items.length - 1 : prevIndex;
      }
      return prevIndex - 1;
    });
  }, [items.length, loop]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlay, interval, nextSlide]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(autoPlay);

  if (!items.length) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100",
        height,
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn("absolute inset-0", itemClassName)}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-xl"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-xl"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
          {items.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              )}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: interval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      )}
    </div>
  );
};

export default Slider;

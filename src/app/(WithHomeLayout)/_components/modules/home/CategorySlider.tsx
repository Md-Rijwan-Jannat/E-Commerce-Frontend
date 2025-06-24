"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { cn } from "@/utils/cn";

export interface CategorySliderProps {
  categories: Array<{
    id: string;
    name: string;
    image: string;
    productCount: number;
    description: string;
  }>;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  itemsPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  categories,
  autoPlay = true,
  autoPlaySpeed = 3000,
  showControls = true,
  showDots = true,
  className,
  itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  },
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(
    itemsPerView.desktop || 4
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setCurrentItemsPerView(itemsPerView.mobile || 2);
      } else if (window.innerWidth < 1024) {
        setCurrentItemsPerView(itemsPerView.tablet || 3);
      } else {
        setCurrentItemsPerView(itemsPerView.desktop || 4);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [itemsPerView]);

  // Calculate total slides
  const totalSlides = Math.ceil(categories.length / currentItemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && autoPlay && !isHovered && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, autoPlaySpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, autoPlay, autoPlaySpeed, isHovered, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Get current categories to display
  const getCurrentCategories = () => {
    const startIndex = currentIndex * currentItemsPerView;
    const endIndex = startIndex + currentItemsPerView;
    const currentCategories = categories.slice(startIndex, endIndex);

    // If we don't have enough categories to fill the current view,
    // wrap around to the beginning
    if (
      currentCategories.length < currentItemsPerView &&
      categories.length > 0
    ) {
      const remainingSlots = currentItemsPerView - currentCategories.length;
      const wrappedCategories = categories.slice(0, remainingSlots);
      return [...currentCategories, ...wrappedCategories];
    }

    return currentCategories;
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Slider Container */}
      <div className="relative w-full">
        {/* Grid Container */}
        <div className="w-full">
          <motion.div
            ref={containerRef}
            className={cn(
              "grid transition-all duration-500 ease-out",
              "gap-4 sm:gap-6",
              currentItemsPerView === 2 && "grid-cols-2",
              currentItemsPerView === 3 &&
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
              currentItemsPerView === 4 &&
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              currentItemsPerView === 5 &&
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
              currentItemsPerView === 6 &&
                "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            )}
          >
            {getCurrentCategories().map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full py-3"
              >
                <CategoryCard
                  id={category.id}
                  name={category.name}
                  image={category.image}
                  productCount={category.productCount}
                  description={category.description}
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls */}
        {showControls && totalSlides > 1 && (
          <>
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 group border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 group border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-200 group border border-gray-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
              ) : (
                <Play className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
              )}
            </motion.button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {autoPlay && totalSlides > 1 && (
        <div className="mt-6 max-w-md mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: autoPlaySpeed / 1000,
                ease: "linear",
                repeat: isPlaying ? Infinity : 0,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySlider;

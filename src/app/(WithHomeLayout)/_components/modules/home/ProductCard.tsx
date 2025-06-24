"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye, Share2 } from "lucide-react";
import { cn } from "@/utils/cn";
import { formatPrice } from "@/utils/formatPrice";
import Button from "@/app/(WithAuthLayout)/_components/ui/Button";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew = false,
  isOnSale = false,
  discountPercentage,
  className,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "h-4 w-4",
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl md:h-[450px]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="inline-flex items-center rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
              NEW
            </span>
          )}
          {isOnSale && discountPercentage && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "rounded-full p-2 shadow-lg backdrop-blur-sm cursor-pointer transition-all duration-200",
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-white/80 text-gray-700 hover:bg-white"
            )}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white/80 p-2 cursor-pointer text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white"
          >
            <Eye className="h-4 w-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-white/80 p-2 cursor-pointer text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white"
          >
            <Share2 className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Quick Add to Cart */}
        <motion.div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="sm"
            variant="primary"
            icon={<ShoppingCart className="h-4 w-4" />}
            className="w-full"
          >
            Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="mb-2 flex items-center gap-1">
          <div className="flex">{renderStars(rating)}</div>
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        {/* Product Name */}
        <h3 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

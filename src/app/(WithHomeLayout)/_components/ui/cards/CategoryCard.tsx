"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  productCount: number;
  description: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  image,
  productCount,
  description,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl",
        className
      )}
    >
      {/* Background Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Product Count Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 backdrop-blur-sm">
            <ShoppingBag className="mr-1 h-4 w-4" />
            {productCount} items
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <motion.h3 className="mb-2 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </motion.h3>

        <motion.p className="mb-4 text-sm text-gray-600 line-clamp-2">
          {description}
        </motion.p>

        {/* Action Button */}
        <Link href={`/category/${id}`}>
          <motion.div
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Explore Category
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </Link>
      </div>

      {/* Hover Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default CategoryCard;

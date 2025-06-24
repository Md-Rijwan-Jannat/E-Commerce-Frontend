/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
} from "lucide-react";
import { homeData } from "@/data/homeData";
import { cn } from "@/utils/cn";
import Image from "next/image";
import SectionTitle from "../../ui/SectionTitle";

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = homeData.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.3, delay: i * 0.1 }}
      >
        <Star
          className={cn(
            "h-5 w-5",
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          )}
        />
      </motion.div>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Sparkle Effects */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + (i % 2) * 80}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="size-3" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Don't just take our word for it - hear from our satisfied customers"
          variant="gradient"
          size="sm"
          align="center"
          showDecoration={true}
        />

        {/* Main Slider */}
        <div className="max-w-6xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Testimonial Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.8, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, scale: 0.8, rotateY: -15 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative perspective-1000"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-4 transform-gpu">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ rotate: -10, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    {/* Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex justify-center items-center gap-1 mb-8"
                    >
                      {renderStars(currentTestimonial.rating)}
                    </motion.div>

                    {/* Testimonial Text */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm md:text-xl text-gray-700 leading-relaxed italic mb-10 font-medium"
                    >
                      &ldquo;{currentTestimonial.content}&rdquo;
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex flex-col items-center"
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-200 mb-4 shadow-lg"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </motion.div>
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-xl">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-gray-600 text-lg">
                          {currentTestimonial.role} at{" "}
                          {currentTestimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-200 group border-2 border-gray-100"
            >
              <ChevronLeft className="size-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-200 group border-2 border-gray-100"
            >
              <ChevronRight className="size-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </motion.button>

            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white transition-all duration-200 border-2 border-gray-100"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5 text-gray-600" />
              ) : (
                <Play className="w-5 h-5 text-gray-600" />
              )}
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-4 mt-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={cn(
                  "size-3 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 scale-150 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="w-full bg-gray-200 rounded-full h-1 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={currentIndex}
              />
            </div>
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentIndex}
            className="text-center mt-6 text-lg text-gray-500 font-medium"
          >
            {currentIndex + 1} of {testimonials.length}
          </motion.div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-200"
                width={1000}
                height={1000}
              />
              <div className="text-sm">
                <div className="font-semibold text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

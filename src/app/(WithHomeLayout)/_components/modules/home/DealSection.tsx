"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import Button from "../../../../(WithAuthLayout)/_components/ui/Button";
import { formatPrice } from "@/utils/formatPrice";

export interface DealSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountPercentage: number;
  endTime: Date;
  className?: string;
}

const DealSection: React.FC<DealSectionProps> = ({
  title,
  subtitle,
  description,
  image,
  originalPrice,
  salePrice,
  discountPercentage,
  endTime,
  className,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center rounded-xl bg-white/10 backdrop-blur-sm p-4 text-white"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-2xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm opacity-80">{label}</span>
    </motion.div>
  );

  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 p-8 lg:p-12 ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur-sm"
          >
            <Tag className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-3xl font-bold text-white lg:text-4xl"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 text-lg text-white/90"
          >
            {subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 text-white/80"
          >
            {description}
          </motion.p>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="text-4xl font-bold text-white">
              {formatPrice(salePrice)}
            </span>
            <span className="text-xl text-white/60 line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
              -{discountPercentage}%
            </span>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center gap-2 text-white">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Offer ends in:</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <TimeUnit value={timeLeft.days} label="Days" />
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <TimeUnit value={timeLeft.minutes} label="Minutes" />
              <TimeUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              variant="sunset"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              className="bg-white text-red-600 hover:bg-gray-100"
              glow
            >
              Shop Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full rounded-2xl object-cover shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          {/* Floating Elements */}
          <motion.div
            className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-yellow-400/20 backdrop-blur-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-blue-400/20 backdrop-blur-sm"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DealSection;

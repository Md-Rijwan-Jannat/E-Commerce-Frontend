"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star, Truck, Shield } from "lucide-react";
import Slider from "../../ui/Slider";
import Button from "../../../../(WithAuthLayout)/_components/ui/Button";

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC = () => {
  const heroSlides: SlideData[] = [
    {
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends in fashion",
      description: "Up to 70% off on selected items. Limited time offer!",
      buttonText: "Shop Now",
      buttonLink: "/products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Electronics Sale",
      subtitle: "Premium gadgets at unbeatable prices",
      description: "Free shipping on orders over $50. Tech you can trust!",
      buttonText: "Explore Tech",
      buttonLink: "/category/electronics",
    },
    {
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Home & Lifestyle",
      subtitle: "Transform your living space",
      description: "Beautiful home decor and furniture for every style!",
      buttonText: "Shop Home",
      buttonLink: "/category/home",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Curated products",
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  const renderSlide = (slide: SlideData) => (
    <div className="relative h-full w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-lg font-semibold">
                {slide.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-5xl font-bold text-white lg:text-6xl xl:text-7xl"
            >
              {slide.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 text-xl text-gray-200"
            >
              {slide.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                variant="neon"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                className="group"
                glow
              >
                {slide.buttonText}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative">
      {/* Hero Slider */}
      <Slider
        items={heroSlides.map((slide) => renderSlide(slide))}
        height="h-[600px] lg:h-[700px]"
        autoPlay={true}
        interval={6000}
        showDots={true}
        showArrows={true}
        className="mb-16 rounded-none"
      />

      {/* Features Bar */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center bg-white p-6 text-center shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-1 font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

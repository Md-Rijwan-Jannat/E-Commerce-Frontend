"use client";

import React from "react";
import { homeData } from "@/data/homeData";
import { motion } from "framer-motion";
import SectionTitle from "../../ui/SectionTitle";
import {
  CategorySlider,
  FeatureCard,
  ProductCard,
  DealSection,
  NewsletterSection,
  TestimonialSlider,
  HeroSection,
} from "./index";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HomeContent: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Slider */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="Shop by Category"
            subtitle="Discover products organized by your interests"
            variant="animated"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div variants={itemVariants} className="mt-12">
          <CategorySlider
            categories={homeData.categories}
            autoPlay={true}
            autoPlaySpeed={4000}
            showControls={true}
            showDots={true}
            itemsPerView={{
              mobile: 2,
              tablet: 3,
              desktop: 4,
            }}
          />
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="Why Shop With Us?"
            subtitle="Experience the best in online shopping with our premium services"
            variant="animated"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {homeData.features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="Featured Products"
            subtitle="Handpicked products you'll love"
            variant="premium"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {homeData.featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isNew={product.isNew}
                isOnSale={product.isOnSale}
                discountPercentage={product.discountPercentage}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Deal Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <DealSection
            title={homeData.deal.title}
            subtitle={homeData.deal.subtitle}
            description={homeData.deal.description}
            image={homeData.deal.image}
            originalPrice={homeData.deal.originalPrice}
            salePrice={homeData.deal.salePrice}
            discountPercentage={homeData.deal.discountPercentage}
            endTime={homeData.deal.endTime}
          />
        </motion.div>
      </motion.section>

      {/* Trending Products */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="Trending Now"
            subtitle="Stay ahead with the latest trending products"
            variant="gradient"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {homeData.trendingProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isNew={product.isNew}
                isOnSale={product.isOnSale}
                discountPercentage={product.discountPercentage}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* New Arrivals */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="New Arrivals"
            subtitle="Be the first to discover our latest products"
            variant="animated"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {homeData.newArrivals.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isNew={product.isNew}
                isOnSale={product.isOnSale}
                discountPercentage={product.discountPercentage}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Best Sellers */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <SectionTitle
            title="Best Sellers"
            subtitle="Our most popular products that customers love"
            variant="bold"
            size="sm"
            align="center"
            showDecoration={true}
          />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {homeData.bestSellers.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                rating={product.rating}
                reviewCount={product.reviewCount}
                isNew={product.isNew}
                isOnSale={product.isOnSale}
                discountPercentage={product.discountPercentage}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Newsletter */}
      <motion.section
        className="max-w-7xl mx-auto px-4 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <NewsletterSection
            title={homeData.newsletter.title}
            subtitle={homeData.newsletter.subtitle}
            description={homeData.newsletter.description}
            placeholder={homeData.newsletter.placeholder}
            buttonText={homeData.newsletter.buttonText}
            benefits={homeData.newsletter.benefits}
          />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default HomeContent;

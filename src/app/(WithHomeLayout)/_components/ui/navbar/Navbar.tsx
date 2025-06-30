"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  MapPin,
  Phone,
  ChevronDown,
  Star,
  Truck,
  Shield,
} from "lucide-react";
import { homeData } from "@/data/homeData";
import BrandLogo from "../../../../(WithAuthLayout)/_components/ui/BrandLogo";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Deals", href: "/deals" },
  ];

  const userMenuItems = [
    { name: "My Account", href: "/account" },
    { name: "Orders", href: "/orders" },
    { name: "Wishlist", href: "/wishlist" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gray-900 text-white text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Free shipping worldwide</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <BrandLogo />
            </motion.div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                  <input
                    type="text"
                    placeholder="Search for products, categories, brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-blue-500 focus:outline-none transition-colors duration-200 text-black/80"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex relative p-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </motion.button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
                {cartItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItems}
                  </motion.span>
                )}
              </motion.button>

              {/* User Menu */}
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center space-x-1 p-2 text-gray-600 hover:text-blue-500 transition-colors duration-200"
                >
                  <User className="w-6 h-6" />
                  <ChevronDown className="w-4 h-4 hidden md:block" />
                </motion.button>

                {/* User Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <div className="py-2">
                    {userMenuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ))}
                    <hr className="my-2" />
                    <a
                      href="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Sign In
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Categories Bar */}
          <div className="hidden lg:block border-t">
            <div className="flex items-center space-x-8 py-3">
              {homeData.categories.slice(0, 6).map((category) => (
                <div
                  key={category.id}
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <motion.a
                    href={`/category/${category.id}`}
                    whileHover={{ y: -2 }}
                    className="flex items-center space-x-1 py-2 px-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    <span>{category.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.a>

                  {/* Category Dropdown */}
                  <AnimatePresence>
                    {activeCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                      >
                        <div className="p-4">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-semibold text-lg mb-2">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3">
                            {category.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600 font-medium">
                              {category.productCount} products
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm">4.8</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a
                href="/categories"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                View All Categories
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t bg-white"
            >
              <div className="container mx-auto px-4 py-4">
                {/* Mobile Search */}
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Mobile Links */}
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileTap={{ scale: 0.95 }}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Categories */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Categories
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {homeData.categories.slice(0, 6).map((category) => (
                      <motion.a
                        key={category.id}
                        href={`/category/${category.id}`}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-blue-600">
                            {category.name.charAt(0)}
                          </span>
                        </div>
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;

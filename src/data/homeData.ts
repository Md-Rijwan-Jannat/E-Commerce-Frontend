import { HomePageData } from "@/types/home.types";
import { Truck, Shield, Star, ShoppingBag, Zap, Users } from "lucide-react";

export const homeData: HomePageData = {
  hero: {
    title: "Discover Amazing Products",
    subtitle: "Your One-Stop Shopping Destination",
    description:
      "Explore thousands of premium products with unbeatable prices and lightning-fast delivery.",
    backgroundImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    primaryButton: {
      text: "Shop Now",
      link: "/products",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
    },
    stats: {
      customers: 50000,
      products: 10000,
      countries: 50,
    },
  },
  categories: [
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and tech innovations",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      productCount: 1250,
      icon: "Smartphone",
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Trendy clothing and accessories",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      productCount: 890,
      icon: "Shirt",
    },
    {
      id: "home",
      name: "Home & Garden",
      description: "Beautiful home decor and furniture",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      productCount: 650,
      icon: "Home",
    },
    {
      id: "sports",
      name: "Sports & Fitness",
      description: "Equipment for active lifestyle",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      productCount: 420,
      icon: "Dumbbell",
    },
    {
      id: "health",
      name: "Health & Beauty",
      description: "Wellness and beauty products",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      productCount: 380,
      icon: "Heart",
    },
    {
      id: "books",
      name: "Books & Media",
      description: "Knowledge and entertainment",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2028&q=80",
      productCount: 1200,
      icon: "BookOpen",
    },
  ],
  featuredProducts: [
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      description: "Premium sound quality with noise cancellation",
      price: 129.99,
      originalPrice: 199.99,
      discountPercentage: 35,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      rating: 4.8,
      reviewCount: 1247,
      isNew: true,
      isFeatured: true,
      isOnSale: true,
      colors: ["Black", "White", "Blue"],
      sizes: [],
      stock: 45,
      tags: ["wireless", "bluetooth", "noise-cancelling"],
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      description: "Track your health and fitness goals",
      price: 299.99,
      originalPrice: 399.99,
      discountPercentage: 25,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      rating: 4.6,
      reviewCount: 892,
      isFeatured: true,
      isOnSale: true,
      colors: ["Silver", "Black", "Rose Gold"],
      sizes: ["38mm", "42mm"],
      stock: 23,
      tags: ["fitness", "smartwatch", "health"],
    },
    {
      id: "3",
      name: "Organic Cotton T-Shirt",
      description: "Comfortable and eco-friendly clothing",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      category: "Fashion",
      rating: 4.5,
      reviewCount: 567,
      isNew: true,
      colors: ["White", "Black", "Navy", "Gray"],
      sizes: ["S", "M", "L", "XL"],
      stock: 120,
      tags: ["organic", "cotton", "sustainable"],
    },
    {
      id: "4",
      name: "Smart Home Speaker",
      description: "Voice-controlled home entertainment",
      price: 89.99,
      originalPrice: 129.99,
      discountPercentage: 31,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      rating: 4.7,
      reviewCount: 734,
      isOnSale: true,
      colors: ["Black", "White"],
      sizes: [],
      stock: 67,
      tags: ["smart-home", "voice-control", "speaker"],
    },
  ],
  deal: {
    title: "Flash Sale - 70% Off",
    subtitle: "Limited Time Offer",
    description:
      "Don't miss out on our biggest sale of the year. Premium gaming laptop at an unbeatable price!",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    originalPrice: 1299.99,
    salePrice: 389.99,
    discountPercentage: 70,
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
  },
  features: [
    {
      id: "1",
      title: "Free Shipping",
      description: "Free shipping on orders over $50 with worldwide delivery",
      icon: Truck,
      color: "blue",
    },
    {
      id: "2",
      title: "Secure Payment",
      description: "100% secure payment processing with SSL encryption",
      icon: Shield,
      color: "green",
    },
    {
      id: "3",
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs",
      icon: Users,
      color: "purple",
    },
    {
      id: "4",
      title: "Easy Returns",
      description: "30-day return policy with hassle-free refunds",
      icon: ShoppingBag,
      color: "orange",
    },
    {
      id: "5",
      title: "Fast Delivery",
      description: "Lightning-fast delivery with real-time tracking",
      icon: Zap,
      color: "purple",
    },
    {
      id: "6",
      title: "Premium Quality",
      description: "Curated products from top brands and manufacturers",
      icon: Star,
      color: "purple",
    },
  ],
  testimonials: [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "TechCorp",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      content:
        "Amazing shopping experience! The products are high quality and delivery was super fast. Highly recommend!",
      date: "2024-01-15",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Software Engineer",
      company: "InnovateLab",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content:
        "Best e-commerce platform I've used. Great customer service and excellent product selection.",
      date: "2024-01-10",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Designer",
      company: "Creative Studio",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      rating: 4,
      content:
        "Love the quality of products and the easy return process. Will definitely shop here again!",
      date: "2024-01-08",
    },
    {
      id: "4",
      name: "David Kim",
      role: "Entrepreneur",
      company: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      rating: 5,
      content:
        "Outstanding service and product quality. The website is user-friendly and checkout is seamless.",
      date: "2024-01-05",
    },
  ],
  newsletter: {
    title: "Stay Updated",
    subtitle: "Get Exclusive Offers",
    description:
      "Subscribe to our newsletter and be the first to know about new products, special offers, and exclusive deals.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    benefits: [
      "Exclusive discounts",
      "Early access to sales",
      "New product alerts",
      "Free shipping offers",
    ],
  },
  trendingProducts: [
    {
      id: "7",
      name: "Smart LED Bulb",
      description: "WiFi-enabled smart lighting",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      rating: 4.6,
      reviewCount: 234,
      colors: ["White", "Color"],
      sizes: [],
      stock: 156,
      tags: ["smart-home", "led", "wifi"],
    },
    {
      id: "8",
      name: "Premium Yoga Mat",
      description: "Premium non-slip yoga mat",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80",
      category: "Sports",
      rating: 4.8,
      reviewCount: 445,
      colors: ["Purple", "Blue", "Black"],
      sizes: ["Standard", "Extra Long"],
      stock: 89,
      tags: ["yoga", "fitness", "non-slip"],
    },
  ],
  newArrivals: [
    {
      id: "9",
      name: "Wireless Charger",
      description: "Fast wireless charging pad",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1609592424154-18d8b5e0c8c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      rating: 4.5,
      reviewCount: 123,
      isNew: true,
      colors: ["White", "Black"],
      sizes: [],
      stock: 67,
      tags: ["wireless", "charging", "fast-charge"],
    },
    {
      id: "10",
      name: "Organic Face Cream",
      description: "Natural anti-aging face cream",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Beauty",
      rating: 4.7,
      reviewCount: 89,
      isNew: true,
      colors: [],
      sizes: ["30ml", "50ml"],
      stock: 45,
      tags: ["organic", "anti-aging", "natural"],
    },
  ],
  bestSellers: [
    {
      id: "11",
      name: "Premium Coffee Maker",
      description: "Programmable coffee machine",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Home & Garden",
      rating: 4.9,
      reviewCount: 567,
      colors: ["Black", "Stainless Steel"],
      sizes: [],
      stock: 34,
      tags: ["coffee", "programmable", "kitchen"],
    },
    {
      id: "12",
      name: "Running Shoes",
      description: "Lightweight running shoes",
      price: 119.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Sports",
      rating: 4.8,
      reviewCount: 789,
      colors: ["Blue", "Red", "Black"],
      sizes: ["7", "8", "9", "10", "11"],
      stock: 56,
      tags: ["running", "lightweight", "comfortable"],
    },
  ],
};

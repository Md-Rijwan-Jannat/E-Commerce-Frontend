"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import Link from "next/link";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import BrandLogo from "../../ui/BrandLogo";
import { LoginFormData } from "@/types";

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Login data:", data);
      // Handle login logic here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <BrandLogo variant="default" className="mx-auto mb-6" />
          </motion.div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                type="email"
                placeholder="Email address"
                icon={<Mail className="w-5 h-5" />}
                {...register("email", { required: "Email is required" })}
                error={errors.email?.message}
              />
              <Input
                type="password"
                placeholder="Password"
                icon={<Lock className="w-5 h-5" />}
                {...register("password", { required: "Password is required" })}
                error={errors.password?.message}
              />
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Remember me</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <Button
                type="submit"
                variant="outline"
                size="md"
                className="w-full"
                icon={<LogIn className="w-5 h-5" />}
                isLoading={isLoading}
                glow
              >
                Sign In
              </Button>
            </form>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
              >
                Sign up here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20" />
        <div className="relative z-10 flex items-center justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center text-white"
          >
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <LogIn size={48} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Welcome to ShopHub</h2>
            <p className="text-xl text-white/90 max-w-md">
              Discover amazing products and enjoy a seamless shopping experience
              with our premium e-commerce platform.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"
        />
      </div>
    </div>
  );
};

export default Login;

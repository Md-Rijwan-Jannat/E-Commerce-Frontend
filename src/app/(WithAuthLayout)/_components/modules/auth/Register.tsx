"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, User, UserPlus, CheckCircle } from "lucide-react";
import Link from "next/link";

import Input from "../../ui/Input";
import Button from "../../ui/Button";
import BrandLogo from "../../ui/BrandLogo";
import { RegisterFormData } from "@/types";

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const watchPassword = watch("password");

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Register data:", data);
      // Handle registration logic here
    } catch (error) {
      console.error("Registration error:", error);
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
            className="text-center mb-8"
          >
            <BrandLogo variant="default" className="mx-auto mb-6" />
          </motion.div>

          {/* Registration Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                type="text"
                placeholder="John"
                icon={<User size={20} />}
                error={errors.firstName?.message}
                variant="filled"
                {...register("firstName", {
                  required: "First name is required",
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                })}
              />

              <Input
                label="Last Name"
                type="text"
                placeholder="Doe"
                icon={<User size={20} />}
                error={errors.lastName?.message}
                variant="filled"
                {...register("lastName", {
                  required: "Last name is required",
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                })}
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              icon={<Mail size={20} />}
              error={errors.email?.message}
              variant="filled"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a strong password"
              icon={<Lock size={20} />}
              isPassword
              error={errors.password?.message}
              variant="filled"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message:
                    "Password must contain uppercase, lowercase and number",
                },
              })}
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              icon={<Lock size={20} />}
              isPassword
              error={errors.confirmPassword?.message}
              variant="filled"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watchPassword || "Passwords do not match",
              })}
            />

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 transition-colors"
                {...register("acceptTerms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <div className="text-sm text-gray-600">
                <span>I agree to the </span>
                <Link
                  href="/terms"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                  Terms & Conditions
                </Link>
                <span> and </span>
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            {errors.acceptTerms && (
              <p className="text-sm text-red-600 mt-1 flex items-center">
                <CheckCircle size={16} className="mr-1" />
                {errors.acceptTerms.message}
              </p>
            )}

            <Button
              type="submit"
              variant="outline"
              size="md"
              className="w-full"
              icon={<UserPlus size={20} />}
              isLoading={isLoading}
            >
              Create Account
            </Button>
          </motion.form>

          {/* Sign In Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
              >
                Sign in here
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
            <div
              className="w-32 h-32 bg-white/10 backdrop-blur-
              flex items-center justify-center mx-auto mb-8"
            >
              <UserPlus size={48} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Join ShopHub Today</h2>
            <p className="text-xl text-whit,/90 max-w-md">
              Create your account and unlock exclusive benefits, personalized
              recommendations, a,d seamless shopping experiences.
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

export default Register;

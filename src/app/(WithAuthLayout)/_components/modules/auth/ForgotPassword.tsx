"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ForgotPasswordFormData } from "@/types";
import BrandLogo from "../../ui/BrandLogo";

const ForgotPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Forgot password data:", data);
      setIsEmailSent(true);
      // Handle forgot password logic here
    } catch (error) {
      console.error("Forgot password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Check Your Email
            </h1>
            <p className="text-gray-600 mb-8">
              We&apos;ve sent a password reset link to your email address.
              Please check your inbox and follow the instructions.
            </p>
            <Button
              variant="outline"
              size="md"
              className="w-full mb-4"
              onClick={() => setIsEmailSent(false)}
            >
              Send Another Email
            </Button>
            <Link
              href="/auth/login"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Sign In
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Form
          // title="Forgot Password?"
          // subtitle="Enter your email to reset your password"
          variant="card"
          onSubmit={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          <div className="mb-10">
            <BrandLogo />
          </div>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={20} />}
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <Button
            type="submit"
            variant="outline"
            size="md"
            className="w-full mt-5"
            icon={<Send size={20} />}
            isLoading={isLoading}
          >
            Send Reset Link
          </Button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center pt-4"
          >
            <Link
              href="/auth/login"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Sign In
            </Link>
          </motion.div>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;

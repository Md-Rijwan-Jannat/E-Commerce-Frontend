"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Lock, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { ResetPasswordFormData } from "@/types";

const ResetPassword: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const watchPassword = watch("password");

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Reset password data:", data);
      setIsPasswordReset(true);
      // Handle reset password logic here
    } catch (error) {
      console.error("Reset password error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isPasswordReset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Password Reset Successfully
            </h1>
            <p className="text-gray-600 mb-8">
              Your password has been successfully reset. You can now sign in
              with your new password.
            </p>
            <Link href="/auth/login">
              <Button variant="outline" size="md" className="w-full">
                Sign In Now
              </Button>
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
          title="Reset Password"
          subtitle="Enter your new password"
          variant="card"
          onSubmit={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          <Input
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            icon={<Lock size={20} />}
            isPassword
            error={errors.password?.message}
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
            label="Confirm New Password"
            type="password"
            placeholder="Confirm your new password"
            icon={<Lock size={20} />}
            isPassword
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watchPassword || "Passwords do not match",
            })}
          />

          <Button
            type="submit"
            variant="outline"
            size="md"
            className="w-full"
            icon={<Lock size={20} />}
            isLoading={isLoading}
          >
            Reset Password
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

export default ResetPassword;

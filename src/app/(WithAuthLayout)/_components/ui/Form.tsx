import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: "default" | "card" | "minimal";
}

const Form: React.FC<FormProps> = ({
  title,
  subtitle,
  children,
  isLoading = false,
  variant = "default",
  className,
  ...props
}) => {
  const baseClasses = "w-full max-w-md mx-auto";

  const variantClasses = {
    default: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100",
    card: "bg-white p-10 rounded-3xl shadow-xl border border-gray-100",
    minimal: "bg-transparent p-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(baseClasses, variantClasses[variant])}
    >
      {(title || subtitle) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className="text-center mb-8"
        >
          {title && (
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          )}
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </motion.div>
      )}

      <form className={cn("space-y-6", className)} {...props}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="space-y-4"
        >
          {children}
        </motion.div>
      </form>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center"
        >
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600">Loading...</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Form;

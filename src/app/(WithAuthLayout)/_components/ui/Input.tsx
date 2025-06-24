import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "@/utils/cn";
import clsx from "clsx";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: "default" | "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  isPassword?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helpText,
      variant = "default",
      size = "md",
      icon,
      isPassword = false,
      className,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);

    const baseClasses =
      "w-full transition-all duration-200 outline-none border focus:ring-2 focus:ring-blue-500/20";

    const variantClasses = {
      default: "bg-white border-gray-300 focus:border-blue-500 text-black",
      filled:
        "bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 text-black",
      outlined:
        "bg-transparent border-2 border-gray-300 focus:border-blue-500 text-black",
    };

    const sizeClasses = {
      sm: "px-3 py-2 text-sm rounded-md",
      md: "px-4 py-3 text-base rounded-lg",
      lg: "px-5 py-4 text-lg rounded-xl",
    };

    const errorClasses = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "";

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        {label && (
          <motion.label
            className={cn(
              "block text-sm font-medium mb-2 transition-colors",
              error ? "text-red-600" : "text-gray-700",
              isFocused && !error && "text-blue-600"
            )}
            animate={{
              color: error ? "#dc2626" : isFocused ? "#2563eb" : "#374151",
            }}
          >
            {label}
          </motion.label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            className={clsx(
              baseClasses,
              variantClasses[variant],
              sizeClasses[size],
              errorClasses,
              icon && "pl-10",
              (isPassword || error) && "pr-10",
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}

          {error && !isPassword && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
              <AlertCircle size={20} />
            </div>
          )}
        </div>

        {(error || helpText) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {error && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle size={16} />
                {error}
              </p>
            )}
            {!error && helpText && (
              <p className="text-sm text-gray-500">{helpText}</p>
            )}
          </motion.div>
        )}
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export default Input;

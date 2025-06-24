import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "gradient"
    | "glass"
    | "neon"
    | "sunset"
    | "ocean"
    | "forest";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
  animation?: "pulse" | "bounce" | "shake" | "glow" | "none";
  glow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  children,
  iconPosition = "left",
  animation = "none",
  glow = false,
  className,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white focus:ring-blue-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/25",
    secondary:
      "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 text-white focus:ring-gray-500 shadow-lg hover:shadow-xl hover:shadow-gray-500/25",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white focus:ring-blue-500 bg-white hover:shadow-lg hover:shadow-blue-500/25",
    ghost:
      "text-gray-700 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 hover:text-gray-900 focus:ring-gray-500",
    link: "text-blue-600 hover:text-blue-700 hover:underline focus:ring-blue-500 bg-transparent",
    gradient:
      "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white focus:ring-purple-500 shadow-lg hover:shadow-xl hover:shadow-purple-500/25",
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus:ring-white/50 shadow-lg hover:shadow-xl",
    neon: "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white focus:ring-cyan-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50",
    sunset:
      "bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 hover:from-orange-500 hover:via-red-600 hover:to-pink-600 text-white focus:ring-orange-500 shadow-lg hover:shadow-xl hover:shadow-orange-500/50",
    ocean:
      "bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 hover:from-teal-500 hover:via-cyan-600 hover:to-blue-700 text-white focus:ring-teal-500 shadow-lg hover:shadow-xl hover:shadow-teal-500/50",
    forest:
      "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 hover:from-green-500 hover:via-emerald-600 hover:to-teal-700 text-white focus:ring-green-500 shadow-lg hover:shadow-xl hover:shadow-green-500/50",
  };

  const sizeClasses = {
    sm: "px-4 py-2.5 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
    xl: "px-10 py-5 text-xl rounded-3xl",
  };

  const animationVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    bounce: {
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    shake: {
      x: [0, -2, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    glow: {
      boxShadow: [
        "0 0 5px rgba(59, 130, 246, 0.5)",
        "0 0 20px rgba(59, 130, 246, 0.8)",
        "0 0 5px rgba(59, 130, 246, 0.5)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
    none: {},
  };

  const iconVariants = {
    left: {
      x: [0, -3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    right: {
      x: [0, 3, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  const textVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const renderIcon = () => {
    if (isLoading) {
      return (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="mr-2"
        >
          <Loader2 className="w-4 h-4" />
        </motion.div>
      );
    }

    if (icon) {
      return (
        <motion.div
          variants={iconVariants}
          whileHover={iconPosition === "left" ? "left" : "right"}
          className={cn(
            "flex items-center justify-center",
            iconPosition === "left" ? "mr-2" : "ml-2 order-2"
          )}
        >
          {icon}
        </motion.div>
      );
    }

    return null;
  };

  return (
    <motion.button
      variants={animationVariants}
      animate={animation}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        glow && "shadow-lg hover:shadow-2xl",
        className,
        "cursor-pointer"
      )}
      disabled={disabled || isLoading}
      onClick={props.onClick}
      type={props.type}
      name={props.name}
      value={props.value}
      form={props.form}
      formAction={props.formAction}
      formEncType={props.formEncType}
      formMethod={props.formMethod}
      formNoValidate={props.formNoValidate}
      formTarget={props.formTarget}
    >
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-inherit"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow Effect */}
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-inherit"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 flex items-center",
          iconPosition === "right" && "flex-row-reverse"
        )}
      >
        {renderIcon()}
        <motion.span
          variants={textVariants}
          whileHover="hover"
          className="relative"
        >
          {children}
        </motion.span>
      </div>

      {/* Shimmer Effect for Gradient Buttons */}
      {(variant === "gradient" ||
        variant === "primary" ||
        variant === "neon" ||
        variant === "sunset" ||
        variant === "ocean" ||
        variant === "forest") && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}

      {/* Particle Effect for Neon Buttons */}
      {variant === "neon" && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              y: [0, -8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              y: [0, -12, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>
      )}
    </motion.button>
  );
};

export default Button;

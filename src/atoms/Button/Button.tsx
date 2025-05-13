import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-200",
    secondary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-200",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-50",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;

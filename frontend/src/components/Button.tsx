 // components/Button.tsx

import React from "react";
import { cn } from "../lib/utils"; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "destructive";
  onClick?: () => void;
}

const Button = ({ variant = "default",onClick, className, ...props }: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2";

  const variantStyles = {
    default: "bg-black text-white hover:bg-black/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
      onClick={onClick}
    />
  );
};

export default Button;

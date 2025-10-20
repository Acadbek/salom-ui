import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full border focus:outline-none focus:border-blue-500 border-transparent border-b-[oklch(0.6434_0_0)] bg-[oklch(0.9672_0_0)] tracking-wide px-4 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        white: "bg-white text-black",
        gray: "bg-gray-100 text-gray-800",
        "dark-gray": "bg-gray-700 text-gray-200",
        dark: "bg-black text-white",
      },
      size: {
        sm: "h-8 text-sm px-3",
        md: "h-10 text-sm px-4",
        lg: "h-12 text-base px-4",
      }
    },
    defaultVariants: {
      variant: "gray",
      size: "md",
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
  VariantProps<typeof inputVariants> {
  size?: "sm" | "md" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };

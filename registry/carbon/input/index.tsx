import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full border focus:outline-none focus:border-[var(--primary)] border-transparent border-b-gray-400 bg-[var(--muted)] tracking-wide px-4 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {

      },
      size: {
        sm: "h-8 text-sm px-3",
        md: "h-10 text-sm px-4",
        lg: "h-12 text-base px-4",
      }
    },
    defaultVariants: {
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

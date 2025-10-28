import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-start transition-all duration-100 ease-in-out whitespace-nowrap rounded-none text-sm disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      kind: {
        primary: `bg-[var(--primary)]
          hover:bg-[var(--primary)]/90
          active:bg-[var(--primary)]/70
          text-[var(--primary-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--primary),inset_0_0_0_3px_var(--primary-focus-ring)]`,

        destructive: `bg-[var(--destructive)]
          hover:bg-[var(--destructive)]/90
          active:bg-[var(--destructive)]/70
          text-[var(--destructive-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--destructive),inset_0_0_0_3px_var(--destructive-focus-ring)]`,

        tertiary: `bg-[var(--tertiary)]
          hover:bg-[var(--tertiary)]/50
          active:bg-[var(--tertiary)]/5
          border-[1px]
          border-[var(--tertiary-border)]
          text-[var(--tertiary-foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--tertiary),inset_0_0_0_3px_var(--tertiary-focus-ring)]`,

        light: `bg-[var(--light)] border
          hover:bg-[var(--light)]/90
          active:bg-[var(--light)]/70
          text-[var(--light-foreground)]
          dark:focus:[box-shadow:inset_0_0_0_2px_var(--light),inset_0_0_0_3px_var(--light-focus-ring)]
          focus:[box-shadow:inset_0_0_0_2px_var(--light),inset_0_0_0_3px_var(--primary)]`,

        outline: `bg-transparent border
          hover:bg-accent
          active:hover:bg-accent/70
          border-[var(--border)]
          text-[var(--foreground)]
          focus:[box-shadow:inset_0_0_0_2px_var(--light),inset_0_0_0_3px_#DEDEDE]`,

        dark: `bg-[var(--dark)]
          text-[var(--dark-foreground)]
          hover:bg-[var(--dark)]/90
          active:bg-[var(--dark)]/80
          focus:[box-shadow:inset_0_0_0_2px_var(--dark),inset_0_0_0_3px_var(--dark-focus-ring)]`,

        ghost: `bg-[var(--ghost)]
          hover:bg-accent
          active:hover:bg-accent/70`
      },
      size: {
        xs: "h-8 px-3 text-sm",

        sm: "h-10 px-4 text-sm",

        md: "h-10 px-4 text-base",

        lg: "h-12 px-6 text-lg",

        xl: "h-16 w-auto min-w-[12.5rem] pl-4 pr-16 pt-4 pb-4 text-sm text-left items-start justify-start",

        "2xl": "h-20 w-auto min-w-[12.5rem] pl-4 pr-16 pt-4 pb-4 text-left items-start justify-start",

        default: "h-10 px-4 py-2",

        icon: "h-10 w-10",
      },
      hasIcon: {
        true: "gap-2",
        false: "",
      },
      iconOnly: {
        true: "justify-center px-0",
        false: "",
      },
    },
    defaultVariants: {
      kind: "primary",
      size: "default",
      hasIcon: false,
      iconOnly: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  hasIcon?: boolean;
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      kind,
      size,
      asChild = false,
      hasIcon,
      iconOnly,
      children = 'Click',
      ...props
    },
    ref,
  ) => {
    const VoidButton = asChild ? Slot : "button";

    // Auto-detect icon presence if not explicitly set
    const detectedHasIcon =
      hasIcon ??
      React.Children.toArray(children).some(
        (child) =>
          React.isValidElement(child) && typeof child.type !== "string",
      );

    // Auto-detect icon-only if not explicitly set
    const detectedIconOnly =
      iconOnly ??
      (detectedHasIcon &&
        React.Children.toArray(children).length === 1 &&
        React.Children.toArray(children).every(
          (child) =>
            React.isValidElement(child) && typeof child.type !== "string",
        ));

    return (
      <VoidButton
        className={cn(
          buttonVariants({
            kind,
            size,
            hasIcon: detectedHasIcon,
            iconOnly: detectedIconOnly,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </VoidButton>
    );
  },
);

export { Button, buttonVariants };

Button.displayName = "Button";

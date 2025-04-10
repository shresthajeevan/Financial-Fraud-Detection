import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonVariant = "default" | "outline" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { 
      className = "", 
      children, 
      variant = "default", 
      size = "default", 
      ...rest 
    } = props;
    
    const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const getVariantStyles = (variant: ButtonVariant): string => {
      switch (variant) {
        case "default":
          return "bg-primary text-primary-foreground hover:bg-primary/90";
        case "outline":
          return "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
        case "ghost":
          return "hover:bg-accent hover:text-accent-foreground";
        case "link":
          return "text-primary underline-offset-4 hover:underline";
        default:
          return "bg-primary text-primary-foreground hover:bg-primary/90";
      }
    };
    
    const getSizeStyles = (size: ButtonSize): string => {
      switch (size) {
        case "default":
          return "h-10 px-4 py-2";
        case "sm":
          return "h-9 rounded-md px-3";
        case "lg":
          return "h-11 rounded-md px-8";
        case "icon":
          return "h-10 w-10";
        default:
          return "h-10 px-4 py-2";
      }
    };
    
    const combinedClassName = `${baseStyles} ${getVariantStyles(variant)} ${getSizeStyles(size)} ${className}`;
    
    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
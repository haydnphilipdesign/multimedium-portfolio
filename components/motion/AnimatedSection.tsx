import type { ReactNode } from "react";
type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: string;
  duration?: number;
  mobileBehavior?: string;
  staggerDelay?: number;
};
// Marketing content is readable on first paint, including without JavaScript.
export function AnimatedSection({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
export const StaggerContainer = AnimatedSection;
export const StaggerItem = AnimatedSection;

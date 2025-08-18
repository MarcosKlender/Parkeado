import { Link } from "react-router-dom";
import { ReactNode } from "react";
import "./LinkButton.scss";

/**
 * Props for the Link Button component.
 * @property to - The destination path for the link.
 * @property children - The content to display inside the button.
 * @property variant - The visual style variant of the button.
 */
type LinkButtonProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "success" | "text";
};

/**
 * Reusable Link component, styled as a button.
 * @component
 * @param props - Props for the Link Button component.
 * @returns A styled link button element.
 */
export function LinkButton({
  to,
  children,
  variant = "primary",
}: LinkButtonProps) {
  return (
    <Link to={to} className={`link-button ${variant}`}>
      {children}
    </Link>
  );
}

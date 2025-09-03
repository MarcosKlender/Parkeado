import { ReactNode } from "react";
import "./Button.scss";

/**
 * Props for the Button component.
 * @property children - Content to display inside the button.
 * @property type - The button type. Defaults to "button".
 * @property variant - Visual style. Defaults to "primary".
 * @property onClick - Optional click handler.
 */
type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "success" | "danger";
  onClick?: () => void;
};

/**
 * Reusable styled button component.
 * @component
 * @param props - Props for the button component.
 * @returns A styled button element with custom variants.
 */
export function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${variant}`}
    >
      {children}
    </button>
  );
}

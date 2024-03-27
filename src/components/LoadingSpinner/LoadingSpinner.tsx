import { ComponentProps } from "react";
import tinyColor from "tinycolor2";
import "./LoadingSpinner.css";

// Taken from: https://github.com/adexin/spinners-react

export interface LoadingSpinnerProps
  extends Omit<ComponentProps<"svg">, "viewBox" | "fill"> {
  color?: string;
}

export const LoadingSpinner = ({ color, ...props }: LoadingSpinnerProps) => (
  <svg fill="none" {...props} viewBox="0 0 66 66">
    <circle cx="33" cy="33" fill="none" r="28" stroke={color} strokeWidth="5" />
    <circle
      cx="33"
      cy="33"
      fill="none"
      r="28"
      stroke={tinyColor
        .mostReadable(color ?? "#fff", ["#fff", "#000"])
        .toHexString()}
      strokeDasharray="1, 174"
      strokeDashoffset="306"
      strokeLinecap="round"
      strokeWidth="5"
      style={{
        animation: `loading-spinner 1s linear infinite`,
      }}
    />
  </svg>
);

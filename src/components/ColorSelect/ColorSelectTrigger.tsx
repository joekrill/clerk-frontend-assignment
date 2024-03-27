import { ComponentProps, forwardRef } from "react";
import "reactjs-popup/dist/index.css";

export interface ColorSelectTriggerProps
  extends Omit<ComponentProps<"button">, "aria-label" | "className" | "type"> {
  color: string | undefined;
}

export const ColorSelectTrigger = forwardRef<
  HTMLButtonElement,
  ColorSelectTriggerProps
>(({ color, ...rest }, ref) => (
  <button
    ref={ref}
    type="button"
    className="flex rounded-md border p-1"
    aria-label="Choose a color"
    {...rest}
  >
    <span>{color ?? "Transparent"}</span>
    <span
      className="ml-2 block size-6 border"
      data-testid="color-indicator"
      style={{ backgroundColor: color }}
    ></span>
  </button>
));

ColorSelectTrigger.displayName = "ColorSelectTrigger";

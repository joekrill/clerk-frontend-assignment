import { useRef } from "react";
import { HexColorPicker } from "react-colorful";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { PopupActions } from "reactjs-popup/dist/types";
import { ColorSelectTrigger } from "./ColorSelectTrigger";

export interface ColorSelectProps {
  color: string | undefined;
  onColorChange: (color: string | undefined) => void;
}

export const ColorSelect = ({ color, onColorChange }: ColorSelectProps) => {
  const popupRef = useRef<PopupActions>(null);

  return (
    <Popup
      contentStyle={{ width: "auto" }}
      ref={popupRef}
      trigger={<ColorSelectTrigger color={color} aria-haspopup="dialog" />}
    >
      <div data-testid="color-select-popup">
        <HexColorPicker
          color={color}
          onChange={(value) => {
            onColorChange(value);
            popupRef.current?.close();
          }}
        />
        <button
          onClick={() => {
            onColorChange(undefined);
            popupRef.current?.close();
          }}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white p-1 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
        >
          Reset
        </button>
      </div>
    </Popup>
  );
};

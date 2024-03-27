import { useCallback, useState } from "react";

export const useLocalStorageValue = (key: string) => {
  const [value, setValue] = useState<string | undefined>(
    localStorage.getItem(key) ?? undefined,
  );

  const setAndStoreValue = useCallback(
    (newValue: string | undefined) => {
      if (newValue == undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, newValue);
      }

      setValue(newValue);
    },
    [key],
  );

  return [value, setAndStoreValue] as const;
};

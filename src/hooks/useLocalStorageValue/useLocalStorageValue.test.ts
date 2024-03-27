import { act, renderHook } from "@testing-library/react";
import { expect, it } from "vitest";
import { useLocalStorageValue } from "./useLocalStorageValue";

it("returns undefined by default", () => {
  const { result } = renderHook(() => useLocalStorageValue("storage_key"));
  expect(result.current[0]).not.toBeDefined();
});

it("updates the value when the setter is called", () => {
  const { result } = renderHook(() => useLocalStorageValue("storage_key"));
  act(() => {
    result.current[1]("test_value");
  });
  expect(result.current[0]).toBe("test_value");
});

it("stores the value in localStorage", () => {
  const { result } = renderHook(() => useLocalStorageValue("storage_key"));
  act(() => {
    result.current[1]("test_value");
  });
  expect(localStorage.getItem("storage_key")).toBe("test_value");
});

it("clears the value when the setter is called with `undefined`", () => {
  const { result } = renderHook(() => useLocalStorageValue("storage_key"));
  act(() => {
    result.current[1](undefined);
  });
  expect(result.current[0]).toBe(undefined);
});

it("renives the value from localStorage if it is `undefined`", () => {
  const { result } = renderHook(() => useLocalStorageValue("storage_key"));
  act(() => {
    result.current[1](undefined);
  });
  expect(localStorage.getItem("storage_key")).toBeNull();
});

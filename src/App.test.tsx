import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders count button", () => {
  render(<App />);
  const linkElement = screen.getByRole("button", { name: "increment" });
  expect(linkElement).toBeInTheDocument();
});

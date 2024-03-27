import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the heading", () => {
  render(<App />);
  const linkElement = screen.getByRole("heading", { name: "My Clerks" });
  expect(linkElement).toBeInTheDocument();
});

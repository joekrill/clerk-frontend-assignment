import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import { ColorSelectTrigger } from "./ColorSelectTrigger";

it("renders 'Transparent' when no color is provided", () => {
  render(<ColorSelectTrigger color={undefined} />);
  expect(screen.getByRole("button")).toHaveTextContent("Transparent");
});

it("renders a tranparent background color when no color is provided", () => {
  render(<ColorSelectTrigger color={undefined} />);
  expect(screen.getByTestId("color-indicator")).toHaveStyle(
    "background-color: rgba(0, 0, 0, 0)",
  );
});

it("renders the color value if provided", () => {
  render(<ColorSelectTrigger color="#ff0000" />);
  expect(screen.getByRole("button")).toHaveTextContent("#ff0000");
});

it("renders a tranparent background color when no color is provided", () => {
  render(<ColorSelectTrigger color="#ff0000" />);
  expect(screen.getByTestId("color-indicator")).toHaveStyle(
    "background-color: #ff0000",
  );
});

it("triggers onClick when clicked", async () => {
  const onClick = vi.fn();
  const user = userEvent.setup();
  render(<ColorSelectTrigger color="#ff0000" onClick={onClick} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(onClick).toHaveBeenCalledOnce();
});

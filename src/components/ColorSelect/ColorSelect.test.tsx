import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, it, vi } from "vitest";
import { ColorSelect } from "./ColorSelect";

const onColorChange = vi.fn();

beforeEach(() => {
  onColorChange.mockReset();
});

it("shows the color picker when the trigger is clicked", async () => {
  const user = userEvent.setup();
  render(<ColorSelect color={undefined} onColorChange={onColorChange} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(screen.getByTestId("color-select-popup")).toBeInTheDocument();
});

it("hides the color picker when a color is selected", async () => {
  const user = userEvent.setup();
  render(<ColorSelect color={undefined} onColorChange={onColorChange} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(screen.getByTestId("color-select-popup")).toBeInTheDocument();
  await user.click(screen.getByLabelText("Color"));
  expect(screen.queryByTestId("color-select-popup")).not.toBeInTheDocument();
});

it("hides the color picker when reset it clicked", async () => {
  const user = userEvent.setup();
  render(<ColorSelect color={undefined} onColorChange={onColorChange} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(screen.getByTestId("color-select-popup")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Reset" }));
  expect(screen.queryByTestId("color-select-popup")).not.toBeInTheDocument();
});

it("calls onColorChange with a color when a color is selected", async () => {
  const user = userEvent.setup();
  render(<ColorSelect color={undefined} onColorChange={onColorChange} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(screen.getByTestId("color-select-popup")).toBeInTheDocument();
  await user.click(screen.getByLabelText("Color"));
  expect(onColorChange).toHaveBeenCalledWith(expect.stringMatching(/^#/));
});

it("calls onColorChange with `undefined` when reset is clicked", async () => {
  const user = userEvent.setup();
  render(<ColorSelect color={undefined} onColorChange={onColorChange} />);
  await user.click(screen.getByRole("button", { name: "Choose a color" }));
  expect(screen.getByTestId("color-select-popup")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Reset" }));
  expect(onColorChange).toHaveBeenCalledWith(undefined);
});

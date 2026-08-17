import { render, screen } from "@testing-library/react";
import Label from "./Label";
import { describe, test, expect } from "vitest";

describe("<Label />", () => {
  test("should render label", () => {
    render(<Label htmlFor="input" text="Label" />);
    const label = screen.getByText("Label");
    expect(label).toBeInTheDocument();
  });
});
import {describe, it, expect, vi} from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
// Test for the Button component
describe("Button component", () => {
  //test case to check if the button renders correctly  
  it("should render correctly", () => {
    // Test implementation goes here
    render(<Button>Submit</Button>);
   //get button role
   expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    
  });
  it("should call onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it("should have the correct type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveAttribute("type", "submit");
  });

  it("should have children rendered inside the button", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveTextContent("Click Me");
  });
  


});
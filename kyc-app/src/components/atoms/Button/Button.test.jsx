import {describe, it,expect} from "vitest";
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
});
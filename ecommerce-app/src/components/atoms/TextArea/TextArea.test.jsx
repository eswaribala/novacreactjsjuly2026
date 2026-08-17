import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TextArea from "./TextArea";

describe('TextArea component', () => {
  
    
  it('renders correctly with given props', () => {
    // Render the TextArea component with test props
    // Add assertions to check if the component renders as expected
    render(<TextArea id="test-textarea" name="test" placeholder="Enter text" value="Test value" onChange={() => {}} />);
    const textareaElement = screen.getByPlaceholderText('Enter text');
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveValue('Test value');
  });

  it('renders proper placeholder text', () => {
    render(<TextArea placeholder="Enter your message" />);
    const textareaElement = screen.getByPlaceholderText('Enter your message');
    expect(textareaElement).toBeInTheDocument();
  });

  it('renders with the correct value', () => {
    render(<TextArea value="Sample text" />);
    const textareaElement = screen.getByDisplayValue('Sample text');
    expect(textareaElement).toBeInTheDocument();
  });

  it('calls onChange handler when text is changed', () => {
    const handleChange = vi.fn();
    render(<TextArea onChange={handleChange} placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, {
      target: { value: "New Value" },
    });

    expect(handleChange).toHaveBeenCalled();

  });

});
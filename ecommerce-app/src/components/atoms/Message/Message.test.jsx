import { render } from "@testing-library/react";
import Message from "./Message";
import { describe, it, expect } from "vitest";

describe('Message component', () => {
  it('renders success message correctly', () => {
    const { getByText } = render(<Message text="Success!" type="success" />);
    const messageElement = getByText('Success!');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass('bg-green-100 text-green-700');
  });

  it('renders error message correctly', () => {
    const { getByText } = render(<Message text="Error!" type="error" />);
    const messageElement = getByText('Error!');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement).toHaveClass('bg-red-100 text-red-700');
  });
});


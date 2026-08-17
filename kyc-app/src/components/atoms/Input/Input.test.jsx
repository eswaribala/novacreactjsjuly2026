import {describe, it, expect,vi} from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from './Input';
describe('Input component', () => {

    it('should render the input component', () => {
        render(<Input />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input component with a placeholder', () => {
        const placeholderText = 'Enter your name';
        render(<Input placeholder={placeholderText} />);
        const inputElement = screen.getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render the input component with a value', () => {
        const valueText = 'John Doe';
        render(<Input value={valueText} />);
        const inputElement = screen.getByDisplayValue(valueText);
        expect(inputElement).toBeInTheDocument();
    });
    it("should call onChange when input value changes", () => {
    const handleChange = vi.fn();

    render(
      <Input
        placeholder="Enter text"
        onChange={handleChange}
      />
    );

    const inputElement =
      screen.getByPlaceholderText("Enter text");

    fireEvent.change(inputElement, {
      target: { value: "New Value" },
    });

    expect(handleChange).toHaveBeenCalled();
  });
  it('Check AutoComplete On', () => {
    render(<Input autoComplete="on" />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('autocomplete', 'on');
  });

  it('check id and name attributes', () => {
    const id = 'test-input';
    const name = 'testName';
    render(<Input id={id} name={name} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('id', id);
    expect(inputElement).toHaveAttribute('name', name);
  });
});
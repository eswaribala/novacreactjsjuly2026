import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Input from './Input';

describe('<Input />', () => {
  test('should render input', () => {
    render(<Input placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toBeInTheDocument();
  });

  test('Should display input with correct type', () => {
    render(<Input type="text" placeholder="Enter text" />);

    const input = screen.getByPlaceholderText('Enter text');

    expect(input).toHaveAttribute('type', 'text');
  });

  test('Should Call OnChange When Changed', () => {
    const handleChange = vi.fn();

    render(
      <Input
        onChange={handleChange}
        placeholder="Enter text"
      />
    );

    const input = screen.getByPlaceholderText('Enter text');

    fireEvent.change(input, {
      target: { value: 'New value' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue('New value');
  });

  
});
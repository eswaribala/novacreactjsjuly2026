import { render, screen } from '@testing-library/react';
import { describe, test, expect,vi } from 'vitest';
import Button from './Button';

describe('<Button />', () => {
  test('should render button', () => {
    render(<Button>Submit</Button>);

    const button= screen.getByRole('button', {
      name: 'Submit',
    });

    expect(button).toBeInTheDocument();
   

    
  });

  test("Should display button with correct type", () => { 
    render(<Button type="submit">Submit</Button>);

    const button = screen.getByRole('button', {
      name: 'Submit',
    });

    expect(button).toHaveAttribute('type', 'submit');
  })

  test("Should Call OnClick When Clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Submit</Button>);

    const button = screen.getByRole('button', {
      name: 'Submit',
    });

    await button.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  })

  test("Should be disabled when disabled prop is true", () => {
    render(<Button disabled={true}>Submit</Button>);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });
});
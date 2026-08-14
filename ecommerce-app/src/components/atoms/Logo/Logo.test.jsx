import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Logo from './Logo';

describe('<Logo />', () => {
  test('should display ecommerce logo', () => {
    render(<Logo />);

    const logo = screen.getByRole('img', {
      name: 'Logo',
    });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      '/src/assets/shoplogo.png'
    );
  });
});
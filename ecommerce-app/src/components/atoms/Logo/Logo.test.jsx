import { render, screen } from '@testing-library/react';
import { describe, test, expect,it,beforeEach } from 'vitest';
import Logo from './Logo';

describe('<Logo />', () => {

  beforeEach(() => {
    render(<Logo />);
  });


  test('should display ecommerce logo', () => {
 

    const logo = screen.getByRole('img', {
      name: 'Logo',
    });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(
      'src',
      '/src/assets/shoplogo.png'
    );
  });
  it('should have correct className', () => {
   
    const logo = screen.getByRole('img', {
      name: 'Logo',
    });
    expect(logo).toHaveClass('w-full h-auto rounded-full');
  });
});
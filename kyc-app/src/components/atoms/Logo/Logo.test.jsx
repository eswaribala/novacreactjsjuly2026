import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';
import{describe, it, expect} from 'vitest';

describe('Logo', () => {
  it('should mount', () => {
    render(<Logo />);

    const logo = screen.getByTestId('Logo');

    expect(logo).toBeInTheDocument();
  });

  it('show the correct image', () => {
    render(<Logo />);
    const logo = screen.getByTestId('Logo');
    //logo has img tag with src attribute
    const img = logo.querySelector('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('kyclogo.png'));
  });

});
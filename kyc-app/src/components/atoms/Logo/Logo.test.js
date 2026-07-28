import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './Logo';

describe('<Logo />', () => {
  test('should mount', () => {
    render(<Logo />);

    const logo = screen.getByTestId('Logo');

    expect(logo).toBeInTheDocument();
  });
});
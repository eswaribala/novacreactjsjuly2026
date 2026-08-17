import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Banner from './Banner';
describe('Banner component', () => {
  it('renders the banner img with alt property correctly', () => {
     render(<Banner />);
    const bannerImg = screen.getByAltText('Banner');
    expect(bannerImg).toBeInTheDocument();
    expect(bannerImg).toHaveAttribute('src', expect.stringContaining('banner.png'));
  });
});
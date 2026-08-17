import {describe, it, expect,beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import Banner from './Banner';
describe('Banner component', () => {

  beforeEach(() => {
    render(<Banner />);
  });  
  it('renders the banner img with alt property correctly', () => {
    
    const bannerImg = screen.getByAltText('Banner');
    expect(bannerImg).toBeInTheDocument();
    expect(bannerImg).toHaveAttribute('src', expect.stringContaining('banner.png'));
  });
  it('renders the banner img with correct className', () => {
  
    const bannerImg = screen.getByAltText('Banner');
    expect(bannerImg).toHaveClass('block h-full w-full object-cover');
  });
});
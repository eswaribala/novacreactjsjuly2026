import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";
import '@testing-library/jest-dom';
import {describe, it, expect} from 'vitest';
import { MemoryRouter } from "react-router-dom";
describe('MenuItem', () => {
    it('renders correctly with label and icon', () => {
        render(<MemoryRouter>
            <MenuItem label="Home" icon={() => <span>Icon</span>} path="/products" /></MemoryRouter>);
             expect(
      screen.getByText("Home")
    ).toBeInTheDocument();
    });
});
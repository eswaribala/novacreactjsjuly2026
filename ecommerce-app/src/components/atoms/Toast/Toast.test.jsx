import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Toast from "./Toast";

describe('Toast component', () => {
  //create mock toast object
    vi.mock('react-toastify', () => ({
        ToastContainer: (props) => (
    <div
      data-testid="toast-container"
      data-position={props.position}
      data-autoclose={props.autoClose}
      data-hide-progress-bar={String(props.hideProgressBar)}
      data-newest-on-top={String(props.newestOnTop)}
      data-close-on-click={String(props.closeOnClick)}
      data-rtl={String(props.rtl)}
      data-pause-on-focus-loss={String(props.pauseOnFocusLoss)}
      data-draggable={String(props.draggable)}
      data-pause-on-hover={String(props.pauseOnHover)}
    >
      Toast Container
    </div>
  ),
    }));


    it('renders ToastContainer with correct props', () => {
        render(<Toast />);
        const toastContainer = screen.getByTestId('toast-container');
        expect(toastContainer).toBeInTheDocument();
    });

    it('renders ToastContainer with correct position', () => {
        render(<Toast />);
        const toastContainer = screen.getByTestId('toast-container');
        expect(toastContainer).toHaveAttribute('data-position', 'top-right');
    });
    it('renders ToastContainer with correct autoClose', () => {
        render(<Toast />);
        const toastContainer = screen.getByTestId('toast-container');
        expect(toastContainer).toHaveAttribute('data-autoclose', '5000');
    });
    it('renders ToastContainer with correct hideProgressBar', () => {
        render(<Toast />);
        const toastContainer = screen.getByTestId('toast-container');
        expect(toastContainer).toHaveAttribute('data-hide-progress-bar', 'false');
    });
    it('renders ToastContainer with correct newestOnTop', () => {
        render(<Toast />);
        const toastContainer = screen.getByTestId('toast-container');
        expect(toastContainer).toHaveAttribute('data-newest-on-top', 'false');
    });
});
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function PaymentPage() {

  const paymentRef = useRef(null);

  const location = useLocation();

  const amount = location.state?.amount ?? 0;

  useEffect(() => {
     const loadAngularPayment = async () => {

      // Load Angular only in browser,
      // after React hydration
      if (!customElements.get("payment-mfe")) {

        await import(
          /* @vite-ignore */
          "http://localhost:4201/main.js"
        );

        await customElements.whenDefined(
          "payment-mfe"
        );
      }
    };
    loadAngularPayment();
    const paymentElement = paymentRef.current;

    if (!paymentElement) {
      return;
    }

    // React -> Angular
    paymentElement.amount = amount;

    console.log("Amount received from checkout:", amount);

    const handlePaymentSuccess = (event) => {
      console.log(
        "Payment result received by React:",
        event.detail
      );
    };

    paymentElement.addEventListener(
      "paymentSuccess",
      handlePaymentSuccess
    );

    return () => {
      paymentElement.removeEventListener(
        "paymentSuccess",
        handlePaymentSuccess
      );
    };

  }, [amount]);

  return (
    <payment-mfe
      ref={paymentRef}
    ></payment-mfe>
  );
}

export default PaymentPage;
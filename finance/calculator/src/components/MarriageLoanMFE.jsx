
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";


function MarriageLoanMFE() {
  const angularRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {

    const element = angularRef.current;

    if (!element) return;

    const handleLoanSubmitted = (event) => {

      console.log(
        "React received Angular data:",
        event.detail
      );

    // dispatch(
    //   setMarriageLoanData(event.detail)
    // );
    };

    element.addEventListener(
      "loanSubmitted",
      handleLoanSubmitted
    );

    return () => {

      element.removeEventListener(
        "loanSubmitted",
        handleLoanSubmitted
      );

    };

  }, [dispatch]);
  return (
    <div>
      <marriage-loan ref={angularRef}></marriage-loan>
    </div>
  );
}

export default MarriageLoanMFE;

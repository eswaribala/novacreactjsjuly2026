import { useState } from "react";
import FormField from "../FormField/FormField";
import { useDispatch } from "react-redux";

const initialValues = {
  mobileNo: 0,
  isAssisted: false,
  partnerCode: "",
  partnerName: "",
};

function LoanForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Loan Application:", formValues);
   dispatch({ type: "partner/savePartner", payload: formValues });
   alert("Partner verified successfully!");
    // Later you can dispatch Redux action here
    // dispatch(createLoanAsync(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-6 bg-white shadow-md rounded-xl p-6 mx-4">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
            gap-6
            items-end
          "
        >

          {/* Mobile Number */}
          <FormField
            id="mobileNo"
            name="mobileNo"
            autoComplete="tel"
            label="Mobile Number"
            type="tel"
            value={formValues.mobileNo==0 ? "" : formValues.mobileNo}
            onChange={handleChange}
            required
            placeholder="Enter mobile number"
            className="
              w-full
              h-[42px]
              px-4
              py-2.5
              border
              border-gray-300
              rounded-lg
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
              outline-none
            "
          />

          {/* Is Assisted */}
<div className="flex items-center gap-3 h-[42px]">

  <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
    Is Assisted
  </span>

  <label className="inline-flex items-center cursor-pointer">

    <input
      id="isAssisted"
      name="isAssisted"
      type="checkbox"
      checked={formValues.isAssisted}
      onChange={handleChange}
      className="sr-only peer"
    />

    {/* Toggle */}
    <div
      className="
        relative
        w-11 h-6
        bg-gray-300
        rounded-full
        peer
        peer-focus:ring-2
        peer-focus:ring-blue-300
        peer-checked:bg-blue-600

        after:content-['']
        after:absolute
        after:top-[2px]
        after:left-[2px]
        after:bg-white
        after:border
        after:border-gray-300
        after:rounded-full
        after:h-5
        after:w-5
        after:transition-all

        peer-checked:after:translate-x-full
        peer-checked:after:border-white
      "
    />

    <span className="ml-2 text-sm font-medium text-gray-700">
      {formValues.isAssisted ? "Yes" : "No"}
    </span>

  </label>

</div>

          {/* Partner Code */}
          <FormField
            id="partnerCode"
            name="partnerCode"
            autoComplete="off"
            label="Partner Code"
            type="text"
            value={formValues.partnerCode}
            onChange={handleChange}
            required
            placeholder="Enter partner code"
            className="
              w-full
              h-[42px]
              px-4
              py-2.5
              border
              border-gray-300
              rounded-lg
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
              outline-none
            "
          />

          {/* Partner Name */}
          <FormField
            id="partnerName"
            name="partnerName"
            label="Partner Name"
            type="text"
            value={formValues.partnerName}
            onChange={handleChange}
            required
            placeholder="Enter partner name"
            className="
              w-full
              h-[42px]
              px-4
              py-2.5
              border
              border-gray-300
              rounded-lg
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
              outline-none
            "
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full
              h-[42px]
              px-6
              bg-blue-600
              text-white
              text-sm
              font-semibold
              rounded-lg
              shadow-sm
              hover:bg-blue-700
              hover:shadow-md
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              transition
              cursor-pointer
            "
          >
            Submit
          </button>

        </div>
      </div>
    </form>
  );
}

export default LoanForm;
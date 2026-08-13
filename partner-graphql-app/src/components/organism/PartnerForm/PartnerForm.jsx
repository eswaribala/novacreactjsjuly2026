import { useState } from "react";
import FormField from "../../molecules/FormField/FormField.jsx";
import {CREATE_PARTNER} from "../../../graphql/mutation.js";
import { useMutation } from "@apollo/client/react";

const initialValues = {
  mobileNo: 0,
  partnerCode: "",
  partnerName: "",
};

function PartnerForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const[isDialogOpen, setIsDialogOpen] = useState(false);
   const [createPartner] = useMutation(CREATE_PARTNER); 

   

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Partner Application:", formValues);
    console.log('New Partner values:', formValues);
     await createPartner({

      variables: {

        input: {

      

          
          mobileNo:
            formValues.mobileNo,
   
          partnerCode:
            formValues.partnerCode,
   
          partnerName:
            formValues.partnerName,
        
            }

      }

    });

   //alert("Partner verified successfully!");
   setIsDialogOpen(true);
   setFormValues(initialValues); // Reset form after submission
    // Later you can dispatch Redux action here
    // dispatch(createPartnerAsync(formValues));
  };

  return (
    <>
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
      
    {isDialogOpen && (
     
      <div className="fixed inset-0 flex items-center justify-self-center border-amber-900  z-50">
        <div className="bg-yellow-400 p-6 rounded-lg shadow-lg w-96">
          <p>Partner added successfully!</p>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    )}
    </>
  );
}

export default PartnerForm;
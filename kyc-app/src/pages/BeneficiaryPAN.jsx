import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { getPolicyByCustomerNameAsync, verifyDocumentNumberAsync, resetVerificationResponse } from '../redux/features/policy/policySlicer';
import DropDownList from '../components/atoms/DropDownList/DropDownList';
import { useAuth } from "../contexts/AuthContext.jsx";
import Button from '../components/atoms/Button/Button';

const cardColors=[
  "bg-red-100",
    "bg-green-100","bg-blue-100","bg-yellow-100",
    "bg-purple-100","bg-pink-100","bg-indigo-100","bg-gray-100"
]

function BeneficiaryPAN() {

  const dispatch = useDispatch();
  const { user} = useAuth();

  const { policies, status, loading, error, verificationResponse } = useSelector((state) => state.policy);
  const [filteredPolicy, setFilteredPolicy] = useState(null);
  const [randomColorIndex, setRandomColorIndex] = useState(cardColors.length - 1); // Initialize the randomColorIndex variable


  useEffect(() => {
    // You can dispatch actions or perform side effects here if needed
    dispatch(getPolicyByCustomerNameAsync(user));
  }, [dispatch, user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 
  if (status === 'succeeded' && policies.length === 0) {
    return <div>No policies found for the user.</div>;
  }

  const handleChange = (e) => {
    console.log('Selected policy:', e.target.value);
    dispatch(resetVerificationResponse());
    // Handle the change event as needed
    //filter the policies based on the selected policy number
     // Initialize the randomColorIndex variable
    const selectedPolicy = policies.filter((policy,index) => 
      {
      setRandomColorIndex(index % cardColors.length); // Cycle through the colors
        return String(policy.policyNo) === e.target.value;
      });
    console.log('Selected policy details:', selectedPolicy);
    setFilteredPolicy(selectedPolicy);
    
     // Reset verification response when a new policy is selected
  }

  const handleVerifyDocumentNumber = (policy) => {
    if (policy) {
      const documentNumber = policy.documentNumber;
      console.log('Verifying document number:', documentNumber);
      dispatch(verifyDocumentNumberAsync(documentNumber));
      
    }
  }

  return (
    
    <>
     <DropDownList
        id="policyNo"
        name="policyNo"
        options={policies.map((policy) => ({
          
          value: policy.policyNo,
          label: policy.policyNo,
        }))}
        placeholder="Select the Policy Number"
        required
        className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleChange}
        
       />

       {filteredPolicy && filteredPolicy.length > 0 && (
  <div className="max-w-3xl mx-auto mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

    {/* Header */}
    <div className="bg-blue-600 px-6 py-4">
      <h3 className="text-xl font-bold text-white">
        Policy Details
      </h3>
      <p className="text-blue-100 text-sm mt-1">
        Verify the policy holder document information
      </p>
    </div>

    {/* Body */}
    <div className="p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

        {/* Policy Number */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Policy Number
          </p>

          <p className="text-lg font-semibold text-gray-900 mt-1">
            {filteredPolicy[0].policyNo}
          </p>
        </div>

        {/* Customer */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Customer Name
          </p>

          <p className="text-lg font-semibold text-gray-900 mt-1">
            {filteredPolicy[0].policyHolderName}
          </p>
        </div>

        {/* PAN */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Beneficiary PAN
          </p>

          <p className="text-lg font-semibold text-gray-900 mt-1">
            {filteredPolicy[0].beneficiaryPAN || "Not Available"}
          </p>
        </div>

        {/* Document Type */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Document Type
          </p>

          <p className="text-lg font-semibold text-gray-900 mt-1">
            {filteredPolicy[0].documentType}
          </p>
        </div>

        {/* Document Number */}
        <div>
          <p className="text-sm font-medium text-gray-500">
            Document Number
          </p>

          <p className="text-lg font-bold text-blue-600 mt-1">
            {filteredPolicy[0].documentNumber}
          </p>
        </div>

      </div>

      {/* Button section */}
      <div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">

        <Button
          id="verifyDocumentNumber"
          name="verifyDocumentNumber"
          type="button"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            px-6
            py-3
            rounded-lg
            shadow
            transition
            duration-200
          "
          onClick={() =>
            handleVerifyDocumentNumber(filteredPolicy[0])
          }
        >
          Verify Document Number
        </Button>

      </div>

    </div>
  </div>
)}

       {verificationResponse && (
  <div
    className={`mt-4 p-4 border rounded-lg ${
      verificationResponse.message === 'Document verified successfully'
        ? 'bg-green-100 border-green-400 text-green-700'
        : 'bg-red-100 border-red-400 text-red-700'
    }`}
  >
    {verificationResponse.message}
  </div>
)}
    </>
  );
}

// Removed extraneous closing tags and return statements

export default BeneficiaryPAN;
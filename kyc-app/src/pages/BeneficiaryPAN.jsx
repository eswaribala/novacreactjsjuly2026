import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { getPolicyByCustomerNameAsync} from '../redux/features/policy/policySlicer';
import DropDownList from '../components/atoms/DropDownList/DropDownList';
import { useAuth } from "../contexts/AuthContext.jsx";

const cardColors=[
  "bg-red-100",
    "bg-green-100","bg-blue-100","bg-yellow-100",
    "bg-purple-100","bg-pink-100","bg-indigo-100","bg-gray-100"
]

function BeneficiaryPAN() {

  const dispatch = useDispatch();
  const { user} = useAuth();

  const { policies, status, loading, error } = useSelector((state) => state.policy);
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

       {filteredPolicy && (
        <div className={`overflow-hidden border border-gray-200  
     ${cardColors[randomColorIndex]} shadow-md rounded-lg p-4 transition-transform 
     transform hover:scale-105 hover:shadow-lg`}>
          <h3 className="text-lg font-semibold mb-2">Selected Policy Details:</h3>
          <p><strong>Policy Number:</strong> {filteredPolicy[0].policyNo}</p>
          <p><strong>Customer Name:</strong> {filteredPolicy[0].policyHolderName}</p>
          <p><strong>Beneficiary PAN:</strong> {filteredPolicy[0].beneficiaryPAN}</p>
          <p><strong>Premium Amount:</strong> {filteredPolicy[0].documentType}</p>
          <p><strong>Premium Amount:</strong> {filteredPolicy[0].documentNo}</p>
        </div>
       )}

    </>

  );
}

export default BeneficiaryPAN;
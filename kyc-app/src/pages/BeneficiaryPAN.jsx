import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getPolicyByCustomerNameAsync } from '../redux/features/policy/policySlicer';
import DropDownList from '../components/atoms/DropDownList/DropDownList';
import { useAuth } from "../contexts/AuthContext.jsx";

function BeneficiaryPAN() {

  const dispatch = useDispatch();
  const { user} = useAuth();

  const { policies, status, loading, error } = useSelector((state) => state.policy);


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
 
  if (status === 'success' && policies.length === 0) {
    return <div>No policies found for the user.</div>;
  }

  const handleChange = (e) => {
    console.log('Selected policy:', e.target.value);
    // Handle the change event as needed
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
        selectedOption={policies.length > 0 ? policies[0].policyNo : ''}
       />

    </>

  );
}

export default BeneficiaryPAN;
import{useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getPoliciesAsync } from "../../../redux/features/policy/policySlicer.js";

function ViewPolicy() {
  const dispatch = useDispatch();
  const { status, loading, policies, error } = useSelector((state) => state.policy);

  useEffect(() => {
    // Fetch policies when the component mounts
    dispatch(getPoliciesAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading policies...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (status === 'idle' && policies.length === 0) {
    return <div>No policies found.</div>;
  }
  //check policies length and display message if no policies found
  if (policies.length === 0) {
    return <div>No policies found.</div>;
  }

  return (
    <div>
      <h2>View Policy</h2>
      {/* Add your content for viewing a policy here */}
      <table border="1" borderColor="black" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Policy Number</th>
            <th>Policy Holder Name</th>
            <th>Beneficiary Type</th>
            <th>Document Type</th>
            <th>Document Number</th>

          </tr>
        </thead>
        <tbody>
          {policies.map((policy, index) => (
            <tr key={policy.policyNo} className={`${
    index % 2 === 0 ? "bg-white" : "bg-gray-100"
  } hover:bg-blue-100`} >
              {/* Display policy details in table cells with alternative row colors */}
              <td className="border border-gray-300 px-4 py-3">{policy.policyNo}</td>
              <td className="border border-gray-300 px-4 py-3">{policy.policyHolderName}</td>
              <td className="border border-gray-300 px-4 py-3">{policy.beneficiaryType}</td>
              <td className="border border-gray-300 px-4 py-3">{policy.documentType}</td>
              <td className="border border-gray-300 px-4 py-3">{policy.documentNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewPolicy;
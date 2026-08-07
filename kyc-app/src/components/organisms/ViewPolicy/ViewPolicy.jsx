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
      <table>
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
          {policies.map((policy) => (
            <tr key={policy.policyNo}>
              <td>{policy.policyNo}</td>
              <td>{policy.policyHolderName}</td>
              <td>{policy.beneficiaryType}</td>
              <td>{policy.documentType}</td>
              <td>{policy.documentNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ViewPolicy;
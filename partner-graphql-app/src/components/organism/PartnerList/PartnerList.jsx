import { useQuery } from "@apollo/client/react";
import { GET_ALL_PARTNERS } from "../../../graphql/queries.js";
import PartnerCard from "../../molecules/PartnerCard/PartnerCard.jsx";


function PartnerList() {
  const { loading, error, data } = useQuery(GET_ALL_PARTNERS);

  console.log("GraphQL data:", data);

  const partners = data?.getAllPartners   ?? [];

  console.log("Partners:", partners);

  if (loading) {
    return <p>Loading partners...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!Array.isArray(partners) || partners.length === 0) {
    return <p>No partners available.</p>;
  }

  return (
    <div
      className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        px-4 py-6
      "
    >
      {partners.map((partner, index) => (
        <PartnerCard
          key={partner.mobileNo}
          index={index}
          partner={partner}
        />
      ))}
    </div>
  );
}

export default PartnerList;
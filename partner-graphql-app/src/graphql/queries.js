import {gql} from '@apollo/client';

export const GET_ALL_PARTNERS = gql `
  query GetAllPartners {
    getAllPartners  {
      mobileNo
      partnerCode
      partnerName
    }
  }
`;
   
export const GET_PARTNER_BY_MOBILENO = gql `
  query GetPartnerByMobileNo($mobileNo: BigInt!) {
    getPartnerByMobileNo(mobileNo: $mobileNo) {
      mobileNo
      partnerCode
      partnerName
    }
  }
`;
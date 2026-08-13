import {gql} from '@apollo/client';

export const CREATE_PARTNER = gql `
  mutation CreatePartner($input:PartnerInput!) {
    createPartner(input: $input) {
      mobileNo
      partnerCode
      partnerName
    }
  }
`;

export const UPDATE_PARTNER = gql `
  mutation UpdatePartner($mobileNo: BigInt!, $input:UpdatePartnerInput!) {
    updatePartner(mobileNo: $mobileNo, input: $input) {
        mobileNo
        partnerCode
        partnerName
    }
}`;


export const DELETE_PARTNER = gql `
  mutation DeletePartner($mobileNo: BigInt!) {
    deletePartner(mobileNo: $mobileNo) 
  }
`;
const {GraphQLBigInt} = require('graphql-scalars');
const typeDefs = `#graphql
scalar BigInt

type Query {
   getPartnerByMobileNo(mobileNo: BigInt!): Partner
   getAllPartners: [Partner]
}

type Mutation {
    createPartner(input: PartnerInput!): Partner
    updatePartner(mobileNo: BigInt!, input: UpdatePartnerInput!): Partner
    deletePartner(mobileNo: BigInt!): String
}

input PartnerInput {
    mobileNo: BigInt!
    partnerCode: String!
    partnerName: String!
}

input UpdatePartnerInput {   
    partnerCode: String
    partnerName: String
}

type Partner {
    mobileNo: BigInt!
    partnerCode: String!
    partnerName: String!
}

`

module.exports = typeDefs;
import { gql } from '@apollo/client';

  export const GET_CHARITY_BY_ID = gql`
  query GetCharityDetails($charityId: [ID]) {
    CHC {
      getCharities(filters: { id: $charityId }) {
        list (limit: 1) {
          id
          names {
            value
            primary
          },
          activities,
          objectives,
          finances {
            income,
            spending
          },
          image {
            logo {
              small
              medium
            }
          },
          contact {
            address,
            email,
            phone,
            postcode
          },
          funding {
            grants {
              id,
              amountAwarded,
              currency
            }
          },
          trustees {
            id,
            name,
            trusteeships
          },
          beneficiaries {
            id,
            name
          },
          website,
          topics {
            id,
            name,
            score
          },
          areas {
            id,
            name
          }
        }
      }
    }
  }
  `

import { gql } from '@apollo/client';

export const GET_CHARITIES_BY_ID_INCOME_ASC = gql`
query GetCharitiesIncomeAsc($id: ID)
{
  CHC {
    getCharities(filters: { finances: { latestIncome: { gte: $minIncome } } }) {
      list(sort: income_asc, limit: 30) {
        id
        names {
          value
          primary
        },
        activities
        finances {
          income,
          spending
        },
        image {
          logo {
            small,
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
          }
        }
      }
    }
  }
  `

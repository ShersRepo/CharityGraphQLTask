import { gql } from '@apollo/client';

export const GET_CHARITIES_INCOME_ASC = gql`
query GetCharitiesIncomeAsc($minIncome: Float, $skip: Int)
{
  CHC {
    getCharities(filters: { finances: { latestIncome: { gte: $minIncome } } }) {
      list(sort: income_asc, skip: $skip, limit: 30) {
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

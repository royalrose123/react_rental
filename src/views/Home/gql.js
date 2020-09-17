import { gql } from 'apollo-boost'

export const USER_LIST = gql`
  {
    users {
      name
      age
    }
  }
`

import { gql } from '@apollo/client'

export const USER = gql`
  query user {
    user {
      email
      userId
      displayName
      photoURL
      emailVerified
      phoneNumber
    }
  }
`

export const LOG_OUT = gql`
  mutation logout {
    logout {
      returnCode
      message
    }
  }
`

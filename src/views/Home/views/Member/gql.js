import { gql } from '@apollo/client'

export const USER = gql`
  query user {
    user {
      gender
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

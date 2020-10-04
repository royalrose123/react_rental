import { gql } from '@apollo/client'

export const USER = gql`
  query user {
    user {
      userPost {
        postId
        price
        roomAmount
        restroomAmount
        distinct
        houseImg {
          url
        }
      }
      gender
      email
      userId
      displayName
      photoURL
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

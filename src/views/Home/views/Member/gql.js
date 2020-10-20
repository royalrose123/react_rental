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
          fileUrl
        }
      }
      gender
      email
      userId
      displayName
      photoURL
      phoneNumber
      userLikeHouse {
        postId
      }
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

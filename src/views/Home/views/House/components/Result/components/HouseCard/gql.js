import { gql } from '@apollo/client'

export const LIKE_HOUSE = gql`
  mutation likeHouse($postId: Int) {
    likeHouse(postId: $postId)
  }
`

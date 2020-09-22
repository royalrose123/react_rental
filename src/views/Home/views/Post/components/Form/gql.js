import { gql } from 'apollo-boost'

export const ADD_HOUSE = gql`
  mutation addHouse($title: String!, $price: Int!) {
    addHouse(title: $title, price: $price) {
      title
      price
    }
  }
`

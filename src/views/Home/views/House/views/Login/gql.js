import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($email: String, $password: String) {
    createUser(email: $email, password: $password) {
      email
      password
    }
  }
`

export const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      email
      userId
      displayName
      photoURL
      phoneNumber
      gender
    }
  }
`

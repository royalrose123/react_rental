import { gql } from '@apollo/client'

export const EDIT_USER = gql`
  mutation editUser($gender: String, $displayName: String, $phoneNumber: String, $email: String) {
    editUser(gender: $gender, displayName: $displayName, phoneNumber: $phoneNumber, email: $email) {
      gender
      displayName
      phoneNumber
      email
    }
  }
`

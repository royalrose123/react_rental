export const getInitialValues = (values) => {
  const { gender, userId, email, displayName, phoneNumber } = values

  return {
    gender,
    userId,
    email,
    displayName,
    phoneNumber,
  }
}

export const getInitialValues = (house) => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))

  delete userInfo.__typename

  return {
    postUser: {
      ...userInfo,
    },
    ...house,
    fileList: house.houseImg,
  }
}

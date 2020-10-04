export const getInitialValues = (house) => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))

  return {
    ...house,
    postUser: {
      ...userInfo,
    },
    fileList: house.houseImg?.map((item) => {
      return { filename: item.filename, fileUrl: item.fileUrl, isExisted: true }
    }),
  }
}

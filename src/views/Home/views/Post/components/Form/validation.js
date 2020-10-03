import * as Yup from 'yup'

export const schema = Yup.object().shape({
  city: Yup.string().required('This field is mandatory'),
  distict: Yup.string().required('This field is mandatory'),
  floor: Yup.number().required('This field is mandatory'),
  houseDetail: Yup.string().required('This field is mandatory'),
  livingroomAmount: Yup.number().required('This field is mandatory'),
  price: Yup.number().required('This field is mandatory'),
  require: Yup.object().shape({
    cook: Yup.string().required('This field is mandatory'),
    deposit: Yup.string().required('This field is mandatory'),
    gender: Yup.string().required('This field is mandatory'),
    identify: Yup.string().required('This field is mandatory'),
    leastPeriod: Yup.string().required('This field is mandatory'),
    pet: Yup.string().required('This field is mandatory'),
  }),

  restroomAmount: Yup.number().required('This field is mandatory'),
  roomAmount: Yup.number().required('This field is mandatory'),
  roomType: Yup.string().required('This field is mandatory'),
  size: Yup.number().required('This field is mandatory'),
  street: Yup.string().required('This field is mandatory'),
  surrounding: Yup.string().required('This field is mandatory'),
  title: Yup.string().required('This field is mandatory'),
  totalFloor: Yup.number().required('This field is mandatory'),
})

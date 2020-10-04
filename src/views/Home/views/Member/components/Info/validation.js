import * as Yup from 'yup'

export const schema = Yup.object().shape({
  gender: Yup.string().required('此欄位為必填'),
  email: Yup.string().required('此欄位為必填'),
  displayName: Yup.string().required('此欄位為必填'),
  phoneNumber: Yup.string()
    .matches(/^09[0-9]{8}$/, '不符合手機格式')
    .required('此欄位為必填'),
})

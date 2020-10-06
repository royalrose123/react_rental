import * as Yup from 'yup'

export const schema = Yup.object().shape({
  city: Yup.string().required('此欄位為必填'),
  distinct: Yup.string().required('此欄位為必填'),
  floor: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(1, '此欄位不可為 0').required('此欄位為必填'),
  houseDetail: Yup.string().required('此欄位為必填'),
  livingroomAmount: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(0, '此欄位不接受負數').required('此欄位為必填'),
  price: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(1, '此欄位不可為 0').required('此欄位為必填'),
  require: Yup.object().shape({
    cook: Yup.string().required('此欄位為必填'),
    deposit: Yup.string().required('此欄位為必填'),
    gender: Yup.string().required('此欄位為必填'),
    identify: Yup.string().required('此欄位為必填'),
    leastPeriod: Yup.string().required('此欄位為必填'),
    pet: Yup.string().required('此欄位為必填'),
  }),

  restroomAmount: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(0, '此欄位不接受負數').required('此欄位為必填'),
  roomAmount: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(0, '此欄位不接受負數').required('此欄位為必填'),
  roomType: Yup.string().required('此欄位為必填'),
  size: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(1, '此欄位不可為 0').required('此欄位為必填'),
  street: Yup.string().required('此欄位為必填'),
  surrounding: Yup.string().required('此欄位為必填'),
  title: Yup.string().required('此欄位為必填'),
  totalFloor: Yup.number().typeError('此欄位為數字').integer('此欄位需為整數').min(1, '此欄位不可為 0').required('此欄位為必填'),
  fileList: Yup.array().required('至少選一張照片上傳'),
})

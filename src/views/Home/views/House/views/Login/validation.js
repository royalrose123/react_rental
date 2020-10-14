import * as Yup from 'yup'

export const schema = Yup.object().shape({
  email: Yup.string().required('請輸入信箱').email('不符合信箱格式'),
  password: Yup.string().required('請輸入密碼').min(6, '密碼至少為六位'),
})

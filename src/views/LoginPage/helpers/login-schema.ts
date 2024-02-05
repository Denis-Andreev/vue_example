import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('За кого заходишь?')
    .email('Не выдумывай'),
  password: yup
    .string()
    .required('Без пароля? В следующий раз')
})
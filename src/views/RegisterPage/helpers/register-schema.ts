import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('Я буду слать тебе спам, ввод обязателен')
    .email('Не прокатит')
    .max(50, 'Пересоздавай почту, слишком много букав'),
  password: yup
    .string()
    .required('Без пароля? В следующий раз')
    .min(6, 'У тебя короткий пароль')
    .max(40, 'Слишком длинно'),
  name: yup.string().required('Я хочу с тобой познакомиться, назови свое имя'),
  age: yup.string().test('number', 'Цифрами плиз',(v) => {
    return !(v && isNaN(+v))
  }).max(3, 'Ты настолько стар?').required('Секретики не допускаются')
})
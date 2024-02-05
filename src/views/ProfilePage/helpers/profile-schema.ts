import * as yup from 'yup'

export const profileSchema = yup.object().shape({
  name: yup.string().required('Я хочу с тобой познакомиться, назови свое имя'),
  age: yup.string().test('number', 'Цифрами плиз',(v) => {
    return !(v && isNaN(+v))
  }).max(3, 'Ты настолько стар?').required('Секретики не допускаются')
})
import { Formik } from 'formik'
import { Button } from 'react-bootstrap-v5';
import { useRequest } from '@/hooks/useRequest'

import { Field } from '../Field'
import { Wrapper, Form } from './style';

import * as yup from 'yup'

const schema = yup.object().shape({
	email: yup.string().email('email должен быть валидным').required('Это обязательное поле email'),
	password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Это обязательное поле password'),
	confirmPassword: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Это обязательное поле'),
})

export const SignUpForm = () => {
	const { doRequest } = useRequest()

	const signUpHandle = async (values, actions) => {
		const { email, password, confirmPassword } = values
		if (password !== confirmPassword) {
			return actions.setErrors({ confirmPassword: 'Пароли не совпадают' })
		}

		const data = await doRequest({
			url: '/api/users/signup',
			body: {
				email,
				password
			}
		})

		console.log(data)
	}

	return (
		<Wrapper>
			<Formik
				validationSchema={schema}
				initialValues={{
					email: '',
					password: '',
					confirmPassword: ''
				}}
				onSubmit={signUpHandle}
			>
				{({ values }) => (
					<Form>
						<h1>Регистрация</h1>
						<Field name='email' type='email' header='Email' />
						<Field name='password' type='password' header='Пароль' />
						<Field 
							name='confirmPassword' 
							type='password' 
							header='Повторите пароль' 
							error={values.password !== values.confirmPassword ? 'Пароли не совпадают' : ''} 
						/>
						<Button variant="primary" type="submit" className="mt-3">Зарегистрироваться</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

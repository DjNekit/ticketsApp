import axios from 'axios'
import { Formik } from 'formik'
import { Button } from 'react-bootstrap-v5';
import { Field } from '../Field'
import { Wrapper, Form } from './style';

import * as yup from 'yup'

const schema = yup.object().shape({
	email: yup.string().email('email должен быть валидным').required('Это обязательное поле email'),
	password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Это обязательное поле password'),
	confirmPassword: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Это обязательное поле'),
})

type Props = {
	variant: 'up' | 'in'
}

interface SignValues {
	email: string
	password: string
	confirmPassword?: string
}

export const SignForm = ({ variant }: Props) => {
	const initialValues: SignValues = {
		email: '',
		password: ''
	}

	if (variant === 'up') initialValues.confirmPassword = ''

	const signUpHandle = async (values, actions) => {
		const { email, password, confirmPassword } = values
		if (password !== confirmPassword) {
			return actions.setErrors({ confirmPassword: 'Пароли не совпадают' })
		}

		const { data } = await axios.post('/api/users/signup', {
			email,
			password
		})
	}

	return (
		<Wrapper>
			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={signUpHandle}
			>
				{({ values }) => (
					<Form>
						<h1>{variant === 'in' ? 'Войти в учетную запись' : 'Регистрация'}</h1>

						<Field name='email' type='email' header='Email' />
						<Field name='password' type='password' header='Пароль' />
						{variant === 'up' && 
							<Field name='confirmPassword' type='password' header='Повторите пароль' error={values.password !== values.confirmPassword ? 'Пароли не совпадают' : ''}/>
						}

						<Button variant="primary" type="submit" className="mt-3">
							{variant === 'in' ? 'Войти' : 'Зарегистрироваться'}
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

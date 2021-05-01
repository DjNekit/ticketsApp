import { Button } from 'react-bootstrap-v5';

import { Formik } from 'formik'
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

export const SignForm = ({ variant }) => {
	const initialValues: SignValues = {
		email: '',
		password: ''
	}

	if (variant === 'up') initialValues.confirmPassword = ''

	return (
		<Wrapper>
			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={() => {
					console.log('submit!')
				}}
			>
				<Form>
					<h1>{variant === 'in' ? 'Войти в учетную запись' : 'Регистрация'}</h1>

					<Field name='email' type='email' header='Email' />
					<Field name='password' type='password' header='Пароль' />
					{variant === 'up' && <Field name='confirmPassword' type='password' header='Повторите пароль' />}

					<Button variant="primary" type="submit" className="mt-3">
						{variant === 'in' ? 'Войти' : 'Зарегистрироваться'}
					</Button>
				</Form>
			</Formik>
		</Wrapper>
	);
};

import Router from 'next/router'
import { Formik } from 'formik'
import { Button } from 'react-bootstrap-v5';
import { useRequest } from '@/hooks/useRequest'

import { Field } from '../Field'
import { Wrapper, Form } from './style';

import * as yup from 'yup'

const schema = yup.object().shape({
	email: yup.string().email('email должен быть валидным').required('Это обязательное поле email'),
	password: yup.string().min(6, 'Пароль должен содержать не менее 6 символов').required('Это обязательное поле password'),
})

export const SignInForm = () => {
	const { doRequest } = useRequest()

	const signInHandle = async (values) => {
		const { email, password } = values

		const data = await doRequest({ 
			url: '/api/users/signin',
			body: {
				email,
				password
			}
		})

		if (data?.message) {
			Router.push('/')
		}
	}

	return (
		<Wrapper>
			<Formik
				validationSchema={schema}
				initialValues={{
					email: '',
					password: ''
				}}
				onSubmit={signInHandle}
			>
				{() => (
					<Form>
						<h1>Войти в учетную запись</h1>
						<Field name='email' type='email' header='Email' />
						<Field name='password' type='password' header='Пароль' />
						<Button variant="primary" type="submit" className="mt-3">Войти</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

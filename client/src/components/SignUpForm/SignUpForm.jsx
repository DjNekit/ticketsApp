import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap-v5';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Wrapper, Form } from './style';

const schema = yup.object().shape({
	email: yup.string().required(),
	password: yup.string().required(),
});

export const SignUpForm = props => {
	return (
		<Wrapper>
			<Formik
				validationSchema={schema}
				onSubmit={async ({ email, password, confirmPassword }) => {
					const { data } = await axios.post('/api/users/signup', {
						email,
						password,
					});
					console.log(data);
				}}
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
				}}
			>
				{({ handleSubmit, handleChange, values, errors }) =>
					<Form noValidate onSubmit={handleSubmit}>
						<h1>Регистрация</h1>
						<Form.Group md="4" controlId="email" className="mt-3">
							<Form.Label>Введите Email</Form.Label>
							<Form.Control
								type="text"
								placeholder="Email"
								aria-describedby="inputGroupPrepend"
								name="email"
								value={values.email}
								onChange={handleChange}
								isInvalid={!!errors.email}
								autoComplete="true"
							/>
							<Form.Control.Feedback type="invalid">
								{errors.email}
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group md="3" controlId="password" className="mt-3">
							<Form.Label>Введите пароль</Form.Label>
							<Form.Control
								type="password"
								placeholder="Пароль"
								name="password"
								value={values.password}
								onChange={handleChange}
								isInvalid={!!errors.password}
								autoComplete="true"
							/>
							<Form.Control.Feedback type="invalid">
								{errors.password}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group md="3" controlId="confirmPassword" className="mt-3">
							<Form.Label>Повторите пароль</Form.Label>
							<Form.Control
								type="password"
								placeholder=""
								name="confirmPassword"
								value={values.confirmPassword}
								onChange={handleChange}
								isInvalid={!!errors.confirmPassword}
								autoComplete="true"
							/>

							<Form.Control.Feedback type="invalid">
								{errors.confirmPassword}
							</Form.Control.Feedback>
						</Form.Group>

						<Button type="submit" className="mt-3">
							Зарегистрироваться
						</Button>
					</Form>
				}
			</Formik>
			{/* <Form onSubmit={handleSubmit}>
				<h1>Регистрация</h1>
				<Form.Group controlId="email" className="mt-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Введите email" />
					<Form.Text className="text-muted">Ваш email не будет передан третьим лицам</Form.Text>
				</Form.Group>
				<Form.Group controlId="password" className="mt-3">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="Пароль" />
				</Form.Group>
				<Form.Group controlId="confirmPassword" className="mt-3">
					<Form.Label>Подтвердите пароль</Form.Label>
					<Form.Control type="password" placeholder="Пароль" />
				</Form.Group>
				<Button variant="primary" type='submit' className="mt-3">
					Зарегистрироваться
				</Button>
			</Form> */}
		</Wrapper>
	);
};

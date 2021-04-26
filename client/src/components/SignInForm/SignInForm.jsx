import { Button } from 'react-bootstrap-v5';

import { Wrapper, Form } from './style';

export const SignInForm = props => {
	return (
		<Wrapper>
			<Form>
				<h1>Войти в учетную запись</h1>
				<Form.Group controlId="formBasicEmail" className="mt-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Введите email" />
				</Form.Group>
				<Form.Group controlId="formBasicPassword" className="mt-3">
					<Form.Label>Пароль</Form.Label>
					<Form.Control type="password" placeholder="Пароль" />
				</Form.Group>
				<Button variant="primary" type="submit" className="mt-3">
					Войти
				</Button>
			</Form>
		</Wrapper>
	);
};

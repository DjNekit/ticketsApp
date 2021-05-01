import styled from 'styled-components';
import { Form as F } from 'formik';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(300px, 528px);
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
`;

export const Form = styled(F)`
  box-shadow: 0px 0px 6px 3px rgba(34, 60, 80, 0.2);
  border-radius: 5px;
  padding: 2rem;
`;

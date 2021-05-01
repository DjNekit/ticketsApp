import React from 'react';
import { Form } from 'react-bootstrap-v5';
import { Field as FormikField, ErrorMessage } from 'formik';

type Props = {
	name: string,
	type: string,
	header?: string,
	placeholder?: string
}
export const Field: React.FC<Props> = ({ name, type, header, placeholder = '' }) => {
	return (
		<FormikField name={name}>
			{({ field, meta }) =>
				<div className="mt-2">
					{header && <Form.Label htmlFor={name}>{header}</Form.Label>}
					<Form.Control
						type={type}
						{...field}
						isInvalid={meta.touched && meta.error}
						placeholder={placeholder}
						autoComplete='true'
					/>
					<Form.Control.Feedback type="invalid">
						<ErrorMessage name={name} />
  				</Form.Control.Feedback>
				</div>}
		</FormikField>
	);
};

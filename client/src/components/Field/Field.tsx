import { Form } from 'react-bootstrap-v5'
import { Field as FormikField } from 'formik'

type Props = {
	name: string,
	type: string,
	header?: string,
	placeholder?: string
	error?: string
}
export const Field = ({ name, type, header, placeholder = '', error }: Props) => {
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
						{meta.touched && meta.error}
  				</Form.Control.Feedback>
				</div>}
		</FormikField>
	)
}

import { usePopover } from '@/hooks/usePopover'
import { Button } from 'react-bootstrap-v5'

export default function HomePage({ user }) {
	const { showPopover, hidePopover } = usePopover()
	const openPopover = () => {
		showPopover({ message: 'Успешно!', variant: 'success' })
	}
	return (
		<div className='container'>
			<h1>Home Page</h1>
			{user && <h1>Auth!!! Your email is {user.email}</h1>}
			<Button onClick={openPopover}>Show</Button>{' '}
			<Button onClick={hidePopover}>hide</Button>
		</div>

	)
}



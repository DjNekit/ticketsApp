import { usePopover } from '@/hooks/usePopover'
import { Button } from 'react-bootstrap-v5'
import { useRequest } from '@/hooks/useRequest'

export default function HomePage({ user }) {
	const { doRequest } = useRequest()
	const { showPopover, hidePopover } = usePopover()
	const openPopover = () => {
		showPopover({ message: 'Успешно!', variant: 'success' })
	}

	const click = async () => {
		const res = await doRequest({
			url: '/api/tickets',
			body: {
				title: 'dfdsfsdf',
				price: 1000
			}
		})

		console.log(res)
	}
	return (
		<div className='container'>
			<h1>Home Page</h1>
			{user && <h1>Auth!!! Your email is {user.email}</h1>}
			<Button onClick={openPopover}>Show</Button>{' '}
			<Button onClick={hidePopover}>hide</Button>{' '}
			<Button onClick={click}>POST</Button>
		</div>

	)
}



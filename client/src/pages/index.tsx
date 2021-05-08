import { usePopover } from '@/hooks/usePopover'

export default function HomePage({ user }) {
	const { showPopover, hidePopover } = usePopover()
	const openPopover = () => {
		showPopover({ message: 'Успешно!', variant: 'success' })
	}
	return (
		<div className='container'>
			<h1>
				Home Page
				</h1>
			{user && <h1>Auth!!! Your email is {user.email}</h1>}
			<button onClick={openPopover}>Show</button>
			<button onClick={hidePopover}>hide</button>
		</div>

	)
}



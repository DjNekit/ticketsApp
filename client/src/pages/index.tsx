import axios from 'axios'
import { Layout } from '@/components/Layout'

import { usePopover } from '@/hooks/usePopover'

export default function HomePage({ user }) {
	const { showPopover, hidePopover } = usePopover()
	const openPopover = () => {
		showPopover({ message: 'Успешно!', variant: 'success' })
	}
	return (
		<Layout isAuth={!!user}>
			<div className='container'>
				<h1>
					Home Page
				</h1>
				{user && <h1>Auth!!! Your email is {user.email}</h1>}
				<button onClick={openPopover}>Show</button>
				<button onClick={hidePopover}>hide</button>
			</div>
    </Layout>
	)
}

export const getServerSideProps = async ({ req }) => {
	let user = null
	try {
		const { data } = await axios.get(`http://tickets.dev/api/users/currentuser`, {
			headers: req.headers
		})
		user = data.user
		return {
			props: {
				user: data.user
			}
		}
	} catch (e) {
		return {
			props: {
				user: null
			}
		}
	}

	
} 

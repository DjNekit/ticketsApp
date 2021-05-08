import buildClient from '@/api/build-client'
import { GetServerSideProps } from 'next'
import { Layout } from '@/components/Layout'
import { usePopover } from '@/hooks/usePopover'
import { IUser } from '@/types'

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

export const getServerSideProps: GetServerSideProps = async ctx => {
	const client = buildClient(ctx)
	const { data } = await client.get<IUser>('/api/users/currentuser')

	return {
		props: data
	}
} 

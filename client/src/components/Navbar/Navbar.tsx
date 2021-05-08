import axios from 'axios'
import { useCallback } from 'react'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { useRouter } from 'next/router'

import { Navbar as BNavbar } from 'react-bootstrap-v5'

export const Navbar = ({ isAuth }) => {
  const { pathname, push } = useRouter()
	
	const signoutHandle = useCallback(async () => {
		await axios.post('/api/users/signout')
		push('/')
	}, [])

	return (
    <BNavbar bg="dark" variant="dark" sticky="top">
      <div className="d-flex container justify-content-between" >
        <BNavbar.Brand href="#home">Tickets.dev</BNavbar.Brand>
        <DesktopMenu isAuth={isAuth} pathname={pathname} onSignout={signoutHandle}/>
        <MobileMenu isAuth={isAuth} pathname={pathname} onSignout={signoutHandle}/>
      </div>
		</BNavbar>
	)
}

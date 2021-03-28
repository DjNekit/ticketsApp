import Link from 'next/link'
import { useRouter } from 'next/router'

import { Navbar, Nav } from 'react-bootstrap-v5'

export const DesktopNavbar = props => {
	const { pathname } = useRouter()

	return (
		<Navbar className="px-5 d-flex justify-content-between mobile-hide" bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Link href="/">
					<Nav.Link as='div' active={pathname === '/'}>Home</Nav.Link>
				</Link>
				<Link href="/auth/signin">
					<Nav.Link as='div' active={pathname === '/auth/signin'}>SignIn</Nav.Link>
				</Link>
				<Link href="/auth/signup">
					<Nav.Link as='div' active={pathname === '/auth/signup'}>SignUp</Nav.Link>
				</Link>
			</Nav>
		</Navbar>
	);
};

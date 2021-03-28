import Link from 'next/link'
import { useRouter } from 'next/router'
import { ListGroup, Nav } from 'react-bootstrap-v5';
import { SideMenuWrapper, Menu } from '../style';

export const SideMenu = ({ open, close }) => {

    const { pathname } = useRouter()

	return (
		<SideMenuWrapper open={open}>
			<Menu open={open}>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						fill="currentColor"
						className="bi bi-x"
						viewBox="0 0 16 16"
						onClick={close}
					>
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</div>
				<ListGroup>
					<ListGroup.Item active={pathname === '/'}>
						<Link href="/">
							<Nav.Link as="div">Home</Nav.Link>
						</Link>
					</ListGroup.Item>
					<ListGroup.Item active={pathname === '/auth/signin'}>
						<Link href="/auth/signin">
							<Nav.Link as="div">SignIn</Nav.Link>
						</Link>
					</ListGroup.Item>
					<ListGroup.Item active={pathname === '/auth/signup'}>
						<Link href="/auth/signup">
							<Nav.Link as="div">SignOut</Nav.Link>
						</Link>
					</ListGroup.Item>
				</ListGroup>
			</Menu>
		</SideMenuWrapper>
	);
};

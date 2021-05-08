import { useState, useCallback } from 'react'
import Link from 'next/link'
import { ListGroup, Nav } from 'react-bootstrap-v5'
import { MenuIcon } from '../Icons/MenuIcon'
import { CloseIcon } from '../Icons/CloseIcon'
import { SideMenuWrapper, Menu, NavLink } from './style'
import { IMenu } from './types'

export const MobileMenu: React.FC<IMenu> = ({ isAuth, pathname, onSignout }) => {
	const [open, setOpen] = useState(false)

	const handleChange = useCallback(() => setOpen(prev => !prev), [])

	return (
		<div className="desktop-hide">
			<Nav className="mr-auto">
				<MenuIcon onClick={handleChange} />
			</Nav>
			<SideMenuWrapper open={open}>
				<Menu open={open}>
					<div>
						<CloseIcon onClick={handleChange}/>
					</div>
					<ListGroup>
						<ListGroup.Item active={pathname === '/'}>
							<Link href="/">
								<NavLink as="div">Главная</NavLink>
							</Link>
						</ListGroup.Item>
						{isAuth
							? <ListGroup.Item>
										<NavLink as="div" onClick={onSignout}>Выйти</NavLink>
								</ListGroup.Item>
							:
								<>
									<ListGroup.Item active={pathname === '/auth/signin'}>
										<Link href="/auth/signin">
											<NavLink as="div">Войти</NavLink>
										</Link>
									</ListGroup.Item>
									<ListGroup.Item active={pathname === '/auth/signup'}>
										<Link href="/auth/signup">
											<NavLink as="div">Регистрация</NavLink>
										</Link>
									</ListGroup.Item>
								</>
						}
					</ListGroup>
				</Menu>
			</SideMenuWrapper>
		</div>
	)
}

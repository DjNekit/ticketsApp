import Link from 'next/link'
import { Nav } from 'react-bootstrap-v5'
import { IMenu } from './types'

export const DesktopMenu: React.FC<IMenu> = ({ isAuth, pathname, onSignout }) => {
  return (
    <Nav className="mr-auto mobile-hide">
      <Link href="/">
        <Nav.Link as='div' className='pointer' active={pathname === '/'}>Главная</Nav.Link>
      </Link>
      {isAuth
        ? <Nav.Link as='div' className='pointer' onClick={onSignout}>Выйти</Nav.Link>
        :
          <>
            <Link href="/auth/signin">
              <Nav.Link as='div' className='pointer' active={pathname === '/auth/signin'}>Войти</Nav.Link>
            </Link>
            <Link href="/auth/signup">
              <Nav.Link as='div' className='pointer' active={pathname === '/auth/signup'}>Регистрация</Nav.Link>
            </Link>
          </>
      }
    </Nav>
  )
}
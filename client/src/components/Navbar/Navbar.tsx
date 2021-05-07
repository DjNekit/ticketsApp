import { DesktopNavbar } from './DesktopNavbar'
import { MobileNavbar } from './MobileNavbar'

export const Navbar = ({ isAuth }) => {
	return (
    <>
      <DesktopNavbar isAuth={isAuth}/>
      <MobileNavbar />
    </>
	)
}

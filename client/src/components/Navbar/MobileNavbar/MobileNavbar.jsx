import { useCallback, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap-v5';
import { MenuIcon } from './MenuIcon';
import { SideMenu } from './SideMenu';

export const MobileNavbar = props => {
	const [open, setOpen] = useState(false);

	const handleChange = useCallback(() => setOpen(prev => !prev));

	return (
		<Navbar className="px-3 d-flex justify-content-between desktop-hide" bg="dark" variant="dark" sticky="top">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<MenuIcon onClick={handleChange} />
			</Nav>
			<SideMenu open={open} close={handleChange} />
		</Navbar>
	);
};

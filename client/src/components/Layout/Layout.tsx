import { GlobalPopover } from '../GlobalPopover';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Wrapper } from './style';

export const Layout = ({ children }) => {
	return (
		<Wrapper>
			<GlobalPopover />
			<Navbar />
			{children}
			<Footer />
		</Wrapper>
	);
};

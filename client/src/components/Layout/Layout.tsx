import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Wrapper } from './style';

export const Layout = ({ children }) => {
	return (
		<Wrapper>
			<Navbar />
			{children}
			<Footer />
		</Wrapper>
	);
};

import { GlobalPopover } from '../GlobalPopover';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Wrapper } from './style';

type Props = {
	isAuth?: boolean
	children: React.ReactNode
}
export const Layout = ({ isAuth = false, children }: Props) => {
	return (
		<Wrapper>
			<GlobalPopover />
			<Navbar isAuth={isAuth}/>
			{children}
			<Footer />
		</Wrapper>
	);
};

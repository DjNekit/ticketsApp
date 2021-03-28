import { Layout } from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .desktop-hide {
        @media (min-width: 577px) {
            display: none!important;
        }
    }

    .mobile-hide {
        @media (max-width: 576px) {
            display: none!important;
        }
  }
`;

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp

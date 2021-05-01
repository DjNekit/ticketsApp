import { Layout } from '../components/Layout';
import NextNprogress from 'nextjs-progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .pointer {
    cursor: pointer;
  }

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
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{
          showSpinner: false
        }}
      />
		</Layout>
	);
};

export default MyApp;

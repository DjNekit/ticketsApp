import App from "next/app"
import { Provider } from 'react-redux'

import { buildClient } from '@/api/build-client'
import { useStore } from '@/redux/store'
import { NextProgress } from '@/components/NextProgress'
import { Layout } from '@/components/Layout'
import { GlobalStyle } from '@/globalStyle'
import { IUser } from '@/types'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function AppComponent({ Component, pageProps, user }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <NextProgress />
  		<Layout isAuth={!!user}>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </Provider>
  );
}

AppComponent.getInitialProps = async context => {
  const { pageProps } = await App.getInitialProps(context)

  // Получение текущего зарегистрированного пользователя или его отсутствия
  const client = buildClient(context.ctx)
  const { data } = await client.get<IUser>('/api/users/currentuser')

  return {
    pageProps,
    ...data
  }
}

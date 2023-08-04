import '@/styles/globals.css'

//Layout
import Layout from '@/Components/layout/Layout'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '@/Redux/store'

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <SessionProvider session={pageProps}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
    </Provider>
  )
}

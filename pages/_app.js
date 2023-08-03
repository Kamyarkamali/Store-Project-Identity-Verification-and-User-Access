import '@/styles/globals.css'

//Layout
import Layout from '@/Components/layout/Layout'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  return(
    <SessionProvider session={pageProps}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

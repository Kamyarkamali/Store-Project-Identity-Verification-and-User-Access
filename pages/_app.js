import '@/styles/globals.css'

//Layout
import Layout from '@/Components/layout/Layout'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

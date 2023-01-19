import Head from 'next/head'
import NavigationBar from '@/components/nav-bar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Minh Hai Portfolio</title>
        <meta name="description" content="Minh Hai's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavigationBar />
        <Component {...pageProps} />
      </main>
    </>
  )
}

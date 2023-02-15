import Head from 'next/head'
import NavigationBar from '@/components/nav-bar'
import SideNav from '@/components/side-nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Minh Hai Portfolio</title>
        <meta name="description" content="Minh Hai's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avatar.png" />
      </Head>
      <main>
        <NavigationBar />
        <SideNav>
          <Component {...pageProps} />  
        </SideNav>
      </main>
    </>
  )
}

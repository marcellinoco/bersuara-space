import '../styles/globals.css'

import Head from 'next/head'
import Navbar from '@components/Navbar'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    
    <div className="flex flex-col min-h-screen m-0 p-0 font-poppins">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </>)
}

export default MyApp

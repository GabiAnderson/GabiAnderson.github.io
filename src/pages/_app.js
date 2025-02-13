import NavBar from '@/components/Common/NavBar'
import Footer from '@/components/Common/Footer'
import '@/styles/globals.css'
// can choose any font from google
import {Montserrat} from "next/font/google"
import Head from 'next/head'

// initialize font - read more from njs documentation - https://nextjs.org/docs Font Optimization
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
}
)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

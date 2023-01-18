import '../styles/globals.css'
import { Navbar } from '../commons/Navbar'
import { Footer } from '../commons/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

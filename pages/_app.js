import Bottombar from '../components/Bottombar'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Component {...pageProps} />
      {/* <Bottombar /> */}
    </>
  )
}

export default MyApp

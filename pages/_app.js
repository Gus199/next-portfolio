import '../styles/globals.css'
import { useModalContext } from '../contexts/ModalContext'
import ModalProvider from '../contexts/ModalContext'

function MyApp({ Component, pageProps }) {
  
  return (
  <ModalProvider>
  <Component {...pageProps} />
  </ModalProvider>
  )
}

export default MyApp

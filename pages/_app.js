import '../styles/globals.css'
import Layout from '../components/Layout'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

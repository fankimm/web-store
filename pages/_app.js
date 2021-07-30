import '../styles/globals.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../src/component/Footer'
import Header from '../src/component/Header'







function MyApp({ Component, pageProps }) {
  
  return (

       <div className="my">

       

        <Header />
        
        <Component {...pageProps} />

        <Footer />
        </div>


    
  )
}

export default MyApp

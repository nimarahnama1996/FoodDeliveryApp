import React, { Fragment } from 'react'



import Header from '../Header/Header'
import Routes from '../../routes/Routers'
import Footer from '../Footer/Footer'



const Layout = () => {
  return (
    <Fragment>

        <Header/>
        
        <div>
            <Routes/>
        </div>

        <Footer/>
    </Fragment>
  )
}

export default Layout
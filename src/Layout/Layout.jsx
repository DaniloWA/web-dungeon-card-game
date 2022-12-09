import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Payload from './Payload'
import './Layout.css'

const Layout = (props) => {
  return (
    <div className='layout'>
      <Header />
      <Payload>
        {props.children}
      </Payload>
      <Footer />
    </div>
  )
}

export default Layout
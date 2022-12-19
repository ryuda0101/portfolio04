import React from 'react'
import Header from './Header'
import MainCont from './MainCont'
import Footer from './Footer'

import '../css/style.css'

function Layout() {
  return (
    <div id='wrap'>
      <Header></Header>
      <MainCont></MainCont>
      <Footer></Footer>
    </div>
  )
}

export default Layout

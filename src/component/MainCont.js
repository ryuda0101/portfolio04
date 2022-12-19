import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from './Container'
import About from './About'
import LearnExplore from './LearnExplore'
import Shop from './Shop'
import BlackTea from './BlackTea'
import Herbal from './Herbal'
import Cold from './Cold'
import Gift from './Gift'

const MainCont = () => {
   return (
      <Routes>
         <Route path='/' element={<Container></Container>}></Route>
         <Route path='/About' element={<About></About>}></Route>
         <Route path='/Learn&Explore' element={<LearnExplore></LearnExplore>}></Route>
         <Route path='/Shop' element={<Shop></Shop>}></Route>
         <Route path='/Shop/Black' element={<BlackTea/>}></Route>
         <Route path='/Shop/Herbal' element={<Herbal></Herbal>}></Route>
         <Route path='/Shop/Cold' element={<Cold></Cold>}></Route>
         <Route path='/Shop/Gift' element={<Gift></Gift>}></Route>
      </Routes>
   )
}

export default MainCont

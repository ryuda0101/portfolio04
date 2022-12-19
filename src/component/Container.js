import React from 'react'
import Cont1 from './Cont1'
import Cont2 from './Cont2'

const Container = () => {
  return (
    <div id='container'>
        <div className='main_banner'>
          <div className='center'>
            <h2 className='now'>Now we're Talking</h2>
            <h3>SINCE 1837</h3>
            <h4>TETLEY</h4>
          </div>
        </div>
      <Cont1></Cont1>
      <Cont2></Cont2>
    </div>
  )
}

export default Container

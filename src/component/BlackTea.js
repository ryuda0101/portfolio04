import React from 'react'
import {BlackTeas} from '../data/prdList'
import Banner from './Banner'

const BlackTea = () => {
  return (
    <div id='prdWrap'>
      <Banner title={"Black Tea"}></Banner>
      <div className='teaWrap'>
        <div className='center'>
        <div className='prdList'>
          {
            BlackTeas.map((item,index) => {
              return(
                <div className='prdBox' key={index}>
                  <img src={"/img/prdList/"+item.img+".jpg"} />
                  <div className='left_box'>
                    <h3>{item.name}<br/><span>{item.nameEng}</span></h3>
                    <p>{item.taste}</p>
                    <p>{item.reward}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default BlackTea

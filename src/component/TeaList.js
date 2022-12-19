import React from 'react'

const TeaList = (props) => {
  return (
    <li className={`list_item ${props.activeData ? "act" : null}`}>
        <button className='button' onClick={props.toggleData}>
            <p>{props.countryData.country}</p>
            <span className='control'>+</span>
        </button>
        <div className={`context ${props.activeData ? "on" : null}`}>
            <p>{props.countryData.context}</p>
        </div>
    </li>
  )
}

export default TeaList

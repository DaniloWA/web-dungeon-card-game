import React from 'react'
import './Layout.css'

const Payload = (props) => {
  return (
    <div className='payload'>      
      {props.children}
    </div>
  )
}

export default Payload
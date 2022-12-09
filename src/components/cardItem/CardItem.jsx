import React from 'react'
import './CardItem.css'

const CardItem = ({imgAvatar,name ,description}) => {
  return (
    <div className='cardItem'>
      <img src={imgAvatar} alt="Sample" />
      <div className='cardItem_title'>
        <h2>{name}</h2>
      </div>
      <div className="cardItem_description">
        {description}
      </div>
    </div>
   )
}

export default CardItem
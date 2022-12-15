import React from 'react'
import './CardMob.css'
import { useHearts } from './hooks/useHearts'



const CardMob = ({lvl = 1, life = 4, exp = 0, imgAvatar, name, weapon_count = 0, imgWeapon, dmg = 0, description}) => {
  const [hearts] = useHearts(life)
  
  return (
    <div className='cardMob'>
      <div className='cardMob_header'>
        <div className="cardMob_header_lvl">
          {lvl}      
        </div>
        <div className="cardMob_header_life">
          {hearts}
        </div>
        <div className="cardMob_header_exp">
          {exp}
        </div>
      </div>
      <div className="cardMob_image">
        <div className="cardMob_image_img">
          <img src={imgAvatar} alt="teste" />
        </div>
        <div className="cardMob_image_title">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="cardMob_description">
        <div className="cardMob_description_weapon">
          <img src={imgWeapon} alt={imgWeapon?.name} />
          <div className="cardMob_description_weapon_count">
            {weapon_count}
          </div>
        </div>
        <div className="cardMob_description_dmg">
          {dmg}
        </div>
        <div className="cardMob_description_type">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardMob
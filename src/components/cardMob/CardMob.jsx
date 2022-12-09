import React from 'react'
import './CardMob.css'

const heartLive = { "src": "/img/heart.png"}
const heartDie = { "src": "/img/cardiogram.png"}

const CardMob = ({lvl = 1, life = 4, exp = 0, imgAvatar, name, weapon_count = 0, imgWeapon, dmg = 0, description, type}) => {
  const hearts = [];

  for (let i = 0; i < life; i++) {
    hearts.push(<img key={Math.random()} src={heartLive.src} alt="heartLive"/>);
  }
  for (let i = 0; i < 4 - life; i++) {
    hearts.push(<img key={Math.random()} src={heartDie.src} alt="heartLive"/>);
  }
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
        <img src={imgAvatar} alt="teste" />
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
          <small>{type}</small>
        </div>
      </div>
    </div>
  )
}

export default CardMob
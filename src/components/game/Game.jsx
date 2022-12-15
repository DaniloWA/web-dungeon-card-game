import React, { useEffect, useState } from 'react'
import CardMob from './../cardMob/CardMob'
import CardItem from './../cardItem/CardItem'
import cards  from './constants'
import F from './functions'


const Game = () => {
  const [gameOver, setGameOver] = useState(true)
  const [winner, setWinner] = useState('')
  const [boardDeck, setBoardDeck] = useState([])
  const [turn, setTurn] = useState(0)
  const [logPlay, setLogPlay] = useState([])
  const [lifePlayer, setLifePlayer] = useState(4)
  const [playerScore, setPlayerScore] = useState(0)
  const [playerExp, setPlayerExp] = useState(0)
  const [playerLevel, setPlayerLevel] = useState(1)
  const [countKill, setCountKill] = useState(0)
  const [weaponEquip, setWeaponEquip] = useState('')
  const [weaponUseCount, setWeaponUseCount] = useState(0)
  const [boardLevel, setBoardLevel] = useState(1)

  const noWeapon = { "src": "/img/no_weapon.png"}

  useEffect(() => {
    setBoardDeck(F.shuffleCardBoard(cards.monsterCards,cards.itemCards,cards.weaponCards))
    F.setPlayerMovement()
  }, [])

  const onMovePlayer = () => {
    //Chegar se o jogador pode ir para tal
  }
/* lvl = 1, life = 4, exp = 0, imgAvatar, name, weapon_count = 0, imgWeapon, dmg = 0, description, type */
  return (
    <>
      { boardDeck ? 
      boardDeck.map((card,i)=>{
        if(i === 4){
          return(
            <CardMob
              key={i}
              lvl = {playerLevel}
              life = {lifePlayer}
              exp = {playerExp}
              imgAvatar = "/img/avatar.png"
              name = "Jogador"
              weapon_count = {weaponEquip ? weaponEquip.useCount : 0}
              dmg = {weaponEquip ? weaponEquip.dmg : 0}
              imgWeapon= {weaponEquip ? weaponEquip.img.src : noWeapon.src}
              description = "lutador nato!"
            />
          )
        }
        if(card.typeCard === 0){
          return(
            <CardMob
              key={i}
              lvl = {card.lvl}
              life = {card.life}
              exp = {card.exp}
              imgAvatar = {card.img.src}
              name = {card.name}
              weapon_count = {1}
              dmg = {card.dmg}
              imgWeapon= {card.imgWeapon.src}
              description = {card.description}
            /> 
          )
        }
        if(card.typeCard === 1 || card.typeCard === 2){
          return(
            <CardItem
              key={i}
              imgAvatar = {card.img.src}
              name = {card.title}
              description = {card.description}
            /> 
          )
        }
        return null
}) : 
      <h1>Tivemos um probleminha!</h1> }
    </>
  )
}

export default Game
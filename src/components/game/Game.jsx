import React, { useEffect, useState } from 'react'
import CardMob from './../cardMob/CardMob'
import CardItem from './../cardItem/CardItem'



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

  const heartLive = { "src": "/img/heart.png"}
  const heartDie = { "src": "/img/cardiogram.png"}
  const noWeapon = { "src": "/img/no_weapon.png"}

  const monsterCards = [
    {
      typeCard: 0,
      name: "Galinha pré-histórica",
      description: "Dizem ser imortal!",
      life: 1,
      lvl: 1,
      dmg: 1,
      exp: 50,
      img: { "src": "/img/galinha.jpeg"},
      imgWeapon: { "src": "/img/presas.png"}
    },
    {
      typeCard: 0,
      name: "Lobo monstro",
      description: "Lobo selvagem! Altamente agressivo",
      life: 2,
      lvl: 1,
      dmg: 2,
      exp: 150,
      img: { "src": "/img/wolf_monster.jpeg"},
      imgWeapon: { "src": "/img/presas.png"}
    },
    {
      typeCard: 0,
      name: "Golem de Pedra",
      description: "Golem muito resistente e forte!",
      life: 3,
      lvl: 1,
      dmg: 3,
      exp: 300,
      img: { "src": "/img/golem.jpeg"},
      imgWeapon: { "src": "/img/presas.png"}
    },
  ]

  const itemCards = [
    {
      typeCard: 1,
      title: "Bau",
      description: "'Nem sempre ajuda!'",
      img: { "src": "/img/bau-de-tesouro.png"},
    },
    {
      typeCard: 1,
      title: "Vida",
      description: "Pode ter pouco ou muito mas sempre tem :)",
      img: { "src": "/img/heart.png"},
    }
  ]

  const weaponCards = [
    {
      typeCard: 2,
      dmg: 1,
      name: "Sword",
      img: { "src": "/img/sword.png"},
      useCount: 1
    },
    {
      typeCard: 2,
      dmg: 1,
      name: "Arma magica",
      img: { "src": "/img/varinha-magica.png"},
      useCount: 1
    },
    {
      typeCard: 2,
      dmg: 100,
      name: "Arma Lendária",
      img: { "src": "/img/arma-lendaria.png"},
      useCount: 1
    },
  ]


const shuffleCardBoard = (monsterCards,itemCards,weaponCards) => { 
  const monsters = []
  const weapons = []
  const items = []
  const board = []
  // 8 cards / 5 monstros - 2 items - 2 armas
  for (let i = 1; i < 6; i++) {
    monsters.push(monsterCards[Math.floor(Math.random() * monsterCards.length)]);
  }
  for (let i = 0; i < 2; i++) {
    weapons.push(weaponCards[Math.floor(Math.random() * weaponCards.length)]);
  }
  for (let i = 0; i < 2; i++) {
    items.push(itemCards[Math.floor(Math.random() * itemCards.length)]);
  }
  board.push(...monsters,...weapons,...items)

  const shuffledBoard = board
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  setBoardDeck(shuffledBoard)
}

  useEffect(() => {
    shuffleCardBoard(monsterCards,itemCards,weaponCards)
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
            <CardMob
              key={i}
              imgAvatar = {card.img.src}
              name = {card.title}
              description = {card.description}
            /> 
          )
        }
        return null
}) : 
      <p>falhou!</p> }
    </>
  )
}

export default Game
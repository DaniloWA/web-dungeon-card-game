export const monsterCards = [
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

 export const itemCards = [
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

export const weaponCards = [
    {
      typeCard: 2,
      dmg: 1,
      title: "Sword",
      img: { "src": "/img/sword.png"},
      description: "Ataca um mob a sua frente",
      useCount: 1
    },
    {
      typeCard: 2,
      dmg: 1,
      title: "Arma magica",
      img: { "src": "/img/varinha-magica.png"},
      description: "Ataca uma linha inteira do tabuleiro! Cuidado.",
      useCount: 1
    },
    {
      typeCard: 2,
      dmg: 100,
      title: "Arma Lendária",
      img: { "src": "/img/arma-lendaria.png"},
      description: "Mata qualquer mob do tabuleiro e teletransporta para ele",
      useCount: 1
    },
  ]
export const shuffleCardBoard = (monsterCards,itemCards,weaponCards, playerCard) => { 
  const monsters = []
  const weapons = []
  const items = []
  const board = []
  const player = [...playerCard]
  // 8 cards / 5 monstros - 2 items - 2 armas
  
  for (let i = 1; i < 5; i++) {
    monsters.push(monsterCards[Math.floor(Math.random() * monsterCards.length)]); // pegando um objeto aleatório de dentro do array
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

  shuffledBoard.splice(4, 0, ...player); // adicionando player ao centro do tabuleiro
  
  return shuffledBoard
}
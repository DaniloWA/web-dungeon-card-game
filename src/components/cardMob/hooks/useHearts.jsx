import React from 'react'

const heartLive = { "src": "/img/heart.png"}
const heartDie = { "src": "/img/cardiogram.png"}

export const useHearts = (life) => {
  const hearts = [];

  for (let i = 0; i < life; i++) {
    hearts.push(<img key={Math.random()} src={heartLive.src} alt="heartLive"/>);
  }
  for (let i = 0; i < 4 - life; i++) {
    hearts.push(<img key={Math.random()} src={heartDie.src} alt="heartLive"/>);
  }

  return [hearts];
}

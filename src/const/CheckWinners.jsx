import { COMBOS } from './Combos'

const comb = COMBOS

export const checkWinner = (boardToCheck) => {
  const { ver, hor, diagIz, diagDer } = comb()
  const combos = [ver, hor, diagIz, diagDer]
  for (const co of combos) {
    for (let i = 0; i < 42; i++) {
      const [a, b, c, d] = co[i]
      if (
        boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c] &&
          boardToCheck[a] === boardToCheck[d]
      ) {
        return boardToCheck[a]
      }
    }
  }
}

export const updateBoard = (index) => {
  const checkWinner = (boardToCheck) => {
    const { ver, hor, diagIz, diagDer } = comb
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
  if (board[index] || winner) return

  const numero = 7
  const limite = 41
  let suma = index

  while (suma + numero <= limite) {
    suma += numero
  }

  while (board[suma]) {
    if (suma < 6) return
    suma -= numero
  }

  const newBoard = [...board]
  newBoard[suma] = turn
  setBoard(newBoard)

  const newTurn = turn === TURNS.red ? TURNS.yellow : TURNS.red
  setTurn(newTurn)

  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)

  const newWinner = checkWinner(newBoard)
  if (newWinner) {
    setWinner(newWinner)
  }
}

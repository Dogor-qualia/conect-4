import { useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './const/const'
import { WinnerModal } from './components/WinnerModal'
import { checkWinner } from './const/CheckWinners'

function App () {
  const [board, setBoard] = useState(() => {
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : Array(42).fill(null)
  }
  )

  const [turn, setTurn] = useState(() => {
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(42).fill(null))
    setTurn(TURNS.red)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const updateBoard = (index) => {
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

  return (
    <section className='container'>
      <button onClick={resetGame}>Empezar</button>
      <div className='board'>
        {board.map((_, index) => {
          return (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {board[index]}
            </Square>
          )
        })}
      </div>

      <section className='turn'>
        <Square isSelected={turn === TURNS.red}>
          {TURNS.red}
        </Square>
        <Square isSelected={turn === TURNS.yellow}>
          {TURNS.yellow}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </section>
  )
}
export default App

import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Gano'
  return (

    <section className='winnerModal'>
      <div className='winnerText'>
        {winnerText}
      </div>
      <header>
        <Square>
          {winner}
        </Square>
      </header>
      <footer>
        <button onClick={resetGame}> empezar de nuevo</button>
      </footer>
    </section>

  )
}

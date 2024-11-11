import { board } from '../const/const'
import { Square } from './Square'

export const Board = ({ update }) => {
  return (
    <div className='board'>
      {board.map((_, index) => {
        return (
          <Square update={updateBoard} key={index} index={index}>
            {board[index]}
          </Square>
        )
      })}
    </div>
  )
}

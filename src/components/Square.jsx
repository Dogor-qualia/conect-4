export function Square ({ isSelected, updateBoard, children, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const hadleCLick = () => {
    updateBoard(index)
  }
  return (

    <>
      <div onClick={hadleCLick} className={className}>
        {children}
      </div>
    </>
  )
}

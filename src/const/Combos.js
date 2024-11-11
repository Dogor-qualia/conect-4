export const COMBOS = () => {
  const ver = []
  const hor = []
  const diagIz = []
  const diagDer = []
  const abDer = []
  const abIz = []

  const exeptions = [4, 11, 18, 25, 32]
  const exeptions2 = [5, 12, 19, 26, 33]
  const exeptions3 = [6, 13, 20, 27, 34]

  function fillArray (index, array, fill, exeptions = {}) {
    const { e1 = [], e2 = [], e3 = [] } = exeptions
    for (let total = 0; total < 4; total++) {
      let ind = index
      if (e1.includes(ind)) ind += 3
      else if (e2.includes(ind)) ind += 2
      else if (e3.includes(ind)) ind += 1
      array.push(ind + fill * array.length)
    }
    return array
  }

  for (let i = 0; i < 42; i++) {
    const arrayVer = []
    const arrayHor = []
    const arrayDiagIz = []
    const arrayDiagDer = []
    const arrayAbDer = []
    const arrayAbIz = []
    const ind = i

    ver.push(fillArray(ind, arrayVer, 7, []))
    hor.push(fillArray(ind, arrayHor, 1, { e1: exeptions, e2: exeptions2, e3: exeptions3 }))
    diagDer.push(fillArray(ind, arrayDiagDer, 8, { e1: exeptions, e2: exeptions2, e3: exeptions3 }))
    diagIz.push(fillArray(ind, arrayDiagIz, 6, { e1: exeptions, e2: exeptions2, e3: exeptions3 }))
    abDer.push(fillArray(ind, arrayAbDer, -8, { e1: exeptions, e2: exeptions2, e3: exeptions3 }))
    abIz.push(fillArray(ind, arrayAbIz, -6, { e1: exeptions, e2: exeptions2, e3: exeptions3 }))
  }

  return { ver, hor, diagDer, diagIz }
}

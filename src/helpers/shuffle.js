function randomCells(cellsColors) {
  let newArr = [...cellsColors, ...cellsColors];
  let i = newArr.length;
  let r;
  let temp;
  while (i--) {
    r = Math.floor(Math.random() * (i + 1));

    temp = newArr[i];
    newArr[i] = newArr[r];
    newArr[r] = temp;
  }

  return newArr;
}

export default randomCells;

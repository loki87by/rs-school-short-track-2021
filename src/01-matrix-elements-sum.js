function getMatrixElementsSum(matrix) {
  const arr = matrix[0].flat();
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i - 1][j] !== 0) {
        arr.push(matrix[i][j]);
      }
    }
  }
  return arr.reduce((p, i) => p + i);
}

module.exports = getMatrixElementsSum;

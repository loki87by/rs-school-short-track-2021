function minesweeper(matrix) {
  const res = [];
  function str(array, next, prev) {
    let item = 0;
    const tmp = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1]) { item++; }
      if (array[i - 1]) { item++; }
      if (next) {
        if (next[i + 1]) { item++; }
        if (next[i]) { item++; }
        if (next[i - 1]) { item++; }
      }
      if (prev) {
        if (prev[i + 1]) { item++; }
        if (prev[i]) { item++; }
        if (prev[i - 1]) { item++; }
      }
      tmp.push(item);
      item = 0;
    }
    res.push(tmp);
  }
  for (let j = 0; j < matrix.length; j++) {
    str(matrix[j], matrix[j + 1], matrix[j - 1]);
  }
  return res;
}

module.exports = minesweeper;

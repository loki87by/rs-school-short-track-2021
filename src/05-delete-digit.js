function deleteDigit(n) {
  const arr = String(n).split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const tmp = [];
    const start = arr.slice(0, i);
    const end = arr.slice(i + 1);
    tmp.push(...start, ...end);
    newArr.push(tmp.join(''));
  }
  return Math.max(...newArr);
}

module.exports = deleteDigit;

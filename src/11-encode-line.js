function encodeLine(str) {
  const res = [];
  const arr = str.split('');
  let num = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      num++;
    } else {
      if (num !== 1) {
        res.push(num);
      }
      res.push(arr[i - 1]);
      num = 1;
    }
  }
  return res.join('');
}

module.exports = encodeLine;

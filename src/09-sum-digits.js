function getSumOfDigits(n) {
  let num = String(n).split('').reduce((p, i) => +p + +i);
  if (num > 9) {
    num = String(num).split('').reduce((p, i) => +p + +i);
  }
  return num;
}

module.exports = getSumOfDigits;

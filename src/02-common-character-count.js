/* eslint-disable operator-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
function getCommonCharacterCount(s1, s2) {
  const string1 = s1.split('').reduce((pre, it) => {
    if (!pre[it]) {
      pre[it] = 1;
    } else {
      pre[it] += 1;
    }
    return pre;
  }, {});
  const string2 = s2.split('').reduce((pre, it) => {
    if (!pre[it]) {
      pre[it] = 1;
    } else {
      pre[it] += 1;
    }
    return pre;
  }, {});
  const keys1 = Object.keys(string1);
  const keys2 = Object.keys(string2);
  const arr = [];
  keys1.forEach((i) => {
    keys2.find((it) => {
      if (it === i) {
        arr.push(it);
      }
    });
  });
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const a = string1[`${arr[i]}`];
    const b = string2[`${arr[i]}`];
    res = res + Math.min(a, b);
  }
  return res;
}

module.exports = getCommonCharacterCount;

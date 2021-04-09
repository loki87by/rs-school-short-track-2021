/* eslint-disable no-param-reassign */
function getDNSStats(domains) {
  const tmp = [];
  let tmp4;
  function mass(arr) {
    const tmp2 = [];
    arr.reverse();
    tmp2.push(arr[0]);
    tmp2.push(arr[1]);
    tmp.push(tmp2.join('.'));
    const tmp3 = arr.slice(2);
    tmp3.reverse();
    tmp3.push(tmp[tmp.length - 1]);
    tmp4 = tmp3.slice();
  }
  for (let i = 0; i < domains.length; i++) {
    const array = domains[i].split('.');
    array[array.length - 1] = `.${array[array.length - 1]}`;
    tmp.push(array[array.length - 1]);
    mass(array);
    while (tmp4.length > 1) {
      mass(tmp4);
    }
  }
  return tmp.reduce((p, i) => {
    if (!p[i]) {
      p[i] = 1;
    } else {
      p[i]++;
    }
    return p;
  }, {});
}

module.exports = getDNSStats;

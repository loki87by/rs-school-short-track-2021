function sortByHeight(arr) {
  const inds = [];
  let filt = [];
  arr.forEach((it, ind) => {
    if (it === -1) {
      inds.push(ind);
    } else {
      filt.push(it);
    }
  });
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (inds.some((item) => item === i)) {
      res.push(-1);
    } else {
      const min = Math.min(...filt);
      res.push(min);
      let index;
      filt.forEach((it, ind) => {
        if (it === min) {
          index = ind;
        }
      });
      const start = filt.slice(0, index);
      const end = filt.slice(index + 1);
      const clean = [...start, ...end];
      filt = clean;
    }
  }
  return res;
}

module.exports = sortByHeight;

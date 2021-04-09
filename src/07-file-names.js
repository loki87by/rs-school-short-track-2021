function renameFiles(names) {
  const obj = {};
  const arr = [];
  names.forEach((item) => {
    if (!arr.some((i) => i === item)) {
      arr.push(item);
    } else {
      const keys = Object.keys(obj);
      if (!keys.some((i) => i === item)) {
        const num = 1;
        obj[`${item}`] = num;
        arr.push(`${item}(${num})`);
      } else {
        obj[`${item}`] = obj[`${item}`] + 1;
        arr.push(`${item}(${obj[`${item}`]})`);
      }
    }
  });
  return arr;
}

module.exports = renameFiles;

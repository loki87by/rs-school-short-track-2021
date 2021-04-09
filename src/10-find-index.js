/* eslint-disable consistent-return */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle;
  if (value === array[start]) {
    return start;
  }
  if (value === array[end]) {
    return end;
  }
  while (start <= end) {
    middle = Math.floor((start + (end - start) / 2));
    if (value > array[middle]) {
      end = middle - 1;
    } else if (value < array[middle]) {
      start = middle + 1;
    } else if (value === array[middle]) {
      return middle;
    }
  }
}

module.exports = findIndex;

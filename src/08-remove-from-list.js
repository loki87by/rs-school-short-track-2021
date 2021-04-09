const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  let tmp = l;
  const array = [];
  while (tmp) {
    if (tmp.value !== k) {
      array.push(tmp.value);
    }
    tmp = tmp.next;
  }
  function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
  }
  return convertArrayToList(array);
}

module.exports = removeKFromList;

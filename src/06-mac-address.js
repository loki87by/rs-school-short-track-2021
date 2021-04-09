function isMAC48Address(n) {
  const arr = n.split('-');
  return arr.every((i) => !Number.isNaN(parseInt(`${i}`, 16)));
}

module.exports = isMAC48Address;

function getEmailDomain(email) {
  const reg = /@.*$/g;
  let res;
  const str = email.match(reg)[0].slice(1);
  if (str.match(reg)) {
    res = str.match(reg)[0].slice(1);
  } else {
    res = str;
  }
  return res;
}

module.exports = getEmailDomain;

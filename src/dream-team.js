module.exports = function createDreamTeam(members) {
  let arr = [];
  let res = '';

  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      arr.push(members[i].trim().toUpperCase());
    }
  }


  if (arr.length == 0) {
    return false;
  } else {
    arr.sort();

    for (let i = 0; i < arr.length; i++) {
      res = res + arr[i].charAt(0);
    }

    return res;
  }
};

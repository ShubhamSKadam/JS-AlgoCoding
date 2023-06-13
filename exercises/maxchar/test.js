function containsDuplicate(nums) {
  const numMap = {};

  for (n of nums) {
    if (numMap[n]) {
      numMap[n]++;
    } else {
      numMap[n] = 1;
    }
  }

  let flag = false;
  for (let x in numMap) {
    if (numMap[x] > 1) {
      flag = true;
    }
  }
  return flag;
}
let nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));

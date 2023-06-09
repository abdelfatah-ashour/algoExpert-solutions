function twoNumberSum(array, targetSum) {
  let result = {};

  for (const num in array) {
    let target = targetSum - num;
    if (result[target]) {
      return [+num, target];
    } else {
      result[+num] = true;
    }
  }

  return [];
}

let value = twoNumberSum([3, 5, -4, 8, 11, 1, 6], 10);

console.log("value ", value);

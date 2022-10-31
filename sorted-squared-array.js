function sorted_squared_array(array) {
  let sortedArr = new Array(array.length).fill(0);
  for (let index = 0; index < array.length; index++) {
    let value = array[index];
    sortedArr[index] = value * value;
  }

  sortedArr.sort((a, b) => a - b);
  return sortedArr;
}

sorted_squared_array([1, 2, 3, 4, 5, 6]);

function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIdx = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === sequence[seqIdx]) {
      seqIdx++;
    }
  }
  return sequence.length === seqIdx;
}

isValidSubsequence([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 4, 5]);

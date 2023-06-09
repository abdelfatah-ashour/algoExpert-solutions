function transposeMatrix(matrix) {
  // Write your code here.
  let transposedMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];

    matrix.map((row) => {
      newRow.push(row[i]);
    });

    transposedMatrix.push(newRow);
  }

  return transposedMatrix;
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix;

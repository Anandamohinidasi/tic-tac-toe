import checkIfHorizontalWon from "./checkIfHorizontalWon";
import checkIfVerticalWon from "./checkIfVerticalWon";
import checkIfDiagonalWon from "./checkIfDiagonalWon";

export default (matrix) => {
    matrix = matrix.map(line => line.map(cell => cell.value))
  
    const wonHorizontal = checkIfHorizontalWon(matrix);
    const wonVertical = checkIfVerticalWon(matrix);
    const wonDiagonal = checkIfDiagonalWon(matrix);
  
    return wonHorizontal || wonVertical || wonDiagonal;
}
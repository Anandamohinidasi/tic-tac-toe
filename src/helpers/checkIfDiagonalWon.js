export default (board) => {
    const leftDiagonal = getLeftDiagonal(board);
    const rightDiagonal = getRightDiagonal(board);
  
    return leftDiagonal || rightDiagonal || false;
  }

  function getLeftDiagonal(board) {
    const end = board.length;
    let position = 0;
    const symbol = board[position]?.[position];
  
    while(position < end) {
        const currentSymbol = board[position]?.[position];
        if(currentSymbol !== symbol) return false;
  
        position++;
    }
  
    return symbol;
  }

  function getRightDiagonal(board) {
    let x = 0;
    let y = board.length - 1;
    const end = 0; 
    const symbol = board[x]?.[y];
  
    while(y >= end) {
        const currentSymbol = board[x]?.[y];
        if(currentSymbol !== symbol) return false;
  
        y--;
        x++;
    }
  
    return symbol;
  }
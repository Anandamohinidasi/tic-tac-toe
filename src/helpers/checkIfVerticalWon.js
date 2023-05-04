export default (board) => {
    let count = 0;
    const length = board.length;
  
    while(count <=length) {
        const symbol = board[0][count];
        if(board[1][count] === symbol && board[2][count] === symbol) return symbol;
  
        count++;
    }
  
    return false;
  }
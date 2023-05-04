export default (board) => {
    let symbol
    if(board.some(arr => {
        return arr.every((cell, i) => {
            if(i===0) symbol = cell;
            return cell === symbol;
        })
    })) return symbol;
  
    return false
  }
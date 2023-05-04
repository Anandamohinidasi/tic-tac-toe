import {useState} from 'react';

class Board {
    constructor(n) {
        this.matrix = Array.from({length: n}, _=> Array.from({length: n}, j=> {
          const [value, action] = useState("");
  
          return {
            value,
            action
          }
        }));
    }
  
    play(symbol, position) {
        const [x,y] = position;
  
        if(x < 0 || y < 0 || x > this.matrix.length - 1 || y > this.matrix.length - 1) {
            throw new Error(`You can only play on valid cells, valid cells are from [0,0] to [${this.matrix.length - 1}, ${this.matrix.length - 1}]`)
        }
        if(this.matrix[x]?.[y]?.value) alert("You can only play on empty slot");
        
        this.matrix[x][y].action(symbol);
    }
  }

  export default Board;
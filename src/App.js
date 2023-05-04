import {useEffect, useState} from 'react';

import BoardCell from './components/BoardCell/BoardCell';
import WinningBanner from './components/WinningBanner/WinningBanner';

import Board from "./entities/Board";

import getWinner from './helpers/getWinner';
import switchPlayers from "./helpers/switchPlayers";

import './App.css';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(false);
  const length = 5;
  const board = new Board(length);

  useEffect(() => {
    const winnerResult = getWinner(board.matrix);
    if(winnerResult) setWinner(winnerResult); 
  }, [currentPlayer]);

  function cellClick(x,y) {
    board.play(currentPlayer, [x,y]);
    
    setCurrentPlayer(switchPlayers(currentPlayer));
  }

  return (
    <div className="App">
      {winner && <WinningBanner winner={winner} />}
      <table>
        <tbody>
          {board.matrix.map((line,x) => {
            return <tr key={x}>
              {line.map((cell, y) => <BoardCell 
                                        key={`${x},${y}`} 
                                        onClick={() => cellClick(x,y)} 
                                        value={cell.value} 
                                    />)}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;

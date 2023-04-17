import React ,{useState}from 'react';
import Board from './components/Board';

import "./styles/root.scss";
import { calculateWinner } from './Helpers';

const App = () => {

  const [history , setHistory] = useState([
    { board: Array(9).fill(null) , isXnext : true},
  ]);
  const [currentMove , setCurrentMove] = useState(0);
  
  const current = history[currentMove];
    
  const winner = calculateWinner(current.board);

  const message = winner ? 
  `Winner is ${winner}`
  : `Next Player is ${current.isXnext ? 'X' : 'O'}`;
    const handleSquareClick = (position) => {
        if(current.board[position] || winner){
            return;
        }
        setHistory( (prev) => {

          const last = prev[prev.length - 1];
           const newBoard = last.board.map((square , pos) => {
                if(pos === position){
                    return last.isXnext ? 'X' : 'O';
                }

                return square;
            })
            return prev.concat({ board: newBoard , isXnext : !last.isXnext});
        });
        setCurrentMove (prev => prev + 1);
    };

  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
    <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App
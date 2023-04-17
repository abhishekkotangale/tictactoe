import React ,{useState}from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import "./styles/root.scss";
import { calculateWinner } from './Helpers';

const NEW_GAME = [
  
    { board: Array(9).fill(null) , isXnext : true},
  
];
const App = () => {

  const [history , setHistory] = useState(NEW_GAME);
  const [currentMove , setCurrentMove] = useState(0);
  
  const current = history[currentMove];
    
  const {winner,winningSquares} = calculateWinner(current.board);

  
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
    
    const moveTo = (move) =>{
      setCurrentMove(move);
    }

    const onNewGame = () =>{
      setHistory(NEW_GAME)
      setCurrentMove(0);
    }
  return (
    <div className='app'>
      <h1>Tic <span className='text-green'>TAC</span> Toe</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <button type='button' onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start new game</button>
      <h3 style={{fontWeight: 'normal'}}>Current game history</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      <div className='bg-balls'/>
    </div>
  )
}

export default App
import Square from './Components/Square';
import { useState } from 'react';

import './App.css' ;

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));  
  const [ xIsNext, setXisNext] = useState(true); 
  

  function handleClick(i){
      if(squares[i] || calculateWinner(squares)){
        return;
      }
   
    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i] = "X";

    }
    else{
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  



  const winner =calculateWinner(squares);
  let status;
  let valCheck = squares.includes(null);
  if(winner){
   
      status = `Player ${winner} wins!`;
     
    
  }
  else{
    status = 'Next player: ' + (xIsNext ? "X" : "0");
  }

  if(!valCheck){
      status = 'Players are Drawed'
  }
 

  return (
    <>
   <div className="game-container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      <div className='status'>{status}</div>

      <div className='status'>
      
    </div>
    </div>
    
    </>
  );
}
function calculateWinner(squares){

  
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
    
  for (const element of lines) {
    //The loop goes through each possible winning combination (lines[i]).
    const [a, b, c] = element;    
    // Inside the loop, const [a, b, c] = lines[i] extracts the three indices from the current winning combination.
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
    
    

//       check for Winner: It checks if:

// squares[a] is not null (i.e., there is an X or O in that square).
// squares[a] === squares[b] && squares[a] === squares[c]: This checks if all three squares in the current combination have the same value (X or O).
// If both conditions are met, it returns the value of squares[a], which is the winner ('X' or 'O').
//     
  }
return null;    

}

export default App

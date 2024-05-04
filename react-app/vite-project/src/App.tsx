import { useState } from "react";

function Square({value, onSquareClick}) {
 

  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue('X');
  // }

  return <button className="square" onClick={onSquareClick}>{value}</button>
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquaers] = useState(Array(9).fill(null));
  function handelClick(i) {
    console.log(1);
    if(squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquaers(nextSquares); 
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="borad-row">
        <Square value={squares[0]} onSquareClick={() => handelClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handelClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handelClick(2)}/>
      </div>
      <div className="borad-row">
        <Square value={squares[3]} onSquareClick={() => handelClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handelClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handelClick(5)}/>
      </div>
      <div className="borad-row">
        <Square value={squares[6]} onSquareClick={() => handelClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handelClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handelClick(8)}/>
      </div>
    </>
  );
}

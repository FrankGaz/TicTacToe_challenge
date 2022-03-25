import { useState } from "react";
import "./styles/main.scss";
import Board from "./components/Board";

const App = () => {
  // State for the player turn
  const [turn, setTurn] = useState("X");

  // State for the square where the player click [array of 9 squares]
  const [squares, setSquares] = useState(Array(9).fill(null));

  // State for the scores
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const checkForWinner = (squares) => {
    setTurn(turn === "X" ? "0" : "X");
  };

  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  };

  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick} />
    </div>
  );
};

export default App;

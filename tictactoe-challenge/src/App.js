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

  return (
    <div className="container">
      <Board squares={squares} />
    </div>
  );
};

export default App;

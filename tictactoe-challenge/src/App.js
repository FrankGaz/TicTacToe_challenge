import { useState } from "react";
import "./styles/main.scss";
import Board from "./components/Board";

// Possible winning positions
const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

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

  // State for winnin set of squares
  const [winningSquares, setWinningSquares] = useState([]);

  // Checking for winning positions
  const checkForWinner = (newSquares) => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (
        newSquares[a] &&
        newSquares[a] === newSquares[b] &&
        newSquares[a] === newSquares[c]
      ) {
        console.log("There is a winner");
        endGame(newSquares[a], winningPositions[i]);
        console.log("Winner >>> ", newSquares[a]);
        return;
      }
    }
    // Check if there is a tie
    if (!newSquares.includes(null)) {
      console.log("There is a tie");
      endGame(null, Array.from(Array(10).keys()));
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  // End Game function
  const endGame = (result, winningPositions) => {
    setTurn(null);
    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setWinningSquares(winningPositions);
  };

  const handleClick = (square) => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  };

  return (
    <div className="container">
      <Board
        winningSquares={winningSquares}
        turn={turn}
        squares={squares}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;

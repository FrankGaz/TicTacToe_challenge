import { useState, useEffect } from "react";
import "./styles/main.scss";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard.jsx";
import TurnIndicator from "./components/TurnIndicator";

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

  // State for the winner
  const [winner, setWinner] = useState(null);


  // State for a Tie
  const [tie, setTie] = useState(null);

   // Check who is the winner to show it
   useEffect(() => {
    console.log(winner);
  }, [winner]);

  // Check who have the turn
  useEffect(() => {
    console.log("turn >>> ", turn);
  }, [turn]);

  // Check if there is a Tie
  useEffect(() => {
    console.log("turn >>> ", tie);
  }, [tie]);


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
        setWinner(newSquares[a]);
        return;
      }
    }
    // Check if there is a tie
    if (!newSquares.includes(null)) {
      console.log("There is a tie");
      setTie(true);
      endGame(null, Array.from(Array(10).keys()));
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  // End Game function
  const endGame = (result, winningPositions) => {
    // stops turns
    setTurn(null);

    if (result !== null) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setWinningSquares(winningPositions);
    // Reset the game after 2 seconds
    setTimeout(reset, 2000);
  };

  // Reset Game function
  const reset = () =>{
    // reset turn
    setTurn('X');
    // reset squares
    setSquares(Array(9).fill(null));
    // reset winning positions
    setWinningSquares([]);
    // reset winner player
    setWinner(null);
    // reset Tie result
    setTie(null);
  }

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
      <TurnIndicator turn={turn} winner={winner} tie={tie}/>
       <ScoreBoard scoreO={score.O} scoreX={score.X} />
    </div>
  );
};

export default App;

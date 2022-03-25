import Icon from "./IconIndicator";

const TurnIndicator = ({ turn, winner, tie }) => {
    return (
      <>
       {!winner && !tie && (
        <div className="turn-indicator">
          <div>
            <Icon turn={turn} />
          </div>
          <div> Turn</div>
        </div>
      )}
      {winner && (
        <div className="turn-indicator">
          <div>
            <Icon turn={winner} />
          </div>
          <div> Wins!!!</div>
        </div>
      )}
      {tie && (
        <div className="turn-indicator">
          <div> Tie!!!</div>
        </div>
      )}
      </>
    );
  };
  
  export default TurnIndicator;
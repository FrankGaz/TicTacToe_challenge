const Square = ({ value, onClick, turn }) => {
  const handleClick = () => {
    turn !== null && value === null && onClick();
  };
  return <div className="square" onClick={() => handleClick()}></div>;
};

export default Square;

import classNames from "classnames";

const Icon = (turn) => {
  let iconClass = classNames({
    icon: true,
    [`icon--${turn.turn}`]: turn !== null,
  });

  return <div className={iconClass}></div>;
};

export default Icon;

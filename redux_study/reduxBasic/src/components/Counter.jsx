import React from "react";

const Counter = ({ number, diff, onSetDiff, onIncrease, onDecrease }) => {
  const onChange = (e) => onSetDiff(parseInt(e.target.value, 10));
  return (
    <div>
      <h1>{number}</h1>
      <input type="number" value={diff} onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;

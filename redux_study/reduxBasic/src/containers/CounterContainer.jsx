import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDiff, increase, decrease } from "../modules/counterModule";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  const onSetDiff = (diff) => dispatch(setDiff(diff));
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;

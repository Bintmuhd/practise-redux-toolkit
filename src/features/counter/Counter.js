import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section className="counterSection">
      <p>{count}</p>
      <div>
        <button className="counterButton" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button className="counterButton" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <input
        className="counterInput"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button
          className="counterButton"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button className="counterButton" onClick={() => dispatch(resetAll())}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;

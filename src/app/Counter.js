import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");

  const handleAddByAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
    setIncrementAmount("0"); // Reset input after dispatching
  };

  return (
    <>
      <div>
        <h1>Counter: {count}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        <div style={{ marginTop: "20px" }}>
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button onClick={handleAddByAmount}>Add by Amount</button>
        </div>
      </div>
    </>
  );
}

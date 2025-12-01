import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./app/counterSlice";

function App() {
  // Selects the current count from the Redux store
  const count = useSelector((state) => state.counter.count);
  // Dispatches actions to the Redux store
  const dispatch = useDispatch();
  // Manages the input for incrementing by a specific amount
  const [incrementAmount, setIncrementAmount] = useState(0);

  // Converts the input string to a number, defaults to 0 if invalid
  const addValue = Number(incrementAmount) || 0;

  // Handles the increment action
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Handles the decrement action
  const handleDecrement = () => {
    dispatch(decrement());
  };

  // Handles the reset action and clears the input field
  const handleReset = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  // Handles the increment by amount action and clears the input field
  const handleAddByAmount = () => {
    dispatch(incrementByAmount(addValue));
    setIncrementAmount(0);
  };

  return (
    <div className="App">
      <h1>Redux Toolkit Counter</h1>
      <div className="card">
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="add-by-amount">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            placeholder="Enter amount"
          />
          <button onClick={handleAddByAmount}>Add by Amount</button>
        </div>
      </div>
    </div>
  );
}

export default App;

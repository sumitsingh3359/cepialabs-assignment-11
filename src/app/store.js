// Import the configureStore API from Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
// Import the counter reducer from the counter slice file
import counterReducer from "./counterSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    // Assign the counter reducer to the 'counter' slice of the store
    counter: counterReducer,
  },
});

// Import the createSlice API from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter slice
const initialState = {
  count: 0,
};

// Create a Redux slice for the counter
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Define the reducers with their corresponding actions
  reducers: {
    // Increment the count by 1
    increment: (state) => {
      state.count += 1;
    },
    // Decrement the count by 1
    decrement: (state) => {
      state.count -= 1;
    },
    // Reset the count to 0
    reset: (state) => {
      state.count = 0;
    },
    // Increment the count by a specific amount received in action.payload
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the reducer to be included in the store
export default counterSlice.reducer;

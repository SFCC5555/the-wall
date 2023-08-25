import { createSlice } from "@reduxjs/toolkit"

const initialState = false;

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    changeMessageStatus: (state, action) => {
      // Update the 'message' state (true or false) to the value provided in the action's payload
      state = action.payload;
      return state;
    }
  }
});

export const { changeMessageStatus } = messageSlice.actions;
export default messageSlice.reducer;
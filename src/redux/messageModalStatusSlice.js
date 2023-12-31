import { createSlice } from "@reduxjs/toolkit"

const initialState = false;

export const messageModalStatusSlice = createSlice({
  name: 'messageModalStatus',
  initialState,
  reducers: {
    changeMessageModalStatus: (state, action) => {
      // Update the 'message' state (true or false) to the value provided in the action's payload
      state = action.payload;
      return state;
    }
  }
});

export const { changeMessageModalStatus } = messageModalStatusSlice.actions;
export default messageModalStatusSlice.reducer;
// connectionSlice.ts
'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state
interface ConnectionState {
  message: string;
}

const initialState: ConnectionState = {
  message: '',
};

// Create a Redux slice
const connectionSlice = createSlice({
  name: 'connection',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
});

// Export the action creator
export const { setMessage } = connectionSlice.actions;

// Export the reducer
export default connectionSlice.reducer;

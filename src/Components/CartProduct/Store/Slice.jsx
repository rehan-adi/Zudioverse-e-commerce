import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    removeItem: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = Slice.actions;
export default Slice.reducer;

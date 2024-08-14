import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const initialState: CartItem[] = [];

const Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      return [...state, action.payload];
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addItem, removeItem } = Slice.actions;
export default Slice.reducer;

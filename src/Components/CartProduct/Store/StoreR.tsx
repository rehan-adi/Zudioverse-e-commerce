import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const StoreR = configureStore({
  reducer: {
    cart: Slice,
  },
});

export type RootState = ReturnType<typeof StoreR.getState>;

export default StoreR;

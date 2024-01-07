import { configureStore } from '@reduxjs/toolkit';
import Slice from './Slice';


const StoreR = configureStore({
    reducer: {
       cart : Slice,
    },
  });

export default StoreR
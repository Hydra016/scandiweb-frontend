import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(`http://localhost/scandiweb-assignment-backend/api/products/`);
  return response
})

const initialState = {
    products: [],
    isLoading: true,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        postProduct: (state, action) => {
          console.log(action.payload)
        }
    },
    extraReducers: {
      [fetchProducts.pending]: (state) => {
        state.isLoading = true
    },
    [fetchProducts.fulfilled]: (state, action) => {
        state.isLoading = false
        state.products = action.payload.data.data
    },
    [fetchProducts.rejected]: (state) => {
        state.isLoading = false
    },
    }
})

export const { getAllProducts, postProduct } = productSlice.actions
export default productSlice.reducer;

























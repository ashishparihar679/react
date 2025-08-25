import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

import axios from "axios"

export const fetchProduct =createAsyncThunk("products/fetchProduct",async()=>{
const response=await axios.get("https://fakestoreapi.com/products")
return response.data;
})

const ProductSlice=createSlice({
    name:"products",
    initialState:{
        items:[
            {
                id:1
            },
            {
                id:2
            }
        ],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.loading=true
        })
       .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;

        })
          .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;

        })
    },
})

export default ProductSlice.reducer;
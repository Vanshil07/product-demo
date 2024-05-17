import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

initialState = {
    loading : false,
    data : [],
}

const getAllProducts = createAsyncThunk("product/getAllProducts", ()=>{

    try{
        const response = await getProductAPI()
    }
    catch(error){
        console.log(error.message);
    }
})

const productSlice = createSlice({
    initialState,
    name: "product",
    reducers: {
    },
    extraReducers: (builder) =>{}
})

export default productSlice.reducer
//create slicer for add product using redux toolkit
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addProduct } from '../../../services/productservices.js';
import { createSlice } from '@reduxjs/toolkit';
export const createProduct=createAsyncThunk(
    //create action type 'products/createProduct' and pass productData as payload
    'products/createProduct',
    //thunkAPI is an object that contains the dispatch and getState methods, 
    // as well as the rejectWithValue method, which allows us to return 
    // a rejected action with a custom error message
    async (productData, thunkAPI) => {
        try {
            const response = await addProduct(productData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialValues={
    products: [],
    loading: false,
    error: null,
    successMessage: ""
}

//create slicer for add product using redux toolkit

const productSlicer=createSlice({
    name: 'products',
    initialState: initialValues,    
    reducers: {
        clearState: (state) => {
            state.loading = false;
            state.error = null;
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.successMessage = "";
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload);
            state.successMessage = "Product added successfully";
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export const { clearState } = productSlicer.actions;
export default productSlicer.reducer;   
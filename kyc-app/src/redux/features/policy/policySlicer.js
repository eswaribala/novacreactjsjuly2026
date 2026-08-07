import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { savePolicy, getPolicies } from '../../../services/policyservice.js';

//action creator
export const savePolicyAsync = createAsyncThunk(
    'policy/savePolicy',
    async (policyData,thunkAPI) => {
        try {
            const response = await savePolicy(policyData);
            return response||response.policy||response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message) || 
            thunkAPI.rejectWithValue('Failed to save policy');
        }

    }
    
);

export const getPoliciesAsync = createAsyncThunk(
    'policy/getPolicies',
    async (_, thunkAPI) => {
        try {
            const response = await getPolicies();
            return response || response.policies || response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to fetch policies');
        }
    }
);


const initialValues ={
    policies: [],
    status: 'idle',
    error: null,
    loading: false,
    successMessage: ''
}

//create slice with reducer

const policySlice = createSlice({
    name: 'policy',
    initialState: initialValues,
    reducers: {
       clearPolicyMessage: (state) => {
            state.status = 'idle';
            state.error = null;
            state.loading = false;
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(savePolicyAsync.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
                state.error = null;
                state.successMessage = '';
            })
            .addCase(savePolicyAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loading = false;
                state.successMessage = 'Policy saved successfully';
                state.policies.push(action.payload);
            })
            .addCase(savePolicyAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.loading = false;
                state.error = action.payload || 'Failed to save policy';
            });
        builder.addCase(getPoliciesAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
        })
        .addCase(getPoliciesAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.policies = action.payload;
        })
        .addCase(getPoliciesAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch policies';
        });
    }
});

export const { clearPolicyMessage } = policySlice.actions;
export default policySlice.reducer;


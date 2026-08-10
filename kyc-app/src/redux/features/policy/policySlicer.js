import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { savePolicy, getPolicies, getPolicyById, getPolicyByCustomerName } from '../../../services/policyservice.js';

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
export const getPolicyByIdAsync = createAsyncThunk(
    'policy/getPolicyById',
    async (id, thunkAPI) => {
        try {
            const response = await getPolicyById(id);
            return response || response.policy || response.data;
        }   
    catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to fetch policy by ID');
        }
    }
);

export const getPolicyByCustomerNameAsync = createAsyncThunk(
    'policy/getPolicyByCustomerName',
    async (name, thunkAPI) => {
        try {
            const response = await getPolicyByCustomerName(name);
            return response || response.policy || response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to fetch policy by customer name');
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
            console.log('Policies fetched successfully:', action.payload);
        })
        .addCase(getPoliciesAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch policies';
        });
        builder.addCase(getPolicyByIdAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
        })
        .addCase(getPolicyByIdAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
            state.loading = false;
            const policyIndex = state.policies.findIndex(policy => policy.id === action.payload.id);    
            if (policyIndex !== -1) {
                state.policies[policyIndex] = action.payload;
            }
        })
        .addCase(getPolicyByIdAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch policy by ID';
        });
        builder.addCase(getPolicyByCustomerNameAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
        })
        .addCase(getPolicyByCustomerNameAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;            
            console.log('Policy fetched successfully by customer name:', action.payload);
            state.policies=action.payload;
        })
        .addCase(getPolicyByCustomerNameAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch policy by customer name';
        });
    }
});

export const { clearPolicyMessage } = policySlice.actions;
export default policySlice.reducer;


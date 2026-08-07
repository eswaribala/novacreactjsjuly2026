import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { savePolicy } from '../../../services/policyservice.js';

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



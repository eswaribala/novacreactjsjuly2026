import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { savePolicy } from '../../../services/policyservice.js';

//action creator
export const savePolicyAsync = createAsyncThunk(
    'policy/savePolicy',
    async (policyData,thunkAPI) => {
        try {
            const response = await savePolicy(policyData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }

    }
    
);



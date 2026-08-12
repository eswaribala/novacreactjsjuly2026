import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { createPartner, getPartners, getPartnerByMobileNo } from '../../../services/partnerservice.js';

//action creator
export const savePartnerAsync = createAsyncThunk(
    'partner/savePartner',
    async (partnerData, thunkAPI) => {
        try {
            const response = await createPartner(partnerData);
            return response || response.partner || response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to save partner');
        }
    }
);

export const getPartnersAsync = createAsyncThunk(
    'partner/getPartners',
    async (_, thunkAPI) => {
        try {
            const response = await getPartners();
            return response || response.partners || response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to fetch partners');
        }
    }
);
export const getPartnerByMobileNoAsync = createAsyncThunk(
    'partner/getPartnerByMobileNo',
    async (partnerData, thunkAPI) => {
        try {
            const response = await getPartnerByMobileNo(partnerData);
            return response || response.partner || response.data;
        }   
    catch (error) {
            return thunkAPI.rejectWithValue(error.message) ||
                thunkAPI.rejectWithValue('Failed to fetch partner by mobile number');
        }
    }
);





const initialValues ={
    partners: [],
    status: 'idle',
    error: null,
    loading: false,
    successMessage: '',
   

}

//create slice with reducer

const partnerSlice = createSlice({
    name: 'partner',
    initialState: initialValues,
    reducers: {
       clearPartnerMessage: (state) => {
            state.status = 'idle';
            state.error = null;
            state.loading = false;
            state.successMessage = '';
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(savePartnerAsync.pending, (state) => {
                state.status = 'loading';
                state.loading = true;
                state.error = null;
                state.successMessage = '';
            })
            .addCase(savePartnerAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.loading = false;
                state.successMessage = 'Partner saved successfully';
                state.partners.push(action.payload);
            })
            .addCase(savePartnerAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.loading = false;
                state.error = action.payload || 'Failed to save partner';
            });
        builder.addCase(getPartnersAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
        })
        .addCase(getPartnersAsync.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.partners = action.payload;
            console.log('Partners fetched successfully:', action.payload);
        })
        .addCase(getPartnersAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch partners';
        });
        builder.addCase(getPartnerByMobileNoAsync.pending, (state) => {
            state.status = 'loading';
            state.loading = true;
            state.error = null;
        })
        .addCase(getPartnerByMobileNoAsync.fulfilled, (state, action) => {
            state.status = 'succeeded'; 
            state.loading = false;
            const partnerIndex = state.partners.findIndex(partner => partner.id === action.payload.id);    
            if (partnerIndex !== -1) {
                state.partners[partnerIndex] = action.payload;
            }
        })
        .addCase(getPartnerByMobileNoAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload || 'Failed to fetch partner by mobile number';
        });
        
    }
});

export const { clearPartnerMessage } = partnerSlice.actions;
export default partnerSlice.reducer;


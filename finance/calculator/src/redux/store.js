import {configureStore} from '@reduxjs/toolkit';
import partnerReducer from './features/partner/partnerSlicer.js';

export const store = configureStore({
    reducer: {
        partner: partnerReducer,
    },
}); 
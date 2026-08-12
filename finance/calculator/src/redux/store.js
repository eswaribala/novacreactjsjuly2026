import {configureStore} from '@reduxjs/toolkit';
import policyReducer from './features/policy/policySlicer.js';

export const store = configureStore({
    reducer: {
        policy: policyReducer,
    },
}); 
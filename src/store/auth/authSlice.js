import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined,
    },
    reducers: { 
        onChecking: ( state ) => {
            state.status = 'checking',
            state.user = {},
            state.errorMessage = undefined
        },
        onLogin: ( state, { paylaod }) => {
            state.status = 'authenticated';
            state.user = paylaod,
            state.errorMessage = undefined
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        clearErrorMessage: ( state ) => {
            state.errorMessage = undefined;
        }
    },
});


export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions
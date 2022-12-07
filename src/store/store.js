import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {  calendarSlice, uiSlice, authSlice } from './'
import {  } from './auth/authSlice'

export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer,

    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})
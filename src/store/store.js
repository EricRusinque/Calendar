import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { authSlice, calendarSlice, uiSlice } from './'
import {  } from './calendar/calendarSlice'
import {  } from './ui/uiSlice'

export const store = configureStore({
    reducer: {
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer
    },
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
        serializableCheck: false
    })
})
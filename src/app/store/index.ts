import { configureStore } from '@reduxjs/toolkit'
import { ipTrackerReducer } from './ipTrackerSlice'

export const store = configureStore({
  reducer: {
    ipTracker: ipTrackerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

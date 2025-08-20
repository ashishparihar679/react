import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { Counter } from './Counter'

export const store = configureStore({
  reducer: {
    Counter:counterReducer
  },
})
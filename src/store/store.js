import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './reducers/cards'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
})
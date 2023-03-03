import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../actions/cards'

const getCartItems = [
  {name: "Bullying Hoodie", src: "/content/cards/bullying__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"]},
  {name: "Bullying T-Shirt", src: "/content/cards/bullying__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"]},
  {name: "Bullying Longsleave", src: "/content/cards/bullying__long.png", price: 10.99, type: 'longsleave', sizes: ["M","L","XL"]},
  {name: "Post-War Hoodie", src: "/content/cards/postWar__hoodie.png", price: 10.99, type: "hoodie", sizes: ["M","L","XL"]},
  {name: "Post-War T-Shirt", src: "/content/cards/postWar__tShirt.png", price: 10.99, type: "t-shirt", sizes: ["M","L","XL"]},
  {name: "Post-War Longsleave", src: "/content/cards/postWar__long.png", price: 10.99, type: "longsleave", sizes: ["M","L","XL"]}
]

const cardsSlice = createSlice({
  name: 'cards',
  initialState: getCartItems,
  reducers: {
    increment(state) {
      state.values++
    },
    
  },
})

export const selectState = state=> state.cards
export const { increment } = cardsSlice.actions
export default cardsSlice.reducer